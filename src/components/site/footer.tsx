import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "./logo";
import { supabase } from "@/integrations/supabase/client";

const VERIFIED_SOCIALS = [
  {
    label: "YouTube (@luminalM065)",
    href: "https://youtube.com/@luminalM065",
    Icon: Youtube,
    color: "hover:text-red-500 hover:border-red-500/40",
  },
  {
    label: "Instagram (@hey_anik_et_065)",
    href: "https://www.instagram.com/hey_anik_et_065",
    Icon: Instagram,
    color: "hover:text-pink-500 hover:border-pink-500/40",
  },
  {
    label: "LinkedIn (/in/aniket-bhalerao-007)",
    href: "https://www.linkedin.com/in/aniket-bhalerao-007",
    Icon: Linkedin,
    color: "hover:text-sky-500 hover:border-sky-500/40",
  },
  {
    label: "X / Twitter (@aniketbhalerao)",
    href: "https://x.com/aniketbhalerao",
    Icon: Twitter,
    color: "hover:text-foreground hover:border-foreground/40",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19cdfcUFpw/",
    Icon: Facebook,
    color: "hover:text-blue-500 hover:border-blue-500/40",
  },
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
    <footer className="mt-24 border-t border-border bg-card/75 backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {/* Brand & Newsletter Column */}
        <div className="md:col-span-2">
          <Logo size="md" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            ToolNami is a high-performance web utility platform engineered by LuminaLM. Free,
            browser-first tools for converting, compressing, calculating, and coding without
            software installations or telemetry tracking.
          </p>

          <form onSubmit={subscribe} className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address for updates"
              className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-105 active:scale-95 disabled:opacity-60"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : null}
              Subscribe
            </button>
          </form>

          {/* Social Channels */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {VERIFIED_SOCIALS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className={`inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 shadow-xs ${color}`}
              >
                <Icon className="size-4" />
              </a>
            ))}
            <a
              href="mailto:support.neoluxetrust@gmail.com"
              aria-label="Email support"
              title="support.neoluxetrust@gmail.com"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary shadow-xs"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {/* Directory Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">
            Platform & Tools
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
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
                All 80+ Tools Directory
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                search={{ category: "pdf", page: 1 }}
                className="transition-colors hover:text-primary"
              >
                PDF Utilities
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                search={{ category: "image", page: 1 }}
                className="transition-colors hover:text-primary"
              >
                Image Compressors
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                search={{ category: "developer", page: 1 }}
                className="transition-colors hover:text-primary"
              >
                Developer & QR Code
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About LuminaLM
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Local Business & Legal */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">
            Official Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-xs leading-relaxed">
                LuminaLM Innovations / Neoluxe Trust Hub, Pune, Maharashtra 411001, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href="tel:+919876543210" className="text-xs transition-colors hover:text-primary">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a
                href="mailto:support.neoluxetrust@gmail.com"
                className="text-xs break-all transition-colors hover:text-primary"
              >
                support.neoluxetrust@gmail.com
              </a>
            </li>
            <li className="pt-2 border-t border-border/50">
              <Link to="/privacy-policy" className="text-xs transition-colors hover:text-primary">
                Privacy Policy &amp; Security
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-xs transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
              >
                /llms.txt (AI Manifest)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ToolNami. All rights reserved.</p>
          <p>
            Architected by Aniket Bhalerao ·{" "}
            <span className="font-semibold text-foreground">LuminaLM</span> — Think Better. Build
            Better.
          </p>
        </div>
      </div>
    </footer>
  );
}
