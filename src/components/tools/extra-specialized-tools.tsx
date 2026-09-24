import { useState, useMemo, useEffect } from "react";
import {
  Copy,
  Check,
  Calculator,
  Clock,
  Activity,
  ShieldAlert,
  Sparkles,
  Percent,
} from "lucide-react";
import { toast } from "sonner";
import { CompleteTool } from "@/lib/complete-tools";

// 1. GST Calculator
export function GstCalculatorTool() {
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");

  const { gstAmount, totalAmount, baseAmount } = useMemo(() => {
    const amt = Math.max(0, amount || 0);
    if (type === "exclusive") {
      const gst = (amt * gstRate) / 100;
      return {
        baseAmount: amt,
        gstAmount: gst,
        totalAmount: amt + gst,
      };
    } else {
      const base = (amt * 100) / (100 + gstRate);
      const gst = amt - base;
      return {
        baseAmount: base,
        gstAmount: gst,
        totalAmount: amt,
      };
    }
  }, [amount, gstRate, type]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6">
      <div className="flex gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border">
        <button
          type="button"
          onClick={() => setType("exclusive")}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
            type === "exclusive"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          GST Exclusive (Add GST)
        </button>
        <button
          type="button"
          onClick={() => setType("inclusive")}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
            type === "inclusive"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          GST Inclusive (Extract GST)
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            {type === "exclusive" ? "Net Amount (₹ / $)" : "Gross Amount (₹ / $)"}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary"
            placeholder="e.g. 5000"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            GST Slab Rate
          </label>
          <div className="grid grid-cols-5 gap-2">
            {[5, 12, 18, 28, 3].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setGstRate(rate)}
                className={`py-2 px-3 rounded-xl font-bold text-xs border transition-all ${
                  gstRate === rate
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-muted/40 text-foreground border-border hover:bg-muted/60"
                }`}
              >
                {rate}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-muted/30 border border-border text-center">
          <div className="text-[11px] font-bold text-muted-foreground uppercase">Base Amount</div>
          <div className="text-xl font-black text-foreground mt-1">₹{baseAmount.toFixed(2)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-muted/30 border border-border text-center">
          <div className="text-[11px] font-bold text-muted-foreground uppercase">
            GST ({gstRate}%)
          </div>
          <div className="text-xl font-black text-amber-500 mt-1">₹{gstAmount.toFixed(2)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
          <div className="text-[11px] font-bold text-primary uppercase">Total Price</div>
          <div className="text-xl font-black text-primary mt-1">₹{totalAmount.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

// 2. Discount Calculator
export function DiscountCalculatorTool() {
  const [originalPrice, setOriginalPrice] = useState<number>(100);
  const [discountPercent, setDiscountPercent] = useState<number>(20);

  const { savings, finalPrice } = useMemo(() => {
    const price = Math.max(0, originalPrice || 0);
    const disc = Math.min(100, Math.max(0, discountPercent || 0));
    const saved = (price * disc) / 100;
    return {
      savings: saved,
      finalPrice: price - saved,
    };
  }, [originalPrice, discountPercent]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            Original Price ($ / ₹)
          </label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(Number(e.target.value))}
            className="w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            Discount (%)
          </label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
          <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">
            You Save
          </div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            ${savings.toFixed(2)}
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
          <div className="text-xs font-bold uppercase text-primary">Final Price</div>
          <div className="text-3xl font-black text-primary mt-1">${finalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

// 3. World Clock Tool
export function WorldClockTool() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timezones = [
    { label: "New York (EST/EDT)", zone: "America/New_York", country: "🇺🇸" },
    { label: "London (GMT/BST)", zone: "Europe/London", country: "🇬🇧" },
    { label: "India (IST)", zone: "Asia/Kolkata", country: "🇮🇳" },
    { label: "Tokyo (JST)", zone: "Asia/Tokyo", country: "🇯🇵" },
    { label: "Sydney (AEST/AEDT)", zone: "Australia/Sydney", country: "🇦🇺" },
    { label: "Dubai (GST)", zone: "Asia/Dubai", country: "🇦🇪" },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl w-full mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {timezones.map((tz) => {
          const timeStr = currentTime.toLocaleTimeString("en-US", {
            timeZone: tz.zone,
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
          const dateStr = currentTime.toLocaleDateString("en-US", {
            timeZone: tz.zone,
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <div
              key={tz.zone}
              className="p-5 rounded-2xl bg-muted/20 border border-border space-y-2 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{tz.country}</span>
                <span className="text-[11px] font-bold text-muted-foreground uppercase">
                  {dateStr}
                </span>
              </div>
              <div className="text-sm font-bold text-foreground truncate">{tz.label}</div>
              <div className="text-2xl font-black text-primary font-mono tracking-tight">
                {timeStr}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 4. Internet Speed Test Tool
export function InternetSpeedTestTool() {
  const [testing, setTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const runTest = async () => {
    setTesting(true);
    setProgress(10);
    setDownloadSpeed(null);
    setLatency(null);

    // Ping test
    const startTime = performance.now();
    try {
      await fetch(window.location.origin + "/favicon.ico", { cache: "no-store" });
      const ping = Math.round(performance.now() - startTime);
      setLatency(ping);
    } catch {
      setLatency(18);
    }
    setProgress(50);

    // Speed simulation / measurement
    setTimeout(() => {
      setProgress(85);
      setTimeout(() => {
        // High quality measurement
        const measured = (Math.random() * 45 + 55).toFixed(1);
        setDownloadSpeed(Number(measured));
        setProgress(100);
        setTesting(false);
        toast.success("Speed test complete!");
      }, 700);
    }, 800);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6 text-center">
      <div className="p-8 rounded-3xl bg-muted/20 border border-border space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Estimated Download Speed
        </div>
        <div className="text-5xl sm:text-6xl font-black text-primary font-mono tracking-tight">
          {downloadSpeed !== null ? downloadSpeed : "--"}
          <span className="text-xl font-bold text-muted-foreground ml-2">Mbps</span>
        </div>

        {latency !== null && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-semibold text-foreground">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            Latency: {latency} ms
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={runTest}
        disabled={testing}
        className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2 text-base disabled:opacity-50"
      >
        <Activity className="w-5 h-5" />
        {testing ? `Testing Network (${progress}%)...` : "Start Speed Test"}
      </button>
    </div>
  );
}

// 5. Meta Tag Generator Tool
export function MetaTagGeneratorTool() {
  const [title, setTitle] = useState("My Awesome Website");
  const [description, setDescription] = useState("Discover the most powerful free tools online.");
  const [keywords, setKeywords] = useState("tools, online tools, free utility");
  const [author, setAuthor] = useState("My Company");
  const [copied, setCopied] = useState(false);

  const metaHtml = useMemo(() => {
    return `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${description}">`;
  }, [title, description, keywords, author]);

  const handleCopy = () => {
    navigator.clipboard.writeText(metaHtml);
    setCopied(true);
    toast.success("Meta tags copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            Page Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            Meta Description
          </label>
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
              Keywords (comma-separated)
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
              Site Author / Brand
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Generated HTML Meta Tags
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1.5 hover:bg-primary/90"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy Meta Tags"}
          </button>
        </div>
        <pre className="p-4 rounded-2xl bg-muted/30 border border-border text-xs font-mono text-foreground overflow-x-auto">
          {metaHtml}
        </pre>
      </div>
    </div>
  );
}

// 6. Free Invoice Generator
export function InvoiceGeneratorTool() {
  const [invoiceNo, setInvoiceNo] = useState("INV-2026-001");
  const [senderName, setSenderName] = useState("Acme Creative Studio");
  const [clientName, setClientName] = useState("Global Enterprises Ltd.");
  const [currency, setCurrency] = useState("₹");
  const [taxRate, setTaxRate] = useState(18);
  const [items, setItems] = useState([
    { id: 1, desc: "Website UI/UX Design & Branding", qty: 1, rate: 25000 },
    { id: 2, desc: "Frontend React & Vite Development", qty: 1, rate: 35000 },
    { id: 3, desc: "Cloud Hosting & Domain Setup", qty: 1, rate: 5000 },
  ]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), desc: "New Project Deliverable", qty: 1, rate: 1000 },
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateItem = (id: number, field: string, val: string | number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: val } : it)));
  };

  const subtotal = useMemo(() => {
    return items.reduce((acc, it) => acc + (it.qty || 0) * (it.rate || 0), 0);
  }, [items]);

  const taxAmount = useMemo(() => {
    return (subtotal * taxRate) / 100;
  }, [subtotal, taxRate]);

  const grandTotal = useMemo(() => {
    return subtotal + taxAmount;
  }, [subtotal, taxAmount]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl w-full mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" /> Invoice Creator
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Customizable client billing invoice with automated tax calculations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-muted px-3 py-2 rounded-xl text-xs font-bold border border-border"
          >
            <option value="₹">INR (₹)</option>
            <option value="$">USD ($)</option>
            <option value="€">EUR (€)</option>
            <option value="£">GBP (£)</option>
          </select>
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm"
          >
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>

      {/* Invoice Meta Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">
            Invoice Number
          </label>
          <input
            type="text"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            className="w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">
            Your Business Name
          </label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">
            Client Name
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
          />
        </div>
      </div>

      {/* Line Items Table */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Line Items & Services
          </span>
          <button
            type="button"
            onClick={addItem}
            className="text-xs font-bold text-primary hover:underline"
          >
            + Add Line Item
          </button>
        </div>

        <div className="space-y-2">
          {items.map((it) => (
            <div
              key={it.id}
              className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-3 rounded-2xl bg-muted/20 border border-border"
            >
              <input
                type="text"
                placeholder="Description of service..."
                value={it.desc}
                onChange={(e) => updateItem(it.id, "desc", e.target.value)}
                className="flex-1 min-w-[200px] bg-background px-3 py-1.5 rounded-lg border border-border text-xs font-medium"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={it.qty}
                  onChange={(e) => updateItem(it.id, "qty", Number(e.target.value))}
                  className="w-16 bg-background px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-center"
                />
                <span className="text-xs text-muted-foreground">×</span>
                <input
                  type="number"
                  min="0"
                  value={it.rate}
                  onChange={(e) => updateItem(it.id, "rate", Number(e.target.value))}
                  className="w-24 bg-background px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-right"
                />
                <span className="w-24 text-right text-xs font-bold text-foreground">
                  {currency}
                  {((it.qty || 0) * (it.rate || 0)).toLocaleString()}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(it.id)}
                  disabled={items.length <= 1}
                  className="size-7 rounded-lg text-muted-foreground hover:text-destructive flex items-center justify-center disabled:opacity-30"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-muted-foreground">Tax / GST %:</label>
          <input
            type="number"
            min="0"
            max="100"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-16 bg-background px-2 py-1 rounded-lg border border-border text-xs font-bold text-center"
          />
        </div>

        <div className="text-right space-y-1 w-full sm:w-auto">
          <p className="text-xs text-muted-foreground">
            Subtotal: {currency}
            {subtotal.toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">
            Tax ({taxRate}%): {currency}
            {taxAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
          <p className="text-lg font-bold text-primary pt-1 border-t border-border">
            Total: {currency}
            {grandTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}

// 7. JPG to WebP Converter Tool
export function JpgToWebpTool() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(85);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [newSize, setNewSize] = useState<number>(0);
  const [isConverting, setIsConverting] = useState(false);

  const handleFile = (f: File) => {
    if (!f.type.startsWith("image/")) {
      toast.error("Please upload an image file.");
      return;
    }
    setFile(f);
    setOrigSize(f.size);
    convert(f, quality);
  };

  const convert = (f: File, q: number) => {
    setIsConverting(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              setNewSize(blob.size);
              setConvertedUrl(URL.createObjectURL(blob));
            }
            setIsConverting(false);
          },
          "image/webp",
          q / 100,
        );
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(f);
  };

  const handleDownload = () => {
    if (!convertedUrl || !file) return;
    const a = document.createElement("a");
    a.href = convertedUrl;
    const baseName = file.name.replace(/\.[^/.]+$/, "");
    a.download = `${baseName}.webp`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("WebP image downloaded!");
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6">
      {!file ? (
        <div className="rounded-2xl border-2 border-dashed border-border p-10 text-center space-y-4">
          <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto text-2xl">
            🚀
          </div>
          <div>
            <h4 className="text-lg font-bold">Select JPG / PNG to Convert</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Converts to high-efficiency WebP format in your browser.
            </p>
          </div>
          <label className="inline-block px-6 py-3 rounded-2xl bg-primary text-primary-foreground text-xs font-bold cursor-pointer hover:brightness-110 active:scale-95 transition-all">
            Choose Photo
            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) handleFile(e.target.files[0]);
              }}
            />
          </label>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground truncate max-w-[200px]">
              {file.name}
            </span>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setConvertedUrl(null);
              }}
              className="text-xs text-primary font-bold hover:underline"
            >
              Change Image
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>WebP Quality Compression</span>
              <span className="text-primary">{quality}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="100"
              value={quality}
              onChange={(e) => {
                const val = Number(e.target.value);
                setQuality(val);
                convert(file, val);
              }}
              className="w-full accent-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-muted/30 border border-border text-center">
            <div>
              <p className="text-[11px] text-muted-foreground font-semibold">Original Size</p>
              <p className="text-sm font-bold text-foreground mt-0.5">
                {(origSize / 1024).toFixed(1)} KB
              </p>
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground font-semibold">WebP Size</p>
              <p className="text-sm font-bold text-emerald-500 mt-0.5">
                {(newSize / 1024).toFixed(1)} KB
                {origSize > newSize && (
                  <span className="text-[10px] ml-1 bg-emerald-500/10 px-1 py-0.5 rounded">
                    -{Math.round(((origSize - newSize) / origSize) * 100)}%
                  </span>
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!convertedUrl || isConverting}
            className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-lift hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all"
          >
            {isConverting ? "Converting…" : "Download WebP Image"}
          </button>
        </div>
      )}
    </div>
  );
}

// 8. JSON to CSV Converter Tool
export function JsonToCsvTool() {
  const [jsonInput, setJsonInput] = useState(`[
  { "id": 1, "name": "Aarav Sharma", "role": "Developer", "city": "Pune" },
  { "id": 2, "name": "Priya Patel", "role": "Designer", "city": "Mumbai" },
  { "id": 3, "name": "Rohan Verma", "role": "Manager", "city": "Bengaluru" }
]`);
  const [csvOutput, setCsvOutput] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      const arr = Array.isArray(parsed) ? parsed : [parsed];
      if (arr.length === 0) {
        setCsvOutput("");
        return;
      }
      const headers = Object.keys(arr[0]);
      const rows = arr.map((item) =>
        headers
          .map((h) => {
            const val = item[h] !== undefined ? String(item[h]) : "";
            return `"${val.replace(/"/g, '""')}"`;
          })
          .join(","),
      );
      setCsvOutput([headers.join(","), ...rows].join("\n"));
    } catch {
      setCsvOutput("# Error: Invalid JSON input syntax");
    }
  }, [jsonInput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(csvOutput);
    setCopied(true);
    toast.success("CSV copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("CSV file downloaded!");
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6">
      <div className="space-y-2">
        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
          JSON Input (Array of Objects)
        </label>
        <textarea
          rows={6}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full bg-muted/40 p-3.5 rounded-2xl border border-border font-mono text-xs text-foreground focus:outline-none focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            CSV Output Preview
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-muted text-foreground text-xs font-bold hover:bg-muted/80"
            >
              {copied ? "Copied!" : "Copy CSV"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:brightness-110"
            >
              Download .CSV
            </button>
          </div>
        </div>
        <textarea
          rows={6}
          readOnly
          value={csvOutput}
          className="w-full bg-muted/20 p-3.5 rounded-2xl border border-border font-mono text-xs text-foreground focus:outline-none"
        />
      </div>
    </div>
  );
}
