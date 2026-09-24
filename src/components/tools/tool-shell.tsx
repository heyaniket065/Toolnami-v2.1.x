import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Layers,
  Heart,
} from "lucide-react";
import type { ReactNode } from "react";
import { useAuth } from "@/hooks/use-auth";

import { Reveal } from "@/components/site/reveal";
import { LiveToolCard } from "@/components/tools/live-tool-card";
import { findLiveTool, type LiveToolSlug, type ToolBadge } from "@/lib/phase1-tools";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ToolFaq = { q: string; a: string };

export function toolJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  faqs: ToolFaq[];
}) {
  return JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${opts.name} — ToolNami`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any (browser-based)",
      url: opts.url,
      description: opts.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: "ToolNami" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]);
}

export function ToolShell({
  title,
  tagline,
  categoryLabel,
  thumbnail,
  badge,
  dynamicUses,
  toolSlug,
  relatedSlugs,
  children,
  about,
  steps,
  benefits,
  faqs,
  seo,
}: {
  title: string;
  tagline: string;
  categoryLabel: string;
  thumbnail?: string;
  badge?: ToolBadge;
  dynamicUses?: string;
  toolSlug?: string;
  relatedSlugs?: LiveToolSlug[];
  children: ReactNode;
  about: string;
  steps: string[];
  benefits: { title: string; body: string }[];
  faqs: ToolFaq[];
  seo: { heading: string; paragraphs: string[] };
}) {
  const badgeToneStyles = badge
    ? {
        trending: "bg-sky-500/15 text-sky-400 border-sky-500/30",
        popular: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        hot: "bg-rose-500/15 text-rose-400 border-rose-500/30",
        new: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        featured: "bg-purple-500/15 text-purple-300 border-purple-500/30",
        fast: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        top: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
        recommended: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      }[badge.tone]
    : null;

  const { isFavorite, toggleFavorite } = useAuth();
  const favorited = toolSlug ? isFavorite(toolSlug) : false;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground"
            >
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight className="size-3.5" />
              <Link
                to="/tools"
                search={{ page: 1 }}
                className="transition-colors hover:text-primary"
              >
                Tools
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">{title}</span>
            </nav>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
                <Sparkles className="size-3.5 text-accent" /> {categoryLabel}
              </span>

              {badge ? (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold shadow-soft ${badgeToneStyles}`}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ) : null}

              {dynamicUses ? (
                <span
                  suppressHydrationWarning
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
                >
                  <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <TrendingUp className="size-3.5 text-primary" />
                  <span suppressHydrationWarning>{dynamicUses}</span>
                </span>
              ) : null}

              {toolSlug && (
                <button
                  type="button"
                  onClick={() => void toggleFavorite(toolSlug, title)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-soft transition-all active:scale-95 cursor-pointer ${
                    favorited
                      ? "border-rose-500/40 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25"
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-border/80"
                  }`}
                  title={favorited ? "Remove from favorites" : "Save to favorites"}
                >
                  <Heart className={`size-3.5 ${favorited ? "fill-rose-500 text-rose-500" : ""}`} />
                  <span>{favorited ? "Saved" : "Save"}</span>
                </button>
              )}
            </div>

            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              {tagline}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" /> Runs entirely in your browser — your files never
              leave your device
            </p>
          </Reveal>
        </div>
      </section>

      {/* Custom Tool Banner (Thumbnail) — 3D High Quality Aesthetic Artwork */}
      {thumbnail ? (
        <section className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-transparent shadow-lift">
              <img
                src={thumbnail}
                alt={`${title} Official Banner`}
                referrerPolicy="no-referrer"
                width={1200}
                height={750}
                className="aspect-[16/10] w-full h-full object-cover block rounded-3xl"
              />
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* Tool workspace */}
      <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
            {children}
          </div>
        </Reveal>
      </section>

      {/* About + steps */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">About this tool</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {about}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-bold sm:text-3xl">How to use it</h2>
            <ol className="mt-4 space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Why use {title}?</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={Math.min(i * 70, 240)} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <h2 className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
              <HelpCircle className="size-6 text-primary" /> Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* SEO content */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <h2 className="text-xl font-bold sm:text-2xl">{seo.heading}</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            {seo.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <Link
            to="/tools"
            search={{ page: 1 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95"
          >
            Browse more tools
          </Link>
        </Reveal>
      </section>

      {/* Related Tools Section */}
      {relatedSlugs && relatedSlugs.length > 0 ? (
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal>
              <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Layers className="size-3.5" /> More Utilities
                  </span>
                  <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                    Related Tools You Might Need
                  </h2>
                </div>
                <Link
                  to="/tools"
                  search={{ page: 1 }}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all tools →
                </Link>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSlugs.map((slug, i) => {
                const tool = findLiveTool(slug);
                return (
                  <Reveal key={slug} delay={i * 80}>
                    <LiveToolCard tool={tool} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
