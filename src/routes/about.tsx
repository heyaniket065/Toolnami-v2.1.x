import { Link, createFileRoute } from "@tanstack/react-router";
import { Compass, Heart, Rocket, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ToolNami — Simple Tools, Seriously Built" },
      {
        name: "description",
        content:
          "ToolNami is an independent online tools platform by Aniket Bhalerao (LuminaLM), built to make everyday digital tasks fast, free and privacy-friendly.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/about" },
      { property: "og:title", content: "About ToolNami — Simple Tools, Seriously Built" },
      {
        property: "og:description",
        content: "The story and purpose behind ToolNami's growing library of free online tools.",
      },
      { property: "og:image", content: "/assets/tools/3d-pdf-compressor.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Instgram136" },
      { name: "twitter:creator", content: "@Instgram136" },
      { name: "twitter:title", content: "About ToolNami — Simple Tools, Seriously Built" },
      {
        name: "twitter:description",
        content: "The story and purpose behind ToolNami's growing library of free online tools.",
      },
      { name: "twitter:image", content: "/assets/tools/3d-pdf-compressor.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    Icon: Rocket,
    title: "Fast by default",
    body: "Every tool is built to load instantly and finish the job in a couple of clicks — no queues, no waiting rooms.",
  },
  {
    Icon: ShieldCheck,
    title: "Privacy first",
    body: "We keep data collection minimal and process as much as possible right in your browser.",
  },
  {
    Icon: Compass,
    title: "Easy to navigate",
    body: "A clean directory, real categories and a search that actually finds what you need.",
  },
  {
    Icon: Heart,
    title: "Free for everyone",
    body: "The essentials stay free. No forced signups just to compress an image or merge a PDF.",
  },
];

const TIMELINE = [
  {
    year: "The spark",
    body: "Too many tool sites were slow, cluttered with ads and hid the actual tool behind five buttons. ToolNami started as a fix for that.",
  },
  {
    year: "The build",
    body: "A single clean design system, one predictable card layout, and an architecture ready for hundreds of tools without a redesign.",
  },
  {
    year: "What's next",
    body: "More categories, saved favourites, accounts, a blog and analytics — added carefully, never at the cost of speed.",
  },
];

function AboutPage() {
  return (
    <div className="page-enter">
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" /> About ToolNami
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold sm:text-5xl">
              A calm, capable home for the tools you keep searching for
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ToolNami brings the small utilities of everyday digital work — converting,
              compressing, formatting, calculating — into one bright, uncluttered platform that
              respects your time and your data.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Foundations
            </span>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Our core principles</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              The values that dictate how every tool in ToolNami is designed and engineered.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {VALUES.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Our story</h2>
        </Reveal>
        <ol className="mt-8 space-y-5">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 80} as="li">
              <div className="relative rounded-2xl border border-border bg-card p-6 pl-16 shadow-soft">
                <span className="absolute top-6 left-6 flex size-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold">{item.year}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Who builds ToolNami</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ToolNami is created by{" "}
                  <strong className="text-foreground">Aniket Bhalerao</strong>, founder of{" "}
                  <strong className="text-foreground">LuminaLM</strong> — a small independent studio
                  focused on useful, well-made digital products. LuminaLM's guiding line says it
                  best: Think Better. Build Better.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/tools"
                    search={{ page: 1 }}
                    className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
                  >
                    Browse the tools
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-all hover:border-primary/40 hover:text-primary active:scale-95"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
              <dl className="grid gap-4 rounded-2xl bg-primary-soft p-6">
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-primary uppercase">
                    Brand
                  </dt>
                  <dd className="mt-1 text-sm font-medium">LuminaLM</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-primary uppercase">
                    Support
                  </dt>
                  <dd className="mt-1 text-sm font-medium break-all">
                    support.neoluxetrust@gmail.com
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-primary uppercase">
                    Taglines
                  </dt>
                  <dd className="mt-1 text-sm font-medium">Learn. Create. Improve.</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
