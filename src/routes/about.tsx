import { Link, createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  FileCode2,
  Heart,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ToolNami — High-Performance Browser Utilities by LuminaLM" },
      {
        name: "description",
        content:
          "Discover ToolNami: a high-performance, privacy-first web utility suite by Aniket Bhalerao and LuminaLM. Client-side PDF processing, image compression, formatting, and calculators with zero data logging.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/about" },
      { property: "og:title", content: "About ToolNami — High-Performance Browser Utilities" },
      {
        property: "og:description",
        content:
          "The architectural story, privacy guarantees, and engineering standards behind ToolNami by LuminaLM.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      { name: "twitter:title", content: "About ToolNami — High-Performance Browser Utilities" },
      {
        name: "twitter:description",
        content:
          "The architectural story, privacy guarantees, and engineering standards behind ToolNami by LuminaLM.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About ToolNami",
          url: "https://toolnami.com/about",
          description:
            "Architectural history, privacy philosophy, engineering standards, and founder information for ToolNami by LuminaLM.",
          mainEntity: {
            "@type": "Organization",
            name: "LuminaLM Innovations",
            founder: {
              "@type": "Person",
              name: "Aniket Bhalerao",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    Icon: Rocket,
    title: "Client-Side First & Fast by Default",
    body: "Every tool is engineered to execute locally using modern browser APIs — WebAssembly, OffscreenCanvas, and Web Workers. Your files are processed at the speed of your local CPU without network queue delays.",
  },
  {
    Icon: ShieldCheck,
    title: "Strict Zero-Retention Privacy",
    body: "Unlike legacy tool sites that upload your confidential documents and images to remote staging servers, ToolNami processes files directly in your browser memory. Nothing is stored, saved, or harvested.",
  },
  {
    Icon: Compass,
    title: "Clean, Uncluttered Utility Experience",
    body: "No countdown timers, no deceptive fake download buttons, and no paywalls. ToolNami gives you instant access to input fields, instant previews, and one-click downloads in an ergonomic interface.",
  },
  {
    Icon: Heart,
    title: "100% Free Core Utilities for Everyone",
    body: "Essential everyday productivity utilities must remain universally accessible. Students, researchers, engineers, and creators can compress, convert, format, and calculate without forced subscriptions.",
  },
];

const ARCHITECTURAL_PILLARS = [
  {
    icon: Cpu,
    title: "Browser-Level Processing Engine",
    description:
      "Modern Web standards have eliminated the need for server-bound conversions. We leverage pdf-lib, browser-image-compression, Web Crypto, and client-side canvas engines to render results in fractions of a second.",
  },
  {
    icon: Lock,
    title: "Isolated Sandbox Security",
    description:
      "Because client files do not leave your device's memory space, sensitive documents, contracts, tax receipts, and personal photos stay completely confidential, satisfying strict compliance standards.",
  },
  {
    icon: Zap,
    title: "Zero Render-Blocking Overhead",
    description:
      "Engineered with aggressive code-splitting and dynamic route loading. Tool-specific logic and heavy computational engines load exclusively on demand, maintaining sub-second First Contentful Paint (FCP).",
  },
  {
    icon: FileCode2,
    title: "Standardized Output Formats",
    description:
      "All generated documents and assets adhere to official industry specifications (PDF/A compliance, modern WebP/AVIF compression standards, RFC 4122 UUIDs, and strict JSON schemas).",
  },
];

const FAQS = [
  {
    q: "Are my uploaded PDF and image files stored on ToolNami's servers?",
    a: "No. All core file utilities on ToolNami—including our PDF compressor, PDF merger, JPG to PDF converter, and image compressor—execute client-side inside your browser sandbox. Your files are never uploaded to, transmitted across, or stored on remote servers.",
  },
  {
    q: "Is ToolNami free to use for commercial and professional work?",
    a: "Yes. All 80+ tools in the ToolNami directory are completely free to use for personal, academic, and commercial purposes without limitations or watermarks.",
  },
  {
    q: "Who is behind ToolNami and what is LuminaLM?",
    a: "ToolNami was conceived, designed, and developed by Aniket Bhalerao, an Indian software engineer and founder of LuminaLM Innovations. LuminaLM is an independent development lab creating fast, thoughtful digital tools under the motto: 'Think Better. Build Better.'",
  },
  {
    q: "How does ToolNami achieve such fast processing speeds?",
    a: "By offloading compute tasks to your computer's browser using WebAssembly and Web Workers, ToolNami avoids network latency, server upload bottlenecks, and processing queues. The conversion happens instantly in system RAM.",
  },
  {
    q: "Which browsers are supported?",
    a: "ToolNami is fully compatible with all modern standards-compliant browsers, including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave, and Chromium mobile browsers on Android and iOS.",
  },
];

function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" /> About ToolNami & LuminaLM
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
              A calm, capable, and private home for everyday digital utilities
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ToolNami brings together over 80 essential tools for document manipulation, multimedia
              optimization, developer utilities, SEO analysis, and calculations into one fast,
              reliable, and beautifully designed web application that respects your time, device,
              and personal privacy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Foundational Standards
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              The principles that guide our code
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Every tool deployed on ToolNami is built to satisfy four uncompromising technical
              requirements.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {VALUES.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-xs">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technical Architecture Breakdown */}
      <section className="border-y border-border bg-muted/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Engineering Architecture
              </span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Engineered for speed, built for privacy
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                How ToolNami achieves instant execution times while ensuring zero sensitive file
                uploads.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ARCHITECTURAL_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Story & LuminaLM Vision */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  The Founder & Vision
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
                  Meet the creator behind ToolNami
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ToolNami is conceived, engineered, and maintained by{" "}
                  <strong className="text-foreground">Aniket Bhalerao</strong>, founder of{" "}
                  <strong className="text-foreground">LuminaLM Innovations</strong>, headquartered
                  in Pune, Maharashtra, India.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Frustrated by existing online tools that bombard visitors with deceptive banner
                  ads, captchas, slow server uploads, and forced paid tiers for basic tasks like
                  rotating a single page of a PDF or checking word counts, Aniket built ToolNami to
                  provide an elegant, uncompromising alternative: high-speed, local-first computing
                  packaged in a clean, contemporary user interface.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/tools"
                    search={{ page: 1 }}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 active:scale-95"
                  >
                    Explore all 80+ Tools
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary active:scale-95"
                  >
                    Contact Developer
                  </Link>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-border/80 bg-background/50 p-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Organization
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-foreground">LuminaLM Innovations</p>
                  <p className="text-xs text-muted-foreground">Pune, Maharashtra 411001, India</p>
                </div>

                <div className="border-t border-border pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Guiding Motto
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-foreground italic">
                    "Think Better. Build Better."
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Direct Channel
                  </h4>
                  <a
                    href="mailto:support.neoluxetrust@gmail.com"
                    className="mt-1 block text-xs font-medium text-primary hover:underline break-all"
                  >
                    support.neoluxetrust@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Answers to common questions</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Everything you need to know about how ToolNami functions, costs, and security
              policies.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/30">
                <h3 className="flex items-start gap-3 text-base font-bold text-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
