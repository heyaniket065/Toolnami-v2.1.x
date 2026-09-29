import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import { useState } from "react";

import type { Tool, ToolCategory } from "@/lib/tools-data";
import { Skeleton } from "@/components/ui/skeleton";
import { useToolUsage } from "@/hooks/use-tool-usage";
import { getToolBySlug } from "@/lib/complete-tools";

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
  const completeTool = getToolBySlug(tool.slug);
  const initialImage =
    (tool as Tool & { image?: string }).image ||
    tool.thumbnail_url ||
    completeTool?.image ||
    `/assets/tools/${tool.slug}.png`;

  const [imgSrc, setImgSrc] = useState<string>(initialImage);
  const fallbackImage = `/assets/tools/${
    tool.category_id === "pdf"
      ? "3d-pdf-compressor"
      : tool.category_id === "image"
        ? "image-converter"
        : tool.category_id === "ai"
          ? "ai-content-writer"
          : tool.category_id === "calculator"
            ? "age-calculator"
            : tool.category_id === "text"
              ? "text-formatter"
              : tool.category_id === "developer"
                ? "json-formatter"
                : tool.category_id === "seo"
                  ? "meta-tag-generator"
                  : "unit-converter"
  }.png`;

  const { formatted: usageCount, hasIncremented } = useToolUsage(
    completeTool?.baseUses || tool.views || 18000,
    tool.slug,
    {
      enableLiveGrowth: true,
    },
  );

  const targetSlug = completeTool?.slug || tool.slug;

  return (
    <Link
      to={`/tools/${targetSlug}`}
      aria-label={tool.title}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
        <img
          src={imgSrc}
          alt={tool.title}
          width={400}
          height={250}
          decoding="async"
          onError={() => {
            if (imgSrc !== fallbackImage) {
              setImgSrc(fallbackImage);
            }
          }}
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {tool.featured ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground shadow-sm">
            <Sparkles className="size-3" /> Featured
          </span>
        ) : null}
        <span className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-card/85 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 shadow-sm">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        {category ? (
          <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
            {category.name}
          </span>
        ) : null}
        <h3 className="text-base font-semibold text-card-foreground sm:text-lg group-hover:text-primary transition-colors">
          {tool.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{tool.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground border-t border-border/40">
          <span
            suppressHydrationWarning
            className={`flex items-center gap-1.5 transition-all duration-300 ${
              hasIncremented ? "text-emerald-400 font-semibold" : ""
            }`}
          >
            <Eye className="size-3.5" />
            <span suppressHydrationWarning>{usageCount}</span>
          </span>
          <span className="text-primary font-semibold text-[11px] group-hover:underline">
            Use tool →
          </span>
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
