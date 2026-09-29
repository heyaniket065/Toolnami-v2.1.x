import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ExternalLink,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Reveal } from "@/components/site/reveal";
import { submitContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToolNami — Support, Creator Office & Business Inquiries" },
      {
        name: "description",
        content:
          "Connect directly with Aniket Bhalerao (Creator of LuminaLM & ToolNami). Official support email support.neoluxetrust@gmail.com, headquarters in Pune, Maharashtra, and project network.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/contact" },
      { property: "og:title", content: "Contact ToolNami & LuminaLM — Aniket Bhalerao" },
      {
        property: "og:description",
        content:
          "Official contact channels, LuminaLM headquarters in Pune India, support email, and verified network.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      { name: "twitter:title", content: "Contact ToolNami & LuminaLM — Aniket Bhalerao" },
      {
        name: "twitter:description",
        content:
          "Official business channels, LuminaLM headquarters, support email, and verified social profiles.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact ToolNami & LuminaLM",
          url: "https://toolnami.com/contact",
          description:
            "Official contact directory, support lines, headquarters address, and creator information for ToolNami.",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "ToolNami — LuminaLM Innovations",
            telephone: "+91-9876543210",
            email: "support.neoluxetrust@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "LuminaLM Innovations, Neoluxe Trust Hub",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411001",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(5000, "Message is too long"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    handle: "@luminalM065",
    url: "https://youtube.com/@luminalM065",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    name: "Instagram",
    handle: "@hey_anik_et_065",
    url: "https://www.instagram.com/hey_anik_et_065",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    handle: "Aniket Bhalerao",
    url: "https://www.linkedin.com/in/aniket-bhalerao-007",
    icon: Linkedin,
    color: "hover:text-sky-600",
  },
  {
    name: "X (Twitter)",
    handle: "@aniketbhalerao",
    url: "https://x.com/aniketbhalerao",
    icon: Twitter,
    color: "hover:text-sky-500",
  },
  {
    name: "GitHub",
    handle: "heyaniket065",
    url: "https://github.com/heyaniket065?tab=repositories",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "Facebook",
    handle: "Aniket Bhalerao",
    url: "https://www.facebook.com/share/19cdfcUFpw/",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
];

const ECOSYSTEM_LINKS = [
  {
    id: "site-1",
    num: "1",
    title: "Aniket Bhalerao Portal",
    subtitle: "Official Google Site",
    url: "https://sites.google.com/view/aniketbhalerao",
    description: "Official executive portal, biography, and professional directory.",
    badge: "Personal",
  },
  {
    id: "site-2",
    num: "2",
    title: "ToolNami Cloud AI",
    subtitle: "toolnami.ai.studio",
    url: "https://toolnami.ai.studio",
    description: "Cloud-native web utility deployment powered by Google AI Studio.",
    badge: "Cloud AI",
  },
  {
    id: "site-3",
    num: "3",
    title: "ToolNami Platform",
    subtitle: "toolnami.com",
    url: "https://toolnami.com",
    description: "Production web utility suite hosting 80+ fast, client-side tools.",
    badge: "Live Suite",
  },
  {
    id: "site-4",
    num: "4",
    title: "Figma Design Workspace",
    subtitle: "cone-spore-23450341.figma.site",
    url: "https://cone-spore-23450341.figma.site/",
    description: "Official interactive Figma design system and vector UI prototypes.",
    badge: "Design",
  },
  {
    id: "site-5",
    num: "5",
    title: "LuminaLM Research",
    subtitle: "youtube.com/@luminalM065",
    url: "https://youtube.com/@luminalM065",
    description: "Tech demonstrations, architectural walkthroughs, and tutorials.",
    badge: "Media",
  },
  {
    id: "site-6",
    num: "6",
    title: "GitHub Repositories",
    subtitle: "github.com/heyaniket065",
    url: "https://github.com/heyaniket065",
    description: "Open-source repositories, developer tools, and script libraries.",
    badge: "Code",
  },
];

const TAGLINES = [
  "Think Better. Build Better.",
  "Privacy by Architecture, Speed by Default.",
  "Zero Install. Zero Telemetry. Pure Utility.",
  "Learn. Create. Improve. Repeat.",
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const field =
    "h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitContactMessage({ data: parsed.data });
    } catch {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-enter">
      {/* Header section */}
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
                <MessageSquare className="size-3.5" /> Official Contact & Support
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" /> LuminaLM Innovations
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">Get in touch with ToolNami</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have feedback, tool suggestions, bug reports, or collaboration proposals? Reach out
              directly to founder Aniket Bhalerao or our technical support desk. We operate from
              Pune, Maharashtra, India and serve a global community of developers, creators, and
              students.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Grid: Form + Aside */}
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <div className="space-y-6">
            <form
              onSubmit={submit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <h2 className="text-xl font-bold">Send an official inquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We review every submission carefully and respond within 24–48 business hours.
              </p>

              {status === "sent" ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <div>
                    <p className="text-sm font-semibold text-success-foreground">
                      Message dispatched successfully
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thank you for contacting ToolNami. A response will be delivered to your email.
                    </p>
                  </div>
                </div>
              ) : null}

              {status === "error" ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
                  <div>
                    <p className="text-sm font-semibold">Message delivery failed</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Please verify your internet connection or email us directly at{" "}
                      <a
                        href="mailto:support.neoluxetrust@gmail.com"
                        className="underline text-primary"
                      >
                        support.neoluxetrust@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Alex Morgan"
                    className={`mt-1.5 ${field} ${
                      errors.name ? "border-destructive focus:ring-destructive/20" : "border-input"
                    }`}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@domain.com"
                    className={`mt-1.5 ${field} ${
                      errors.email ? "border-destructive focus:ring-destructive/20" : "border-input"
                    }`}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
                  Your Message or Feature Request <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Describe your inquiry, bug description, or requested tool utility..."
                  className={`mt-1.5 w-full rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 ${
                    errors.message ? "border-destructive focus:ring-destructive/20" : "border-input"
                  }`}
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift hover:brightness-110 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {status === "sending" ? "Dispatching Message…" : "Send Message"}
              </button>
            </form>

            {/* Brand Philosophy Card */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <BadgeCheck className="size-4 text-primary" /> Engineering Standards
              </div>
              <h3 className="mt-2 text-lg font-bold">LuminaLM Architectural Guarantees</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Principles enforced across every tool in the ToolNami collection:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {TAGLINES.map((tagline, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{tagline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sidebar / Business Info & Channels */}
        <Reveal delay={100}>
          <aside className="space-y-5">
            {/* Headquarters & Official Business Information */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Building2 className="size-4" /> Official Business Information
              </div>
              <h3 className="mt-2 text-lg font-bold">LuminaLM Innovations</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Registered operations and development office for ToolNami:
              </p>

              <div className="mt-5 space-y-3.5 border-t border-border pt-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Office Location</p>
                    <p className="text-xs text-muted-foreground">
                      LuminaLM Innovations / Neoluxe Trust Hub
                      <br />
                      Pune, Maharashtra 411001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Phone Support</p>
                    <a
                      href="tel:+919876543210"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Primary Support Email</p>
                    <a
                      href="mailto:support.neoluxetrust@gmail.com"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      support.neoluxetrust@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator & Brand Identity */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-primary">
                    Creator & Founder
                  </span>
                  <h2 className="mt-3 text-2xl font-bold">ANIKET BHALERAO</h2>
                  <p className="mt-0.5 text-sm font-semibold text-primary">LuminaLM Innovations</p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-soft">
                  AB
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full-stack software architect specializing in high-throughput browser runtimes,
                  privacy-first utilities, and modern web application platforms.
                </p>
              </div>
            </div>

            {/* Social & Developer Channels */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <h3 className="text-sm font-bold">Verified Social & Developer Profiles</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Connect across verified technical channels:
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 p-3 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card hover:shadow-soft"
                    >
                      <Icon className={`size-4 shrink-0 text-muted-foreground ${item.color}`} />
                      <div className="truncate">
                        <p className="truncate font-semibold">{item.name}</p>
                        <p className="truncate text-[10px] text-muted-foreground">{item.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time SLA Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h4 className="text-sm font-semibold">Response Guarantee & SLA</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                All communications sent via this form or direct email are processed by our core
                engineering team within 24 hours during standard business days (Monday–Friday, IST).
              </p>
            </div>
          </aside>
        </Reveal>
      </section>

      {/* Official Network Section */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  <Globe className="size-3.5" /> Official Ecosystem
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">LuminaLM Network & Projects</h2>
                <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Explore verified applications, code repositories, and interactive design
                  prototypes maintained by Aniket Bhalerao.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM_LINKS.map((link, idx) => (
              <Reveal key={link.id} delay={Math.min(idx * 50, 350)} className="h-full">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                        {link.num}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        {link.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {link.title}
                    </h3>
                    <p className="mt-0.5 truncate text-xs font-medium text-muted-foreground">
                      {link.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {link.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Visit Link</span>
                    <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
