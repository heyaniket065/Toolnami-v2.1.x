import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${className}`}
      aria-label="ToolNami home"
    >
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M2 16c2.6 0 3.4-3 6-3s3.4 3 6 3 3.4-3 6-3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M6 9.5c1.8-4 5.4-5.5 9-4.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-accent" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Tool<span className="text-primary">Nami</span>
      </span>
    </Link>
  );
}
