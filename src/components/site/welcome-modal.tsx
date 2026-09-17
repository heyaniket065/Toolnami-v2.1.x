import { Link } from "@tanstack/react-router";
import { Heart, Settings2, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./logo";
import { useAuth } from "@/hooks/use-auth";

const STORAGE_KEY = "toolnami-welcome-dismissed";

const BENEFITS = [
  { Icon: Heart, title: "Save favorite tools", text: "Keep the tools you use most one tap away." },
  {
    Icon: Sparkles,
    title: "Access future features",
    text: "Be first to try new tools and upgrades.",
  },
  {
    Icon: Settings2,
    title: "Sync preferences",
    text: "Your theme and settings follow you anywhere.",
  },
];

export function WelcomeModal() {
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loading || user) return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, [loading, user]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 cursor-default bg-foreground/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lift duration-300 animate-in fade-in slide-in-from-bottom-6 sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <Logo />
        <h2 id="welcome-title" className="mt-5 text-2xl font-bold tracking-tight">
          Join ToolNami for a better experience.
        </h2>

        <ul className="mt-5 space-y-3">
          {BENEFITS.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon className="size-[18px]" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{title}</span>
                <span className="block text-sm text-muted-foreground">{text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-2">
          <Link
            to="/auth"
            search={{ mode: "signup" }}
            onClick={dismiss}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Sign Up
          </Link>
          <Link
            to="/auth"
            search={{ mode: "login" }}
            onClick={dismiss}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold transition-all hover:border-primary/40 hover:text-primary active:scale-[0.98]"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="mt-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
