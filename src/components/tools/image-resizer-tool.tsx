import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Lock,
  Unlock,
  RotateCw,
  Sparkles,
  Sliders,
  Check,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { downloadBlob, formatBytes } from "@/lib/tool-files";

const PRESETS = [
  { name: "Instagram Square (1:1)", width: 1080, height: 1080 },
  { name: "Instagram Story (9:16)", width: 1080, height: 1920 },
  { name: "YouTube Thumbnail (16:9)", width: 1280, height: 720 },
  { name: "Twitter / X Post", width: 1200, height: 675 },
  { name: "Facebook Post", width: 1200, height: 630 },
  { name: "Website Hero Banner", width: 1920, height: 1080 },
];

export function ImageResizerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [origDimensions, setOrigDimensions] = useState<{ width: number; height: number } | null>(
    null,
  );

  // Resize controls
  const [targetWidth, setTargetWidth] = useState<number>(800);
  const [targetHeight, setTargetHeight] = useState<number>(600);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);
  const [format, setFormat] = useState<"image/jpeg" | "image/png" | "image/webp">("image/jpeg");
  const [quality, setQuality] = useState<number>(90);

  // Processed State
  const [resizing, setResizing] = useState(false);
  const [resizedBlob, setResizedBlob] = useState<Blob | null>(null);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [resizedDimensions, setResizedDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleFile = (f: File) => {
    if (!f.type.startsWith("image/")) {
      toast.error("Please choose a valid image file (JPG, PNG, or WebP)");
      return;
    }
    setFile(f);
    setResizedBlob(null);
    setResizedUrl(null);

    const url = URL.createObjectURL(f);
    setOriginalUrl(url);

    const img = new Image();
    img.onload = () => {
      setOrigDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setTargetWidth(img.naturalWidth);
      setTargetHeight(img.naturalHeight);
      const ratio = img.naturalWidth / img.naturalHeight;
      setAspectRatio(ratio);
    };
    img.src = url;
  };

  const handleWidthChange = (w: number) => {
    setTargetWidth(w);
    if (lockAspect && aspectRatio > 0) {
      setTargetHeight(Math.round(w / aspectRatio));
    }
  };

  const handleHeightChange = (h: number) => {
    setTargetHeight(h);
    if (lockAspect && aspectRatio > 0) {
      setTargetWidth(Math.round(h * aspectRatio));
    }
  };

  const applyPreset = (preset: { width: number; height: number }) => {
    setLockAspect(false);
    setTargetWidth(preset.width);
    setTargetHeight(preset.height);
  };

  const applyScalePercentage = (pct: number) => {
    if (!origDimensions) return;
    const w = Math.round((origDimensions.width * pct) / 100);
    const h = Math.round((origDimensions.height * pct) / 100);
    setTargetWidth(w);
    setTargetHeight(h);
  };

  const performResize = async () => {
    if (!originalUrl || !file) {
      toast.error("Please upload an image first");
      return;
    }

    if (targetWidth <= 0 || targetHeight <= 0) {
      toast.error("Invalid target dimensions");
      return;
    }

    setResizing(true);
    try {
      const img = new Image();
      img.src = originalUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not create canvas context");

      // High quality smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      const mime = format;
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), mime, quality / 100);
      });

      if (!blob) throw new Error("Canvas encoding failed");

      if (resizedUrl) {
        URL.revokeObjectURL(resizedUrl);
      }

      const outUrl = URL.createObjectURL(blob);
      setResizedBlob(blob);
      setResizedUrl(outUrl);
      setResizedDimensions({ width: targetWidth, height: targetHeight });
      toast.success("Image resized successfully!");
    } catch (err) {
      toast.error("Failed to resize image. Try different dimensions.");
    } finally {
      setResizing(false);
    }
  };

  const handleDownload = () => {
    if (!resizedBlob || !file) {
      toast.error("No resized image ready for download");
      return;
    }
    const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
    const baseName = file.name.replace(/\.[^/.]+$/, "");
    const filename = `${baseName}-${targetWidth}x${targetHeight}.${ext}`;
    downloadBlob(resizedBlob, filename);
    toast.success(`Downloaded ${filename}`);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6">
      {/* Hidden file input */}
      <input
        type="file"
        id="image-resizer-file-input"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFile(e.target.files[0]);
        }}
      />

      {/* Upload Box or Image Active state */}
      {!file ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
          }}
          className="p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors text-center cursor-pointer bg-muted/20 hover:bg-muted/40"
          onClick={() => document.getElementById("image-resizer-file-input")?.click()}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Upload className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-1 text-foreground">Select or Drop Image to Resize</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
            JPG, PNG, and WebP supported. Resize right in your browser with zero quality loss.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
            Browse Image
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* File summary & Change Button */}
          <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between">
            <div className="flex items-center gap-3 truncate mr-2">
              <div className="w-12 h-12 rounded-xl bg-card border border-border overflow-hidden shrink-0 flex items-center justify-center">
                {originalUrl && (
                  <img
                    src={originalUrl}
                    alt="Original preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="truncate">
                <div className="text-sm font-bold text-foreground truncate">{file.name}</div>
                <div className="text-xs text-muted-foreground">
                  Original: {origDimensions?.width} × {origDimensions?.height} px (
                  {formatBytes(file.size)})
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("image-resizer-file-input")?.click()}
              className="px-3.5 py-2 rounded-xl bg-card hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors shrink-0"
            >
              Change Image
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Popular Size Presets
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-colors ${
                    targetWidth === p.width && targetHeight === p.height
                      ? "bg-primary/10 border-primary text-primary font-bold"
                      : "bg-card border-border hover:bg-muted text-foreground"
                  }`}
                >
                  <div className="truncate font-semibold">{p.name}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {p.width} × {p.height} px
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Scaling percentages */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground uppercase">Scale:</span>
            {[25, 50, 75, 100, 150, 200].map((pct) => (
              <button
                key={pct}
                type="button"
                onClick={() => applyScalePercentage(pct)}
                className="px-2.5 py-1 rounded-lg bg-muted/60 hover:bg-muted border border-border text-xs font-medium text-foreground transition-colors"
              >
                {pct}%
              </button>
            ))}
          </div>

          {/* Dimension Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-muted/20 border border-border">
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Target Width (Pixels)
              </label>
              <input
                type="number"
                min="1"
                max="10000"
                value={targetWidth}
                onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border text-base font-bold text-foreground focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Target Height (Pixels)
              </label>
              <input
                type="number"
                min="1"
                max="10000"
                value={targetHeight}
                onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border text-base font-bold text-foreground focus:outline-none focus:border-primary"
              />
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
              <button
                type="button"
                onClick={() => setLockAspect(!lockAspect)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
                  lockAspect
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                Maintain Aspect Ratio {lockAspect ? "(Locked)" : "(Free)"}
              </button>

              {/* Format Selection */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-foreground">Format:</span>
                <select
                  value={format}
                  onChange={(e) =>
                    setFormat(e.target.value as "image/jpeg" | "image/png" | "image/webp")
                  }
                  className="py-1.5 px-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground cursor-pointer"
                >
                  <option value="image/jpeg">JPG / JPEG</option>
                  <option value="image/png">PNG</option>
                  <option value="image/webp">WebP</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            type="button"
            onClick={performResize}
            disabled={resizing}
            className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
          >
            {resizing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Resizing High-Res Pixels...
              </>
            ) : (
              <>
                <Sliders className="w-4 h-4" />
                Process &amp; Resize Image
              </>
            )}
          </button>

          {/* Resized Result & Actual Download Button */}
          {resizedUrl && resizedBlob && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    Resize Complete: {resizedDimensions?.width} × {resizedDimensions?.height} px
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full">
                  {formatBytes(resizedBlob.size)}
                </span>
              </div>

              {/* Preview Window */}
              <div className="max-h-64 rounded-xl overflow-hidden bg-muted/50 border border-border flex items-center justify-center p-2">
                <img
                  src={resizedUrl}
                  alt="Resized preview"
                  className="max-h-60 max-w-full object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Explicit Download Button (Not just browser memory!) */}
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg hover:shadow-emerald-600/25 flex items-center justify-center gap-2 active:scale-98"
              >
                <Download className="w-4 h-4" />
                Download Resized Image to Device
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
