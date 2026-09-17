import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Reveal } from "@/components/site/reveal";
import { submitContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToolNami — Feedback, Ideas & Support" },
      {
        name: "description",
        content:
          "Send the ToolNami team a message: report a bug, request a tool, or ask about partnerships. We read every message.",
      },
      { property: "og:title", content: "Contact ToolNami" },
      {
        property: "og:description",
        content: "Questions, feedback or a tool request? Reach the ToolNami team here.",
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
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
              <MessageSquare className="size-3.5" /> Contact
            </span>
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl">Let's talk</h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Found a bug, want a specific tool built, or interested in working together? Send a
              message and we'll get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <form
            onSubmit={submit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            {status === "sent" ? (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                <CheckCircle2 className="mt-0.5 size-5 text-success" />
                <div>
                  <p className="text-sm font-semibold">Message sent</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out — we usually reply within two working days.
                  </p>
                </div>
              </div>
            ) : null}

            {status === "error" ? (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                <AlertCircle className="mt-0.5 size-5 text-destructive" />
                <div>
                  <p className="text-sm font-semibold">Something went wrong</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your message wasn't sent. Please try again in a moment.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={`${field} mt-2 ${
                    errors.name ? "border-destructive" : "border-input focus:border-primary/50"
                  }`}
                />
                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  aria-invalid={!!errors.email}
                  className={`${field} mt-2 ${
                    errors.email ? "border-destructive" : "border-input focus:border-primary/50"
                  }`}
                />
                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
                aria-invalid={!!errors.message}
                className={`mt-2 w-full rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 ${
                  errors.message ? "border-destructive" : "border-input focus:border-primary/50"
                }`}
              />
              <div className="mt-1.5 flex items-center justify-between">
                <p className="text-xs text-destructive">{errors.message ?? ""}</p>
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
        </Reveal>

        <Reveal delay={100}>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Mail className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">Email us directly</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:support.neoluxetrust@gmail.com"
                    className="break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    support.neoluxetrust@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aniketbhalerao065@gmail.com"
                    className="break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    aniketbhalerao065@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-accent-soft p-6">
              <h2 className="text-base font-semibold">Request a tool</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us what you'd use every week. Tool requests jump straight to the top of our
                build list.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-base font-semibold">Response time</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Usually within 1–2 working days. Every message is read by a human.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>
    </div>
  );
}
