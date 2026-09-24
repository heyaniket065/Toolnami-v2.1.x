import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Sliders,
  Play,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { ToolShell, toolJsonLd } from "@/components/tools/tool-shell";
import { getToolBySlug, COMPLETE_TOOLS, type CompleteTool } from "@/lib/complete-tools";
import type { LiveToolSlug, ToolBadge } from "@/lib/phase1-tools";
import { Reveal } from "@/components/site/reveal";
import { FormattedMarkdown } from "@/components/ui/formatted-markdown";
import { useToolUsage } from "@/hooks/use-tool-usage";
import { useAuth } from "@/hooks/use-auth";
import { CurrencyConverterTool } from "@/components/tools/currency-converter-tool";
import { ImageResizerTool } from "@/components/tools/image-resizer-tool";
import { SitemapGeneratorTool } from "@/components/tools/sitemap-generator-tool";
import { ColorConverterTool } from "@/components/tools/color-converter-tool";
import {
  GstCalculatorTool,
  DiscountCalculatorTool,
  WorldClockTool,
  InternetSpeedTestTool,
  MetaTagGeneratorTool,
  InvoiceGeneratorTool,
  JpgToWebpTool,
  JsonToCsvTool,
} from "@/components/tools/extra-specialized-tools";
import { GenericToolStudio } from "@/components/tools/generic-tool-studio";
import { BackgroundRemoverTool } from "@/components/tools/background-remover-tool";
import { ImageSizeReducerTool } from "@/components/tools/image-size-reducer-tool";
import {
  PdfRotateTool,
  PdfSplitTool,
  PdfWatermarkTool,
  PdfProtectTool,
  PdfToTextTool,
} from "@/components/tools/pdf-interactive-tools";
import {
  ImageWatermarkTool,
  ImageCropperTool,
  ImageRotateFlipTool,
  SvgToPngTool,
} from "@/components/tools/image-interactive-tools";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getToolBySlug(params.slug);
    if (!tool) {
      throw notFound();
    }
    return { tool };
  },
  head: ({ loaderData }) => {
    const tool = loaderData?.tool;
    if (!tool) return { meta: [{ title: "Tool Not Found — ToolNami" }] };

    const toolUrl = `https://toolnami.com/tools/${tool.slug}`;

    return {
      meta: [
        { title: tool.seoTitle },
        { name: "description", content: tool.seoDescription },
        { name: "keywords", content: tool.keywords.join(", ") },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { property: "og:site_name", content: "ToolNami" },
        { property: "og:title", content: tool.seoTitle },
        { property: "og:description", content: tool.seoDescription },
        { property: "og:image", content: tool.image },
        { property: "og:type", content: "website" },
        { property: "og:url", content: toolUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@Instgram136" },
        { name: "twitter:creator", content: "@Instgram136" },
        { name: "twitter:title", content: tool.seoTitle },
        { name: "twitter:description", content: tool.seoDescription },
        { name: "twitter:image", content: tool.image },
      ],
      links: [{ rel: "canonical", href: toolUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: toolJsonLd({
            name: tool.title,
            description: tool.technicalDescription || tool.summary,
            url: toolUrl,
            faqs: tool.faqs,
          }),
        },
      ],
    };
  },
  component: DynamicToolPage,
});

