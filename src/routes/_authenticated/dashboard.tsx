import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  History,
  Loader2,
  LogOut,
  Monitor,
  Moon,
  Sparkles,
  Sun,
  Trash2,
  UserRound,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/reveal";
import { applyTheme } from "@/components/site/theme-toggle";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Your ToolNami Dashboard — Profile & Favorites" },
      {
        name: "description",
        content:
          "Manage your ToolNami profile, account settings, saved favorite tools and execution history in one place.",
      },
      { property: "og:title", content: "Your ToolNami Dashboard" },
      {
        property: "og:description",
        content: "Profile, saved favorites and history for your ToolNami account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const THEMES = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
] as const;

function DashboardPage() {
  const {
    user,
    profile,
    favorites,
    history,
    toggleFavorite,
    updateProfileName,
    updateThemePreference,
    signOut,
  } = useAuth();

  const [displayName, setDisplayName] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    setDisplayName(profile?.display_name ?? user?.displayName ?? "");
    setTheme(profile?.theme_preference ?? "system");
  }, [profile, user]);

  const saveName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSavingName(true);
    try {
      await updateProfileName(displayName);
    } catch {
      toast.error("Could not update profile name.");
    } finally {
      setSavingName(false);
    }
  };

  const chooseTheme = async (value: string) => {
    setTheme(value);
    const resolved =
      value === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : (value as "light" | "dark");
    applyTheme(resolved);
    if (value === "system") localStorage.removeItem("toolnami-theme");
    else localStorage.setItem("toolnami-theme", value);

    try {
      await updateThemePreference(value);
    } catch {
      // Handled silently
    }
  };

  const field =
    "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";
  const card = "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8";
  const name = profile?.display_name || user?.displayName || user?.email?.split("@")[0] || "Member";

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-soft text-xl font-bold text-primary border border-primary/20 shadow-sm">
            {profile?.avatar_url || user?.photoURL ? (
              <img
                src={profile?.avatar_url || user?.photoURL || ""}
                alt={name}
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              name.slice(0, 1).toUpperCase()
            )}
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-3xl font-bold tracking-tight">Hi, {name}</h1>
            <p className="truncate text-sm text-muted-foreground flex items-center gap-2">
              <span>{user?.email}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Connected via Firebase
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => void signOut()}
            className="ml-auto inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold transition-all hover:border-destructive/40 hover:text-destructive active:scale-95"
          >
            <LogOut className="size-4" /> Log out
          </button>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <Reveal delay={40}>
          <section id="settings" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <UserRound className="size-[18px] text-primary" /> Profile details
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your display name is saved securely in your Firestore profile.
            </p>
            <form onSubmit={saveName} className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your Name"
                  className={field}
                />
              </div>
              <button
                type="submit"
                disabled={savingName}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
              >
                {savingName ? <Loader2 className="size-4 animate-spin" /> : null}
                Save changes
              </button>
            </form>
          </section>
        </Reveal>

        {/* Theme Preferences */}
        <Reveal delay={80}>
          <section id="theme" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Sun className="size-[18px] text-primary" /> Theme preferences
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose how ToolNami looks. Synced to your Firebase account.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {THEMES.map(({ value, label, Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => void chooseTheme(value)}
                  aria-pressed={theme === value}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-semibold transition-all active:scale-95 ${
                    theme === value
                      ? "border-primary/50 bg-primary-soft text-primary"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="size-5" />
                  {label}
                </button>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Saved Favorites Section */}
      <div className="mt-8">
        <Reveal delay={120}>
          <section id="favorites" className={card}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Heart className="size-[18px] text-rose-500 fill-rose-500" /> Saved favorites
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Quick access to tools you use frequently, persisted in Firestore.
                </p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                {favorites.length} saved
              </span>
            </div>

            {favorites.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20">
                <p className="text-sm font-medium">No favorites saved yet</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse through any tool and click "Favorite" to bookmark it here.
                </p>
                <Link
                  to="/tools"
                  search={{ page: 1 }}
                  className="mt-4 inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95"
                >
                  Explore tools
                </Link>
              </div>
            ) : (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {favorites.map((fav) => (
                  <li
                    key={fav.id}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/40 hover:shadow-soft"
                  >
                    <Link
                      to={`/tools/${fav.toolSlug}`}
                      className="min-w-0 flex-1 flex items-center gap-2.5"
                    >
                      <div className="size-8 rounded-lg bg-primary-soft flex items-center justify-center text-primary shrink-0">
                        <Wrench className="size-4" />
                      </div>
                      <div className="truncate">
                        <p className="truncate text-sm font-semibold group-hover:text-primary transition-colors">
                          {fav.toolTitle}
                        </p>
                        <p className="text-[11px] text-muted-foreground">Open tool →</p>
                      </div>
                    </Link>
                    <button
                      type="button"
                      onClick={() => void toggleFavorite(fav.toolSlug, fav.toolTitle)}
                      aria-label="Remove favorite"
                      className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </Reveal>
      </div>

      {/* Execution History Section */}
      <div className="mt-8">
        <Reveal delay={160}>
          <section id="history" className={card}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <History className="size-[18px] text-primary" /> Tool execution history
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Recent activities processed on your account in this session and past sessions.
                </p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                {history.length} logged
              </span>
            </div>

            {history.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20">
                <p className="text-sm font-medium">No recent executions recorded</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Whenever you run PDF, Image, or AI generator tools, records will appear here.
                </p>
              </div>
            ) : (
              <ul className="mt-6 space-y-2.5">
                {history.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-3 text-sm"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{item.toolTitle}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(item.runAt).toLocaleDateString()} at{" "}
                          {new Date(item.runAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{item.summary}</p>
                    </div>
                    <Link
                      to={`/tools/${item.toolSlug}`}
                      className="text-xs font-semibold text-primary hover:underline shrink-0 flex items-center gap-1"
                    >
                      Run again <ExternalLink className="size-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </Reveal>
      </div>
    </div>
  );
}
