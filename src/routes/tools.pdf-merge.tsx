import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, Download, FileText, Loader2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd, type ToolFaq } from "@/components/tools/tool-shell";
import { downloadBlob, formatBytes } from "@/lib/tool-files";

const TITLE = "PDF Merge";
const DESC = "Combine multiple PDF files into a single document — free, instant and private.";
const URL = "https://toolnami.lovable.app/tools/pdf-merge";

const FAQS: ToolFaq[] = [
  {
    q: "How many PDFs can I merge at once?",
    a: "As many as your device's memory allows. Most people merge a handful of files, but dozens work fine.",
  },
  {
    q: "Can I change the order of the files?",
    a: "Yes. Use the up and down arrows next to each file to arrange them before merging.",
  },
  {
    q: "Are my files uploaded anywhere?",
    a: "No. The merge happens locally in your browser, so your documents never leave your device.",
  },
  {
    q: "Will bookmarks and form fields survive?",
    a: "Page content, text and images are preserved. Some interactive extras such as bookmarks and form fields may be dropped during the merge.",
  },
  { q: "Is it really free?", a: "Yes — unlimited merges, no account, no watermark." },
];

export const Route = createFileRoute("/tools/pdf-merge")({
  head: () => ({
    meta: [
      { title: "PDF Merge — Combine PDF Files Online Free | ToolNami" },
      { name: "description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Free PDF Merge — ToolNami" },
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
  component: PdfMergePage,
});

function PdfMergePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [merged, setMerged] = useState<Blob | null>(null);

  const add = (incoming: File[]) => {
    const pdfs = incoming.filter(
      (f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"),
    );
    if (pdfs.length === 0) {
      setError("Please choose PDF files only.");
      return;
    }
    setError(null);
    setMerged(null);
    setFiles((prev) => [...prev, ...pdfs]);
  };

  const move = (index: number, dir: -1 | 1) => {
    setMerged(null);
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

  const merge = async () => {
    if (files.length < 2) {
      setError("Add at least two PDFs to merge.");
      return;
    }
    setBusy(true);
    setError(null);
    setMerged(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const out = await PDFDocument.create();
      for (const file of files) {
        const src = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach((p) => out.addPage(p));
      }
      const bytes = await out.save({ useObjectStreams: true });
      setMerged(new Blob([bytes as unknown as BlobPart], { type: "application/pdf" }));
    } catch {
      setError(
        "We couldn't merge those files. One of them may be corrupted or password-protected.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Bring several PDFs together into one tidy document, in exactly the order you want."
      categoryLabel="PDF Tools"
      about="ToolNami's PDF Merge copies every page from each file you add into a single new document, keeping page size, text and images intact. You control the order before merging, and the whole operation happens in your browser so nothing is uploaded."
      steps={[
        "Add two or more PDF files.",
        "Reorder them with the arrows until the sequence is right.",
        "Press Merge PDFs, then download the combined document.",
      ]}
      benefits={[
        {
          title: "Full order control",
          body: "Rearrange files before merging so chapters land in sequence.",
        },
        {
          title: "Private by design",
          body: "Files are merged locally and never uploaded to a server.",
        },
        {
          title: "No page limits",
          body: "Combine short forms or long reports without restrictions.",
        },
        {
          title: "Keeps quality",
          body: "Pages are copied, not re-rendered, so nothing gets blurry.",
        },
        { title: "Free forever", body: "No account, no watermark, no daily cap." },
        { title: "Mobile ready", body: "Works just as well on a phone as on a laptop." },
      ]}
      faqs={FAQS}
      seo={{
        heading: "Merge PDF files online without uploading them",
        paragraphs: [
          "Combining PDFs is one of those tasks that shows up constantly: signed contract pages, scanned receipts, coursework submissions, tender documents and multi-part reports all need to arrive as one file.",
          "ToolNami's merge tool copies pages between documents using the open-source pdf-lib library, preserving each page's original dimensions and content. You decide the order, so a cover letter can lead and appendices can follow.",
          "Because the merge runs entirely in your browser, sensitive paperwork stays on your device. There is nothing to delete afterwards and no upload history to worry about.",
        ],
      }}
    >
      <div className="space-y-4">
        {files.length === 0 ? (
          <FileDrop
            accept="application/pdf,.pdf"
            multiple
            label="Drop your PDFs here"
            hint="Add two or more PDF files to combine them."
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
                    <FileText className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{formatBytes(f.size)}</p>
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
                        setMerged(null);
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

            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
              <Plus className="size-4" /> Add more PDFs
              <input
                type="file"
                accept="application/pdf,.pdf"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) add(Array.from(e.target.files));
                  e.target.value = "";
                }}
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={merge}
                disabled={busy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
              >
                {busy ? <Loader2 className="size-4 animate-spin" /> : null}
                {busy ? "Merging…" : `Merge ${files.length} PDFs`}
              </button>
              {merged ? (
                <button
                  type="button"
                  onClick={() => downloadBlob(merged, "toolnami-merged.pdf")}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Download className="size-4" /> Download merged PDF
                </button>
              ) : null}
            </div>

            {merged ? (
              <ToolAlert tone="success">
                Merged successfully — {formatBytes(merged.size)} ready to download.
              </ToolAlert>
            ) : null}
          </>
        )}

        {error ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
