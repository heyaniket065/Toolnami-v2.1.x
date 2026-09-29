import { createFileRoute } from "@tanstack/react-router";
import { FileText, RotateCcw } from "lucide-react";
import { useState, useMemo } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { ToolProcessingState } from "@/components/tools/tool-processing-state";
import { downloadBlob, formatBytes, savingsLabel, stripExtension } from "@/lib/tool-files";
import { findLiveTool, getDynamicUses } from "@/lib/phase1-tools";

const TOOL_DATA = findLiveTool("pdf-compressor");
const TITLE = TOOL_DATA.title;
const DESC = TOOL_DATA.description;
const URL = "https://toolnami.com/tools/pdf-compressor";
const FAQS = TOOL_DATA.faqs;

export const Route = createFileRoute("/tools/pdf-compressor")({
  head: () => ({
    meta: [
      { title: "PDF Compressor — Reduce PDF File Size Free | ToolNami" },
      { name: "description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Free PDF Compressor — ToolNami" },
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
  component: PdfCompressorPage,
});

function PdfCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; size: number } | null>(null);

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
      const { PDFDocument } = await import("pdf-lib");
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
      pdf.setTitle("");
      pdf.setSubject("");
      pdf.setKeywords([]);
      pdf.setProducer("ToolNami");
      pdf.setCreator("ToolNami");
      const out = await pdf.save({ useObjectStreams: true, addDefaultPage: false });
      const blob = new Blob([out as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, size: blob.size });
    } catch {
      setError(
        "We couldn't process that PDF. It may be password-protected or corrupted. Please try another file.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Shrink bulky PDFs so they're easy to email, upload and share — without wrecking the quality."
      categoryLabel={TOOL_DATA.categoryLabel}
      thumbnail={TOOL_DATA.image}
      badge={TOOL_DATA.badge}
      dynamicUses={dynamicUses}
      relatedSlugs={TOOL_DATA.relatedSlugs}
      about="The ToolNami PDF Compressor rebuilds your document with compressed object streams, strips leftover metadata and removes redundant internal structures. Text stays sharp and selectable because pages are never flattened into images. Everything runs locally in your browser, so even confidential contracts and invoices stay private."
      steps={TOOL_DATA.howToSteps}
      benefits={[
        {
          title: "Quality preserved",
          body: "Pages aren't rasterised, so text, links and vectors stay crisp.",
        },
        {
          title: "Completely private",
          body: "Your PDF is processed on your own device and never uploaded.",
        },
        {
          title: "No signup, no cost",
          body: "Unlimited compressions with no account or watermark.",
        },
        {
          title: "Email friendly",
          body: "Get under attachment limits for Gmail, Outlook and upload forms.",
        },
        {
          title: "Works everywhere",
          body: "Runs in any modern browser on desktop, tablet or phone.",
        },
        {
          title: "Instant results",
          body: "No queues or waiting rooms — compression starts immediately.",
        },
      ]}
      faqs={TOOL_DATA.faqs}
      seo={TOOL_DATA.seoArticle}
    >
      {!file ? (
        <FileDrop
          accept="application/pdf,.pdf"
          label="Drop your PDF here"
          hint="PDF files only. Processed privately in your browser."
          onFiles={(files) => {
            const f = files[0];
            if (!f) return;
            if (!f.name.toLowerCase().endsWith(".pdf") && f.type !== "application/pdf") {
              setError("Please choose a valid PDF document.");
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
              <FileText className="size-5" />
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

          {!busy && !result && !error ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={compress}
                disabled={busy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95"
              >
                Compress PDF Now
              </button>
            </div>
          ) : null}

          {/* Processing, Success, and Error States */}
          <ToolProcessingState
            isProcessing={busy}
            processingMessage="Compressing and rebuilding PDF streams…"
            isSuccess={!!result}
            successTitle="PDF Compressed Successfully!"
            successSubtitle={
              result
                ? `Reduced from ${formatBytes(file.size)} to ${formatBytes(result.size)} (${savingsLabel(file.size, result.size)} savings).`
                : undefined
            }
            downloadLabel="Download Compressed PDF"
            onDownload={() => {
              if (result && file) {
                downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.pdf`);
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
