import { createFileRoute } from "@tanstack/react-router";
import { Download, Loader2, QrCode } from "lucide-react";
import { useState } from "react";

import { ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd, type ToolFaq } from "@/components/tools/tool-shell";
import { downloadDataUrl } from "@/lib/tool-files";

const TITLE = "QR Code Generator";
const DESC = "Generate custom QR codes instantly — free, high resolution and private.";
const URL = "https://toolnami.lovable.app/tools/qr-code-generator";

const FAQS: ToolFaq[] = [
  {
    q: "Do the QR codes expire?",
    a: "No. The code encodes your text or link directly, so it works forever and needs no tracking service.",
  },
  {
    q: "What can I encode?",
    a: "Any text: website links, Wi-Fi details, email addresses, phone numbers, UPI strings, plain notes and more.",
  },
  {
    q: "Can I use it commercially?",
    a: "Yes. The generated image is yours to use on packaging, posters, menus and business cards.",
  },
  {
    q: "What resolution do I get?",
    a: "A 1024×1024 PNG, which is sharp enough for both screens and print.",
  },
  { q: "Is my data sent anywhere?", a: "No. The QR code is drawn locally in your browser." },
];

export const Route = createFileRoute("/tools/qr-code-generator")({
  head: () => ({
    meta: [
      { title: "QR Code Generator — Free Custom QR Codes | ToolNami" },
      { name: "description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Free QR Code Generator — ToolNami" },
      { property: "og:description", content: DESC },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: toolJsonLd({ name: TITLE, description: DESC, url: URL, faqs: FAQS }),
      },
    ],
  }),
  component: QrCodePage,
});

const COLORS = [
  { label: "Classic", dark: "#0f172a", light: "#ffffff" },
  { label: "Blue", dark: "#1d63ff", light: "#ffffff" },
  { label: "Ink", dark: "#000000", light: "#ffffff" },
];

function QrCodePage() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [png, setPng] = useState<string | null>(null);

  const generate = async () => {
    if (!value.trim()) {
      setError("Enter some text or a link first.");
      return;
    }
    setBusy(true);
    setError(null);
    setPng(null);
    try {
      const QRCode = (await import("qrcode")).default;
      const chosen = COLORS[color] ?? COLORS[0]!;
      const dataUrl = await QRCode.toDataURL(value.trim(), {
        width: 1024,
        margin: 2,
        errorCorrectionLevel: "M",
        color: { dark: chosen.dark, light: chosen.light },
      });
      setPng(dataUrl);
    } catch {
      setError("We couldn't generate a QR code for that input. Try shortening it.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Create a sharp, permanent QR code for any link or piece of text in one click."
      categoryLabel="Generators"
      about="ToolNami's QR Code Generator encodes your text or URL directly into the image, so there is no redirect service, no tracking and no expiry date. Choose a colour style, generate a high-resolution PNG and download it for use online or in print."
      steps={[
        "Type or paste the link or text you want to encode.",
        "Pick a colour style for the code.",
        "Press Generate QR Code, then download the PNG.",
      ]}
      benefits={[
        {
          title: "Never expires",
          body: "Data is inside the code itself — no third-party redirect to break.",
        },
        {
          title: "Print ready",
          body: "1024×1024 PNG output stays crisp on posters and packaging.",
        },
        { title: "No tracking", body: "We don't log your links or count scans." },
        { title: "Works offline", body: "Generation happens in your browser, not on a server." },
        {
          title: "Any content",
          body: "Links, Wi-Fi, contact details, payment strings or plain text.",
        },
        { title: "Free forever", body: "No account, no watermark, no scan limits." },
      ]}
      faqs={FAQS}
      seo={{
        heading: "Free QR code generator with no expiry",
        paragraphs: [
          "QR codes have quietly become part of everyday life: restaurant menus, event check-ins, payment requests, product packaging, business cards and Wi-Fi sharing all rely on them.",
          "Many free generators create a short redirect link and then disable it, or start charging, once your posters are already printed. ToolNami takes the opposite approach: your content is encoded straight into the pattern, so the code keeps working with no ongoing service behind it.",
          "The output is a high-resolution PNG suitable for both web and print, generated locally in your browser so your links stay private.",
        ],
      }}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="qr-input" className="text-sm font-semibold">
            Text or URL
          </label>
          <textarea
            id="qr-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setPng(null);
            }}
            rows={3}
            placeholder="https://toolnami.lovable.app"
            className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Style
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {COLORS.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => {
                  setColor(i);
                  setPng(null);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  color === i
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={generate}
            disabled={busy}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : <QrCode className="size-4" />}
            {busy ? "Generating…" : "Generate QR Code"}
          </button>
          {png ? (
            <button
              type="button"
              onClick={() => downloadDataUrl(png, "toolnami-qr-code.png")}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <Download className="size-4" /> Download PNG
            </button>
          ) : null}
        </div>

        {png ? (
          <div className="rounded-2xl border border-border bg-background p-5 text-center">
            <img
              src={png}
              alt={`QR code for ${value.trim()}`}
              width={256}
              height={256}
              className="mx-auto size-56 rounded-xl"
            />
            <p className="mt-3 text-xs text-muted-foreground">1024×1024 PNG · scan to test</p>
          </div>
        ) : null}

        {error ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
