import { Link } from "@tanstack/react-router";

export function Logo({
  className = "",
  size = "md",
  showText = true,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-9 sm:size-10",
    lg: "size-12",
  }[size];

  const imgPx = {
    sm: 32,
    md: 40,
    lg: 48,
  }[size];

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${className}`}
      aria-label="ToolNami home — fast free online utilities"
    >
      <div className="relative shrink-0">
        {/* Luminous Neon Ring Glow on hover */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-600 opacity-60 blur-xs transition-opacity duration-300 group-hover:opacity-100 animate-pulse" />

        {/* Circular Badge: Anime character with black hair & cigarette set against 3D blue T emblem */}
        <div
          className={`relative overflow-hidden rounded-full border-2 border-cyan-400/80 bg-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.45)] transition-transform duration-300 group-hover:scale-105 ${sizeClasses}`}
        >
          <img
            src="/logo.png"
            srcSet="/logo.png 1x, /logo-1024.png 2x"
            alt="ToolNami 3D Anime Emblem Logo"
            width={imgPx}
            height={imgPx}
            decoding="async"
            className="size-full object-cover block"
          />
        </div>
      </div>

      {showText && (
        <span className="font-display text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
          Tool
          <span className="bg-gradient-to-r from-sky-400 to-primary bg-clip-text text-transparent">
            Nami
          </span>
        </span>
      )}
    </Link>
  );
}