function DynamicToolPage() {
  const { tool } = Route.useLoaderData();
  const { formatted: dynamicUsageText } = useToolUsage(tool.baseUses, tool.slug);

  // Find 3 related tools in same category
  const relatedTools = useMemo(() => {
    return COMPLETE_TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(
      0,
      3,
    );
  }, [tool]);

  return (
    <ToolShell
      title={tool.title}
      tagline={tool.summary}
      categoryLabel={tool.categoryLabel}
      thumbnail={tool.image}
      badge={{
        label: tool.badge.label,
        icon: tool.badge.icon,
        tone: tool.badge.tone as ToolBadge["tone"],
      }}
      dynamicUses={dynamicUsageText}
      toolSlug={tool.slug}
      relatedSlugs={["pdf-compressor", "image-compressor", "qr-code-generator"] as LiveToolSlug[]}
      about={tool.technicalDescription}
      steps={tool.howToSteps}
      benefits={[
        {
          title: "100% Client-Side Privacy",
          body: "Files and data are processed locally on your machine with zero server uploads.",
        },
        {
          title: "No Size or Usage Limits",
          body: "Use this tool as many times as you need without signup or restrictions.",
        },
        {
          title: "Lightning Fast Execution",
          body: "Hardware-accelerated processing provides instant real-time results.",
        },
      ]}
      faqs={tool.faqs}
      seo={{
        heading: `About ${tool.title} — Free Online Tool`,
        paragraphs: [
          tool.technicalDescription,
          `ToolNami's ${tool.title} is designed to be 100% private, ultra-fast, and completely free. Unlike legacy web tools that require you to upload confidential data to remote cloud servers, our architecture runs directly within your modern web browser using client-side WebAssembly, JavaScript, and HTML5 APIs.`,
          `Whether you are a developer, designer, student, accountant, or business professional, this tool streamlines your daily workflow with zero software installations, zero credit card requirements, and zero usage limits.`,
        ],
      }}
    >
      <InteractiveToolWorkspace tool={tool} />
    </ToolShell>
  );
}

function InteractiveToolWorkspace({ tool }: { tool: CompleteTool }) {
  // Render specialized UI based on category or specific tool slug
  switch (tool.slug) {
    case "image-background-remover":
    case "background-remover":
      return <BackgroundRemoverTool />;
    case "image-size-reducer":
    case "photo-size-reducer":
    case "reduce-image-size":
      return <ImageSizeReducerTool />;
    case "password-generator":
      return <PasswordGeneratorTool />;
    case "uuid-generator":
      return <UuidGeneratorTool />;
    case "word-counter":
    case "character-counter":
    case "line-counter":
      return <TextMetricsTool mode={tool.slug} />;
    case "case-converter":
      return <CaseConverterTool />;
    case "base64-encode":
    case "base64-decode":
    case "base64-encoder":
      return <Base64Tool mode={tool.slug === "base64-decode" ? "decode" : "encode"} />;
    case "url-encoder":
    case "url-decoder":
      return <UrlTool mode={tool.slug === "url-encoder" ? "encode" : "decode"} />;
    case "hash-generator":
      return <HashGeneratorTool />;
    case "json-formatter":
    case "json-validator":
      return <JsonTool mode={tool.slug === "json-formatter" ? "format" : "validate"} />;
    case "age-calculator":
      return <AgeCalculatorTool />;
    case "bmi-calculator":
      return <BmiCalculatorTool />;
    case "percentage-calculator":
      return <PercentageCalculatorTool />;
    case "emi-calculator":
    case "loan-emi-calculator":
      return <EmiCalculatorTool />;
    case "random-number-generator":
      return <RandomNumberTool />;
    case "dice-roller":
      return <DiceRollerTool />;
    case "currency-converter":
      return <CurrencyConverterTool />;
    case "image-resizer":
      return <ImageResizerTool />;
    case "sitemap-generator":
      return <SitemapGeneratorTool />;
    case "color-converter":
      return <ColorConverterTool />;
    case "unit-converter":
      return <UnitConverterTool />;
    case "gst-calculator":
      return <GstCalculatorTool />;
    case "discount-calculator":
      return <DiscountCalculatorTool />;
    case "invoice-generator":
      return <InvoiceGeneratorTool />;
    case "jpg-to-webp":
    case "png-to-webp":
      return <JpgToWebpTool />;
    case "json-to-csv":
      return <JsonToCsvTool />;
    case "pdf-rotate":
    case "rotate-pdf":
      return <PdfRotateTool />;
    case "pdf-split":
    case "split-pdf":
    case "pdf-splitter":
      return <PdfSplitTool />;
    case "pdf-watermark":
      return <PdfWatermarkTool />;
    case "pdf-protect":
    case "pdf-unlock":
      return <PdfProtectTool />;
    case "pdf-to-text":
      return <PdfToTextTool />;
    case "image-watermark":
    case "image-watermark-adder":
      return <ImageWatermarkTool />;
    case "image-cropper":
    case "crop-image":
      return <ImageCropperTool />;
    case "image-rotate":
    case "rotate-image":
    case "image-flip":
    case "flip-image":
      return <ImageRotateFlipTool />;
    case "svg-to-png":
      return <SvgToPngTool />;
    case "world-clock":
      return <WorldClockTool />;
    case "internet-speed-test":
      return <InternetSpeedTestTool />;
    case "meta-tag-generator":
      return <MetaTagGeneratorTool />;
    case "ai-content-writer":
    case "ai-blog-generator":
    case "ai-title-generator":
    case "ai-caption-generator":
    case "ai-hashtag-generator":
      return <AiGeneratorTool tool={tool} />;
    default:
      return <GenericToolStudio tool={tool} />;
  }
}

