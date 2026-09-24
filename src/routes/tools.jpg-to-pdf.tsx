import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { ToolProcessingState } from "@/components/tools/tool-processing-state";
import { downloadBlob, formatBytes } from "@/lib/tool-files";
import { findLiveTool, getDynamicUses } from "@/lib/phase1-tools";

const TOOL_DATA = findLiveTool("jpg-to-pdf");
const TITLE = TOOL_DATA.title;
const DESC = TOOL_DATA.description;
const URL = "https://toolnami.lovable.app/tools/jpg-to-pdf";
const FAQS = TOOL_DATA.faqs;

export const Route = createFileRoute("/tools/jpg-to-pdf")({
  head: () => ({
    meta: [
      { title: "JPG to PDF Converter — Free Online Tool | ToolNami" },
      { name: "description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Free JPG to PDF Converter — ToolNami" },
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
  component: JpgToPdfPage,
});

function JpgToPdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdf, setPdf] = useState<Blob | null>(null);

  const dynamicUses = useMemo(() => getDynamicUses(TOOL_DATA.baseUses), []);

  const add = (incoming: File[]) => {
    const images = incoming.filter((f) => /image\/(jpeg|jpg|png)/.test(f.type));
    if (images.length === 0) {
      setError("Please choose JPG, JPEG or PNG image files.");
      return;
    }
    setError(null);
    setPdf(null);
    setFiles((prev) => [...prev, ...images]);
  };

  const move = (index: number, dir: -1 | 1) => {
    setPdf(null);
    setFiles((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      const a = next[index] as File;
      const b = next[target] as File;
      next[index] = b;
      next[target] = a;
      return next;
    });
  };

  const convert = async () => {
    if (files.length === 0) return;
    setBusy(true);
    setError(null);
    setPdf(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const doc = await PDFDocument.create();
      for (const file of files) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const image =
          file.type === "image/png" ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
        const page = doc.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const out = await doc.save({ useObjectStreams: true });
      setPdf(new Blob([out as unknown as BlobPart], { type: "application/pdf" }));
    } catch {
      setError(
        "We couldn't convert those images. Please ensure files are valid image formats and try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  const resetAll = () => {
    setFiles([]);
    setPdf(null);
    setError(null);
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Turn photos, scans and screenshots into a clean, shareable PDF document."
      categoryLabel={TOOL_DATA.categoryLabel}
      thumbnail={TOOL_DATA.image}
      badge={TOOL_DATA.badge}
      dynamicUses={dynamicUses}
      relatedSlugs={TOOL_DATA.relatedSlugs}
      about="ToolNami's JPG to PDF converter embeds each image at full resolution on its own page, sized to match the photo so nothing is cropped or padded awkwardly. Add several images, arrange the order, and download a single PDF — all without uploading anything."
      steps={TOOL_DATA.howToSteps}
      benefits={[
        { title: "Original quality", body: "Images are embedded as-is, with no recompression." },
        { title: "Multi-page output", body: "Combine a whole set of scans into one document." },
        { title: "Perfect page fit", body: "Each page matches its image ratio — no stretching." },
        {
          title: "Private conversion",
          body: "Runs in your browser; photos never leave your device.",
        },
        { title: "Great for submissions", body: "Ideal when a form only accepts PDF uploads." },
        { title: "Free and unlimited", body: "No signup, no watermark, no caps." },
      ]}
      faqs={TOOL_DATA.faqs}
      seo={TOOL_DATA.seoArticle}
    >
      <div className="space-y-4">
        {files.length === 0 ? (
          <FileDrop
            accept="image/jpeg,image/jpg,image/png"
            multiple
            label="Drop your images here"
            hint="JPG, JPEG or PNG. Each image becomes one PDF page."
            onFiles={add}
          />
        ) : (
          <>
            <ul className="space-y-2">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <ImageIcon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{f.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Page {i + 1} · {formatBytes(f.size)}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      aria-label={`Move ${f.name} up`}
                      onClick={() => move(i, -1)}
                      disabled={i === 0}
                      className="inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-primary disabled:opacity-40"
                    >
                      <ArrowUp className="size-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Move ${f.name} down`}
                      onClick={() => move(i, 1)}
                      disabled={i === files.length - 1}
                      className="inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-primary disabled:opacity-40"
                    >
                      <ArrowDown className="size-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Remove ${f.name}`}
                      onClick={() => {
                        setPdf(null);
                        setFiles((prev) => prev.filter((_, idx) => idx !== i));
                      }}
                      className="inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Plus className="size-4" /> Add more images
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) add(Array.from(e.target.files));
                    e.target.value = "";
                  }}
                />
              </label>

              <button
                type="button"
                onClick={resetAll}
                className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all images
              </button>
            </div>

            {!busy && !pdf && !error ? (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={convert}
                  disabled={files.length === 0}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                >
                  Convert {files.length} Image{files.length === 1 ? "" : "s"} to PDF
                </button>
              </div>
            ) : null}

            {/* Processing, Success, and Error States */}
            <ToolProcessingState
              isProcessing={busy}
              processingMessage="Embedding images at original quality into PDF pages…"
              isSuccess={!!pdf}
              successTitle="PDF Created Successfully!"
              successSubtitle={
                pdf
                  ? `Generated clean ${files.length}-page PDF document (${formatBytes(pdf.size)}).`
                  : undefined
              }
              downloadLabel="Download Generated PDF"
              onDownload={() => {
                if (pdf) {
                  downloadBlob(pdf, "toolnami-images.pdf");
                }
              }}
              error={error}
              onRetry={convert}
              onReset={resetAll}
            />
          </>
        )}

        {error && files.length === 0 ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
