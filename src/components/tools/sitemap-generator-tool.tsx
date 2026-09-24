import React, { useState } from "react";
import { Globe, Copy, Check, Download, FileCode, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { downloadBlob } from "@/lib/tool-files";

interface UrlEntry {
  url: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
  lastmod: string;
}

export function SitemapGeneratorTool() {
  const [domain, setDomain] = useState("https://example.com");
  const [urls, setUrls] = useState<UrlEntry[]>([
    {
      url: "/",
      changefreq: "daily",
      priority: "1.0",
      lastmod: new Date().toISOString().split("T")[0],
    },
    {
      url: "/about",
      changefreq: "monthly",
      priority: "0.8",
      lastmod: new Date().toISOString().split("T")[0],
    },
    {
      url: "/contact",
      changefreq: "monthly",
      priority: "0.5",
      lastmod: new Date().toISOString().split("T")[0],
    },
  ]);
  const [bulkInput, setBulkInput] = useState("");
  const [isBulkMode, setIsBulkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const cleanDomain = domain.trim().replace(/\/+$/, "");

  const generatedXml = React.useMemo(() => {
    const list = isBulkMode
      ? bulkInput
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0)
          .map((path) => ({
            url: path.startsWith("http")
              ? path
              : `${cleanDomain}${path.startsWith("/") ? "" : "/"}${path}`,
            changefreq: "weekly",
            priority: "0.8",
            lastmod: new Date().toISOString().split("T")[0],
          }))
      : urls.map((u) => ({
          url: u.url.startsWith("http")
            ? u.url
            : `${cleanDomain}${u.url.startsWith("/") ? "" : "/"}${u.url}`,
          changefreq: u.changefreq,
          priority: u.priority,
          lastmod: u.lastmod,
        }));

    const lines = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...list.map(
        (item) =>
          `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${item.lastmod}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`,
      ),
      "</urlset>",
    ];

    return lines.join("\n");
  }, [cleanDomain, urls, bulkInput, isBulkMode]);

  const addUrl = () => {
    setUrls([
      ...urls,
      {
        url: "/new-page",
        changefreq: "weekly",
        priority: "0.8",
        lastmod: new Date().toISOString().split("T")[0],
      },
    ]);
  };

  const removeUrl = (idx: number) => {
    if (urls.length <= 1) {
      toast.error("You must have at least one URL");
      return;
    }
    setUrls(urls.filter((_, i) => i !== idx));
  };

  const updateUrl = (idx: number, field: keyof UrlEntry, val: string) => {
    const next = [...urls];
    next[idx] = { ...next[idx], [field]: val };
    setUrls(next);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedXml);
    setCopied(true);
    toast.success("XML Sitemap copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedXml], { type: "application/xml;charset=utf-8" });
    downloadBlob(blob, "sitemap.xml");
    toast.success("sitemap.xml downloaded successfully!");
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
            <FileCode className="w-5 h-5 text-primary" />
            XML Sitemap Generator
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Create search engine compliant sitemap.xml for Google, Bing, and Yandex
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsBulkMode(!isBulkMode)}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors"
          >
            {isBulkMode ? "Visual Editor" : "Bulk Paste URLs"}
          </button>
        </div>
      </div>

      {/* Domain Input */}
      <div>
        <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
          Website Domain URL
        </label>
        <div className="relative">
          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Visual URL list or Bulk text area */}
      {!isBulkMode ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Website Pages ({urls.length})
            </label>
            <button
              type="button"
              onClick={addUrl}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <Plus className="w-3.5 h-3.5" /> Add URL
            </button>
          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {urls.map((u, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1fr_120px_90px_auto] gap-2 p-2.5 rounded-xl bg-muted/20 border border-border items-center"
              >
                <input
                  type="text"
                  value={u.url}
                  onChange={(e) => updateUrl(i, "url", e.target.value)}
                  placeholder="/page-url"
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-foreground"
                />
                <select
                  value={u.changefreq}
                  onChange={(e) => updateUrl(i, "changefreq", e.target.value)}
                  className="px-2 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground cursor-pointer"
                >
                  <option value="always">Always</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="never">Never</option>
                </select>
                <select
                  value={u.priority}
                  onChange={(e) => updateUrl(i, "priority", e.target.value)}
                  className="px-2 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground cursor-pointer"
                >
                  <option value="1.0">1.0 (Top)</option>
                  <option value="0.8">0.8 (High)</option>
                  <option value="0.6">0.6 (Normal)</option>
                  <option value="0.5">0.5 (Mid)</option>
                  <option value="0.3">0.3 (Low)</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeUrl(i)}
                  className="p-2 text-muted-foreground hover:text-destructive rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
            Paste Page Paths (One per line)
          </label>
          <textarea
            rows={6}
            value={bulkInput}
            onChange={(e) => setBulkInput(e.target.value)}
            placeholder={`/\n/products\n/blog\n/pricing\n/contact`}
            className="w-full p-3 rounded-xl bg-muted/30 border border-border text-xs font-mono text-foreground focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {/* XML Code Output Preview & Action Buttons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-foreground uppercase tracking-wider">
            Generated sitemap.xml Preview
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-muted hover:bg-muted/80 text-xs font-semibold text-foreground border border-border transition-colors"
            >
              {copied ? (
                <Check className="w-3 h-3 text-emerald-500" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
              {copied ? "Copied" : "Copy XML"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download sitemap.xml
            </button>
          </div>
        </div>

        <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 text-xs font-mono overflow-x-auto max-h-56 leading-relaxed">
          {generatedXml}
        </pre>
      </div>
    </div>
  );
}
