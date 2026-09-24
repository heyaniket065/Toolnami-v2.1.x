import { useState, useRef, useEffect, useCallback } from "react";
import {
  UploadCloud,
  Download,
  RotateCcw,
  Sparkles,
  Sliders,
  Eye,
  Check,
  Image as ImageIcon,
  Zap,
  Layers,
  Palette,
  ShieldCheck,
  Pipette,
  Sun,
  Moon,
  Copy,
} from "lucide-react";
import { toast } from "sonner";

type BgMode = "transparent" | "white" | "dark" | "gradient-mint" | "gradient-sunset" | "custom";
type RemovalMode = "auto" | "white" | "dark" | "greenscreen" | "eyedropper";

export function BackgroundRemoverTool() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tolerance, setTolerance] = useState(28);
  const [feather, setFeather] = useState(2);
  const [bgMode, setBgMode] = useState<BgMode>("transparent");
  const [customBgColor, setCustomBgColor] = useState("#3b82f6");
  const [removalMode, setRemovalMode] = useState<RemovalMode>("auto");
  const [pickedColor, setPickedColor] = useState<[number, number, number] | null>(null);
  const [viewMode, setViewMode] = useState<"result" | "original">("result");
  const [imgDetails, setImgDetails] = useState<{
    width: number;
    height: number;
    size: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);

  // Load image when file changes
  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (PNG, JPG, WebP).");
      return;
    }
    setImageFile(file);
    const sizeStr =
      file.size > 1024 * 1024
        ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
        : `${Math.round(file.size / 1024)} KB`;

    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);

      const img = new Image();
      img.onload = () => {
        setImgDetails({
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: sizeStr,
        });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  // Perform background segmentation and rendering
  const runSegmentation = useCallback(
    (
      src: string,
      tol: number,
      fea: number,
      bg: BgMode,
      customColor: string,
      mode: RemovalMode,
      targetColor: [number, number, number] | null,
    ) => {
      setIsProcessing(true);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        // Safe dimension bounds to avoid memory crash
        const maxDim = 1600;
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          setIsProcessing(false);
          return;
        }

        ctx.drawImage(img, 0, 0, w, h);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Sample background reference colors
        const samplePoints: [number, number, number][] = [];

        if (mode === "eyedropper" && targetColor) {
          samplePoints.push(targetColor);
        } else if (mode === "white") {
          samplePoints.push([255, 255, 255], [245, 245, 245], [240, 240, 242]);
        } else if (mode === "dark") {
          samplePoints.push([0, 0, 0], [15, 23, 42], [24, 24, 27]);
        } else if (mode === "greenscreen") {
          samplePoints.push([0, 255, 0], [0, 177, 64], [50, 205, 50]);
        } else {
          // Auto mode: Sample perimeter border points (16 points around edges)
          const stepX = Math.max(1, Math.floor(w / 4));
          const stepY = Math.max(1, Math.floor(h / 4));
          const addPoint = (x: number, y: number) => {
            const idx = (Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))) * 4;
            samplePoints.push([data[idx], data[idx + 1], data[idx + 2]]);
          };

          // Corners
          addPoint(1, 1);
          addPoint(w - 2, 1);
          addPoint(1, h - 2);
          addPoint(w - 2, h - 2);

          // Top and Bottom edges
          for (let x = stepX; x < w; x += stepX) {
            addPoint(x, 1);
            addPoint(x, h - 2);
          }

          // Left and Right edges
          for (let y = stepY; y < h; y += stepY) {
            addPoint(1, y);
            addPoint(w - 2, y);
          }
        }

        // Color difference calculation (Weighted Perceptual Distance)
        const colorDist = (
          r1: number,
          g1: number,
          b1: number,
          r2: number,
          g2: number,
          b2: number,
        ) => {
          return Math.sqrt(0.3 * (r1 - r2) ** 2 + 0.59 * (g1 - g2) ** 2 + 0.11 * (b1 - b2) ** 2);
        };

        const maxThreshold = (tol / 100) * 160 + 5;
        const featherBand = Math.max(1, fea * 7);

        // Process pixels
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          let minDist = Infinity;
          for (let j = 0; j < samplePoints.length; j++) {
            const [cr, cg, cb] = samplePoints[j];
            const d = colorDist(r, g, b, cr, cg, cb);
            if (d < minDist) minDist = d;
          }

          if (minDist <= maxThreshold) {
            data[i + 3] = 0; // Cutout
          } else if (minDist < maxThreshold + featherBand) {
            const factor = (minDist - maxThreshold) / featherBand;
            data[i + 3] = Math.round(factor * 255);
          }
        }

        // Render to output canvas with background choice
        const outCanvas = document.createElement("canvas");
        outCanvas.width = w;
        outCanvas.height = h;
        const outCtx = outCanvas.getContext("2d");
        if (!outCtx) {
          setIsProcessing(false);
          return;
        }

        if (bg === "white") {
          outCtx.fillStyle = "#ffffff";
          outCtx.fillRect(0, 0, w, h);
        } else if (bg === "dark") {
          outCtx.fillStyle = "#0f172a";
          outCtx.fillRect(0, 0, w, h);
        } else if (bg === "gradient-mint") {
          const grad = outCtx.createLinearGradient(0, 0, w, h);
          grad.addColorStop(0, "#a7f3d0");
          grad.addColorStop(1, "#0284c7");
          outCtx.fillStyle = grad;
          outCtx.fillRect(0, 0, w, h);
        } else if (bg === "gradient-sunset") {
          const grad = outCtx.createLinearGradient(0, 0, w, h);
          grad.addColorStop(0, "#fbcfe8");
          grad.addColorStop(1, "#f97316");
          outCtx.fillStyle = grad;
          outCtx.fillRect(0, 0, w, h);
        } else if (bg === "custom") {
          outCtx.fillStyle = customColor;
          outCtx.fillRect(0, 0, w, h);
        }

        ctx.putImageData(imgData, 0, 0);
        outCtx.drawImage(canvas, 0, 0);

        setProcessedUrl(outCanvas.toDataURL("image/png"));
        setIsProcessing(false);
      };
      img.src = src;
    },
    [],
  );

  // Trigger processing when controls change
  useEffect(() => {
    if (!imageSrc) return;
    const timer = setTimeout(() => {
      runSegmentation(
        imageSrc,
        tolerance,
        feather,
        bgMode,
        customBgColor,
        removalMode,
        pickedColor,
      );
    }, 100);
    return () => clearTimeout(timer);
  }, [
    imageSrc,
    tolerance,
    feather,
    bgMode,
    customBgColor,
    removalMode,
    pickedColor,
    runSegmentation,
  ]);

  // Click on image to sample background color
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (removalMode !== "eyedropper" || !imageSrc || !previewImgRef.current) return;
    const rect = previewImgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const img = previewImgRef.current;
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0);

    const pxX = Math.floor(x * scaleX);
    const pxY = Math.floor(y * scaleY);
    const pixel = ctx.getImageData(pxX, pxY, 1, 1).data;
    setPickedColor([pixel[0], pixel[1], pixel[2]]);
    toast.success(`Sampled color RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]}) for removal.`);
  };

  // Preset sample objects
  const loadPreset = (presetName: string) => {
    const c = document.createElement("canvas");
    c.width = 640;
    c.height = 640;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    if (presetName === "product") {
      // Clean white background with modern sneakers/shoe illustration
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, 640, 640);

      // Shadow
      ctx.fillStyle = "rgba(100, 116, 139, 0.2)";
      ctx.beginPath();
      ctx.ellipse(320, 480, 180, 24, 0, 0, Math.PI * 2);
      ctx.fill();

      // Sneaker Body (Vibrant Cyan & Purple)
      const grad = ctx.createLinearGradient(140, 200, 480, 460);
      grad.addColorStop(0, "#06b6d4");
      grad.addColorStop(0.5, "#3b82f6");
      grad.addColorStop(1, "#8b5cf6");
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.roundRect(160, 280, 320, 150, [40, 120, 30, 20]);
      ctx.fill();

      // Sole
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(140, 420, 360, 45, 16);
      ctx.fill();
      ctx.stroke();

      // Accents
      ctx.fillStyle = "#f97316";
      ctx.beginPath();
      ctx.arc(360, 350, 25, 0, Math.PI * 2);
      ctx.fill();
    } else if (presetName === "badge") {
      // Dark background with glowing 3D shield
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, 640, 640);

      const grad = ctx.createLinearGradient(200, 160, 440, 480);
      grad.addColorStop(0, "#f59e0b");
      grad.addColorStop(1, "#ef4444");
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(320, 150);
      ctx.lineTo(470, 240);
      ctx.lineTo(420, 450);
      ctx.lineTo(320, 520);
      ctx.lineTo(220, 450);
      ctx.lineTo(170, 240);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(320, 320, 50, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Camera Gadget
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 640, 640);

      const grad = ctx.createLinearGradient(180, 180, 460, 460);
      grad.addColorStop(0, "#ec4899");
      grad.addColorStop(1, "#6366f1");
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.roundRect(180, 240, 280, 200, 32);
      ctx.fill();

      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.arc(320, 340, 65, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(320, 340, 35, 0, Math.PI * 2);
      ctx.fill();
    }

    c.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], `${presetName}-sample.png`, { type: "image/png" });
        handleFile(file);
      }
    });
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const a = document.createElement("a");
    a.href = processedUrl;
    const baseName = imageFile?.name.replace(/\.[^/.]+$/, "") || "cutout";
    a.download = `${baseName}-transparent.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Cutout PNG downloaded successfully!");
  };

  const handleCopyClipboard = async () => {
    if (!processedUrl) return;
    try {
      const res = await fetch(processedUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      toast.success("Cutout image copied to clipboard!");
    } catch {
      toast.info("Could not copy directly; please click Download PNG.");
    }
  };

  return (
    <div className="space-y-8">
      {!imageSrc ? (
        <div className="rounded-3xl border-2 border-dashed border-border/80 bg-card/60 p-8 sm:p-14 text-center transition-all hover:border-primary/50 shadow-soft">
          <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner">
            <Sparkles className="size-10" />
          </div>
          <h3 className="mt-6 text-xl sm:text-2xl font-bold">
            Remove image background automatically
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Instantly isolate portraits, product photos, graphics, and logos into clean transparent
            PNGs. Runs 100% locally in your browser with zero server uploads.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:brightness-110 active:scale-95"
            >
              <UploadCloud className="size-4" /> Upload Your Image
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Or test with one-click samples:
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => loadPreset("product")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                👟 Product on White
              </button>
              <button
                type="button"
                onClick={() => loadPreset("badge")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                🛡️ Emblem on Dark
              </button>
              <button
                type="button"
                onClick={() => loadPreset("gadget")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                📸 Camera Gadget
              </button>
            </div>
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="size-4 text-emerald-500" /> 100% Private (No Cloud Upload)
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="size-4 text-amber-500" /> Instant Real-time Cutout
            </div>
            <div className="flex items-center justify-center gap-2">
              <Layers className="size-4 text-primary" /> Transparent Alpha PNG Output
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                <ImageIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {imageFile?.name || "Uploaded Image"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {imgDetails
                    ? `${imgDetails.width}×${imgDetails.height} px • ${imgDetails.size}`
                    : ""}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-xl border border-border bg-muted/30 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("result")}
                  className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                    viewMode === "result"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Cutout
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("original")}
                  className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                    viewMode === "original"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Original
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setImageSrc(null);
                  setProcessedUrl(null);
                  setImageFile(null);
                  setPickedColor(null);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 active:scale-95"
              >
                <RotateCcw className="size-3.5" /> Upload New
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                disabled={!processedUrl || isProcessing}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:border-primary/40 active:scale-95 disabled:opacity-50"
              >
                <Copy className="size-3.5" /> Copy
              </button>

              <button
                type="button"
                onClick={handleDownload}
                disabled={!processedUrl || isProcessing}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lift hover:brightness-110 active:scale-95 disabled:opacity-50"
              >
                <Download className="size-4" /> Download PNG
              </button>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-soft">
            <span className="text-xs font-semibold text-muted-foreground mr-1">Removal Mode:</span>
            <button
              type="button"
              onClick={() => setRemovalMode("auto")}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                removalMode === "auto"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              ✨ Auto Detect
            </button>
            <button
              type="button"
              onClick={() => setRemovalMode("white")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                removalMode === "white"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="size-3.5" /> Light / White BG
            </button>
            <button
              type="button"
              onClick={() => setRemovalMode("dark")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                removalMode === "dark"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Moon className="size-3.5" /> Dark / Black BG
            </button>
            <button
              type="button"
              onClick={() => setRemovalMode("greenscreen")}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                removalMode === "greenscreen"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              🟩 Green Screen
            </button>
            <button
              type="button"
              onClick={() => setRemovalMode("eyedropper")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                removalMode === "eyedropper"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Pipette className="size-3.5" /> Click to Remove Color
            </button>
          </div>

          {removalMode === "eyedropper" && (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary flex items-center justify-between">
              <span>
                🎯 <strong>Eyedropper active:</strong> Click anywhere on the image below to select
                and remove that exact background color.
              </span>
              {pickedColor && (
                <span className="font-mono bg-card px-2 py-1 rounded border border-border">
                  Selected: RGB({pickedColor[0]}, {pickedColor[1]}, {pickedColor[2]})
                </span>
              )}
            </div>
          )}

          {/* Interactive Preview Viewport */}
          <div className="relative min-h-[360px] sm:min-h-[440px] rounded-3xl border border-border overflow-hidden flex items-center justify-center p-6 sm:p-10 shadow-soft bg-muted/20">
            {/* Transparency Checkerboard */}
            {bgMode === "transparent" && viewMode === "result" && (
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #cbd5e1 25%, transparent 25%), 
                    linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #cbd5e1 75%), 
                    linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)`,
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
                }}
              />
            )}

            {viewMode === "original" ? (
              <img
                ref={previewImgRef}
                src={imageSrc}
                alt="Original"
                onClick={handleImageClick}
                className={`relative max-h-[380px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-all ${
                  removalMode === "eyedropper" ? "cursor-crosshair" : ""
                }`}
              />
            ) : processedUrl ? (
              <img
                ref={previewImgRef}
                src={processedUrl}
                alt="Cutout result"
                onClick={handleImageClick}
                className={`relative max-h-[380px] w-auto max-w-full rounded-2xl object-contain drop-shadow-2xl transition-all ${
                  removalMode === "eyedropper" ? "cursor-crosshair" : ""
                }`}
              />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <Sparkles className="size-8 animate-spin text-primary" />
                <p className="text-sm font-medium">Removing background in real-time…</p>
              </div>
            )}
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fine-tune Sliders */}
            <div className="rounded-2xl border border-border bg-card p-5 space-y-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sliders className="size-4 text-primary" /> Edge Detection & Sensitivity
                </div>
                <span className="text-xs text-muted-foreground">{tolerance}%</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Color Cutout Tolerance</span>
                  <span className="text-primary font-bold">{tolerance}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={tolerance}
                  onChange={(e) => setTolerance(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Preserve Details (5%)</span>
                  <span>Strict Cut (80%)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Edge Feathering / Smoothness</span>
                  <span className="text-primary font-bold">{feather}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={feather}
                  onChange={(e) => setFeather(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Replacement Background Palette */}
            <div className="rounded-2xl border border-border bg-card p-5 space-y-4 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Palette className="size-4 text-primary" /> Background Replacement
              </div>
              <p className="text-xs text-muted-foreground">
                Keep the cutout transparent or preview with a solid color or gradient background.
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setBgMode("transparent")}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    bgMode === "transparent"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <span className="size-4 rounded-md border border-border bg-white checkerboard" />
                  Transparent
                </button>

                <button
                  type="button"
                  onClick={() => setBgMode("white")}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    bgMode === "white"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <span className="size-4 rounded-md border border-border bg-white" />
                  Pure White
                </button>

                <button
                  type="button"
                  onClick={() => setBgMode("dark")}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    bgMode === "dark"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <span className="size-4 rounded-md bg-slate-900 border border-slate-700" />
                  Studio Dark
                </button>

                <button
                  type="button"
                  onClick={() => setBgMode("gradient-mint")}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    bgMode === "gradient-mint"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <span className="size-4 rounded-md bg-gradient-to-r from-emerald-200 to-sky-500" />
                  Mint Breeze
                </button>

                <button
                  type="button"
                  onClick={() => setBgMode("gradient-sunset")}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    bgMode === "gradient-sunset"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <span className="size-4 rounded-md bg-gradient-to-r from-pink-200 to-orange-400" />
                  Sunset Glow
                </button>

                <label
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all cursor-pointer ${
                    bgMode === "custom"
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:bg-muted/40"
                  }`}
                >
                  <input
                    type="color"
                    value={customBgColor}
                    onChange={(e) => {
                      setCustomBgColor(e.target.value);
                      setBgMode("custom");
                    }}
                    className="size-4 rounded cursor-pointer border-0 bg-transparent p-0"
                  />
                  Custom Color
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
