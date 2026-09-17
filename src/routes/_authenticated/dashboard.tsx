import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Loader2,
  LogOut,
  Monitor,
  Moon,
  Settings,
  Sun,
  Trash2,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/reveal";
import { applyTheme } from "@/components/site/theme-toggle";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Your ToolNami Dashboard — Profile & Favorites" },
      {
        name: "description",
        content:
          "Manage your ToolNami profile, account settings, saved favorite tools and theme preferences in one place.",
      },
      { property: "og:title", content: "Your ToolNami Dashboard" },
      {
        property: "og:description",
        content: "Profile, saved favorites and theme preferences for your ToolNami account.",
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

type FavoriteRow = {
  id: string;
  tool_id: string;
  tools: { title: string; slug: string; description: string | null } | null;
};

function DashboardPage() {
  const { user, profile, refreshProfile, signOut } = useAuth();
  const queryClient = useQueryClient();

  const [displayName, setDisplayName] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [theme, setTheme] = useState<string>("system");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  useEffect(() => {
    setDisplayName(profile?.display_name ?? "");
    setTheme(profile?.theme_preference ?? "system");
  }, [profile]);

  const favorites = useQuery({
    queryKey: ["favorites", user?.id],
    enabled: Boolean(user),
    queryFn: async (): Promise<FavoriteRow[]> => {
      const { data, error } = await supabase
        .from("favorite_tools")
        .select("id, tool_id, tools(title, slug, description)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as FavoriteRow[];
    },
  });

  const saveName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSavingName(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName.trim() || null })
      .eq("id", user.id);
    setSavingName(false);
    if (error) {
      toast.error("We couldn't save your profile. Please try again.");
      return;
    }
    await refreshProfile();
    toast.success("Profile updated.");
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

    if (!user) return;
    const { error } = await supabase
      .from("profiles")
      .update({ theme_preference: value })
      .eq("id", user.id);
    if (error) {
      toast.error("Theme saved on this device only.");
      return;
    }
    await refreshProfile();
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      toast.error("New password must be at least 8 characters.");
      return;
    }
    setSavingPassword(true);
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
      ...(currentPassword ? { current_password: currentPassword } : {}),
    } as Parameters<typeof supabase.auth.updateUser>[0]);
    setSavingPassword(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    toast.success("Password updated.");
  };

  const removeFavorite = async (id: string) => {
    const { error } = await supabase.from("favorite_tools").delete().eq("id", id);
    if (error) {
      toast.error("We couldn't remove that favorite.");
      return;
    }
    await queryClient.invalidateQueries({ queryKey: ["favorites", user?.id] });
  };

  const field =
    "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";
  const card = "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8";
  const name = profile?.display_name || user?.email?.split("@")[0] || "Member";

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-soft text-xl font-bold text-primary">
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt={name} className="size-full object-cover" />
            ) : (
              name.slice(0, 1).toUpperCase()
            )}
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-3xl font-bold tracking-tight">Hi, {name}</h1>
            <p className="truncate text-sm text-muted-foreground">{user?.email}</p>
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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <section id="profile" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <UserRound className="size-[18px] text-primary" /> Profile information
            </h2>
            <form onSubmit={saveName} className="mt-5 space-y-4">
              <div>
                <label htmlFor="display-name" className="mb-2 block text-sm font-medium">
                  Display name
                </label>
                <input
                  id="display-name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="account-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="account-email"
                  value={user?.email ?? ""}
                  readOnly
                  className={`${field} cursor-not-allowed text-muted-foreground`}
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

        <Reveal delay={80}>
          <section id="settings" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Settings className="size-[18px] text-primary" /> Account settings
            </h2>
            <form onSubmit={changePassword} className="mt-5 space-y-4">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Current password"
                aria-label="Current password"
                autoComplete="current-password"
                className={field}
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                aria-label="New password"
                autoComplete="new-password"
                className={field}
              />
              <button
                type="submit"
                disabled={savingPassword}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold transition-all hover:border-primary/40 hover:text-primary active:scale-95 disabled:opacity-60"
              >
                {savingPassword ? <Loader2 className="size-4 animate-spin" /> : null}
                Update password
              </button>
              <p className="text-xs text-muted-foreground">
                Signed in with Google? You can skip this — Google manages your password.
              </p>
            </form>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section id="theme" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Sun className="size-[18px] text-primary" /> Theme preferences
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose how ToolNami looks. Your choice is saved to your account.
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

        <Reveal delay={160}>
          <section id="favorites" className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Heart className="size-[18px] text-primary" /> Saved favorites
            </h2>

            {favorites.isLoading ? (
              <div className="mt-5 space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 animate-pulse rounded-2xl bg-muted" />
                ))}
              </div>
            ) : favorites.isError ? (
              <p className="mt-5 text-sm text-destructive">
                We couldn't load your favorites right now.
              </p>
            ) : (favorites.data?.length ?? 0) === 0 ? (
              <div className="mt-5 rounded-2xl border border-dashed border-border p-6 text-center">
                <p className="text-sm font-medium">No favorites yet</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse the directory and save the tools you use most.
                </p>
                <Link
                  to="/tools"
                  search={{ page: 1 }}
                  className="mt-4 inline-flex h-11 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95"
                >
                  Explore tools
                </Link>
              </div>
            ) : (
              <ul className="mt-5 space-y-3">
                {favorites.data?.map((fav) => (
                  <li
                    key={fav.id}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {fav.tools?.title ?? "Untitled tool"}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {fav.tools?.description ?? ""}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => void removeFavorite(fav.id)}
                      aria-label="Remove favorite"
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
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
    </div>
  );
}
