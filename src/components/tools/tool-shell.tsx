import { Link } from "@tanstack/react-router";
import { ChevronRight, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";
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
  children: ReactNode;
  about: string;
  steps: string[];
  benefits: { title: string; body: string }[];
  faqs: ToolFaq[];
  seo: { heading: string; paragraphs: string[] };
}) {
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

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="size-3.5 text-accent" /> {categoryLabel}
            </span>
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              {tagline}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" /> Runs in your browser — your files never leave
              your device
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tool workspace */}
      <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
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
    </div>
  );
}
