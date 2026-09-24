import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
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
      { title: "Contact ToolNami — Aniket Bhalerao & LuminaLM" },
      {
        name: "description",
        content:
          "Connect with Aniket Bhalerao, Creator & Founder of LuminaLM. Send messages, explore official ecosystem links, or reach out for collaborations.",
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
          "Official contact channels, LuminaLM brand details, and ecosystem links for Aniket Bhalerao.",
      },
      { property: "og:image", content: "/assets/tools/3d-pdf-compressor.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Instgram136" },
      { name: "twitter:creator", content: "@Instgram136" },
      { name: "twitter:title", content: "Contact ToolNami & LuminaLM — Aniket Bhalerao" },
      {
        name: "twitter:description",
        content:
          "Official contact channels, LuminaLM brand details, and ecosystem links for Aniket Bhalerao.",
      },
      { name: "twitter:image", content: "/assets/tools/3d-pdf-compressor.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/contact" }],
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
    handle: "@luminalm065",
    url: "https://youtube.com/@luminalm065",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    name: "Instagram",
    handle: "@hey_aniket_065",
    url: "https://www.instagram.com/hey_aniket_065",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "X (Twitter)",
    handle: "@Instgram136",
    url: "https://x.com/Instgram136",
    icon: Twitter,
    color: "hover:text-sky-500",
  },
  {
    name: "LinkedIn",
    handle: "Aniket Bhalerao",
    url: "https://www.linkedin.com/in/aniket-bhalerao-o07?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
    color: "hover:text-blue-600",
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
    title: "Aniket Bhalerao",
    subtitle: "Official Google Site",
    url: "https://sites.google.com/view/aniketbhalerao",
    description: "Official personal portal, biography, and professional directory.",
    badge: "Personal",
  },
  {
    id: "site-2",
    num: "2",
    title: "Neoluxe Trust",
    subtitle: "neoluxetrast.lovable.app",
    url: "https://neoluxetrast.lovable.app",
    description: "Digital trust, foundation services, and ecosystem standards.",
    badge: "Enterprise",
  },
  {
    id: "site-3",
    num: "3",
    title: "Neoluxe",
    subtitle: "neoluxe.lovable.app",
    url: "https://neoluxe.lovable.app",
    description: "Modern digital luxury and curated web experience platform.",
    badge: "Platform",
  },
  {
    id: "site-4",
    num: "4",
    title: "Aniket Bhalerao Portfolio",
    subtitle: "aniketbhalerao.lovable.app",
    url: "https://aniketbhalerao.lovable.app",
    description: "Interactive showcase of software projects and creative works.",
    badge: "Portfolio",
  },
  {
    id: "site-5",
    num: "5",
    title: "ToolNami (AI Studio)",
    subtitle: "toolnami.ai.studio",
    url: "https://toolnami.ai.studio",
    description: "Next-generation cloud deployment on Google AI Studio.",
    badge: "Cloud AI",
  },
  {
    id: "site-6",
    num: "6",
    title: "ToolNami (Lovable)",
    subtitle: "toolnami.lovable.app",
    url: "https://toolnami.lovable.app",
    description: "Production web utility suite with 75+ free browser tools.",
    badge: "Live App",
  },
  {
    id: "site-7",
    num: "7",
    title: "Figma Design Workspace",
    subtitle: "cone-spore-23450341.figma.site",
    url: "https://cone-spore-23450341.figma.site/",
    description: "Official interactive Figma design system and UI prototype.",
    badge: "Design",
  },
  {
    id: "site-8",
    num: "8",
    title: "Hey Aniket Portal",
    subtitle: "heyaniket065.lovable.app",
    url: "https://heyaniket065.lovable.app",
    description: "Creator hub, quick links, updates, and community hub.",
    badge: "Hub",
  },
];

const TAGLINES = [
  "Think Better. Build Better.",
  "Stories, Strategy & Growth",
  "Learn. Create. Improve.",
  "Focus. Plan. Execute.",
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
                <MessageSquare className="size-3.5" /> Contact & Ecosystem
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" /> LuminaLM Official
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">Let's talk & connect</h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Have feedback, tool suggestions, or collaboration inquiries? Get in touch directly
              with the creator or explore our interconnected network of digital products.
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
              <h2 className="text-xl font-bold">Send a direct message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We review every submission and typically respond within 1–2 business days.
              </p>

              {status === "sent" ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <div>
                    <p className="text-sm font-semibold">Message sent successfully</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thanks for reaching out! We will be in touch with you shortly.
                    </p>
                  </div>
                </div>
              ) : null}

              {status === "error" ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
                  <div>
                    <p className="text-sm font-semibold">Something went wrong</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your message couldn't be dispatched. You can also email us directly at the
                      addresses on the right.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    aria-required="true"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${field} mt-2 ${
                      errors.name ? "border-destructive" : "border-input focus:border-primary/50"
                    }`}
                  />
                  {errors.name ? (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${field} mt-2 ${
                      errors.email ? "border-destructive" : "border-input focus:border-primary/50"
                    }`}
                  />
                  {errors.email ? (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  aria-required="true"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help? Share your ideas, tool requests, or feedback..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`mt-2 w-full rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 ${
                    errors.message ? "border-destructive" : "border-input focus:border-primary/50"
                  }`}
                />
                <div className="mt-1.5 flex items-center justify-between">
                  {errors.message ? (
                    <p id="message-error" role="alert" className="text-xs text-destructive">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <p className="text-xs text-muted-foreground">{form.message.length}/5000</p>
                </div>
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
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>

            {/* Brand Philosophy Card */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <BadgeCheck className="size-4 text-primary" /> Brand Philosophy & Motto
              </div>
              <h3 className="mt-2 text-lg font-bold">LuminaLM Taglines</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Guiding principles behind our creations and engineering process:
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

        {/* Sidebar / Profile & Direct Channels */}
        <Reveal delay={100}>
          <aside className="space-y-5">
            {/* Creator & Brand Identity */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-primary">
                    Creator & Founder
                  </span>
                  <h2 className="mt-3 text-2xl font-bold">ANIKET BHALERAO</h2>
                  <p className="mt-0.5 text-sm font-semibold text-primary">LuminaLM</p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-soft">
                  AB
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Official Contact Emails
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li>
                    <a
                      href="mailto:aniketbhalerao065@gmail.com"
                      className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/60 p-3 transition-colors hover:border-primary hover:text-primary"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Mail className="size-4 shrink-0 text-primary" />
                        <span className="truncate text-xs font-medium sm:text-sm">
                          aniketbhalerao065@gmail.com
                        </span>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support.neoluxetrust@gmail.com"
                      className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/60 p-3 transition-colors hover:border-primary hover:text-primary"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Mail className="size-4 shrink-0 text-primary" />
                        <span className="truncate text-xs font-medium sm:text-sm">
                          support.neoluxetrust@gmail.com
                        </span>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <h3 className="text-sm font-bold">Social & Developer Channels</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Follow and connect with Aniket Bhalerao across platforms:
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
                      className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 p-3 text-xs font-medium text-foreground transition-all hover:border-border hover:bg-card hover:shadow-soft"
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

            {/* Response Time Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h4 className="text-sm font-semibold">Response Guarantee</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                We review every message personally within 1–2 working days. No automated bot
                gatekeeping.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>

      {/* Official Ecosystem & Web Links Section */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  <Globe className="size-3.5" /> Official Network
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ecosystem & Project Links</h2>
                <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Explore the live websites, design canvases, and portfolio hubs created by Aniket
                  Bhalerao and LuminaLM.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
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
                    <span>Visit Platform</span>
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
