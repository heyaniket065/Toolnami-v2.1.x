import { createFileRoute } from "@tanstack/react-router";
import { Download, ImageIcon, Loader2, RotateCcw } from "lucide-react";
import { useState } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd, type ToolFaq } from "@/components/tools/tool-shell";
import { downloadBlob, formatBytes, savingsLabel, stripExtension } from "@/lib/tool-files";

const TITLE = "Image Compressor";
const DESC = "Compress images without noticeable quality loss — free, instant and private.";
const URL = "https://toolnami.lovable.app/tools/image-compressor";

const FAQS: ToolFaq[] = [
  {
    q: "Which formats are supported?",
    a: "JPG, JPEG, PNG and WebP. The compressed result is returned in a web-friendly format at high visual quality.",
  },
  {
    q: "Will my photo look worse?",
    a: "Compression is tuned so differences are hard to spot at normal viewing size. You can lower the target size further if you need a smaller file.",
  },
  {
    q: "Are my images uploaded?",
    a: "Never. Compression uses your browser's own canvas engine, so images stay on your device.",
  },
  {
    q: "Can I compress several images at once?",
    a: "This version handles one image at a time so you can check each result. Batch compression is on the roadmap.",
  },
  {
    q: "Does it strip EXIF data?",
    a: "Yes — location and camera metadata are dropped during re-encoding, which is usually a privacy win.",
  },
];

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
  { label: "Light", mb: 1.5 },
  { label: "Balanced", mb: 0.6 },
  { label: "Maximum", mb: 0.2 },
];

function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

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
      setError("We couldn't compress that image. Please try a different file.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Make photos and graphics dramatically lighter while keeping them looking sharp."
      categoryLabel="Image Tools"
      about="The ToolNami Image Compressor re-encodes your picture at an optimised quality level and, when needed, gently reduces oversized dimensions. It uses your browser's own image pipeline in a background worker, so large photos compress quickly without freezing the page and without ever being uploaded."
      steps={[
        "Choose or drag in a JPG, PNG or WebP image.",
        "Pick how aggressively you want to compress it.",
        "Press Compress Image, review the preview, then download.",
      ]}
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
      faqs={FAQS}
      seo={{
        heading: "Compress images online for free, privately",
        paragraphs: [
          "Oversized images are the single biggest cause of slow web pages and rejected uploads. A modern phone photo can easily be 6–10 MB, when 300 KB would look identical on screen.",
          "ToolNami's compressor re-encodes your image with an optimised quality curve and caps very large dimensions, so you get a file that is a fraction of the original size but still looks clean on retina displays.",
          "It's ideal for product photos, blog images, portfolio galleries, CV attachments and marketplace listings. Everything runs client-side, so your personal photos are never sent to a server or stored anywhere.",
        ],
      }}
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
              setError("Please choose an image file.");
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
              Compression level
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
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
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

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={compress}
              disabled={busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : null}
              {busy ? "Compressing…" : "Compress Image"}
            </button>
            {result ? (
              <button
                type="button"
                onClick={() =>
                  downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.jpg`)
                }
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="size-4" /> Download image
              </button>
            ) : null}
          </div>

          {result ? (
            <>
              <img
                src={result.url}
                alt="Compressed preview"
                loading="lazy"
                className="max-h-72 w-full rounded-2xl border border-border object-contain"
              />
              <ToolAlert tone="success">
                Done — {formatBytes(file.size)} → {formatBytes(result.blob.size)} (
                {savingsLabel(file.size, result.blob.size)}).
              </ToolAlert>
            </>
          ) : null}
        </div>
      )}

      {error ? <ToolAlert>{error}</ToolAlert> : null}
    </ToolShell>
  );
}

function URL_from(blob: Blob): string {
  return globalThis.URL.createObjectURL(blob);
}
