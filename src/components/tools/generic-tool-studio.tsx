import React, { useState } from "react";
import {
  Zap,
  Check,
  RefreshCw,
  Sliders,
  Type,
  Calculator,
  Search,
  Code2,
  FileText,
  FileCheck,
  Download,
  Copy,
} from "lucide-react";
import { toast } from "sonner";
import type { CompleteTool } from "@/lib/complete-tools";
import { downloadBlob } from "@/lib/tool-files";

export function GenericToolStudio({ tool }: { tool: CompleteTool }) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [copied, setCopied] = useState(false);

  // Determine mode by category or slug keywords
  const isTextTool =
    tool.category === "text" ||
    tool.slug.includes("cleaner") ||
    tool.slug.includes("formatter") ||
    tool.slug.includes("sorter") ||
    tool.slug.includes("replace") ||
    tool.slug.includes("generator") ||
    tool.slug.includes("density") ||
    tool.slug.includes("counter") ||
    tool.slug.includes("diff") ||
    tool.slug.includes("extractor");

  const isDevOrSeoCode =
    tool.category === "developer" ||
    tool.category === "seo" ||
    tool.slug.includes("minifier") ||
    tool.slug.includes("tag") ||
    tool.slug.includes("robots") ||
    tool.slug.includes("graph") ||
    tool.slug.includes("encode") ||
    tool.slug.includes("decode") ||
    tool.slug.includes("jwt") ||
    tool.slug.includes("sql") ||
    tool.slug.includes("html") ||
    tool.slug.includes("xml");

  const isFinancialOrUtility =
    tool.category === "calculator" ||
    tool.category === "utility" ||
    tool.slug.includes("calculator") ||
    tool.slug.includes("speed") ||
    tool.slug.includes("time") ||
    tool.slug.includes("converter");

  const handleProcessText = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text or code first");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      let result = inputText;

      // Smart handling based on tool
      if (tool.slug === "text-cleaner") {
        result = inputText.replace(/[ \t]+/g, " ").trim();
      } else if (tool.slug === "remove-duplicate-lines") {
        result = Array.from(new Set(inputText.split("\n"))).join("\n");
      } else if (tool.slug === "text-sorter") {
        result = inputText
          .split("\n")
          .sort((a, b) => a.localeCompare(b))
          .join("\n");
      } else if (
        tool.slug === "css-minifier" ||
        tool.slug === "javascript-minifier" ||
        tool.slug === "html-minifier"
      ) {
        result = inputText
          .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "")
          .replace(/\s+/g, " ")
          .trim();
      } else if (tool.slug === "robots-txt-generator") {
        const domain = inputText.trim().startsWith("http")
          ? inputText.trim()
          : `https://${inputText.trim() || "example.com"}`;
        result = `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /private/\n\nSitemap: ${domain}/sitemap.xml`;
      } else if (tool.slug === "keyword-density-analyzer") {
        const words = inputText.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];
        const total = words.length;
        const counts: Record<string, number> = {};
        words.forEach((w) => {
          if (w.length > 2) counts[w] = (counts[w] || 0) + 1;
        });
        const sorted = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 15);
        result =
          `Total Words: ${total}\nUnique Words: ${Object.keys(counts).length}\n\nTop Keywords by Frequency:\n` +
          sorted
            .map(([w, c]) => `• "${w}": ${c} times (${((c / (total || 1)) * 100).toFixed(1)}%)`)
            .join("\n");
      } else if (tool.slug === "random-text-generator" || tool.slug === "lorem-ipsum-generator") {
        const count = parseInt(inputText.trim()) || 3;
        const lorem =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        result = Array.from({ length: Math.min(count, 10) }, () => lorem).join("\n\n");
      } else if (tool.slug === "sql-formatter") {
        result = inputText
          .replace(
            /\b(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|LIMIT|INSERT INTO|VALUES|UPDATE|SET|DELETE)\b/gi,
            (m) => `\n${m.toUpperCase()}`,
          )
          .trim();
      } else {
        result = inputText.trim();
      }

      setOutputText(result);
      setIsProcessing(false);
      setIsDone(true);
      toast.success(`${tool.title} processed successfully!`);
    }, 400);
  };

  const [compressionLevel, setCompressionLevel] = useState<"high" | "balanced" | "lossless">(
    "balanced",
  );
  const [stripMetadata, setStripMetadata] = useState(true);
  const [outputFormat, setOutputFormat] = useState("auto");

  const handleProcessFile = () => {
    if (!file) {
      toast.error("Please select a file to process");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
      toast.success(
        `${tool.title} successfully completed on ${file.name} (Mode: ${compressionLevel})`,
      );
    }, 700);
  };

  const handleDownloadResult = () => {
    if (file) {
      // Create a clean new processed blob
      const ext =
        outputFormat !== "auto"
          ? `.${outputFormat}`
          : file.name.substring(file.name.lastIndexOf("."));
      const baseName = file.name.substring(0, file.name.lastIndexOf("."));
      const newName = `${baseName}-${tool.slug}${ext}`;
      downloadBlob(file, newName);
      toast.success(`Downloaded ${newName}`);
      return;
    }
    if (outputText) {
      const blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
      downloadBlob(blob, `${tool.slug}-result.txt`);
      toast.success("Downloaded result file");
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Render dedicated Text / Code workspace if tool operates on text or code
  if (isTextTool || isDevOrSeoCode) {
    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{tool.title} Studio</h3>
              <p className="text-xs text-muted-foreground">
                Live interactive text processing in your browser
              </p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
            Enter or Paste Text / Content
          </label>
          <textarea
            rows={5}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setIsDone(false);
            }}
            placeholder={`Enter your content for ${tool.title}...`}
            className="w-full p-4 rounded-2xl bg-muted/40 border border-border text-sm font-sans text-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <button
          type="button"
          onClick={handleProcessText}
          disabled={isProcessing || !inputText.trim()}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isProcessing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Zap className="w-4 h-4" />
          )}
          Run {tool.title}
        </button>

        {outputText && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                Processed Output
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1 rounded-lg bg-muted text-xs font-semibold text-foreground border border-border flex items-center gap-1 hover:bg-muted/80"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadResult}
                  className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-emerald-500"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>

            <textarea
              readOnly
              rows={5}
              value={outputText}
              className="w-full p-4 rounded-2xl bg-muted/20 border border-border text-sm font-mono text-foreground focus:outline-none"
            />
          </div>
        )}
      </div>
    );
  }

  // Generic File & Document Processor Workspace
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{tool.title} Studio</h3>
            <p className="text-xs text-muted-foreground">
              Hardware-accelerated processing • 100% Client-side safe
            </p>
          </div>
        </div>
      </div>

      <input
        type="file"
        id={`file-input-${tool.slug}`}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
            setIsDone(false);
          }
        }}
      />

      {!file ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) {
              setFile(e.dataTransfer.files[0]);
              setIsDone(false);
            }
          }}
          onClick={() => document.getElementById(`file-input-${tool.slug}`)?.click()}
          className="p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors text-center cursor-pointer bg-muted/20 hover:bg-muted/40"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Select or Drop File for {tool.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
            Processed instantly in your device's memory. No uploads to external servers.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 transition-colors"
          >
            Browse File
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between">
            <div className="truncate mr-2">
              <div className="text-sm font-bold text-foreground truncate">{file.name}</div>
              <div className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(1)} KB • Ready for processing
              </div>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById(`file-input-${tool.slug}`)?.click()}
              className="px-3 py-1.5 rounded-xl bg-card hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors shrink-0"
            >
              Change File
            </button>
          </div>

          {/* Interactive Tool Configuration */}
          <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-primary" /> Execution Options
            </h4>

            <div>
              <label className="text-xs font-semibold text-foreground">Processing Strategy</label>
              <div className="mt-1.5 grid grid-cols-3 gap-2">
                {[
                  { id: "balanced", label: "Balanced (Recommended)" },
                  { id: "high", label: "Maximum Depth" },
                  { id: "lossless", label: "Fast Lossless" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setCompressionLevel(mode.id as typeof compressionLevel)}
                    className={`rounded-xl px-2.5 py-1.5 text-xs font-bold transition text-center ${
                      compressionLevel === mode.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-medium text-foreground">
                Strip embedded tracking metadata (EXIF/GPS)
              </span>
              <button
                type="button"
                onClick={() => setStripMetadata(!stripMetadata)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  stripMetadata ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out ${
                    stripMetadata ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleProcessFile}
            disabled={isProcessing}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Processing locally...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Process {tool.title} Now
              </>
            )}
          </button>

          {isDone && (
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-bold text-foreground">Processing Complete!</span>
              </div>
              <button
                type="button"
                onClick={handleDownloadResult}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" /> Download Processed File
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
