import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, LayoutGrid, Search, SearchX, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { CategoryIcon, ToolCard, ToolCardSkeleton } from "@/components/site/tool-card";
import { Reveal } from "@/components/site/reveal";
import { LiveToolCard } from "@/components/tools/live-tool-card";
import { matchLiveTools } from "@/lib/phase1-tools";
import {
  TOOLS_PER_PAGE,
  categoriesQuery,
  toolsPageQuery,
  type ToolCategory,
} from "@/lib/tools-data";

type ToolsSearch = { q?: string | undefined; category?: string | undefined; page: number };

export const Route = createFileRoute("/tools/")({
  validateSearch: (search: Record<string, unknown>): ToolsSearch => ({
    q: typeof search["q"] === "string" && search["q"] ? search["q"] : undefined,
    category:
      typeof search["category"] === "string" && search["category"] ? search["category"] : undefined,
    page: Math.max(1, Number(search["page"]) || 1),
  }),
  head: () => ({
    meta: [
      { title: "All Online Tools — ToolNami" },
      {
        name: "description",
        content:
          "Browse the full ToolNami directory: PDF, image, text, SEO, developer and conversion tools. Search by name or filter by category.",
      },
      { property: "og:title", content: "All Online Tools — ToolNami" },
      {
        property: "og:description",
        content: "Search and filter hundreds of free online tools in one clean directory.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const { q, category, page } = Route.useSearch();
  const navigate = useNavigate({ from: "/tools" });
  const [term, setTerm] = useState(q ?? "");

  useEffect(() => {
    setTerm(q ?? "");
  }, [q]);

  const { data: categories = [] } = useQuery(categoriesQuery);
  const activeCategory = categories.find((c: ToolCategory) => c.slug === category);

  const { data, isPending, isError } = useQuery(
    toolsPageQuery({
      search: q ?? "",
      categoryId: activeCategory?.id ?? null,
      page,
    }),
  );

  const liveTools = matchLiveTools(q ?? "");
  const showLive = !category && page === 1 && liveTools.length > 0;

  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / TOOLS_PER_PAGE));

  const setSearch = (next: Partial<ToolsSearch>) => {
    navigate({
      search: (prev) => ({ ...prev, page: 1, ...next }),
      resetScroll: false,
    });
  };

  return (
    <div className="page-enter">
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
              <LayoutGrid className="size-3.5" /> Tool directory
            </span>
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">
              Every ToolNami tool in one place
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Search by name, or narrow things down by category. New tools land here every week.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearch({ q: term.trim() || undefined });
              }}
              className="mt-8 flex max-w-2xl items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft focus-within:border-primary/40 focus-within:shadow-lift"
            >
              <Search className="ml-2 size-5 shrink-0 text-muted-foreground" />
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search tools…"
                aria-label="Search tools"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:text-base"
              />
              {term ? (
                <button
                  type="button"
                  onClick={() => {
                    setTerm("");
                    setSearch({ q: undefined });
                  }}
                  aria-label="Clear search"
                  className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted"
                >
                  <X className="size-4" />
                </button>
              ) : null}
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
              >
                Search
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {showLive ? (
        <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  <Zap className="size-3" /> Ready to use
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Live ToolNami tools</h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                  Built-in tools that run instantly in your browser.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveTools.map((tool, i) => (
              <Reveal key={tool.slug} delay={Math.min(i * 60, 240)} className="h-full">
                <LiveToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSearch({ category: undefined })}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              !category
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            All tools
          </button>
          {categories.map((c: ToolCategory) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSearch({ category: c.slug })}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                category === c.slug
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              <CategoryIcon name={c.icon} className="size-4" />
              {c.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {isPending
            ? "Loading tools…"
            : `${total} tool${total === 1 ? "" : "s"}${q ? ` for “${q}”` : ""}${
                activeCategory ? ` in ${activeCategory.name}` : ""
              }`}
        </p>

        {isError ? (
          <div className="mt-10 rounded-2xl border border-destructive/30 bg-destructive/5 p-10 text-center">
            <h2 className="text-lg font-semibold">We couldn't load the tools</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please check your connection and refresh the page.
            </p>
          </div>
        ) : isPending ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ToolCardSkeleton key={i} />
            ))}
          </div>
        ) : total === 0 ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-12 text-center shadow-soft">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <SearchX className="size-6" />
            </span>
            <h2 className="mt-5 text-lg font-semibold">No tools matched your search</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Try a different keyword or clear the filters to browse the full directory.
            </p>
            <button
              type="button"
              onClick={() => {
                setTerm("");
                navigate({ search: { page: 1 } });
              }}
              className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.tools.map((tool, i) => (
              <Reveal key={tool.id} delay={Math.min(i * 60, 240)} className="h-full">
                <ToolCard
                  tool={tool}
                  category={categories.find((c: ToolCategory) => c.id === tool.category_id)}
                />
              </Reveal>
            ))}
          </div>
        )}

        {totalPages > 1 && !isPending ? <Pagination page={page} totalPages={totalPages} /> : null}
      </section>
    </div>
  );
}

function pageNumbers(page: number, totalPages: number): (number | "gap")[] {
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1]);
  const list = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  list.forEach((p, i) => {
    if (i > 0 && p - (list[i - 1] as number) > 1) out.push("gap");
    out.push(p);
  });
  return out;
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  const base =
    "inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-xl border px-3 text-sm font-medium transition-all";

  return (
    <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
      <Link
        to="/tools"
        search={(prev) => ({ ...prev, page: Math.max(1, page - 1) })}
        resetScroll={false}
        disabled={page === 1}
        aria-disabled={page === 1}
        className={`${base} border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-40`}
      >
        <ChevronLeft className="size-4" /> Previous
      </Link>

      {pageNumbers(page, totalPages).map((p, i) =>
        p === "gap" ? (
          <span key={`gap-${i}`} className="px-1 text-sm text-muted-foreground">
            …
          </span>
        ) : (
          <Link
            key={p}
            to="/tools"
            search={(prev) => ({ ...prev, page: p })}
            resetScroll={false}
            aria-current={p === page ? "page" : undefined}
            className={`${base} ${
              p === page
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {p}
          </Link>
        ),
      )}

      <Link
        to="/tools"
        search={(prev) => ({ ...prev, page: Math.min(totalPages, page + 1) })}
        resetScroll={false}
        disabled={page === totalPages}
        aria-disabled={page === totalPages}
        className={`${base} border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-40`}
      >
        Next <ChevronRight className="size-4" />
      </Link>
    </nav>
  );
}
