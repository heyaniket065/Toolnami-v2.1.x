import React, { useState, useEffect } from "react";
import { Palette, Copy, Check, Sliders, RefreshCw } from "lucide-react";
import { toast } from "sonner";

// Conversion helpers
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace(/^#/, "");
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
    return { r, g, b };
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
    return { r, g, b };
  }
  return null;
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, "0");
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function rgbToCmyk(
  r: number,
  g: number,
  b: number,
): { c: number; m: number; y: number; k: number } {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const k = 1 - Math.max(rNorm, gNorm, bNorm);
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  const c = (1 - rNorm - k) / (1 - k);
  const m = (1 - gNorm - k) / (1 - k);
  const y = (1 - bNorm - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

export function ColorConverterTool() {
  const [hex, setHex] = useState("#2563EB");
  const [rgb, setRgb] = useState({ r: 37, g: 99, b: 235 });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleHexInput = (val: string) => {
    setHex(val);
    const parsed = hexToRgb(val);
    if (parsed) {
      setRgb(parsed);
    }
  };

  const handleColorPicker = (val: string) => {
    setHex(val.toUpperCase());
    const parsed = hexToRgb(val);
    if (parsed) setRgb(parsed);
  };

  const handleRgbChange = (channel: "r" | "g" | "b", val: number) => {
    const next = { ...rgb, [channel]: Math.max(0, Math.min(255, val)) };
    setRgb(next);
    setHex(rgbToHex(next.r, next.g, next.b));
  };

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  const formats = [
    { label: "HEX Code", value: hex, copy: hex },
    {
      label: "RGB (CSS)",
      value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      copy: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    },
    {
      label: "RGBA (CSS)",
      value: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      copy: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
    },
    {
      label: "HSL (CSS)",
      value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      copy: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
    },
    {
      label: "CMYK (Print)",
      value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`,
      copy: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`,
    },
  ];

  const copyValue = (key: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    toast.success(`Copied ${val} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            Live Color Space Converter
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Convert seamlessly between HEX, RGB, HSL, and CMYK formats
          </p>
        </div>
      </div>

      {/* Main Color Swatch and Interactive Color Picker */}
      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 items-center">
        <div
          style={{ backgroundColor: hex }}
          className="w-full h-32 sm:h-36 rounded-2xl border border-border shadow-inner flex flex-col items-center justify-center text-white relative group cursor-pointer overflow-hidden"
          onClick={() => document.getElementById("color-picker-native")?.click()}
        >
          <input
            id="color-picker-native"
            type="color"
            value={hex.length === 7 ? hex : "#2563EB"}
            onChange={(e) => handleColorPicker(e.target.value)}
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <div className="bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-xl text-xs font-bold pointer-events-none group-hover:scale-105 transition-transform">
            Click to Pick Color
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1">
              HEX Color Input
            </label>
            <input
              type="text"
              value={hex}
              onChange={(e) => handleHexInput(e.target.value)}
              placeholder="#2563EB"
              className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-base font-mono font-bold text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          {/* RGB Sliders */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-bold text-rose-500">R: {rgb.r}</span>
              <input
                type="range"
                min="0"
                max="255"
                value={rgb.r}
                onChange={(e) => handleRgbChange("r", Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>
            <div>
              <span className="font-bold text-emerald-500">G: {rgb.g}</span>
              <input
                type="range"
                min="0"
                max="255"
                value={rgb.g}
                onChange={(e) => handleRgbChange("g", Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <span className="font-bold text-blue-500">B: {rgb.b}</span>
              <input
                type="range"
                min="0"
                max="255"
                value={rgb.b}
                onChange={(e) => handleRgbChange("b", Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Output Format Conversions */}
      <div className="space-y-2 pt-2">
        <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1">
          Converted Color Spaces
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {formats.map((fmt) => (
            <div
              key={fmt.label}
              className="p-3 rounded-2xl bg-muted/30 border border-border flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase">
                  {fmt.label}
                </div>
                <div className="text-sm font-mono font-bold text-foreground">{fmt.value}</div>
              </div>
              <button
                type="button"
                onClick={() => copyValue(fmt.label, fmt.copy)}
                className="p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all active:scale-95 shadow-xs"
                title="Copy to clipboard"
              >
                {copiedKey === fmt.label ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
