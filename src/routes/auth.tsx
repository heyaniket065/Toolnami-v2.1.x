import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Loader2, Lock, Mail, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Logo } from "@/components/site/logo";
import { useAuth } from "@/hooks/use-auth";

type Mode = "login" | "signup" | "forgot";

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): { mode: Mode } => {
    const raw = String(search["mode"] ?? "login");
    const mode: Mode = raw === "signup" || raw === "forgot" ? raw : "login";
    return { mode };
  },
  head: () => ({
    meta: [
      { title: "Sign In or Create Your ToolNami Account" },
      {
        name: "description",
        content:
          "Log in or sign up for ToolNami to save favorite tools, sync your preferences and unlock upcoming features. Guests can keep using every tool for free.",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/auth" },
      { property: "og:title", content: "Sign In or Create Your ToolNami Account" },
      {
        property: "og:description",
        content: "Save favorites and sync preferences with a free ToolNami account.",
      },
      { property: "og:image", content: "/assets/tools/3d-pdf-compressor.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Instgram136" },
      { name: "twitter:creator", content: "@Instgram136" },
      { name: "twitter:title", content: "Sign In or Create Your ToolNami Account" },
      {
        name: "twitter:description",
        content: "Save favorites and sync preferences with a free ToolNami account.",
      },
      { name: "twitter:image", content: "/assets/tools/3d-pdf-compressor.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/auth" }],
  }),
  component: AuthPage,
});

