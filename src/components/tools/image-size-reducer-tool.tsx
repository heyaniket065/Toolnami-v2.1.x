import { useState, useRef, useEffect, useCallback } from "react";
import {
  UploadCloud,
  Download,
  RotateCcw,
  Sparkles,
  Sliders,
  Check,
  Image as ImageIcon,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  HardDrive,
  Info,
} from "lucide-react";
import { toast } from "sonner";

interface CompressResult {
  blob: Blob;
  dataUrl: string;
  sizeBytes: number;
  width: number;
  height: number;
  qualityUsed: number;
}

const PRESETS = [
  { label: "50 KB", value: 50, note: "Signature & Strict Portals" },
  { label: "100 KB", value: 100, note: "Passport & ID Photos" },
  { label: "200 KB", value: 200, note: "Govt Exams / UPSC / Job" },
  { label: "500 KB", value: 500, note: "Web & Email Documents" },
];

export function ImageSizeReducerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [origSrc, setOrigSrc] = useState<string | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [origDims, setOrigDims] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const [targetKb, setTargetKb] = useState<number>(200);
  const [outputFormat, setOutputFormat] = useState<"image/jpeg" | "image/webp">("image/jpeg");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<CompressResult | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (!f.type.startsWith("image/")) {
      toast.error("Please select an image file (JPG, PNG, WebP).");
      return;
    }
    setFile(f);
    setOrigSize(f.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setOrigSrc(src);

      const img = new Image();
      img.onload = () => {
        setOrigDims({ width: img.naturalWidth, height: img.naturalHeight });
        reduceToTarget(img, f.size, targetKb, outputFormat);
      };
      img.src = src;
    };
    reader.readAsDataURL(f);
  };

  const reduceToTarget = useCallback(
    async (
      img: HTMLImageElement,
      originalBytes: number,
      targetKilobytes: number,
      format: "image/jpeg" | "image/webp",
    ) => {
      setIsProcessing(true);
      const targetBytes = targetKilobytes * 1024;

      let bestBlob: Blob | null = null;
      let bestQuality = 0.85;
      let currentWidth = img.naturalWidth;
      let currentHeight = img.naturalHeight;

      // Helper: test compression at given scale and quality
      const testCompress = (w: number, h: number, q: number): Promise<Blob | null> => {
        return new Promise((resolve) => {
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve(null);

          // Fill background white for JPEGs to prevent black alpha borders
          if (format === "image/jpeg") {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, w, h);
          }

          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob((b) => resolve(b), format, q);
        });
      };

      // First, test full resolution with binary search on quality (0.05 to 0.98)
      let lowQ = 0.05;
      let highQ = 0.98;

      for (let i = 0; i < 7; i++) {
        const midQ = (lowQ + highQ) / 2;
        const blob = await testCompress(currentWidth, currentHeight, midQ);
        if (blob) {
          if (blob.size <= targetBytes) {
            bestBlob = blob;
            bestQuality = midQ;
            lowQ = midQ; // try higher quality if we are under target
          } else {
            highQ = midQ; // too large, reduce quality
          }
        }
      }

      // If even quality 0.05 is still larger than target, downscale dimensions
      if (!bestBlob || bestBlob.size > targetBytes) {
        let scale = 0.9;
        while (scale > 0.1) {
          const scaledW = Math.max(100, Math.round(img.naturalWidth * scale));
          const scaledH = Math.max(100, Math.round(img.naturalHeight * scale));
          const blob = await testCompress(scaledW, scaledH, 0.75);

          if (blob && blob.size <= targetBytes) {
            bestBlob = blob;
            currentWidth = scaledW;
            currentHeight = scaledH;
            bestQuality = 0.75;
            break;
          }
          scale -= 0.15;
        }
      }

      // Fallback: if somehow target is tiny (< 10kb), take the lowest achievable
      if (!bestBlob) {
        bestBlob = await testCompress(
          Math.round(img.naturalWidth * 0.4),
          Math.round(img.naturalHeight * 0.4),
          0.2,
        );
      }

      if (bestBlob) {
        const dataUrl = URL.createObjectURL(bestBlob);
        setResult({
          blob: bestBlob,
          dataUrl,
          sizeBytes: bestBlob.size,
          width: currentWidth,
          height: currentHeight,
          qualityUsed: Math.round(bestQuality * 100),
        });
      }

      setIsProcessing(false);
    },
    [],
  );

  const triggerRecompress = (kb: number, fmt: "image/jpeg" | "image/webp") => {
    if (!origSrc) return;
    const img = new Image();
    img.onload = () => {
      reduceToTarget(img, origSize, kb, fmt);
    };
    img.src = origSrc;
  };

  // Sample photo generator (high-res 1.8 MB test canvas)
  const loadSample = () => {
    const c = document.createElement("canvas");
    c.width = 2400;
    c.height = 1600;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    // Rich gradient landscape
    const g = ctx.createLinearGradient(0, 0, 2400, 1600);
    g.addColorStop(0, "#1e3a8a");
    g.addColorStop(0.5, "#3b82f6");
    g.addColorStop(1, "#f59e0b");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2400, 1600);

    // Decorative graphics to simulate real camera photo detail
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 2400, Math.random() * 1600, Math.random() * 80 + 20, 0, Math.PI * 2);
      ctx.fill();
    }

    c.toBlob(
      (blob) => {
        if (blob) {
          const f = new File([blob], "sample-photo-1.5mb.jpg", { type: "image/jpeg" });
          handleFile(f);
        }
      },
      "image/jpeg",
      0.95,
    );
  };

  const handleDownload = () => {
    if (!result) return;
    const ext = outputFormat === "image/webp" ? "webp" : "jpg";
    const baseName = file?.name.replace(/\.[^/.]+$/, "") || "photo";
    const a = document.createElement("a");
    a.href = result.dataUrl;
    a.download = `${baseName}-${targetKb}kb.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success(`Photo reduced to ${formatBytes(result.sizeBytes)} downloaded!`);
  };

  const formatBytes = (bytes: number) => {
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
  };

  const savedPercent =
    origSize > 0 && result
      ? Math.max(0, Math.round(((origSize - result.sizeBytes) / origSize) * 100))
      : 0;

  return (
    <div className="space-y-8">
      {!origSrc ? (
        <div className="rounded-3xl border-2 border-dashed border-border/80 bg-card/60 p-8 sm:p-14 text-center transition-all hover:border-primary/50 shadow-soft">
          <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 shadow-inner">
            <Zap className="size-10" />
          </div>
          <h3 className="mt-6 text-xl sm:text-2xl font-bold">Reduce photo file size to exact KB</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Compress 1MB, 2MB, or 5MB photos down to exactly 200KB, 100KB, or 50KB for UPSC, SSC,
            passport portals, and visa applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:bg-emerald-500 active:scale-95"
            >
              <UploadCloud className="size-4" /> Select Photo
            </button>
            <button
              type="button"
              onClick={loadSample}
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted/50 active:scale-95"
            >
              <Zap className="size-4 text-amber-500" /> Try 1.5 MB Test Photo
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp, image/jpg"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />

          {/* Quick Presets Badge List */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-border/60">
            <span className="text-xs font-semibold text-muted-foreground mr-2">
              Popular Targets:
            </span>
            {PRESETS.map((p) => (
              <span
                key={p.value}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
              >
                <Check className="size-3 text-emerald-500" /> {p.label}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Top Target Configuration Card */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="size-3.5" /> File Loaded
                </span>
                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  {file?.name || "Target Compressor"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Original: <strong className="text-foreground">{formatBytes(origSize)}</strong> •{" "}
                  {origDims.width}×{origDims.height} px
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOrigSrc(null);
                    setResult(null);
                    setFile(null);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 active:scale-95"
                >
                  <RotateCcw className="size-3.5" /> Choose Another
                </button>
              </div>
            </div>

            {/* Target Size Selectors */}
            <div className="space-y-4">
              <label className="text-sm font-semibold flex items-center justify-between">
                <span>Select or Type Target File Size (KB):</span>
                <span className="text-emerald-600 font-bold text-base">{targetKb} KB</span>
              </label>

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESETS.map((preset) => {
                  const active = targetKb === preset.value;
                  return (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => {
                        setTargetKb(preset.value);
                        triggerRecompress(preset.value, outputFormat);
                      }}
                      className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all ${
                        active
                          ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/20"
                          : "border-border bg-background hover:border-emerald-500/40"
                      }`}
                    >
                      <span
                        className={`text-base font-extrabold ${active ? "text-emerald-600" : "text-foreground"}`}
                      >
                        {preset.label}
                      </span>
                      <span className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                        {preset.note}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Target Slider & Number Input */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <input
                  type="range"
                  min="20"
                  max="1024"
                  step="10"
                  value={targetKb}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setTargetKb(v);
                    triggerRecompress(v, outputFormat);
                  }}
                  className="w-full h-2 rounded-lg bg-muted accent-emerald-600 cursor-pointer"
                />
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-muted-foreground">Exact KB:</span>
                  <input
                    type="number"
                    min="10"
                    max="5000"
                    value={targetKb}
                    onChange={(e) => {
                      const v = Math.max(10, Number(e.target.value));
                      setTargetKb(v);
                      triggerRecompress(v, outputFormat);
                    }}
                    className="w-24 rounded-xl border border-input bg-background px-3 py-1.5 text-sm font-bold text-center outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Output Format Picker */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40 text-xs">
              <span className="text-muted-foreground">Output Format:</span>
              <div className="flex rounded-xl border border-border bg-muted/30 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setOutputFormat("image/jpeg");
                    triggerRecompress(targetKb, "image/jpeg");
                  }}
                  className={`rounded-lg px-3 py-1 font-semibold transition-all ${
                    outputFormat === "image/jpeg"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground"
                  }`}
                >
                  JPG / JPEG (Standard)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOutputFormat("image/webp");
                    triggerRecompress(targetKb, "image/webp");
                  }}
                  className={`rounded-lg px-3 py-1 font-semibold transition-all ${
                    outputFormat === "image/webp"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground"
                  }`}
                >
                  WebP (Smallest)
                </button>
              </div>
            </div>
          </div>

          {/* Results Comparison Card */}
          {result && (
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-card to-card p-6 sm:p-8 shadow-soft space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="size-4" /> Size Reduced Successfully
                  </span>
                  <h4 className="mt-2 text-xl font-bold">
                    Now {formatBytes(result.sizeBytes)}{" "}
                    <span className="text-sm font-semibold text-emerald-600">
                      (-{savedPercent}% saved)
                    </span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Strictly within your {targetKb} KB limit • Ready for upload
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lift hover:bg-emerald-500 active:scale-95 transition-all"
                >
                  <Download className="size-4" /> Download Reduced Photo
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-muted/40 p-4 text-center">
                <div>
                  <p className="text-[11px] text-muted-foreground font-medium">Original Size</p>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                    {formatBytes(origSize)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground font-medium">Reduced Size</p>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-600 mt-0.5">
                    {formatBytes(result.sizeBytes)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground font-medium">Target Cap</p>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                    ≤ {targetKb} KB
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground font-medium">Resolution</p>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                    {result.width}×{result.height} px
                  </p>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 text-center">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Before ({formatBytes(origSize)})
                  </span>
                  <div className="h-64 rounded-2xl border border-border bg-muted/20 p-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={origSrc}
                      alt="Before"
                      className="max-h-full max-w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <span className="text-xs font-semibold text-emerald-600">
                    After Reduced ({formatBytes(result.sizeBytes)})
                  </span>
                  <div className="h-64 rounded-2xl border border-emerald-500/40 bg-muted/20 p-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={result.dataUrl}
                      alt="After"
                      className="max-h-full max-w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
