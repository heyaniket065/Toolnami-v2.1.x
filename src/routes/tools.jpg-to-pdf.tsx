import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, Download, ImageIcon, Loader2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import { FileDrop, ToolAlert } from "@/components/tools/file-drop";
import { ToolShell, toolJsonLd, type ToolFaq } from "@/components/tools/tool-shell";
import { downloadBlob, formatBytes } from "@/lib/tool-files";

const TITLE = "JPG to PDF";
const DESC = "Convert JPG images into PDF documents — free, instant and fully private.";
const URL = "https://toolnami.lovable.app/tools/jpg-to-pdf";

const FAQS: ToolFaq[] = [
  {
    q: "Can I combine several photos into one PDF?",
    a: "Yes. Add as many JPG or PNG images as you like and reorder them; each becomes one page.",
  },
  {
    q: "Does it change my image quality?",
    a: "No. Images are embedded at their original resolution, so the PDF looks exactly like the source photos.",
  },
  {
    q: "What page size is used?",
    a: "Each page matches the aspect ratio of its image, so nothing is cropped or stretched.",
  },
  {
    q: "Are my photos uploaded?",
    a: "No. The PDF is built inside your browser and never sent to a server.",
  },
  { q: "Does it work with PNG too?", a: "Yes, PNG images are supported alongside JPG and JPEG." },
];

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

  const add = (incoming: File[]) => {
    const images = incoming.filter((f) => /image\/(jpeg|jpg|png)/.test(f.type));
    if (images.length === 0) {
      setError("Please choose JPG, JPEG or PNG images.");
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
      setError("We couldn't convert those images. Please try different files.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      title={TITLE}
      tagline="Turn photos, scans and screenshots into a clean, shareable PDF document."
      categoryLabel="Converters"
      about="ToolNami's JPG to PDF converter embeds each image at full resolution on its own page, sized to match the photo so nothing is cropped or padded awkwardly. Add several images, arrange the order, and download a single PDF — all without uploading anything."
      steps={[
        "Add one or more JPG, JPEG or PNG images.",
        "Arrange the pages into the order you want.",
        "Press Convert to PDF and download your document.",
      ]}
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
      faqs={FAQS}
      seo={{
        heading: "Convert JPG to PDF online, free and secure",
        paragraphs: [
          "Plenty of official processes — visa applications, university submissions, insurance claims, expense reports — accept PDF only. But the documents you have are usually photos taken on a phone.",
          "This converter closes that gap. It places each image on its own correctly proportioned page and produces a single PDF you can attach anywhere, with the original resolution preserved so text on scans stays readable.",
          "Everything happens locally in your browser using the open-source pdf-lib library, so identity documents, receipts and personal photos are never uploaded or stored.",
        ],
      }}
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

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={convert}
                disabled={busy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
              >
                {busy ? <Loader2 className="size-4 animate-spin" /> : null}
                {busy ? "Converting…" : "Convert to PDF"}
              </button>
              {pdf ? (
                <button
                  type="button"
                  onClick={() => downloadBlob(pdf, "toolnami-images.pdf")}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Download className="size-4" /> Download PDF
                </button>
              ) : null}
            </div>

            {pdf ? (
              <ToolAlert tone="success">
                PDF ready — {files.length} page{files.length === 1 ? "" : "s"},{" "}
                {formatBytes(pdf.size)}.
              </ToolAlert>
            ) : null}
          </>
        )}

        {error ? <ToolAlert>{error}</ToolAlert> : null}
      </div>
    </ToolShell>
  );
}
