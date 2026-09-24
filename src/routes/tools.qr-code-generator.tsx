import { createFileRoute } from "@tanstack/react-router";
import { QrCode } from "lucide-react";
import { useState, useMemo } from "react";

import { ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { ToolProcessingState } from "@/components/tools/tool-processing-state";
import { downloadDataUrl } from "@/lib/tool-files";
import { findLiveTool, getDynamicUses } from "@/lib/phase1-tools";

const TOOL_DATA = findLiveTool("qr-code-generator");
const TITLE = TOOL_DATA.title;
const DESC = TOOL_DATA.description;
const URL = "https://toolnami.lovable.app/tools/qr-code-generator";
const FAQS = TOOL_DATA.faqs;

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

  const dynamicUses = useMemo(() => getDynamicUses(TOOL_DATA.baseUses), []);

  const generate = async () => {
    if (!value.trim()) {
      setError("Please enter a link, text, or Wi-Fi information to encode.");
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
      setError(
        "We couldn't generate a QR code for that input. Please try shortening or checking the text.",
      );
    } finally {
      setBusy(false);
    }
  };

  const resetAll = () => {
    setValue("");
    setPng(null);
    setError(null);
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Create a sharp, permanent QR code for any link or piece of text in one click."
      categoryLabel={TOOL_DATA.categoryLabel}
      thumbnail={TOOL_DATA.image}
      badge={TOOL_DATA.badge}
      dynamicUses={dynamicUses}
      relatedSlugs={TOOL_DATA.relatedSlugs}
      about="ToolNami's QR Code Generator encodes your text or URL directly into the image, so there is no redirect service, no tracking and no expiry date. Choose a colour style, generate a high-resolution PNG and download it for use online or in print."
      steps={TOOL_DATA.howToSteps}
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
      faqs={TOOL_DATA.faqs}
      seo={TOOL_DATA.seoArticle}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="qr-input" className="text-sm font-semibold">
            Target URL or Plain Text
          </label>
          <textarea
            id="qr-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setPng(null);
            }}
            rows={3}
            placeholder="https://example.com or any text..."
            className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Color style
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
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
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

        {!busy && !png && !error ? (
          <div className="pt-2">
            <button
              type="button"
              onClick={generate}
              disabled={busy || !value.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
            >
              <QrCode className="size-4" />
              Generate QR Code Now
            </button>
          </div>
        ) : null}

        {png ? (
          <div className="rounded-2xl border border-border bg-background p-5 text-center">
            <img
              src={png}
              alt={`QR code for ${value.trim()}`}
              width={256}
              height={256}
              className="mx-auto size-56 rounded-xl shadow-soft"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              1024×1024 Crisp PNG · Point phone camera to scan
            </p>
          </div>
        ) : null}

        {/* Processing, Success, and Error States */}
        <ToolProcessingState
          isProcessing={busy}
          processingMessage="Encoding data into QR matrix and computing Reed-Solomon error correction…"
          isSuccess={!!png}
          successTitle="QR Code Ready to Use!"
          successSubtitle="Permanent, unexpirable QR code generated at ultra-high 1024×1024 resolution."
          downloadLabel="Download High-Res PNG"
          onDownload={() => {
            if (png) {
              downloadDataUrl(png, "toolnami-qr-code.png");
            }
          }}
          error={error}
          onRetry={generate}
          onReset={resetAll}
        />

        {error && !value ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
