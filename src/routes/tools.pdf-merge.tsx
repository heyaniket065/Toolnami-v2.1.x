import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, FileText, Plus, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { ToolProcessingState } from "@/components/tools/tool-processing-state";
import { downloadBlob, formatBytes } from "@/lib/tool-files";
import { findLiveTool, getDynamicUses } from "@/lib/phase1-tools";

const TOOL_DATA = findLiveTool("pdf-merge");
const TITLE = TOOL_DATA.title;
const DESC = TOOL_DATA.description;
const URL = "https://toolnami.com/tools/pdf-merge";
const FAQS = TOOL_DATA.faqs;

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

  const dynamicUses = useMemo(() => getDynamicUses(TOOL_DATA.baseUses), []);

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
      setError("Please add at least two PDF documents to merge.");
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
        "We couldn't merge those files. One of them may be password-protected or corrupted. Please verify the files.",
      );
    } finally {
      setBusy(false);
    }
  };

  const resetAll = () => {
    setFiles([]);
    setMerged(null);
    setError(null);
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Bring several PDFs together into one tidy document, in exactly the order you want."
      categoryLabel={TOOL_DATA.categoryLabel}
      thumbnail={TOOL_DATA.image}
      badge={TOOL_DATA.badge}
      dynamicUses={dynamicUses}
      relatedSlugs={TOOL_DATA.relatedSlugs}
      about="ToolNami's PDF Merge copies every page from each file you add into a single new document, keeping page size, text and images intact. You control the order before merging, and the whole operation happens in your browser so nothing is uploaded."
      steps={TOOL_DATA.howToSteps}
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
      faqs={TOOL_DATA.faqs}
      seo={TOOL_DATA.seoArticle}
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

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
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

              <button
                type="button"
                onClick={resetAll}
                className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all files
              </button>
            </div>

            {!busy && !merged && !error ? (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={merge}
                  disabled={files.length < 2}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                >
                  Merge {files.length} PDFs into One Document
                </button>
              </div>
            ) : null}

            {/* Processing, Success, and Error States */}
            <ToolProcessingState
              isProcessing={busy}
              processingMessage="Combining and sequencing all pages into single PDF…"
              isSuccess={!!merged}
              successTitle="PDFs Merged Successfully!"
              successSubtitle={
                merged
                  ? `Unified document created (${formatBytes(merged.size)}) containing all pages in selected order.`
                  : undefined
              }
              downloadLabel="Download Merged PDF"
              onDownload={() => {
                if (merged) {
                  downloadBlob(merged, "toolnami-merged.pdf");
                }
              }}
              error={error}
              onRetry={merge}
              onReset={resetAll}
            />
          </>
        )}

        {error && files.length === 0 ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
