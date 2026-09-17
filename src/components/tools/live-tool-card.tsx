import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { LiveTool } from "@/lib/phase1-tools";

export function LiveToolCard({ tool }: { tool: LiveTool }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-soft">
        <img
          src={tool.image}
          alt={`${tool.title} — ${tool.description}`}
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          {tool.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-card-foreground sm:text-lg">{tool.title}</h3>
        <p className="text-sm text-muted-foreground">{tool.description}</p>
        <Link
          to={tool.to}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 pt-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95"
        >
          Open Tool
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