const emailSchema = z.string().trim().email("Enter a valid email address").max(255);
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").max(72);

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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.1-4 1.1a7 7 0 0 1-6.6-4.8H1.4v3.1A11.9 11.9 0 0 0 12 24Z"
      />
      <path fill="#FBBC05" d="M5.4 14.4a7.1 7.1 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z" />
      <path
        fill="#EA4335"
        d="M12 4.7c1.8 0 3.4.6 4.6 1.8l3.5-3.5A11.9 11.9 0 0 0 1.4 6.5l4 3.1A7 7 0 0 1 12 4.7Z"
      />
    </svg>
  );
}

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const {
    user,
    loading: authLoading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    sendPasswordReset,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<null | "email" | "google">(null);
  const [sentReset, setSentReset] = useState(false);
  const [checkInbox, setCheckInbox] = useState(false);

  useEffect(() => {
    if (!authLoading && user) navigate({ to: "/dashboard", replace: true });
  }, [authLoading, user, navigate]);

  useEffect(() => {
    setError(null);
    setSentReset(false);
    setCheckInbox(false);
  }, [mode]);

  const field =
    "h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";

  const googleSignIn = async () => {
    setBusy("google");
    setError(null);
    try {
      await signInWithGoogle();
      navigate({ to: "/dashboard", replace: true });
    } catch (err: unknown) {
      const fbErr = getFirebaseError(err);
      if (fbErr.code !== "auth/popup-closed-by-user") {
        setError(fbErr.message || "Google Sign-In failed. Please try again.");
      }
    } finally {
      setBusy(null);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsedEmail = emailSchema.safeParse(email);
    if (!parsedEmail.success) {
      setError(parsedEmail.error.issues[0]?.message ?? "Enter a valid email address");
      return;
    }

    if (mode === "forgot") {
      setBusy("email");
      try {
        await sendPasswordReset(parsedEmail.data);
        setSentReset(true);
      } catch (err: unknown) {
        const fbErr = getFirebaseError(err);
        setError(fbErr.message || "Failed to send reset link.");
      } finally {
        setBusy(null);
      }
      return;
    }

    const parsedPassword = passwordSchema.safeParse(password);
    if (!parsedPassword.success) {
      setError(parsedPassword.error.issues[0]?.message ?? "Invalid password");
      return;
    }

    setBusy("email");

    if (mode === "signup") {
      try {
        await signUpWithEmail(parsedEmail.data, parsedPassword.data, name);
        navigate({ to: "/dashboard", replace: true });
      } catch (err: unknown) {
        const fbErr = getFirebaseError(err);
        setError(fbErr.message || "Sign up failed.");
      } finally {
        setBusy(null);
      }
      return;
    }

    try {
      await signInWithEmail(parsedEmail.data, parsedPassword.data);
      navigate({ to: "/dashboard", replace: true });
    } catch (err: unknown) {
      const fbErr = getFirebaseError(err);
      setError(fbErr.message || "Invalid email or password.");
    } finally {
      setBusy(null);
    }
  };

  const title =
    mode === "signup"
      ? "Create your account"
      : mode === "forgot"
        ? "Reset your password"
        : "Welcome back";
  const subtitle =
    mode === "signup"
      ? "Save favorites, sync preferences and unlock what's next."
      : mode === "forgot"
        ? "We'll email you a secure link to set a new password."
        : "Sign in to pick up where you left off.";

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-60" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="hidden flex-col justify-center lg:flex">
          <Logo />
          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            Your tools, <span className="text-primary">your way.</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            A free ToolNami account keeps your favorite tools and preferences in sync. You can
            always keep browsing as a guest — every tool stays open to everyone.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { Icon: Sparkles, text: "Save favorite tools for instant access" },
              { Icon: ShieldCheck, text: "Private by design — we never sell your data" },
              { Icon: UserRound, text: "One profile across every device" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-[18px]" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
          {mode === "forgot" ? (
            <Link
              to="/auth"
              search={{ mode: "login" }}
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Back to login
            </Link>
          ) : (
            <div className="mb-6 grid grid-cols-2 gap-1 rounded-2xl border border-border bg-muted/50 p-1">
              {(["login", "signup"] as const).map((m) => (
                <Link
                  key={m}
                  to="/auth"
                  search={{ mode: m }}
                  replace
                  className={`rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${
                    mode === m
                      ? "bg-card text-primary shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "login" ? "Login" : "Sign Up"}
                </Link>
              ))}
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          {checkInbox ? (
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary-soft/60 p-5 text-sm">
              <p className="font-semibold text-foreground">Check your email to confirm</p>
              <p className="mt-1 text-muted-foreground">
                We sent a confirmation link to {email}. Click it to activate your account, then come
                back and log in.
              </p>
            </div>
          ) : sentReset ? (
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary-soft/60 p-5 text-sm">
              <p className="font-semibold text-foreground">Reset link sent</p>
              <p className="mt-1 text-muted-foreground">
                If an account exists for {email}, a password reset link is on its way.
              </p>
            </div>
          ) : (
            <>
              {mode !== "forgot" ? (
                <>
                  <button
                    type="button"
                    onClick={() => void googleSignIn()}
                    disabled={busy !== null}
                    className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-sm font-semibold transition-all hover:border-primary/40 active:scale-[0.98] disabled:opacity-60"
                  >
                    {busy === "google" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <GoogleIcon />
                    )}
                    Continue with Google
                  </button>
                  <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="h-px flex-1 bg-border" />
                    or use your email
                    <span className="h-px flex-1 bg-border" />
                  </div>
                </>
              ) : null}

              <form onSubmit={submit} className="space-y-4" noValidate>
                {mode === "signup" ? (
                  <div className="relative">
                    <UserRound className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      aria-label="Your name"
                      autoComplete="name"
                      className={field}
                    />
                  </div>
                ) : null}

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    autoComplete="email"
                    className={field}
                  />
                </div>

                {mode !== "forgot" ? (
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      aria-label="Password"
                      autoComplete={mode === "signup" ? "new-password" : "current-password"}
                      className={field}
                    />
                  </div>
                ) : null}

                {error ? (
                  <p role="alert" className="text-sm font-medium text-destructive">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={busy !== null}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
                >
                  {busy === "email" ? <Loader2 className="size-4 animate-spin" /> : null}
                  {mode === "signup"
                    ? "Create account"
                    : mode === "forgot"
                      ? "Send reset link"
                      : "Log in"}
                </button>
              </form>

              {mode === "login" ? (
                <Link
                  to="/auth"
                  search={{ mode: "forgot" }}
                  className="mt-4 block text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Forgot your password?
                </Link>
              ) : null}
            </>
          )}

          <Link
            to="/tools"
            search={{ page: 1 }}
            className="mt-6 block text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Continue as guest
          </Link>
        </div>
      </div>
    </div>
  );
}
