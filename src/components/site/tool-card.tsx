import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";

import type { Tool, ToolCategory } from "@/lib/tools-data";
import { Skeleton } from "@/components/ui/skeleton";

function CategoryIcon({
  name,
  className,
}: {
  name?: string | null | undefined;
  className?: string | undefined;
}) {
  const Fallback = Icons.Wrench;
  const Comp = (name && (Icons as unknown as Record<string, typeof Fallback>)[name]) || Fallback;
  return <Comp className={className} aria-hidden="true" />;
}

export function ToolCard({ tool, category }: { tool: Tool; category?: ToolCategory | undefined }) {
  return (
    <Link
      to="/tools"
      search={{ q: tool.title, page: 1 }}
      aria-label={tool.title}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-soft grid-dots">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-card text-primary shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <CategoryIcon name={category?.icon} className="size-7" />
          </span>
        </div>
        {tool.featured ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
            <Sparkles className="size-3" /> Featured
          </span>
        ) : null}
        <span className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-card/85 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        {category ? (
          <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
            {category.name}
          </span>
        ) : null}
        <h3 className="text-base font-semibold text-card-foreground sm:text-lg">{tool.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{tool.description}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-3 text-xs text-muted-foreground">
          <Eye className="size-3.5" />
          {tool.views.toLocaleString()} uses
        </div>
      </div>
    </Link>
  );
}

export function ToolCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <Skeleton className="aspect-[16/10] w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export { CategoryIcon };
