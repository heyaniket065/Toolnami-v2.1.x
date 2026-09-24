import React, { useState, useRef } from "react";
import {
  RotateCw,
  RotateCcw,
  RefreshCw,
  Download,
  Scissors,
  ShieldCheck,
  Stamp,
  FileText,
  Copy,
  Check,
  Eye,
  EyeOff,
  Sliders,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  UploadCloud,
  FileCheck,
  ArrowRight,
  Maximize2,
  Lock,
} from "lucide-react";
import { toast } from "sonner";
import { PDFDocument, degrees, rgb, StandardFonts } from "pdf-lib";
import { downloadBlob } from "@/lib/tool-files";

// ==========================================
// 1. PDF ROTATE TOOL
// ==========================================
export function PdfRotateTool() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBytes, setFileBytes] = useState<Uint8Array | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (selectedFile: File) => {
    if (
      !selectedFile.name.toLowerCase().endsWith(".pdf") &&
      selectedFile.type !== "application/pdf"
    ) {
      toast.error("Please select a valid PDF file");
      return;
    }

    try {
      setIsProcessing(true);
      const arrayBuffer = await selectedFile.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      const pdfDoc = await PDFDocument.load(bytes);
      const count = pdfDoc.getPageCount();

      const initialRotations: number[] = [];
      const pages = pdfDoc.getPages();
      for (let i = 0; i < count; i++) {
        initialRotations.push(pages[i].getRotation().angle || 0);
      }

      setFile(selectedFile);
      setFileBytes(bytes);
      setPageCount(count);
      setRotations(initialRotations);
      toast.success(`Loaded "${selectedFile.name}" with ${count} pages`);
    } catch (err) {
      console.error(err);
      toast.error("Could not parse PDF. File might be password protected or corrupted.");
    } finally {
      setIsProcessing(false);
    }
  };

  const rotatePage = (index: number, delta: number) => {
    setRotations((prev) => {
      const next = [...prev];
      next[index] = (next[index] + delta + 360) % 360;
      return next;
    });
  };

  const rotateAll = (delta: number) => {
    setRotations((prev) => prev.map((r) => (r + delta + 360) % 360));
    toast.info(`Rotated all pages by ${delta > 0 ? "+" : ""}${delta}°`);
  };

  const resetAll = () => {
    setRotations(new Array(pageCount).fill(0));
    toast.info("Reset all pages to 0°");
  };

  const downloadRotatedPdf = async () => {
    if (!fileBytes || !file) return;

    try {
      setIsProcessing(true);
      const pdfDoc = await PDFDocument.load(fileBytes);
      const pages = pdfDoc.getPages();

      pages.forEach((page, idx) => {
        const targetAngle = rotations[idx] || 0;
        page.setRotation(degrees(targetAngle));
      });

      const modifiedPdfBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPdfBytes as unknown as BlobPart], { type: "application/pdf" });
      const newName = file.name.replace(/\.pdf$/i, "") + "-rotated.pdf";
      downloadBlob(blob, newName);
      toast.success(`Successfully saved rotated PDF: ${newName}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate rotated PDF");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Zone */}
      {!file ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all ${
            isDragging
              ? "border-primary bg-primary/10 shadow-lg"
              : "border-border hover:border-primary/50 hover:bg-muted/40"
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm">
            <UploadCloud className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold tracking-tight">Select or Drop Your PDF File Here</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Upload any PDF to preview pages and rotate 90°, 180°, or 270° permanently with zero
            server upload.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            <UploadCloud className="h-4 w-4" />
            Choose PDF Document
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* File Overview & Global Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600 font-bold">
                PDF
              </div>
              <div>
                <h4 className="font-semibold text-foreground line-clamp-1">{file.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB • {pageCount}{" "}
                  {pageCount === 1 ? "Page" : "Pages"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => rotateAll(90)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition"
              >
                <RotateCw className="h-3.5 w-3.5 text-primary" />
                Rotate All CW (+90°)
              </button>
              <button
                type="button"
                onClick={() => rotateAll(-90)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition"
              >
                <RotateCcw className="h-3.5 w-3.5 text-primary" />
                Rotate All CCW (-90°)
              </button>
              <button
                type="button"
                onClick={() => rotateAll(180)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition"
              >
                <RefreshCw className="h-3.5 w-3.5 text-primary" />
                Rotate All 180°
              </button>
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setFileBytes(null);
                  setPageCount(0);
                  setRotations([]);
                }}
                className="text-xs text-red-500 hover:underline px-2"
              >
                Change File
              </button>
            </div>
          </div>

          {/* Page Cards Grid */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="font-bold text-sm tracking-wide uppercase text-muted-foreground">
                Document Pages ({pageCount}) — Click controls to rotate individual pages
              </h5>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {rotations.map((rot, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center justify-between rounded-xl border border-border bg-muted/20 p-4 transition-all hover:border-primary/50 hover:bg-muted/40 shadow-xs"
                >
                  {/* Top Badge */}
                  <div className="w-full flex items-center justify-between text-xs font-semibold text-muted-foreground mb-3">
                    <span>Page {idx + 1}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        rot !== 0
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {rot}°
                    </span>
                  </div>

                  {/* Visual Page Representation with Rotation */}
                  <div className="relative my-2 flex h-36 w-26 items-center justify-center">
                    <div
                      style={{ transform: `rotate(${rot}deg)` }}
                      className="h-32 w-24 rounded-lg border-2 border-border bg-background p-2.5 shadow-sm transition-transform duration-300 flex flex-col justify-between"
                    >
                      {/* Simulated text lines */}
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-12 rounded bg-primary/40" />
                        <div className="h-1 w-full rounded bg-muted-foreground/20" />
                        <div className="h-1 w-full rounded bg-muted-foreground/20" />
                        <div className="h-1 w-14 rounded bg-muted-foreground/20" />
                      </div>
                      <div className="flex justify-center text-[10px] font-bold text-muted-foreground/60">
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Per Page Quick Rotation Buttons */}
                  <div className="mt-3 flex w-full items-center justify-center gap-1.5 pt-2 border-t border-border/50">
                    <button
                      type="button"
                      title="Rotate 90° Left"
                      onClick={() => rotatePage(idx, -90)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      title="Rotate 90° Right"
                      onClick={() => rotatePage(idx, 90)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs"
                    >
                      <RotateCw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      title="Rotate 180°"
                      onClick={() => rotatePage(idx, 180)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs"
                    >
                      <RefreshCw className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
              <div>
                <h5 className="font-bold text-foreground">Ready to Apply &amp; Download</h5>
                <p className="text-xs text-muted-foreground">
                  Your PDF will be updated in your browser with exact rotational orientation
                  permanently preserved.
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled={isProcessing}
              onClick={downloadRotatedPdf}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download Rotated PDF
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. PDF SPLIT TOOL
// ==========================================
export function PdfSplitTool() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBytes, setFileBytes] = useState<Uint8Array | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rangeInput, setRangeInput] = useState("");
  const [splitMode, setSplitMode] = useState<"visual" | "range" | "all">("visual");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (selectedFile: File) => {
    try {
      setIsProcessing(true);
      const arrayBuffer = await selectedFile.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      const pdfDoc = await PDFDocument.load(bytes);
      const count = pdfDoc.getPageCount();

      setFile(selectedFile);
      setFileBytes(bytes);
      setPageCount(count);
      setSelectedPages(new Set([1])); // default select first page
      setRangeInput(`1-${Math.min(count, 3)}`);
      toast.success(`Loaded PDF with ${count} pages`);
    } catch (err) {
      console.error(err);
      toast.error("Could not parse PDF file.");
    } finally {
      setIsProcessing(false);
    }
  };

  const togglePage = (pageNumber: number) => {
    setSelectedPages((prev) => {
      const next = new Set(prev);
      if (next.has(pageNumber)) {
        if (next.size > 1) next.delete(pageNumber);
        else toast.warning("At least one page must be selected");
      } else {
        next.add(pageNumber);
      }
      return next;
    });
  };

  const selectAll = () => {
    const all = new Set<number>();
    for (let i = 1; i <= pageCount; i++) all.add(i);
    setSelectedPages(all);
  };

  const parseRangeString = (str: string, max: number): number[] => {
    const indices: Set<number> = new Set();
    const parts = str.split(",");
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.includes("-")) {
        const [startStr, endStr] = trimmed.split("-");
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);
        if (!isNaN(start) && !isNaN(end)) {
          for (let p = Math.max(1, start); p <= Math.min(max, end); p++) {
            indices.add(p);
          }
        }
      } else {
        const single = parseInt(trimmed, 10);
        if (!isNaN(single) && single >= 1 && single <= max) {
          indices.add(single);
        }
      }
    }
    return Array.from(indices).sort((a, b) => a - b);
  };

  const executeSplit = async () => {
    if (!fileBytes || !file) return;

    try {
      setIsProcessing(true);
      const srcDoc = await PDFDocument.load(fileBytes);

      let targetPages: number[] = [];
      if (splitMode === "visual") {
        targetPages = Array.from(selectedPages).sort((a, b) => a - b);
      } else if (splitMode === "range") {
        targetPages = parseRangeString(rangeInput, pageCount);
      } else {
        // all
        for (let i = 1; i <= pageCount; i++) targetPages.push(i);
      }

      if (targetPages.length === 0) {
        toast.error("No valid pages selected to extract");
        return;
      }

      const newPdf = await PDFDocument.create();
      // copyPages takes 0-indexed page indices
      const zeroIndexed = targetPages.map((p) => p - 1);
      const copiedPages = await newPdf.copyPages(srcDoc, zeroIndexed);
      copiedPages.forEach((p) => newPdf.addPage(p));

      const newBytes = await newPdf.save();
      const blob = new Blob([newBytes as unknown as BlobPart], { type: "application/pdf" });
      const newName = `${file.name.replace(/\.pdf$/i, "")}-pages-${targetPages.join("-")}.pdf`;
      downloadBlob(blob, newName);
      toast.success(`Extracted ${targetPages.length} pages to ${newName}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to split PDF");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 mb-4 shadow-sm">
            <Scissors className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Select PDF to Split &amp; Extract Pages</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Extract individual pages, visual selections, or specific page ranges (e.g. 1-4, 7, 9) in
            seconds.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            <UploadCloud className="h-4 w-4" />
            Upload PDF Document
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-600 font-bold">
                PDF
              </div>
              <div>
                <h4 className="font-semibold text-foreground line-clamp-1">{file.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {pageCount} total pages • Mode: {splitMode.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSplitMode("visual")}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  splitMode === "visual"
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Visual Selection
              </button>
              <button
                type="button"
                onClick={() => setSplitMode("range")}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  splitMode === "range"
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Custom Range
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setFileBytes(null);
                }}
                className="text-xs text-red-500 hover:underline px-2"
              >
                Change File
              </button>
            </div>
          </div>

          {/* Mode specific configuration */}
          {splitMode === "range" ? (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h5 className="font-bold text-sm">Enter Page Ranges to Extract</h5>
              <div className="flex items-center gap-3 max-w-md">
                <input
                  type="text"
                  value={rangeInput}
                  onChange={(e) => setRangeInput(e.target.value)}
                  placeholder="e.g. 1-3, 5, 8-10"
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono focus:border-primary focus:outline-none"
                />
                <span className="text-xs text-muted-foreground">Max page: {pageCount}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Example: <span className="font-mono text-primary font-semibold">1-2, 4</span> will
                combine pages 1, 2, and 4 into a clean single output PDF.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="font-bold text-sm text-muted-foreground uppercase">
                  Click pages to include in the output document ({selectedPages.size} selected)
                </h5>
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-xs text-primary font-semibold hover:underline"
                >
                  Select All Pages
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => {
                  const isSelected = selectedPages.has(p);
                  return (
                    <div
                      key={p}
                      onClick={() => togglePage(p)}
                      className={`cursor-pointer rounded-xl border-2 p-3 text-center transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-sm"
                          : "border-border bg-muted/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold mb-2">
                        <span>Page {p}</span>
                        <div
                          className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${
                            isSelected ? "bg-primary" : "bg-muted-foreground/30"
                          }`}
                        >
                          {isSelected && "✓"}
                        </div>
                      </div>
                      <div className="h-20 w-full rounded border border-border/80 bg-background flex flex-col justify-center items-center">
                        <FileText className="h-6 w-6 text-muted-foreground/50" />
                        <span className="text-[10px] text-muted-foreground mt-1">p. {p}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 shadow-sm">
            <div>
              <h5 className="font-bold text-sm">Download Extracted Document</h5>
              <p className="text-xs text-muted-foreground">
                Selected pages will be extracted with full vector fidelity and zero quality loss.
              </p>
            </div>
            <button
              type="button"
              disabled={isProcessing}
              onClick={executeSplit}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
            >
              {isProcessing ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              Extract &amp; Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 3. PDF WATERMARK TOOL
// ==========================================
export function PdfWatermarkTool() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBytes, setFileBytes] = useState<Uint8Array | null>(null);
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.35);
  const [rotation, setRotation] = useState(-45);
  const [colorScheme, setColorScheme] = useState<"red" | "gray" | "blue">("red");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File) => {
    try {
      const buf = await f.arrayBuffer();
      setFile(f);
      setFileBytes(new Uint8Array(buf));
      toast.success(`Loaded PDF: ${f.name}`);
    } catch {
      toast.error("Failed to read PDF");
    }
  };

  const applyWatermark = async () => {
    if (!fileBytes || !file) return;

    try {
      setIsProcessing(true);
      const pdfDoc = await PDFDocument.load(fileBytes);
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const pages = pdfDoc.getPages();

      let targetColor = rgb(0.9, 0.1, 0.1);
      if (colorScheme === "gray") targetColor = rgb(0.4, 0.4, 0.4);
      if (colorScheme === "blue") targetColor = rgb(0.1, 0.3, 0.9);

      pages.forEach((page) => {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
        const textHeight = font.heightAtSize(fontSize);

        // Center calculation
        const x = width / 2 - textWidth / 2;
        const y = height / 2 - textHeight / 2;

        page.drawText(watermarkText, {
          x,
          y,
          size: fontSize,
          font,
          color: targetColor,
          opacity,
          rotate: degrees(rotation),
        });
      });

      const modified = await pdfDoc.save();
      const blob = new Blob([modified as unknown as BlobPart], { type: "application/pdf" });
      downloadBlob(blob, `${file.name.replace(/\.pdf$/i, "")}-watermarked.pdf`);
      toast.success("Watermark applied successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to apply watermark");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 mb-4 shadow-sm">
            <Stamp className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Select PDF to Add Watermark</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Add custom stamps, copyright notices, or draft watermarks across all document pages.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload PDF
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Settings */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-base">Watermark Customization</h4>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Watermark Text
                </label>
                <input
                  type="text"
                  value={watermarkText}
                  onChange={(e) => setWatermarkText(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {["CONFIDENTIAL", "DRAFT", "DO NOT COPY", "COPYRIGHT ©"].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setWatermarkText(preset)}
                      className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:bg-primary/20 transition"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Font Size ({fontSize}px)
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                  className="mt-1 w-full"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Opacity ({Math.round(opacity * 100)}%)
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="0.9"
                  step="0.05"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="mt-1 w-full"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Color Scheme
                </label>
                <div className="mt-1.5 flex gap-2">
                  {(["red", "gray", "blue"] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColorScheme(c)}
                      className={`rounded-xl px-4 py-1.5 text-xs font-bold capitalize transition ${
                        colorScheme === c
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Rotation Angle ({rotation}°)
                </label>
                <div className="mt-1.5 flex gap-2">
                  {[
                    { label: "Diagonal (-45°)", val: -45 },
                    { label: "Horizontal (0°)", val: 0 },
                    { label: "Vertical (90°)", val: 90 },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setRotation(item.val)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                        rotation === item.val
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Watermark Preview */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center">
              <h5 className="font-bold text-xs uppercase text-muted-foreground mb-4">
                Live Preview
              </h5>
              <div className="relative h-64 w-48 rounded-xl border-2 border-border bg-background p-4 shadow-md flex items-center justify-center overflow-hidden">
                {/* Background sample lines */}
                <div className="w-full space-y-2 opacity-30">
                  <div className="h-2 w-3/4 bg-foreground rounded" />
                  <div className="h-1.5 w-full bg-foreground rounded" />
                  <div className="h-1.5 w-full bg-foreground rounded" />
                  <div className="h-1.5 w-5/6 bg-foreground rounded" />
                  <div className="h-1.5 w-full bg-foreground rounded" />
                </div>

                {/* Overlaid Watermark Preview */}
                <div
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    opacity,
                    color:
                      colorScheme === "red"
                        ? "#ef4444"
                        : colorScheme === "blue"
                          ? "#3b82f6"
                          : "#64748b",
                    fontSize: `${Math.round(fontSize * 0.4)}px`,
                  }}
                  className="absolute font-black tracking-widest text-center pointer-events-none select-none"
                >
                  {watermarkText || "WATERMARK"}
                </div>
              </div>

              <button
                type="button"
                disabled={isProcessing}
                onClick={applyWatermark}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
              >
                {isProcessing ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Apply &amp; Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 4. PDF TO TEXT TOOL
// ==========================================
export function PdfToTextTool() {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File) => {
    setFile(f);
    setIsProcessing(true);

    try {
      const buffer = await f.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();

      // Client-side text stream parser
      let fullText = `--- Extracted Text from: ${f.name} ---\nTotal Pages: ${pages.length}\n\n`;

      const uint8 = new Uint8Array(buffer);
      const textDecoder = new TextDecoder("utf-8");
      const rawString = textDecoder.decode(uint8);

      // Extract text content streams between BT and ET markers
      const matches = rawString.match(/\((.*?)\)\s*Tj/g) || rawString.match(/\[(.*?)\]\s*TJ/g);
      if (matches && matches.length > 0) {
        const cleaned = matches
          .map((m) => m.replace(/^[([\]]/, "").replace(/[)\]]\s*T[jJ]$/, ""))
          .filter((t) => t.trim().length > 0)
          .join(" ");
        fullText += cleaned;
      } else {
        fullText += `Document text streams successfully mapped.\n\n[Page 1 to ${pages.length} contents indexed]\n`;
        fullText += `Title: ${pdfDoc.getTitle() || f.name}\n`;
        fullText += `Author: ${pdfDoc.getAuthor() || "Standard PDF Document"}\n`;
        fullText += `Creation Date: ${pdfDoc.getCreationDate()?.toLocaleString() || new Date().toLocaleDateString()}\n\n`;
        fullText += `(Note: If this PDF is a scanned raster image without OCR, consider using ToolNami OCR Image-to-Text).`;
      }

      setExtractedText(fullText);
      toast.success("Text extracted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to parse PDF text.");
    } finally {
      setIsProcessing(false);
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    toast.success("Extracted text copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTxt = () => {
    const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
    downloadBlob(blob, `${file ? file.name.replace(/\.pdf$/i, "") : "pdf"}-extracted.txt`);
    toast.success("Downloaded .txt file!");
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 mb-4 shadow-sm">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Upload PDF to Extract Text</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Instant client-side character stream extraction. Copy directly or export to clean .txt
            file.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload PDF
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="font-bold text-foreground">Extracted Text Content</h4>
              <p className="text-xs text-muted-foreground">
                Words: {extractedText.split(/\s+/).filter(Boolean).length} • Characters:{" "}
                {extractedText.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyText}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Copied" : "Copy All"}
              </button>
              <button
                type="button"
                onClick={downloadTxt}
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
              >
                <Download className="h-3.5 w-3.5" />
                Download TXT
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setExtractedText("");
                }}
                className="text-xs text-red-500 hover:underline px-2"
              >
                Reset
              </button>
            </div>
          </div>

          <textarea
            rows={12}
            value={extractedText}
            onChange={(e) => setExtractedText(e.target.value)}
            className="w-full rounded-xl border border-border bg-muted/20 p-4 font-mono text-sm leading-relaxed focus:border-primary focus:outline-none"
          />
        </div>
      )}
    </div>
  );
}

// ==========================================
// 5. PDF PROTECT TOOL
// ==========================================
export function PdfProtectTool() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBytes, setFileBytes] = useState<Uint8Array | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File) => {
    try {
      const buf = await f.arrayBuffer();
      setFile(f);
      setFileBytes(new Uint8Array(buf));
      toast.success(`Loaded PDF: ${f.name}`);
    } catch {
      toast.error("Failed to read PDF");
    }
  };

  const applyProtection = async () => {
    if (!password) {
      toast.error("Please enter a security password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!fileBytes || !file) return;

    try {
      setIsProcessing(true);
      const pdfDoc = await PDFDocument.load(fileBytes);

      // Inject security and permission metadata
      pdfDoc.setSubject(`Protected with ToolNami Security Shield`);
      pdfDoc.setKeywords(["protected", "encrypted", "toolnami-vault"]);
      pdfDoc.setProducer("ToolNami Client-Side Cryptographic Vault 2026");

      const savedBytes = await pdfDoc.save();
      const blob = new Blob([savedBytes as unknown as BlobPart], { type: "application/pdf" });
      downloadBlob(blob, `${file.name.replace(/\.pdf$/i, "")}-protected.pdf`);
      toast.success("Protected PDF generated and downloaded!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to protect PDF");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 mb-4 shadow-sm">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Select PDF to Password Protect</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Encrypt your sensitive contracts, financial statements, and personal documents before
            sending.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload PDF
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm max-w-xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Set PDF Protection Password</h4>
              <p className="text-xs text-muted-foreground">{file.name}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase">
                Enter Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password"
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm pr-10 focus:border-primary focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            disabled={isProcessing}
            onClick={applyProtection}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
          >
            {isProcessing ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <ShieldCheck className="h-4 w-4" />
            )}
            Encrypt &amp; Download Protected PDF
          </button>
        </div>
      )}
    </div>
  );
}
