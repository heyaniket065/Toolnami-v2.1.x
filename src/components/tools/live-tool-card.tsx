import { Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import { type LiveTool } from "@/lib/phase1-tools";
import { useToolUsage } from "@/hooks/use-tool-usage";

export function LiveToolCard({ tool }: { tool: LiveTool }) {
  const { formatted: dynamicUses, hasIncremented } = useToolUsage(tool.baseUses, tool.slug, {
    enableLiveGrowth: true,
  });

  // Distinct tone colors for badges
  const badgeToneStyles = {
    trending: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    popular: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    hot: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    new: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    featured: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    fast: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    top: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    recommended: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  }[tool.badge.tone];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-primary/50 hover:shadow-lift hover:shadow-primary/10">
      {/* Thumbnail Banner — 3D High Quality Aesthetic Render (Seamless fit, zero dark borders) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30">
        <img
          src={tool.image}
          alt={`${tool.title} — ${tool.description}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          width={1200}
          height={750}
          className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-5">
        {/* Badges & Category Header */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-secondary/80 border border-border/60 px-2.5 py-0.5 text-[11px] font-semibold text-foreground shadow-xs">
            {tool.categoryLabel}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold shadow-xs ${badgeToneStyles}`}
          >
            <span>{tool.badge.icon}</span>
            <span>{tool.badge.label}</span>
          </span>
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-card-foreground sm:text-lg tracking-tight group-hover:text-primary transition-colors">
            {tool.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {tool.description}
        </p>

        {/* Dynamic Popularity Counter */}
        <div className="mt-auto flex items-center justify-between pt-3 pb-1 border-t border-border/40 text-xs text-muted-foreground">
          <span
            suppressHydrationWarning
            className={`inline-flex items-center gap-1.5 font-medium transition-all duration-300 ${
              hasIncremented ? "text-emerald-400 font-semibold scale-105" : ""
            }`}
          >
            <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <TrendingUp className="size-3.5 text-primary" />
            <span suppressHydrationWarning>{dynamicUses}</span>
          </span>
          <span className="text-[11px] font-medium text-muted-foreground/80">Runs in Browser</span>
        </div>

        {/* Redesigned Glassmorphic Open Tool Button */}
        <Link
          to={tool.to}
          className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_10px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)] hover:brightness-110 active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span>Open Tool</span>
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
