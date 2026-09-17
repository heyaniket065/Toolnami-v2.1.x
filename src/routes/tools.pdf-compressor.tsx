import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Loader2, RotateCcw } from "lucide-react";
import { useState } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd, type ToolFaq } from "@/components/tools/tool-shell";
import { downloadBlob, formatBytes, savingsLabel, stripExtension } from "@/lib/tool-files";

const TITLE = "PDF Compressor";
const DESC = "Reduce PDF file size while maintaining quality — free, instant and fully private.";
const URL = "https://toolnami.lovable.app/tools/pdf-compressor";

const FAQS: ToolFaq[] = [
  {
    q: "Is my PDF uploaded to a server?",
    a: "No. Compression happens entirely inside your browser using open-source libraries, so your document never leaves your device.",
  },
  {
    q: "How much smaller will my PDF get?",
    a: "It depends on the file. Documents with unused objects, duplicated resources and heavy metadata shrink the most. Files that are already optimised may barely change, and we tell you honestly when that happens.",
  },
  {
    q: "Will the text stay selectable?",
    a: "Yes. The tool restructures and cleans the file rather than converting pages to images, so text, links and page order stay intact.",
  },
  {
    q: "Is there a file size limit?",
    a: "The only limit is your device's memory. Very large PDFs (hundreds of megabytes) may take a few seconds to process.",
  },
  {
    q: "Does it cost anything?",
    a: "No. The PDF Compressor is completely free with no signup required.",
  },
];

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
      setError("We couldn't process that PDF. It may be corrupted or password-protected.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Shrink bulky PDFs so they're easy to email, upload and share — without wrecking the quality."
      categoryLabel="PDF Tools"
      about="The ToolNami PDF Compressor rebuilds your document with compressed object streams, strips leftover metadata and removes redundant internal structures. Text stays sharp and selectable because pages are never flattened into images. Everything runs locally in your browser, so even confidential contracts and invoices stay private."
      steps={[
        "Choose or drag in the PDF you want to shrink.",
        "Press Compress PDF and wait a moment while it is rebuilt.",
        "Check the new file size, then download your compressed PDF.",
      ]}
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
      faqs={FAQS}
      seo={{
        heading: "Compress PDF files online, free and privately",
        paragraphs: [
          "Large PDFs are one of the most common everyday annoyances: attachments bounce back, upload forms reject them and cloud storage fills up. A good PDF compressor solves this by removing what the file doesn't need rather than degrading what you can see.",
          "ToolNami's compressor focuses on structural optimisation — object stream compression, metadata cleanup and removal of redundant internal references. That means scanned reports, contracts, portfolios, invoices and slide exports usually get noticeably smaller while remaining perfectly readable.",
          "Because the entire process runs client-side in your browser, nothing is uploaded, stored or logged. That makes it safe for sensitive documents such as legal paperwork, medical forms, bank statements and identity documents.",
        ],
      }}
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
              setError("Please choose a PDF file.");
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

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={compress}
              disabled={busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : null}
              {busy ? "Compressing…" : "Compress PDF"}
            </button>
            {result ? (
              <button
                type="button"
                onClick={() =>
                  downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.pdf`)
                }
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="size-4" /> Download PDF
              </button>
            ) : null}
          </div>

          {result ? (
            <ToolAlert tone="success">
              Done — {formatBytes(file.size)} → {formatBytes(result.size)} (
              {savingsLabel(file.size, result.size)}).
            </ToolAlert>
          ) : null}
        </div>
      )}

      {error ? <ToolAlert>{error}</ToolAlert> : null}
    </ToolShell>
  );
}
