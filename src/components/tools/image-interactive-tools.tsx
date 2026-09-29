import React, { useState, useRef, useEffect } from "react";
import {
  UploadCloud,
  Download,
  RotateCw,
  RotateCcw,
  RefreshCw,
  Stamp,
  Crop,
  Layers,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Eye,
  Sliders,
  Type,
  Maximize2,
  FlipHorizontal,
  FlipVertical,
} from "lucide-react";
import { toast } from "sonner";
import { downloadBlob } from "@/lib/tool-files";

// ==========================================
// 1. IMAGE WATERMARK TOOL (LIVE CANVAS)
// ==========================================
export function ImageWatermarkTool() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);

  const [watermarkText, setWatermarkText] = useState("© COPYRIGHT 2026");
  const [fontSize, setFontSize] = useState(36);
  const [opacity, setOpacity] = useState(0.5);
  const [rotation, setRotation] = useState(-25);
  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState<
    "bottom-right" | "bottom-left" | "center" | "top-right" | "top-left" | "tiled"
  >("bottom-right");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file (PNG, JPG, WebP)");
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setImageFile(file);
      setImageSrc(url);
      setImageEl(img);
      toast.success(`Loaded image: ${file.name}`);
    };
    img.src = url;
  };

  // Re-draw canvas whenever controls change
  useEffect(() => {
    if (!imageEl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = imageEl.naturalWidth;
    canvas.height = imageEl.naturalHeight;

    // Draw source image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageEl, 0, 0);

    // Apply watermark styling
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.font = `900 ${fontSize * (canvas.width / 800)}px 'Plus Jakarta Sans', Arial, sans-serif`;
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    if (position === "tiled") {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const stepX = 260 * (canvas.width / 800);
      const stepY = 160 * (canvas.height / 600);

      for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
        for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.fillText(watermarkText, 0, 0);
          ctx.restore();
        }
      }
    } else {
      const padding = 40 * (canvas.width / 800);
      let posX = canvas.width - padding;
      let posY = canvas.height - padding;

      if (position === "bottom-left") {
        posX = padding;
        posY = canvas.height - padding;
        ctx.textAlign = "left";
      } else if (position === "top-right") {
        posX = canvas.width - padding;
        posY = padding + fontSize;
        ctx.textAlign = "right";
      } else if (position === "top-left") {
        posX = padding;
        posY = padding + fontSize;
        ctx.textAlign = "left";
      } else if (position === "center") {
        posX = canvas.width / 2;
        posY = canvas.height / 2;
        ctx.textAlign = "center";
      } else {
        // bottom-right
        posX = canvas.width - padding;
        posY = canvas.height - padding;
        ctx.textAlign = "right";
      }

      ctx.save();
      ctx.translate(posX, posY);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.fillText(watermarkText, 0, 0);
      ctx.restore();
    }

    ctx.restore();
  }, [imageEl, watermarkText, fontSize, opacity, rotation, color, position]);

  const downloadWatermarked = () => {
    if (!canvasRef.current || !imageFile) return;

    canvasRef.current.toBlob(
      (blob) => {
        if (!blob) return;
        const newName = `${imageFile.name.replace(/\.[^/.]+$/, "")}-watermarked.png`;
        downloadBlob(blob, newName);
        toast.success(`Downloaded watermarked photo: ${newName}`);
      },
      "image/png",
      0.95,
    );
  };

  return (
    <div className="space-y-6">
      {!imageFile ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm">
            <Stamp className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Select Image to Add Watermark</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Add custom text or copyright stamps with live real-time preview and instant
            full-resolution download.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload Photo
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Customization Controls */}
            <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-foreground">Watermark Settings</h4>
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImageSrc(null);
                    setImageEl(null);
                  }}
                  className="text-xs text-red-500 hover:underline"
                >
                  Change Image
                </button>
              </div>

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
                  {["© ToolNami 2026", "CONFIDENTIAL", "PREVIEW ONLY", "SAMPLE"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setWatermarkText(t)}
                      className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:bg-primary/20 transition"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Placement
                </label>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  {[
                    { id: "bottom-right", label: "Bottom Right" },
                    { id: "bottom-left", label: "Bottom Left" },
                    { id: "center", label: "Center" },
                    { id: "top-right", label: "Top Right" },
                    { id: "top-left", label: "Top Left" },
                    { id: "tiled", label: "Repeated (Tiled)" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPosition(p.id as typeof position)}
                      className={`rounded-xl px-2 py-2 text-xs font-bold transition text-center ${
                        position === p.id
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase">
                    Font Size ({fontSize}px)
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="96"
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
                    max="1.0"
                    step="0.05"
                    value={opacity}
                    onChange={(e) => setOpacity(parseFloat(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase">
                    Rotation ({rotation}°)
                  </label>
                  <input
                    type="range"
                    min="-90"
                    max="90"
                    value={rotation}
                    onChange={(e) => setRotation(parseInt(e.target.value, 10))}
                    className="mt-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase">
                    Color
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="h-9 w-12 rounded-lg cursor-pointer border border-border"
                    />
                    <span className="text-xs font-mono">{color}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={downloadWatermarked}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
              >
                <Download className="h-4 w-4" />
                Download Watermarked Photo
              </button>
            </div>

            {/* Live Interactive Canvas Workspace */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center">
              <h5 className="font-bold text-xs uppercase text-muted-foreground mb-4">
                Live Full-Resolution Canvas Preview
              </h5>
              <div className="max-h-[500px] w-full flex items-center justify-center overflow-auto rounded-xl border border-border bg-muted/20 p-2">
                <canvas
                  ref={canvasRef}
                  className="max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. IMAGE CROPPER TOOL
// ==========================================
export function ImageCropperTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);
  const [aspectPreset, setAspectPreset] = useState<"free" | "1:1" | "16:9" | "4:3" | "9:16">("1:1");
  const [cropWidthPct, setCropWidthPct] = useState(80);
  const [cropHeightPct, setCropHeightPct] = useState(80);
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(10);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setFile(f);
      setImageEl(img);
      toast.success(`Loaded image: ${f.name}`);
    };
    img.src = url;
  };

  useEffect(() => {
    if (!imageEl || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const naturalW = imageEl.naturalWidth;
    const naturalH = imageEl.naturalHeight;

    let targetW = (cropWidthPct / 100) * naturalW;
    let targetH = (cropHeightPct / 100) * naturalH;

    if (aspectPreset === "1:1") {
      const minDim = Math.min(targetW, targetH);
      targetW = minDim;
      targetH = minDim;
    } else if (aspectPreset === "16:9") {
      targetH = (targetW * 9) / 16;
    } else if (aspectPreset === "4:3") {
      targetH = (targetW * 3) / 4;
    } else if (aspectPreset === "9:16") {
      targetW = (targetH * 9) / 16;
    }

    const startX = Math.max(0, Math.min(naturalW - targetW, (offsetX / 100) * naturalW));
    const startY = Math.max(0, Math.min(naturalH - targetH, (offsetY / 100) * naturalH));

    canvas.width = targetW;
    canvas.height = targetH;
    ctx.clearRect(0, 0, targetW, targetH);
    ctx.drawImage(imageEl, startX, startY, targetW, targetH, 0, 0, targetW, targetH);
  }, [imageEl, aspectPreset, cropWidthPct, cropHeightPct, offsetX, offsetY]);

  const downloadCrop = () => {
    if (!canvasRef.current || !file) return;
    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `${file.name.replace(/\.[^/.]+$/, "")}-cropped.png`);
      toast.success("Downloaded cropped image!");
    }, "image/png");
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
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 mb-4 shadow-sm">
            <Crop className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Upload Image to Crop</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Crop to square (1:1), widescreen (16:9), portrait (9:16), or custom free dimensions.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload Image
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground">Crop Settings</h4>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-xs text-red-500 hover:underline"
              >
                Change Image
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase">
                Aspect Ratio Presets
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["free", "1:1", "16:9", "4:3", "9:16"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setAspectPreset(r)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                      aspectPreset === r
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase">
                Crop Area ({cropWidthPct}%)
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={cropWidthPct}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setCropWidthPct(val);
                  setCropHeightPct(val);
                }}
                className="mt-1 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Position X ({offsetX}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={offsetX}
                  onChange={(e) => setOffsetX(parseInt(e.target.value, 10))}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                  Position Y ({offsetY}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={offsetY}
                  onChange={(e) => setOffsetY(parseInt(e.target.value, 10))}
                  className="mt-1 w-full"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={downloadCrop}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
            >
              <Download className="h-4 w-4" />
              Download Cropped Image
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center">
            <h5 className="font-bold text-xs uppercase text-muted-foreground mb-4">
              Cropped Result Preview
            </h5>
            <div className="max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
              <canvas
                ref={canvasRef}
                className="max-h-[340px] max-w-full rounded shadow object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 3. IMAGE ROTATE & FLIP TOOL
// ==========================================
export function ImageRotateFlipTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setFile(f);
      setImageEl(img);
      setRotation(0);
      setFlipH(false);
      setFlipV(false);
      toast.success(`Loaded image: ${f.name}`);
    };
    img.src = url;
  };

  useEffect(() => {
    if (!imageEl || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rad = (rotation * Math.PI) / 180;
    const sin = Math.abs(Math.sin(rad));
    const cos = Math.abs(Math.cos(rad));
    const newW = imageEl.naturalWidth * cos + imageEl.naturalHeight * sin;
    const newH = imageEl.naturalWidth * sin + imageEl.naturalHeight * cos;

    canvas.width = newW;
    canvas.height = newH;

    ctx.clearRect(0, 0, newW, newH);
    ctx.save();
    ctx.translate(newW / 2, newH / 2);
    ctx.rotate(rad);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    ctx.drawImage(imageEl, -imageEl.naturalWidth / 2, -imageEl.naturalHeight / 2);
    ctx.restore();
  }, [imageEl, rotation, flipH, flipV]);

  const downloadResult = () => {
    if (!canvasRef.current || !file) return;
    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `${file.name.replace(/\.[^/.]+$/, "")}-oriented.png`);
      toast.success("Downloaded rotated image!");
    }, "image/png");
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
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 mb-4 shadow-sm">
            <RotateCw className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Select Image to Rotate or Flip</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Rotate 90°, 180°, fine-tune angle slider, or mirror flip horizontally and vertically.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow"
          >
            <UploadCloud className="h-4 w-4" />
            Upload Photo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground">Rotation &amp; Flip Controls</h4>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-xs text-red-500 hover:underline"
              >
                Change Image
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setRotation((r) => (r - 90 + 360) % 360)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                -90° Left
              </button>
              <button
                type="button"
                onClick={() => setRotation((r) => (r + 90) % 360)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition"
              >
                <RotateCw className="h-3.5 w-3.5" />
                +90° Right
              </button>
              <button
                type="button"
                onClick={() => setRotation((r) => (r + 180) % 360)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                180° Flip
              </button>
              <button
                type="button"
                onClick={() => setFlipH(!flipH)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                  flipH
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                <FlipHorizontal className="h-3.5 w-3.5" />
                Flip Horizontal
              </button>
              <button
                type="button"
                onClick={() => setFlipV(!flipV)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                  flipV
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                <FlipVertical className="h-3.5 w-3.5" />
                Flip Vertical
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase">
                Fine Tune Angle ({rotation}°)
              </label>
              <input
                type="range"
                min="-180"
                max="180"
                value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value, 10))}
                className="mt-1 w-full"
              />
            </div>

            <button
              type="button"
              onClick={downloadResult}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
            >
              <Download className="h-4 w-4" />
              Download Oriented Photo
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center">
            <h5 className="font-bold text-xs uppercase text-muted-foreground mb-4">Live Preview</h5>
            <div className="max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
              <canvas
                ref={canvasRef}
                className="max-h-[340px] max-w-full rounded shadow object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 4. SVG TO PNG TOOL
// ==========================================
export function SvgToPngTool() {
  const [svgText, setSvgText] = useState("");
  const [scale, setScale] = useState(2);
  const [isTransparent, setIsTransparent] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#3b82f6" />
  <polygon points="100,40 120,80 165,85 130,115 140,160 100,135 60,160 70,115 35,85 80,80" fill="#facc15" />
</svg>`;

  useEffect(() => {
    if (!svgText) setSvgText(sampleSvg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileUpload = async (f: File) => {
    const text = await f.text();
    setSvgText(text);
    toast.success(`Loaded SVG: ${f.name}`);
  };

  useEffect(() => {
    if (!svgText || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      canvas.width = (img.naturalWidth || 400) * scale;
      canvas.height = (img.naturalHeight || 400) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!isTransparent) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [svgText, scale, isTransparent]);

  const downloadPng = () => {
    if (!canvasRef.current) return;
    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `vector-rasterized-${scale}x.png`);
      toast.success("Downloaded high-res PNG!");
    }, "image/png");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-foreground">SVG Input &amp; Settings</h4>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg bg-primary/10 text-primary px-3 py-1.5 text-xs font-bold hover:bg-primary/20 transition"
            >
              Upload .svg File
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".svg,image/svg+xml"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase">
              SVG Code
            </label>
            <textarea
              rows={8}
              value={svgText}
              onChange={(e) => setSvgText(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 p-3 font-mono text-xs focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase">
              Resolution Scale
            </label>
            <div className="mt-1.5 flex gap-2">
              {[
                { label: "1x (Standard)", val: 1 },
                { label: "2x (Retina)", val: 2 },
                { label: "3x (High Res)", val: 3 },
                { label: "4x (Ultra HD)", val: 4 },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setScale(item.val)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                    scale === item.val
                      ? "bg-primary text-primary-foreground shadow"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase">
              Background
            </label>
            <div className="mt-1.5 flex gap-2">
              <button
                type="button"
                onClick={() => setIsTransparent(true)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                  isTransparent
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                Transparent Alpha
              </button>
              <button
                type="button"
                onClick={() => setIsTransparent(false)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                  !isTransparent
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                Solid White
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={downloadPng}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" />
            Download High-Res PNG ({scale}x)
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center">
          <h5 className="font-bold text-xs uppercase text-muted-foreground mb-4">
            Rasterized Preview
          </h5>
          <div
            className={`max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border p-4 ${
              isTransparent
                ? "bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
                : "bg-white"
            }`}
          >
            <canvas
              ref={canvasRef}
              className="max-h-[320px] max-w-full rounded shadow-sm object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
