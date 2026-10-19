import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as sendPasswordResetEmail, c as signOut, i as onAuthStateChanged, l as updateProfile, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword, r as getAuth, s as signInWithPopup, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as limit, c as query, d as collection, f as doc, i as getDocFromServer, l as setDoc, n as deleteDoc, o as onSnapshot, p as getFirestore, r as getDoc, s as orderBy, t as addDoc, u as updateDoc } from "../_libs/@firebase/firestore+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-auth-L4eD_EXa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var firebase_applet_config_default = {
	projectId: "boxwood-lattice-kf6jr",
	appId: "1:982229552246:web:4bcdf94e7ac25859a62357",
	apiKey: "AIzaSyBxkrKWFCV4PSBz2PxlkPFMR8eJQxFRW3E",
	authDomain: "boxwood-lattice-kf6jr.firebaseapp.com",
	firestoreDatabaseId: "ai-studio-toolnami-d8aa86da-71f8-48c6-8e71-47ed3735db32",
	storageBucket: "boxwood-lattice-kf6jr.firebasestorage.app",
	messagingSenderId: "982229552246",
	measurementId: "",
	oAuthClientId: "982229552246-91gsdc7vcs94mkv9fn2hlku7ibts9o8m.apps.googleusercontent.com",
	recaptchaSiteKey: ""
};
var app;
if (getApps().length === 0) app = initializeApp(firebase_applet_config_default);
else app = getApp();
var auth = getAuth(app);
var googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
var db = getFirestore(app, firebase_applet_config_default.firestoreDatabaseId);
async function testConnection() {
	try {
		await getDocFromServer(doc(db, "test", "connection"));
	} catch (error) {
		if (error instanceof Error && error.message.includes("the client is offline")) console.error("Please check your Firebase configuration.");
	}
}
testConnection();
var OperationType = /* @__PURE__ */ function(OperationType) {
	OperationType["CREATE"] = "create";
	OperationType["UPDATE"] = "update";
	OperationType["DELETE"] = "delete";
	OperationType["LIST"] = "list";
	OperationType["GET"] = "get";
	OperationType["WRITE"] = "write";
	return OperationType;
}({});
function handleFirestoreError(error, operationType, path) {
	const errInfo = {
		error: error instanceof Error ? error.message : String(error),
		authInfo: {
			userId: auth.currentUser?.uid,
			email: auth.currentUser?.email,
			emailVerified: auth.currentUser?.emailVerified,
			isAnonymous: auth.currentUser?.isAnonymous,
			tenantId: auth.currentUser?.tenantId,
			providerInfo: auth.currentUser?.providerData?.map((provider) => ({
				providerId: provider.providerId,
				email: provider.email
			})) || []
		},
		operationType,
		path
	};
	console.error("Firestore Error: ", JSON.stringify(errInfo));
	throw new Error(JSON.stringify(errInfo));
}
function getFirebaseError(err) {
	if (err && typeof err === "object") return err;
	return { message: String(err) };
}
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const navigate = useNavigate();
	const syncUserProfile = (0, import_react.useCallback)(async (firebaseUser) => {
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
					updated_at: data.updatedAt
				});
			} else {
				const newProfile = {
					id: firebaseUser.uid,
					email: firebaseUser.email,
					display_name: firebaseUser.displayName || null,
					avatar_url: firebaseUser.photoURL || null,
					theme_preference: "system",
					created_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				await setDoc(userDocRef, {
					id: newProfile.id,
					email: newProfile.email,
					displayName: newProfile.display_name,
					photoURL: newProfile.avatar_url,
					themePreference: newProfile.theme_preference,
					createdAt: newProfile.created_at,
					updatedAt: newProfile.updated_at
				});
				setProfile(newProfile);
			}
		} catch (err) {
			console.error("Failed to sync user profile with Firestore:", err);
			setProfile({
				id: firebaseUser.uid,
				email: firebaseUser.email,
				display_name: firebaseUser.displayName || null,
				avatar_url: firebaseUser.photoURL || null,
				theme_preference: "system"
			});
			handleFirestoreError(err, OperationType.WRITE, `users/${firebaseUser.uid}`);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			if (currentUser) await syncUserProfile(currentUser);
			else {
				setProfile(null);
				setFavorites([]);
				setHistory([]);
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, [syncUserProfile]);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		try {
			const favsPath = `users/${user.uid}/favorites`;
			const favsCol = collection(db, "users", user.uid, "favorites");
			const unsubscribe = onSnapshot(favsCol, (snapshot) => {
				const items = snapshot.docs.map((docSnap) => {
					const d = docSnap.data();
					return {
						id: docSnap.id,
						toolSlug: d.toolSlug || docSnap.id,
						toolTitle: d.toolTitle || docSnap.id,
						addedAt: d.addedAt || (/* @__PURE__ */ new Date()).toISOString()
					};
				});
				setFavorites(items);
			}, (err) => {
				console.warn("Firestore favorites listener notice:", err);
				handleFirestoreError(err, OperationType.GET, favsPath);
			});
			return () => unsubscribe();
		} catch (e) {
			console.warn("Failed to attach favorites listener:", e);
		}
	}, [user]);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		try {
			const histPath = `users/${user.uid}/history`;
			const histCol = collection(db, "users", user.uid, "history");
			const q = query(histCol, orderBy("runAt", "desc"), limit(25));
			const unsubscribe = onSnapshot(q, (snapshot) => {
				const items = snapshot.docs.map((docSnap) => {
					const d = docSnap.data();
					return {
						id: docSnap.id,
						toolSlug: d.toolSlug,
						toolTitle: d.toolTitle,
						runAt: d.runAt || (/* @__PURE__ */ new Date()).toISOString(),
						summary: d.summary || "Tool execution"
					};
				});
				setHistory(items);
			}, (err) => {
				console.warn("Firestore history listener notice:", err);
				handleFirestoreError(err, OperationType.GET, histPath);
			});
			return () => unsubscribe();
		} catch (e) {
			console.warn("Failed to attach history listener:", e);
		}
	}, [user]);
	const signInWithGoogle = (0, import_react.useCallback)(async () => {
		try {
			const cred = await signInWithPopup(auth, googleProvider);
			toast.success(`Signed in as ${cred.user.displayName || cred.user.email}!`);
			await syncUserProfile(cred.user);
		} catch (err) {
			console.error("Google Sign-In error:", err);
			const fbErr = getFirebaseError(err);
			if (fbErr.code !== "auth/popup-closed-by-user") toast.error(fbErr.message || "Google Sign-In failed. Please try again.");
			throw err;
		}
	}, [syncUserProfile]);
	const signInWithEmail = (0, import_react.useCallback)(async (email, pass) => {
		try {
			const cred = await signInWithEmailAndPassword(auth, email, pass);
			toast.success("Welcome back!");
			await syncUserProfile(cred.user);
		} catch (err) {
			console.error("Email sign in error:", err);
			const fbErr = getFirebaseError(err);
			let msg = "Invalid credentials";
			if (fbErr.code === "auth/user-not-found") msg = "No account found with this email.";
			if (fbErr.code === "auth/wrong-password") msg = "Incorrect password.";
			if (fbErr.code === "auth/invalid-credential") msg = "Invalid email or password.";
			toast.error(msg);
			throw err;
		}
	}, [syncUserProfile]);
	const signUpWithEmail = (0, import_react.useCallback)(async (email, pass, name) => {
		try {
			const cred = await createUserWithEmailAndPassword(auth, email, pass);
			if (name && cred.user) await updateProfile(cred.user, { displayName: name });
			toast.success("Account created successfully!");
			await syncUserProfile(cred.user);
		} catch (err) {
			console.error("Email sign up error:", err);
			const fbErr = getFirebaseError(err);
			let msg = "Sign up failed.";
			if (fbErr.code === "auth/email-already-in-use") msg = "Email is already registered.";
			if (fbErr.code === "auth/weak-password") msg = "Password should be at least 6 characters.";
			toast.error(msg);
			throw err;
		}
	}, [syncUserProfile]);
	const sendPasswordReset = (0, import_react.useCallback)(async (email) => {
		try {
			await sendPasswordResetEmail(auth, email);
			toast.success("Password reset link sent to your email.");
		} catch (err) {
			console.error("Password reset error:", err);
			const fbErr = getFirebaseError(err);
			toast.error(fbErr.message || "Failed to send reset link.");
			throw err;
		}
	}, []);
	const updateProfileName = (0, import_react.useCallback)(async (name) => {
		if (!user) return;
		const cleanName = name.trim();
		await updateProfile(user, { displayName: cleanName });
		const userRef = doc(db, "users", user.uid);
		try {
			await updateDoc(userRef, {
				displayName: cleanName,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			setProfile((prev) => prev ? {
				...prev,
				display_name: cleanName
			} : null);
			toast.success("Profile updated.");
		} catch (err) {
			handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
		}
	}, [user]);
	const updateThemePreference = (0, import_react.useCallback)(async (themePref) => {
		if (!user) return;
		const userRef = doc(db, "users", user.uid);
		try {
			await updateDoc(userRef, {
				themePreference: themePref,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			setProfile((prev) => prev ? {
				...prev,
				theme_preference: themePref
			} : null);
		} catch (err) {
			handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
		}
	}, [user]);
	const toggleFavorite = (0, import_react.useCallback)(async (toolSlug, toolTitle) => {
		if (!user) {
			toast.info("Please sign in to save favorite tools.");
			return false;
		}
		const favPath = `users/${user.uid}/favorites/${toolSlug}`;
		try {
			const favDocRef = doc(db, "users", user.uid, "favorites", toolSlug);
			if (favorites.find((f) => f.toolSlug === toolSlug)) {
				await deleteDoc(favDocRef);
				toast.success(`Removed ${toolTitle} from favorites`);
				return false;
			} else {
				await setDoc(favDocRef, {
					toolSlug,
					toolTitle,
					addedAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				toast.success(`Saved ${toolTitle} to favorites!`);
				return true;
			}
		} catch (err) {
			console.error("Error toggling favorite:", err);
			handleFirestoreError(err, OperationType.WRITE, favPath);
		}
	}, [user, favorites]);
	const isFavorite = (0, import_react.useCallback)((toolSlug) => {
		return favorites.some((f) => f.toolSlug === toolSlug);
	}, [favorites]);
	const recordToolHistory = (0, import_react.useCallback)(async (toolSlug, toolTitle, summary = "Executed tool") => {
		if (!user) return;
		const histPath = `users/${user.uid}/history`;
		try {
			const histCol = collection(db, "users", user.uid, "history");
			await addDoc(histCol, {
				toolSlug,
				toolTitle,
				summary,
				runAt: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch (err) {
			console.warn("Failed to record tool history in Firestore:", err);
			handleFirestoreError(err, OperationType.CREATE, histPath);
		}
	}, [user]);
	const refreshProfile = (0, import_react.useCallback)(async () => {
		if (user) await syncUserProfile(user);
	}, [user, syncUserProfile]);
	const signOut$1 = (0, import_react.useCallback)(async () => {
		try {
			await signOut(auth);
			setProfile(null);
			setFavorites([]);
			setHistory([]);
			toast.success("Signed out");
			navigate({
				to: "/",
				replace: true
			});
		} catch (err) {
			console.error("Sign out error:", err);
		}
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
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
			signOut: signOut$1
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
//#endregion
export { auth as n, useAuth as r, AuthProvider as t };
