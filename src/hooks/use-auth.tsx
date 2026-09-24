import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  updateProfile as firebaseUpdateProfile,
  type User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
  deleteDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { auth, db, googleProvider } from "@/lib/firebase";
import { handleFirestoreError, OperationType } from "@/lib/firestore-errors";

export type Profile = {
  id: string;
  email: string | null;
  display_name: string | null;
  avatar_url: string | null;
  theme_preference: string;
  created_at?: string;
  updated_at?: string;
};

export type FavoriteToolItem = {
  id: string;
  toolSlug: string;
  toolTitle: string;
  addedAt: string;
};

export type ToolHistoryItem = {
  id: string;
  toolSlug: string;
  toolTitle: string;
  runAt: string;
  summary: string;
};

type FirebaseErrorLike = {
  code?: string;
  message?: string;
};

function getFirebaseError(err: unknown): FirebaseErrorLike {
  if (err && typeof err === "object") {
    return err as FirebaseErrorLike;
  }
  return { message: String(err) };
}

type AuthContextValue = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  favorites: FavoriteToolItem[];
  history: ToolHistoryItem[];
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name?: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateProfileName: (name: string) => Promise<void>;
  updateThemePreference: (theme: string) => Promise<void>;
  toggleFavorite: (toolSlug: string, toolTitle: string) => Promise<boolean>;
  isFavorite: (toolSlug: string) => boolean;
  recordToolHistory: (toolSlug: string, toolTitle: string, summary?: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [favorites, setFavorites] = useState<FavoriteToolItem[]>([]);
  const [history, setHistory] = useState<ToolHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load or create profile in Firestore
  const syncUserProfile = useCallback(async (firebaseUser: User) => {
    const userDocRef = doc(db, "users", firebaseUser.uid);
    try {
      const snap = await getDoc(userDocRef);

      if (snap.exists()) {
        const data = snap.data();
        setProfile({
          id: firebaseUser.uid,
          email: firebaseUser.email,
          display_name: data.displayName || firebaseUser.displayName || null,
          avatar_url: data.photoURL || firebaseUser.photoURL || null,
          theme_preference: data.themePreference || "system",
          created_at: data.createdAt,
          updated_at: data.updatedAt,
        });
      } else {
        const newProfile: Profile = {
          id: firebaseUser.uid,
          email: firebaseUser.email,
          display_name: firebaseUser.displayName || null,
          avatar_url: firebaseUser.photoURL || null,
          theme_preference: "system",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        await setDoc(userDocRef, {
          id: newProfile.id,
          email: newProfile.email,
          displayName: newProfile.display_name,
          photoURL: newProfile.avatar_url,
          themePreference: newProfile.theme_preference,
          createdAt: newProfile.created_at,
          updatedAt: newProfile.updated_at,
        });
        setProfile(newProfile);
      }
    } catch (err) {
      console.error("Failed to sync user profile with Firestore:", err);
      // Fallback local profile for UI grace, but log/handle structured error
      setProfile({
        id: firebaseUser.uid,
        email: firebaseUser.email,
        display_name: firebaseUser.displayName || null,
        avatar_url: firebaseUser.photoURL || null,
        theme_preference: "system",
      });
      handleFirestoreError(err, OperationType.WRITE, `users/${firebaseUser.uid}`);
    }
  }, []);

  // Subscribe to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await syncUserProfile(currentUser);
      } else {
        setProfile(null);
        setFavorites([]);
        setHistory([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [syncUserProfile]);

  // Subscribe to live Favorites in Firestore
  useEffect(() => {
    if (!user) return;
    try {
      const favsPath = `users/${user.uid}/favorites`;
      const favsCol = collection(db, "users", user.uid, "favorites");
      const unsubscribe = onSnapshot(
        favsCol,
        (snapshot) => {
          const items: FavoriteToolItem[] = snapshot.docs.map((docSnap) => {
            const d = docSnap.data();
            return {
              id: docSnap.id,
              toolSlug: d.toolSlug || docSnap.id,
              toolTitle: d.toolTitle || docSnap.id,
              addedAt: d.addedAt || new Date().toISOString(),
            };
          });
          setFavorites(items);
        },
        (err) => {
          console.warn("Firestore favorites listener notice:", err);
          handleFirestoreError(err, OperationType.GET, favsPath);
        },
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to attach favorites listener:", e);
    }
  }, [user]);

  // Subscribe to live History in Firestore
  useEffect(() => {
    if (!user) return;
    try {
      const histPath = `users/${user.uid}/history`;
      const histCol = collection(db, "users", user.uid, "history");
      const q = query(histCol, orderBy("runAt", "desc"), limit(25));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: ToolHistoryItem[] = snapshot.docs.map((docSnap) => {
            const d = docSnap.data();
            return {
              id: docSnap.id,
              toolSlug: d.toolSlug,
              toolTitle: d.toolTitle,
              runAt: d.runAt || new Date().toISOString(),
              summary: d.summary || "Tool execution",
            };
          });
          setHistory(items);
        },
        (err) => {
          console.warn("Firestore history listener notice:", err);
          handleFirestoreError(err, OperationType.GET, histPath);
        },
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to attach history listener:", e);
    }
  }, [user]);

  // Google Sign In
  const signInWithGoogle = useCallback(async () => {
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      toast.success(`Signed in as ${cred.user.displayName || cred.user.email}!`);
      await syncUserProfile(cred.user);
    } catch (err: unknown) {
      console.error("Google Sign-In error:", err);
      const fbErr = getFirebaseError(err);
      if (fbErr.code !== "auth/popup-closed-by-user") {
        toast.error(fbErr.message || "Google Sign-In failed. Please try again.");
      }
      throw err;
    }
  }, [syncUserProfile]);

  // Email Sign In
  const signInWithEmail = useCallback(
    async (email: string, pass: string) => {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, pass);
        toast.success("Welcome back!");
        await syncUserProfile(cred.user);
      } catch (err: unknown) {
        console.error("Email sign in error:", err);
        const fbErr = getFirebaseError(err);
        let msg = "Invalid credentials";
        if (fbErr.code === "auth/user-not-found") msg = "No account found with this email.";
        if (fbErr.code === "auth/wrong-password") msg = "Incorrect password.";
        if (fbErr.code === "auth/invalid-credential") msg = "Invalid email or password.";
        toast.error(msg);
        throw err;
      }
    },
    [syncUserProfile],
  );

  // Email Sign Up
  const signUpWithEmail = useCallback(
    async (email: string, pass: string, name?: string) => {
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, pass);
        if (name && cred.user) {
          await firebaseUpdateProfile(cred.user, { displayName: name });
        }
        toast.success("Account created successfully!");
        await syncUserProfile(cred.user);
      } catch (err: unknown) {
        console.error("Email sign up error:", err);
        const fbErr = getFirebaseError(err);
        let msg = "Sign up failed.";
        if (fbErr.code === "auth/email-already-in-use") msg = "Email is already registered.";
        if (fbErr.code === "auth/weak-password") msg = "Password should be at least 6 characters.";
        toast.error(msg);
        throw err;
      }
    },
    [syncUserProfile],
  );

  // Password Reset
  const sendPasswordReset = useCallback(async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email.");
    } catch (err: unknown) {
      console.error("Password reset error:", err);
      const fbErr = getFirebaseError(err);
      toast.error(fbErr.message || "Failed to send reset link.");
      throw err;
    }
  }, []);

  // Update Profile Name
  const updateProfileName = useCallback(
    async (name: string) => {
      if (!user) return;
      const cleanName = name.trim();
      await firebaseUpdateProfile(user, { displayName: cleanName });
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, {
          displayName: cleanName,
          updatedAt: new Date().toISOString(),
        });
        setProfile((prev) => (prev ? { ...prev, display_name: cleanName } : null));
        toast.success("Profile updated.");
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      }
    },
    [user],
  );

  // Update Theme Preference
  const updateThemePreference = useCallback(
    async (themePref: string) => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, {
          themePreference: themePref,
          updatedAt: new Date().toISOString(),
        });
        setProfile((prev) => (prev ? { ...prev, theme_preference: themePref } : null));
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      }
    },
    [user],
  );

  // Toggle Favorite
  const toggleFavorite = useCallback(
    async (toolSlug: string, toolTitle: string): Promise<boolean> => {
      if (!user) {
        toast.info("Please sign in to save favorite tools.");
        return false;
      }
      const favPath = `users/${user.uid}/favorites/${toolSlug}`;
      try {
        const favDocRef = doc(db, "users", user.uid, "favorites", toolSlug);
        const existing = favorites.find((f) => f.toolSlug === toolSlug);
        if (existing) {
          await deleteDoc(favDocRef);
          toast.success(`Removed ${toolTitle} from favorites`);
          return false;
        } else {
          await setDoc(favDocRef, {
            toolSlug,
            toolTitle,
            addedAt: new Date().toISOString(),
          });
          toast.success(`Saved ${toolTitle} to favorites!`);
          return true;
        }
      } catch (err) {
        console.error("Error toggling favorite:", err);
        handleFirestoreError(err, OperationType.WRITE, favPath);
      }
    },
    [user, favorites],
  );

  const isFavorite = useCallback(
    (toolSlug: string): boolean => {
      return favorites.some((f) => f.toolSlug === toolSlug);
    },
    [favorites],
  );

  // Record Tool Run History
  const recordToolHistory = useCallback(
    async (toolSlug: string, toolTitle: string, summary: string = "Executed tool") => {
      if (!user) return;
      const histPath = `users/${user.uid}/history`;
      try {
        const histCol = collection(db, "users", user.uid, "history");
        await addDoc(histCol, {
          toolSlug,
          toolTitle,
          summary,
          runAt: new Date().toISOString(),
        });
      } catch (err) {
        console.warn("Failed to record tool history in Firestore:", err);
        handleFirestoreError(err, OperationType.CREATE, histPath);
      }
    },
    [user],
  );

  // Refresh profile
  const refreshProfile = useCallback(async () => {
    if (user) await syncUserProfile(user);
  }, [user, syncUserProfile]);

  // Sign out
  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut(auth);
      setProfile(null);
      setFavorites([]);
      setHistory([]);
      toast.success("Signed out");
      navigate({ to: "/", replace: true });
    } catch (err) {
      console.error("Sign out error:", err);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        favorites,
        history,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        sendPasswordReset,
        refreshProfile,
        updateProfileName,
        updateThemePreference,
        toggleFavorite,
        isFavorite,
        recordToolHistory,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
