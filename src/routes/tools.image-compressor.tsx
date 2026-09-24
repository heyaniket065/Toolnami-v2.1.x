import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, RotateCcw } from "lucide-react";
import { useState, useMemo } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { ToolProcessingState } from "@/components/tools/tool-processing-state";
import { downloadBlob, formatBytes, savingsLabel, stripExtension } from "@/lib/tool-files";
import { findLiveTool, getDynamicUses } from "@/lib/phase1-tools";

const TOOL_DATA = findLiveTool("image-compressor");
const TITLE = TOOL_DATA.title;
const DESC = TOOL_DATA.description;
const URL = "https://toolnami.lovable.app/tools/image-compressor";
const FAQS = TOOL_DATA.faqs;

export const Route = createFileRoute("/tools/image-compressor")({
  head: () => ({
    meta: [
      { title: "Image Compressor — Reduce Image Size Free | ToolNami" },
      { name: "description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Free Image Compressor — ToolNami" },
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
  component: ImageCompressorPage,
});

const TARGETS = [
  { label: "Light (1.5 MB)", mb: 1.5 },
  { label: "Balanced (600 KB)", mb: 0.6 },
  { label: "Maximum (200 KB)", mb: 0.2 },
];

function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const dynamicUses = useMemo(() => getDynamicUses(TOOL_DATA.baseUses), []);

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  const compress = async () => {
    if (!file) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const imageCompression = (await import("browser-image-compression")).default;
      const target = TARGETS[preset] ?? TARGETS[1]!;
      const out = await imageCompression(file, {
        maxSizeMB: target.mb,
        maxWidthOrHeight: 2560,
        useWebWorker: true,
        initialQuality: 0.82,
      });
      setResult({ blob: out, url: URL_from(out) });
    } catch {
      setError(
        "We couldn't compress that image. The file may be corrupt or unreadable. Please try a different image.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Make photos and graphics dramatically lighter while keeping them looking sharp."
      categoryLabel={TOOL_DATA.categoryLabel}
      thumbnail={TOOL_DATA.image}
      badge={TOOL_DATA.badge}
      dynamicUses={dynamicUses}
      relatedSlugs={TOOL_DATA.relatedSlugs}
      about="The ToolNami Image Compressor re-encodes your picture at an optimised quality level and, when needed, gently reduces oversized dimensions. It uses your browser's own image pipeline in a background worker, so large photos compress quickly without freezing the page and without ever being uploaded."
      steps={TOOL_DATA.howToSteps}
      benefits={[
        {
          title: "Faster websites",
          body: "Lighter images mean quicker page loads and better Core Web Vitals.",
        },
        {
          title: "Visually lossless",
          body: "Tuned quality settings keep detail where your eye notices it.",
        },
        {
          title: "Private processing",
          body: "Nothing is uploaded — compression happens on your device.",
        },
        {
          title: "Metadata removed",
          body: "Camera and GPS EXIF data is stripped during re-encoding.",
        },
        {
          title: "Upload limits solved",
          body: "Fit inside forms, marketplaces and email attachment caps.",
        },
        { title: "Free and unlimited", body: "No signup, no watermark, no daily quota." },
      ]}
      faqs={TOOL_DATA.faqs}
      seo={TOOL_DATA.seoArticle}
    >
      {!file ? (
        <FileDrop
          accept="image/jpeg,image/png,image/webp"
          label="Drop your image here"
          hint="JPG, PNG or WebP. Compressed privately in your browser."
          onFiles={(files) => {
            const f = files[0];
            if (!f) return;
            if (!f.type.startsWith("image/")) {
              setError("Please choose a valid image file (JPG, PNG, or WebP).");
              return;
            }
            setError(null);
            setResult(null);
            setFile(f);
          }}
        />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <ImageIcon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{file.name}</p>
              <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <RotateCcw className="size-3.5" /> Change
            </button>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Compression strength target
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {TARGETS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => {
                    setPreset(i);
                    setResult(null);
                  }}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                    preset === i
                      ? "border-primary bg-primary text-primary-foreground shadow-soft"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {!busy && !result && !error ? (
            <div className="pt-2">
              <button
                type="button"
                onClick={compress}
                disabled={busy}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
              >
                Compress Image Now
              </button>
            </div>
          ) : null}

          {result ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-background/50 p-2">
              <img
                src={result.url}
                alt="Compressed preview"
                loading="lazy"
                className="max-h-72 w-full rounded-xl object-contain"
              />
            </div>
          ) : null}

          {/* Processing, Success, and Error States */}
          <ToolProcessingState
            isProcessing={busy}
            processingMessage="Compressing pixel matrices and stripping redundant EXIF headers…"
            isSuccess={!!result}
            successTitle="Image Compressed Successfully!"
            successSubtitle={
              result
                ? `Reduced from ${formatBytes(file.size)} to ${formatBytes(result.blob.size)} (${savingsLabel(file.size, result.blob.size)} savings).`
                : undefined
            }
            downloadLabel="Download Compressed Image"
            onDownload={() => {
              if (result && file) {
                downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.jpg`);
              }
            }}
            error={error}
            onRetry={compress}
            onReset={reset}
          />
        </div>
      )}

      {error && !file ? <ToolAlert>{error}</ToolAlert> : null}
    </ToolShell>
  );
}

function URL_from(blob: Blob): string {
  return globalThis.URL.createObjectURL(blob);
}