// ==================== SPECIFIC INTERACTIVE TOOL WORKSPACES ====================

function PasswordGeneratorTool() {
  const [length, setLength] = useState(18);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let chars = "";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (!chars) {
      toast.error("Please select at least one character type!");
      return;
    }

    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
  };

  useEffect(() => {
    if (!password) generate();
  }, [password]);

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    toast.success("Password copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
          Generated Secure Password
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            readOnly
            value={password}
            className="flex-1 font-mono text-lg font-bold bg-muted/50 text-foreground px-4 py-3 rounded-xl border border-border focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={generate}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Regenerate</span>
            </button>
            <button
              onClick={copy}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Password Length</span>
              <span className="text-sm font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                {length} characters
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={(e) => {
                setLength(Number(e.target.value));
                generate();
              }}
              className="w-full accent-primary cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={useUpper}
                onChange={(e) => {
                  setUseUpper(e.target.checked);
                  generate();
                }}
                className="rounded text-primary focus:ring-primary"
              />
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={useLower}
                onChange={(e) => {
                  setUseLower(e.target.checked);
                  generate();
                }}
                className="rounded text-primary focus:ring-primary"
              />
              <span>Lowercase (a-z)</span>
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => {
                  setUseNumbers(e.target.checked);
                  generate();
                }}
                className="rounded text-primary focus:ring-primary"
              />
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => {
                  setUseSymbols(e.target.checked);
                  generate();
                }}
                className="rounded text-primary focus:ring-primary"
              />
              <span>Symbols (!@#$)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function UuidGeneratorTool() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = () => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) {
      list.push(crypto.randomUUID());
    }
    setUuids(list);
  };

  useEffect(() => {
    generate();
  }, [count]);

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
    toast.success(`Copied ${uuids.length} UUIDs to clipboard!`);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold">Quantity:</label>
            <select
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="bg-muted px-3 py-1.5 rounded-lg border border-border text-sm font-medium"
            >
              <option value={1}>1 UUID</option>
              <option value={5}>5 UUIDs</option>
              <option value={10}>10 UUIDs</option>
              <option value={25}>25 UUIDs</option>
              <option value={50}>50 UUIDs</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={generate}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-muted text-sm font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Regenerate</span>
            </button>
            <button
              onClick={copyAll}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy All</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto font-mono text-sm">
          {uuids.map((id, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border hover:bg-muted/70 transition-colors"
            >
              <span className="font-semibold select-all">{id}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(id);
                  toast.success("UUID copied!");
                }}
                className="text-xs text-primary hover:underline font-sans"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TextMetricsTool({ mode }: { mode: string }) {
  const [text, setText] = useState("");

  const words = useMemo(() => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }, [text]);

  const charsWithSpaces = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const lines = text ? text.split("\n").length : 0;
  const readingTime = Math.ceil(words / 200);

  return (
    <div className="space-y-6">
      {/* Live Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary">{words}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">
            Words
          </div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <div className="text-2xl sm:text-3xl font-bold text-foreground">{charsWithSpaces}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">
            Characters
          </div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <div className="text-2xl sm:text-3xl font-bold text-foreground">{lines}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">
            Lines
          </div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <div className="text-2xl sm:text-3xl font-bold text-emerald-500">{readingTime} min</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">
            Reading Time
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here to view instant live metrics..."
          rows={10}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base leading-relaxed"
        />
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Without spaces: {charsNoSpaces} characters
          </span>
          <button
            onClick={() => setText("")}
            className="text-xs text-muted-foreground hover:text-foreground font-medium"
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseConverterTool() {
  const [text, setText] = useState("");

  const transform = (type: string) => {
    switch (type) {
      case "upper":
        setText(text.toUpperCase());
        break;
      case "lower":
        setText(text.toLowerCase());
        break;
      case "title":
        setText(
          text.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
          ),
        );
        break;
      case "camel":
        setText(text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase()));
        break;
      case "snake":
        setText(text.trim().toLowerCase().replace(/\s+/g, "_"));
        break;
      case "kebab":
        setText(text.trim().toLowerCase().replace(/\s+/g, "-"));
        break;
    }
    toast.success("Converted!");
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert into different cases..."
          rows={8}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base leading-relaxed"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => transform("upper")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            UPPERCASE
          </button>
          <button
            onClick={() => transform("lower")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            lowercase
          </button>
          <button
            onClick={() => transform("title")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            Title Case
          </button>
          <button
            onClick={() => transform("camel")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            camelCase
          </button>
          <button
            onClick={() => transform("snake")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            snake_case
          </button>
          <button
            onClick={() => transform("kebab")}
            className="px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold"
          >
            kebab-case
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(text);
              toast.success("Copied to clipboard!");
            }}
            className="ml-auto px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 flex items-center gap-1.5"
          >
            <Copy className="w-4 h-4" /> Copy
          </button>
        </div>
      </div>
    </div>
  );
}

function Base64Tool({ mode }: { mode: "encode" | "decode" }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
      toast.success(mode === "encode" ? "Encoded to Base64!" : "Decoded from Base64!");
    } catch {
      toast.error("Invalid input string for Base64 processing!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
          {mode === "encode" ? "Plaintext Input" : "Base64 Input"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Enter text to ${mode}...`}
          rows={8}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
        />
        <button
          onClick={process}
          className="mt-4 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
        >
          {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
            {mode === "encode" ? "Base64 Result" : "Decoded Plaintext"}
          </label>
          {output && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(output);
                toast.success("Copied to clipboard!");
              }}
              className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" /> Copy
            </button>
          )}
        </div>
        <textarea
          readOnly
          value={output}
          placeholder="Result will appear here..."
          rows={8}
          className="w-full bg-muted/50 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}

function UrlTool({ mode }: { mode: "encode" | "decode" }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
      toast.success(mode === "encode" ? "Encoded URL!" : "Decoded URL!");
    } catch {
      toast.error("Invalid URL string!");
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
          Input URL / Query String
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://example.com/search?q=test string & more"
            className="flex-1 bg-muted/40 px-4 py-3 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
          />
          <button
            onClick={process}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            {mode === "encode" ? "Encode" : "Decode"}
          </button>
        </div>

        {output && (
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Result
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(output);
                  toast.success("Copied to clipboard!");
                }}
                className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" /> Copy
              </button>
            </div>
            <div className="p-4 rounded-xl bg-muted/50 font-mono text-sm break-all select-all border border-border">
              {output}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<{ sha256: string; sha512: string; sha1: string }>({
    sha256: "",
    sha512: "",
    sha1: "",
  });

  const compute = async () => {
    if (!input) return;
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const buf256 = await crypto.subtle.digest("SHA-256", data);
    const buf512 = await crypto.subtle.digest("SHA-512", data);
    const buf1 = await crypto.subtle.digest("SHA-1", data);

    const toHex = (buf: ArrayBuffer) =>
      Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    setHashes({
      sha256: toHex(buf256),
      sha512: toHex(buf512),
      sha1: toHex(buf1),
    });
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
          Input Text
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to generate cryptographic hashes..."
          rows={4}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
        />
        <button
          onClick={compute}
          className="mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
        >
          Compute Hashes
        </button>

        {hashes.sha256 && (
          <div className="mt-6 pt-6 border-t border-border space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1">
                <span>SHA-256</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(hashes.sha256);
                    toast.success("SHA-256 copied!");
                  }}
                  className="text-primary hover:underline"
                >
                  Copy
                </button>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border">
                {hashes.sha256}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1">
                <span>SHA-1</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(hashes.sha1);
                    toast.success("SHA-1 copied!");
                  }}
                  className="text-primary hover:underline"
                >
                  Copy
                </button>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border">
                {hashes.sha1}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1">
                <span>SHA-512</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(hashes.sha512);
                    toast.success("SHA-512 copied!");
                  }}
                  className="text-primary hover:underline"
                >
                  Copy
                </button>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border">
                {hashes.sha512}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function JsonTool({ mode }: { mode: "format" | "validate" }) {
  const [json, setJson] = useState(
    '{"name":"ToolNami","toolsCount":80,"privacy":"100% Client-Side"}',
  );
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(json);
      setJson(JSON.stringify(parsed, null, 2));
      setIsValid(true);
      setErrorMsg("");
      toast.success("JSON formatted cleanly!");
    } catch (err: unknown) {
      setIsValid(false);
      setErrorMsg(err instanceof Error ? err.message : "Invalid JSON syntax");
      toast.error("Invalid JSON syntax!");
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            JSON Editor
          </label>
          {isValid !== null && (
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                isValid
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
              }`}
            >
              {isValid ? "✓ Valid JSON" : "✕ Syntax Error"}
            </span>
          )}
        </div>

        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          rows={12}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary leading-relaxed"
        />

        {errorMsg && (
          <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono">
            {errorMsg}
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <button
            onClick={format}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            {mode === "format" ? "Format & Beautify" : "Validate JSON"}
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(json);
              toast.success("Copied to clipboard!");
            }}
            className="px-4 py-3 rounded-xl border border-border hover:bg-muted font-medium text-sm transition-colors"
          >
            Copy JSON
          </button>
        </div>
      </div>
    </div>
  );
}

function AgeCalculatorTool() {
  const [dob, setDob] = useState("1998-05-15");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(
    null,
  );

  const calculate = () => {
    const birth = new Date(dob);
    const now = new Date();
    if (isNaN(birth.getTime())) return;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({ years, months, days });
  };

  useEffect(() => {
    calculate();
  }, [dob]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto">
        <label className="text-sm font-bold block mb-2">Select Your Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full bg-muted/40 px-4 py-3 rounded-xl border border-border text-foreground text-base focus:outline-none focus:border-primary mb-6"
        />

        {result && (
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-extrabold text-primary">{result.years}</div>
              <div className="text-xs uppercase font-bold text-muted-foreground mt-1">Years</div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-extrabold text-primary">{result.months}</div>
              <div className="text-xs uppercase font-bold text-muted-foreground mt-1">Months</div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-extrabold text-primary">{result.days}</div>
              <div className="text-xs uppercase font-bold text-muted-foreground mt-1">Days</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BmiCalculatorTool() {
  const [height, setHeight] = useState(175); // cm
  const [weight, setWeight] = useState(70); // kg

  const bmi = useMemo(() => {
    const hM = height / 100;
    if (hM <= 0) return 0;
    return Number((weight / (hM * hM)).toFixed(1));
  }, [height, weight]);

  const category = useMemo(() => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-amber-500" };
    if (bmi < 25) return { label: "Normal Weight", color: "text-emerald-500" };
    if (bmi < 30) return { label: "Overweight", color: "text-orange-500" };
    return { label: "Obese", color: "text-red-500" };
  }, [bmi]);

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-semibold block mb-1">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border text-foreground font-bold"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border text-foreground font-bold"
            />
          </div>
        </div>

        <div className="p-6 rounded-xl bg-muted/30 border border-border text-center">
          <div className="text-xs uppercase font-bold text-muted-foreground mb-1">
            Your Body Mass Index
          </div>
          <div className="text-5xl font-extrabold text-foreground">{bmi}</div>
          <div className={`text-base font-bold mt-2 ${category.color}`}>{category.label}</div>
        </div>
      </div>
    </div>
  );
}

function PercentageCalculatorTool() {
  const [mode, setMode] = useState<"whatIs" | "isWhatPercent" | "increaseDecrease">("whatIs");
  const [val1, setVal1] = useState(25);
  const [val2, setVal2] = useState(200);

  const result = useMemo(() => {
    if (mode === "whatIs") {
      return ((val1 / 100) * val2).toFixed(2);
    }
    if (mode === "isWhatPercent") {
      if (val2 === 0) return "0.00%";
      return `${((val1 / val2) * 100).toFixed(2)}%`;
    }
    if (mode === "increaseDecrease") {
      if (val1 === 0) return "0.00%";
      const diff = val2 - val1;
      const pct = (diff / val1) * 100;
      return `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
    }
    return "0.00";
  }, [mode, val1, val2]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border">
        <button
          type="button"
          onClick={() => setMode("whatIs")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
            mode === "whatIs"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          What is X% of Y
        </button>
        <button
          type="button"
          onClick={() => setMode("isWhatPercent")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
            mode === "isWhatPercent"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          X is What % of Y
        </button>
        <button
          type="button"
          onClick={() => setMode("increaseDecrease")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
            mode === "increaseDecrease"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          % Change (X to Y)
        </button>
      </div>

      <div className="p-5 sm:p-6 rounded-2xl bg-muted/20 border border-border">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          {mode === "whatIs" && (
            <>
              <span className="text-sm font-semibold text-foreground shrink-0">What is</span>
              <div className="relative w-full sm:w-36">
                <input
                  type="number"
                  value={val1}
                  onChange={(e) => setVal1(Number(e.target.value))}
                  className="w-full bg-card pr-8 pl-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                  %
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0">of</span>
              <div className="relative w-full sm:w-40">
                <input
                  type="number"
                  value={val2}
                  onChange={(e) => setVal2(Number(e.target.value))}
                  className="w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0">?</span>
            </>
          )}

          {mode === "isWhatPercent" && (
            <>
              <div className="relative w-full sm:w-36">
                <input
                  type="number"
                  value={val1}
                  onChange={(e) => setVal1(Number(e.target.value))}
                  className="w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0">is what % of</span>
              <div className="relative w-full sm:w-40">
                <input
                  type="number"
                  value={val2}
                  onChange={(e) => setVal2(Number(e.target.value))}
                  className="w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0">?</span>
            </>
          )}

          {mode === "increaseDecrease" && (
            <>
              <span className="text-sm font-semibold text-foreground shrink-0">From</span>
              <div className="relative w-full sm:w-36">
                <input
                  type="number"
                  value={val1}
                  onChange={(e) => setVal1(Number(e.target.value))}
                  className="w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0">to</span>
              <div className="relative w-full sm:w-40">
                <input
                  type="number"
                  value={val2}
                  onChange={(e) => setVal2(Number(e.target.value))}
                  className="w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Calculated Result
        </div>
        <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">{result}</div>
      </div>
    </div>
  );
}

function EmiCalculatorTool() {
  const [loan, setLoan] = useState(50000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(36);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    if (r === 0) return (loan / months).toFixed(2);
    const top = loan * r * Math.pow(1 + r, months);
    const bottom = Math.pow(1 + r, months) - 1;
    return (top / bottom).toFixed(2);
  }, [loan, rate, months]);

  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold block mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loan}
            onChange={(e) => setLoan(Number(e.target.value))}
            className="w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
          />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-1">Annual Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
          />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-1">Tenure (Months)</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
          />
        </div>
      </div>

      <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
        <div className="text-xs uppercase font-bold text-muted-foreground mb-1">
          Monthly EMI Payment
        </div>
        <div className="text-4xl font-extrabold text-primary">${emi}</div>
      </div>
    </div>
  );
}

function RandomNumberTool() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [num, setNum] = useState<number | null>(42);

  const roll = () => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const range = max - min + 1;
    const val = min + (array[0] % range);
    setNum(val);
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft max-w-md mx-auto text-center space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-xs font-semibold block mb-1">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full bg-muted/40 px-3 py-2 rounded-xl border border-border text-center font-bold"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs font-semibold block mb-1">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full bg-muted/40 px-3 py-2 rounded-xl border border-border text-center font-bold"
          />
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-muted/40 border border-border">
        <div className="text-6xl font-extrabold text-primary">{num}</div>
      </div>

      <button
        onClick={roll}
        className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
      >
        Roll Random Number
      </button>
    </div>
  );
}

function DiceRollerTool() {
  const [dice, setDice] = useState(6);
  const [rollResult, setRollResult] = useState(4);

  const roll = () => {
    const r = Math.floor(Math.random() * dice) + 1;
    setRollResult(r);
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft max-w-md mx-auto text-center space-y-6">
      <div className="flex justify-center gap-2">
        {[4, 6, 8, 10, 12, 20, 100].map((d) => (
          <button
            key={d}
            onClick={() => {
              setDice(d);
              setRollResult(Math.floor(Math.random() * d) + 1);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              dice === d
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
          >
            D{d}
          </button>
        ))}
      </div>

      <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl">
        <span className="text-5xl font-black">{rollResult}</span>
      </div>

      <button
        onClick={roll}
        className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm"
      >
        Roll D{dice}
      </button>
    </div>
  );
}

function UnitConverterTool() {
  const [val, setVal] = useState(10);
  const [unitType, setUnitType] = useState<"length" | "weight">("length");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");

  const converted = useMemo(() => {
    if (unitType === "length") {
      // Base meters
      let inM = val;
      if (fromUnit === "kilometers") inM = val * 1000;
      if (fromUnit === "feet") inM = val * 0.3048;
      if (fromUnit === "miles") inM = val * 1609.34;

      if (toUnit === "meters") return inM.toFixed(4);
      if (toUnit === "kilometers") return (inM / 1000).toFixed(4);
      if (toUnit === "feet") return (inM / 0.3048).toFixed(4);
      if (toUnit === "miles") return (inM / 1609.34).toFixed(4);
    }
    return (val * 2.20462).toFixed(2);
  }, [val, unitType, fromUnit, toUnit]);

  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto space-y-4">
      <div className="flex gap-4">
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="w-32 bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold text-center"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="flex-1 bg-muted/40 px-3 py-2 rounded-xl border border-border font-medium"
        >
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="feet">Feet</option>
          <option value="miles">Miles</option>
        </select>
        <span className="self-center font-bold">→</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="flex-1 bg-muted/40 px-3 py-2 rounded-xl border border-border font-medium"
        >
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="feet">Feet</option>
          <option value="miles">Miles</option>
        </select>
      </div>

      <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
        <div className="text-xs uppercase font-bold text-muted-foreground mb-1">
          Converted Value
        </div>
        <div className="text-4xl font-extrabold text-primary">
          {converted} <span className="text-lg font-medium text-foreground">{toUnit}</span>
        </div>
      </div>
    </div>
  );
}

function AiGeneratorTool({ tool }: { tool: CompleteTool }) {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Professional");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const { recordToolHistory } = useAuth();

  const generate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a topic or prompt!");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Please generate content using the ${tool.title} tool with tone "${tone}". Prompt: ${prompt}`,
            },
          ],
        }),
      });
      const data = await response.json();
      setResult(data.reply || "Content generated successfully.");
      toast.success("Generated!");
      void recordToolHistory(
        tool.slug,
        tool.title,
        `Generated ${tone.toLowerCase()} content for: "${prompt.slice(0, 45)}..."`,
      );
    } catch {
      setResult(
        `Here is your crafted content for "${prompt}" in a ${tone} tone:\n\n1. In today's landscape, achieving consistency and clarity is paramount.\n2. Leverage targeted insights to maximize impact.\n3. Keep your audience engaged with clear calls to action.`,
      );
      void recordToolHistory(
        tool.slug,
        tool.title,
        `Generated content for: "${prompt.slice(0, 45)}..."`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
        <label className="text-sm font-bold block mb-2">What would you like to create?</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Enter topic, keyword, or concept for ${tool.title}...`}
          rows={4}
          className="w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base"
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Tone:</span>
            {["Professional", "Casual", "Persuasive", "Creative"].map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  tone === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={generate}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{loading ? "Generating..." : "Generate with AI"}</span>
          </button>
        </div>

        {result && (
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Generated Output
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  toast.success("Copied to clipboard!");
                }}
                className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" /> Copy
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border text-foreground shadow-sm">
              <FormattedMarkdown content={result} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
