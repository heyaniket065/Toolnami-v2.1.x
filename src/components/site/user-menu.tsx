import { Link } from "@tanstack/react-router";
import { Heart, LayoutDashboard, LogOut, Settings, UserRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";

function initials(name: string) {
  return name
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function UserMenu() {
  const { user, profile, loading, signOut } = useAuth();

  if (loading) {
    return <div className="size-10 shrink-0 animate-pulse rounded-full bg-muted" aria-hidden />;
  }

  if (!user) {
    return (
      <Link
        to="/auth"
        search={{ mode: "login" }}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary active:scale-95 sm:px-4"
      >
        <UserRound className="size-[18px]" />
        <span className="hidden sm:inline">Sign in</span>
      </Link>
    );
  }

  const name = profile?.display_name || user.email?.split("@")[0] || "Member";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Account menu"
        className="inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-primary-soft text-sm font-bold text-primary transition-all hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95"
      >
        {profile?.avatar_url ? (
          <img src={profile.avatar_url} alt={name} className="size-full object-cover" />
        ) : (
          <span>{initials(name) || "T"}</span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 rounded-2xl">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="truncate text-sm font-semibold">{name}</span>
          <span className="truncate text-xs font-normal text-muted-foreground">{user.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="cursor-pointer gap-2">
            <LayoutDashboard className="size-4" /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/dashboard" hash="favorites" className="cursor-pointer gap-2">
            <Heart className="size-4" /> Saved favorites
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/dashboard" hash="settings" className="cursor-pointer gap-2">
            <Settings className="size-4" /> Account settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => void signOut()} className="cursor-pointer gap-2">
          <LogOut className="size-4" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
