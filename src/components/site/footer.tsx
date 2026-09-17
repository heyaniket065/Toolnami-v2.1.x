import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Loader2, Mail, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "./logo";
import { supabase } from "@/integrations/supabase/client";

const SOCIALS = [
  { label: "YouTube", href: "https://youtube.com/@luminalm065", Icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/hey_aniket_065", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/19cdfcUFpw/", Icon: Facebook },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: value });
    setLoading(false);
    if (error) {
      toast.error("We couldn't sign you up. Please try again.");
      return;
    }
    setEmail("");
    toast.success("You're on the list. Thanks for subscribing!");
  };

  return (
    <footer className="mt-24 border-t border-border bg-card/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            ToolNami is a fast, free and privacy-friendly home for everyday online tools — convert,
            compress, calculate and create without installing anything.
          </p>
          <form onSubmit={subscribe} className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-95 disabled:opacity-60"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : null}
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
            <a
              href="mailto:support.neoluxetrust@gmail.com"
              aria-label="Email support"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Mail className="size-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Platform</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                search={{ page: 1 }}
                className="transition-colors hover:text-primary"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a
                href="mailto:support.neoluxetrust@gmail.com"
                className="transition-colors hover:text-primary"
              >
                support.neoluxetrust@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ToolNami. All rights reserved.</p>
          <p>
            Built by Aniket Bhalerao ·{" "}
            <span className="font-semibold text-foreground">LuminaLM</span> — Think Better. Build
            Better.
          </p>
        </div>
      </div>
    </footer>
  );
}
