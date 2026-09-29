import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Gauge, Search, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/reveal";
import { CategoryIcon, ToolCard, ToolCardSkeleton } from "@/components/site/tool-card";
import { LiveToolCard } from "@/components/tools/live-tool-card";
import { LIVE_TOOLS } from "@/lib/phase1-tools";
import { categoriesQuery, featuredToolsQuery, type ToolCategory } from "@/lib/tools-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToolNami — Fast, Free Online Tools for Everyday Work" },
      {
        name: "description",
        content:
          "ToolNami is a clean, fast platform of free online tools: merge PDFs, compress images, convert units, format code, and more — no installs, no clutter.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/" },
      { property: "og:title", content: "ToolNami — Fast, Free Online Tools for Everyday Work" },
      {
        property: "og:description",
        content:
          "One bright, uncluttered home for the everyday tools you keep searching for. 100% free, fast, and browser-based.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      { name: "twitter:title", content: "ToolNami — Fast, Free Online Tools for Everyday Work" },
      {
        name: "twitter:description",
        content:
          "One bright, uncluttered home for the everyday tools you keep searching for. 100% free, fast, and browser-based.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/" }],
  }),
  component: Home,
});

const TRUST = [
  {
    Icon: Gauge,
    title: "Instant results",
    body: "Tools open and run in your browser — no uploads to wait on, no processing queues.",
  },
  {
    Icon: ShieldCheck,
    title: "Private by design",
    body: "We collect as little as possible and process your files locally wherever we can.",
  },
  {
    Icon: Wallet,
    title: "Free to use",
    body: "The everyday essentials stay free — no signup wall before you can get work done.",
  },
];

function Home() {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const { data: categories = [] } = useQuery(categoriesQuery);
  const { data: featured, isPending } = useQuery(featuredToolsQuery);

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/tools", search: { q: term.trim() || undefined, page: 1 } });
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="surface-hero relative overflow-hidden border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="size-3.5 text-accent" /> A rising wave of useful tools
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-bold sm:text-6xl">
              Every small online task,{" "}
              <span className="text-gradient-brand">solved in seconds</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ToolNami collects the tools you keep googling — PDF, image, text, SEO and developer
              utilities — into one fast, clean and free platform.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <form
              onSubmit={search}
              role="search"
              aria-label="Sitewide tool search"
              className="mx-auto mt-9 flex w-full max-w-xl items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft transition-all focus-within:border-primary/40 focus-within:shadow-lift"
            >
              <label htmlFor="home-search-input" className="sr-only">
                Search tools
              </label>
              <Search className="ml-2 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="home-search-input"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="What do you need to do today?"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:text-base"
              />
              <button
                type="submit"
                aria-label="Submit search query"
                className="inline-flex h-11 shrink-0 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 sm:px-5"
              >
                Search
              </button>
            </form>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/tools"
                search={{ page: 1 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95 sm:w-auto"
              >
                Explore Tools <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-all hover:border-primary/40 hover:text-primary active:scale-95 sm:w-auto"
              >
                Why ToolNami?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popular Tools — built-in ToolNami tools */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                <Sparkles className="size-3" /> Ready to use
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Popular Tools</h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                Our built-in tools run instantly in your browser — nothing to install, nothing
                uploaded.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LIVE_TOOLS.map((tool, i) => (
            <Reveal key={tool.slug} delay={Math.min(i * 70, 280)} className="h-full">
              <LiveToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Popular right now</h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                A handful of favourites to get you started.
              </p>
            </div>
            <Link
              to="/tools"
              search={{ page: 1 }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {isPending
            ? Array.from({ length: 6 }).map((_, i) => <ToolCardSkeleton key={i} />)
            : (featured ?? []).map((tool, i) => (
                <Reveal key={tool.id} delay={Math.min(i * 70, 280)} className="h-full">
                  <ToolCard
                    tool={tool}
                    category={categories.find((c: ToolCategory) => c.id === tool.category_id)}
                  />
                </Reveal>
              ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Browse by category</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Pick a shelf and see everything on it.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c: ToolCategory, i: number) => (
              <Reveal key={c.id} delay={Math.min(i * 50, 250)} className="h-full">
                <Link
                  to="/tools"
                  search={{ category: c.slug, page: 1 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <CategoryIcon name={c.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / value */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="max-w-lg text-2xl font-bold sm:text-3xl">
            Built to be the tools tab you actually keep open
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {TRUST.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explore all CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
        <Reveal>
          <div className="surface-hero relative overflow-hidden rounded-3xl border border-border p-8 text-center shadow-soft sm:p-14">
            <h2 className="mx-auto max-w-xl text-2xl font-bold sm:text-4xl">
              The whole toolbox is one tap away
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
              Search the full directory, filter by category, and find the exact tool you need.
            </p>
            <Link
              to="/tools"
              search={{ page: 1 }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95"
            >
              Explore All Tools <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
