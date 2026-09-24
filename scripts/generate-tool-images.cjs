const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "assets", "tools");
const srcDir = path.join(__dirname, "..", "src", "assets", "tools");

[publicDir, srcDir].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// The 5 preserved uploaded tools:
const preservedSlugs = new Set([
  "pdf-compressor",
  "pdf-merge",
  "image-compressor",
  "jpg-to-pdf",
  "qr-code-generator",
]);

const TOOLS = [
  // PDF Tools (1-15)
  {
    slug: "pdf-compressor",
    title: "PDF Compressor",
    cat: "PDF Tools",
    tag: "Fast Size Reduction",
    iconType: "compress",
  },
  {
    slug: "pdf-merge",
    title: "PDF Merge",
    cat: "PDF Tools",
    tag: "Combine Documents",
    iconType: "merge",
  },
  {
    slug: "pdf-split",
    title: "PDF Split",
    cat: "PDF Tools",
    tag: "Extract & Divide Pages",
    iconType: "split",
  },
  {
    slug: "pdf-converter",
    title: "PDF Converter",
    cat: "PDF Tools",
    tag: "Universal PDF Engine",
    iconType: "convert",
  },
  {
    slug: "pdf-to-jpg",
    title: "PDF to JPG",
    cat: "PDF Tools",
    tag: "High-Res Page Images",
    iconType: "pdf-img",
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF",
    cat: "PDF Tools",
    tag: "Images to Document",
    iconType: "img-pdf",
  },
  {
    slug: "pdf-to-word",
    title: "PDF to Word",
    cat: "PDF Tools",
    tag: "Editable DOCX Export",
    iconType: "doc",
  },
  {
    slug: "word-to-pdf",
    title: "Word to PDF",
    cat: "PDF Tools",
    tag: "DOCX to Solid PDF",
    iconType: "doc",
  },
  {
    slug: "pdf-to-text",
    title: "PDF to Text",
    cat: "PDF Tools",
    tag: "Instant Text Extraction",
    iconType: "text",
  },
  {
    slug: "pdf-rotate",
    title: "PDF Rotate",
    cat: "PDF Tools",
    tag: "Permanent Orientation",
    iconType: "rotate",
  },
  {
    slug: "pdf-unlock",
    title: "PDF Unlock",
    cat: "PDF Tools",
    tag: "Remove Restrictions",
    iconType: "unlock",
  },
  {
    slug: "pdf-protect",
    title: "PDF Protect",
    cat: "PDF Tools",
    tag: "256-Bit Encryption",
    iconType: "lock",
  },
  {
    slug: "pdf-watermark",
    title: "PDF Watermark",
    cat: "PDF Tools",
    tag: "Security Stamps",
    iconType: "watermark",
  },
  {
    slug: "pdf-page-number",
    title: "PDF Page Number",
    cat: "PDF Tools",
    tag: "Header & Footer Index",
    iconType: "number",
  },
  {
    slug: "pdf-organize-pages",
    title: "PDF Organize Pages",
    cat: "PDF Tools",
    tag: "Reorder & Arrange",
    iconType: "organize",
  },

  // Image Tools (16-30)
  {
    slug: "image-compressor",
    title: "Image Compressor",
    cat: "Image Tools",
    tag: "Lossless Optimizer",
    iconType: "img-compress",
  },
  {
    slug: "image-resizer",
    title: "Image Resizer",
    cat: "Image Tools",
    tag: "Exact Pixel Dimensions",
    iconType: "resize",
  },
  {
    slug: "image-cropper",
    title: "Image Cropper",
    cat: "Image Tools",
    tag: "Custom Aspect Ratio",
    iconType: "crop",
  },
  {
    slug: "image-converter",
    title: "Image Converter",
    cat: "Image Tools",
    tag: "Universal Multi-Format",
    iconType: "convert",
  },
  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    cat: "Image Tools",
    tag: "Transparency Ready",
    iconType: "convert",
  },
  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    cat: "Image Tools",
    tag: "Lightweight Output",
    iconType: "convert",
  },
  {
    slug: "png-to-webp",
    title: "PNG to WebP",
    cat: "Image Tools",
    tag: "Next-Gen Web Image",
    iconType: "convert",
  },
  {
    slug: "webp-to-png",
    title: "WebP to PNG",
    cat: "Image Tools",
    tag: "Lossless Conversion",
    iconType: "convert",
  },
  {
    slug: "image-upscaler",
    title: "Image Upscaler",
    cat: "Image Tools",
    tag: "AI Detail Enhancer",
    iconType: "upscale",
  },
  {
    slug: "image-background-remover",
    title: "Background Remover",
    cat: "Image Tools",
    tag: "Smart Subject Cutout",
    iconType: "bg-remove",
  },
  {
    slug: "image-blur",
    title: "Image Blur",
    cat: "Image Tools",
    tag: "Gaussian Privacy Blur",
    iconType: "blur",
  },
  {
    slug: "image-sharpen",
    title: "Image Sharpen",
    cat: "Image Tools",
    tag: "Edge Contrast Clarity",
    iconType: "sharpen",
  },
  {
    slug: "image-rotate",
    title: "Image Rotate",
    cat: "Image Tools",
    tag: "Angle & Orientation",
    iconType: "rotate",
  },
  {
    slug: "image-flip",
    title: "Image Flip",
    cat: "Image Tools",
    tag: "Horizontal & Vertical",
    iconType: "flip",
  },
  {
    slug: "image-color-picker",
    title: "Image Color Picker",
    cat: "Image Tools",
    tag: "HEX, RGB, HSL Eyedropper",
    iconType: "picker",
  },

  // Text Tools (31-40)
  {
    slug: "word-counter",
    title: "Word Counter",
    cat: "Text Tools",
    tag: "Live Reading Metrics",
    iconType: "counter",
  },
  {
    slug: "character-counter",
    title: "Character Counter",
    cat: "Text Tools",
    tag: "Social Media Limits",
    iconType: "counter",
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    cat: "Text Tools",
    tag: "UPPER, lower, camelCase",
    iconType: "case",
  },
  {
    slug: "text-cleaner",
    title: "Text Cleaner",
    cat: "Text Tools",
    tag: "Whitespace & Symbols",
    iconType: "cleaner",
  },
  {
    slug: "text-formatter",
    title: "Text Formatter",
    cat: "Text Tools",
    tag: "Markdown & Indentation",
    iconType: "format",
  },
  {
    slug: "remove-duplicate-lines",
    title: "Remove Duplicate Lines",
    cat: "Text Tools",
    tag: "Unique Line Sieve",
    iconType: "dedupe",
  },
  {
    slug: "text-sorter",
    title: "Text Sorter",
    cat: "Text Tools",
    tag: "A-Z & Numeric Order",
    iconType: "sort",
  },
  {
    slug: "find-replace",
    title: "Find & Replace",
    cat: "Text Tools",
    tag: "Batch Regex Swapper",
    iconType: "replace",
  },
  {
    slug: "line-counter",
    title: "Line Counter",
    cat: "Text Tools",
    tag: "Code & Log Statistics",
    iconType: "lines",
  },
  {
    slug: "random-text-generator",
    title: "Random Text Generator",
    cat: "Text Tools",
    tag: "Lorem Ipsum & Mock Data",
    iconType: "mock",
  },

  // Developer Tools (41-55)
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    cat: "Developer Tools",
    tag: "Custom 2D Barcode",
    iconType: "qr",
  },
  {
    slug: "barcode-generator",
    title: "Barcode Generator",
    cat: "Developer Tools",
    tag: "UPC, EAN & Code-128",
    iconType: "barcode",
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    cat: "Developer Tools",
    tag: "Cryptographic Entropy",
    iconType: "lock",
  },
  {
    slug: "uuid-generator",
    title: "UUID Generator",
    cat: "Developer Tools",
    tag: "RFC4122 v4 Generator",
    iconType: "uuid",
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    cat: "Developer Tools",
    tag: "Beautify & Syntax Tree",
    iconType: "json",
  },
  {
    slug: "json-validator",
    title: "JSON Validator",
    cat: "Developer Tools",
    tag: "Schema & Error Trace",
    iconType: "json",
  },
  {
    slug: "xml-formatter",
    title: "XML Formatter",
    cat: "Developer Tools",
    tag: "Indent & Tidy XML",
    iconType: "xml",
  },
  {
    slug: "base64-encode",
    title: "Base64 Encode",
    cat: "Developer Tools",
    tag: "Binary to ASCII String",
    iconType: "code",
  },
  {
    slug: "base64-decode",
    title: "Base64 Decode",
    cat: "Developer Tools",
    tag: "String to Binary Buffer",
    iconType: "code",
  },
  {
    slug: "url-encoder",
    title: "URL Encoder",
    cat: "Developer Tools",
    tag: "RFC3986 Safe Strings",
    iconType: "url",
  },
  {
    slug: "url-decoder",
    title: "URL Decoder",
    cat: "Developer Tools",
    tag: "Query Param Parser",
    iconType: "url",
  },
  {
    slug: "hash-generator",
    title: "Hash Generator",
    cat: "Developer Tools",
    tag: "SHA-256, MD5, SHA-1",
    iconType: "hash",
  },
  {
    slug: "html-formatter",
    title: "HTML Formatter",
    cat: "Developer Tools",
    tag: "Prettify DOM Tree",
    iconType: "html",
  },
  {
    slug: "css-minifier",
    title: "CSS Minifier",
    cat: "Developer Tools",
    tag: "Compress Stylesheets",
    iconType: "css",
  },
  {
    slug: "javascript-minifier",
    title: "JavaScript Minifier",
    cat: "Developer Tools",
    tag: "Terser & Bundle Tidy",
    iconType: "js",
  },

  // SEO Tools (56-60)
  {
    slug: "meta-tag-generator",
    title: "Meta Tag Generator",
    cat: "SEO Tools",
    tag: "Google SERP Snippet",
    iconType: "seo",
  },
  {
    slug: "sitemap-generator",
    title: "Sitemap Generator",
    cat: "SEO Tools",
    tag: "XML Protocol Generator",
    iconType: "sitemap",
  },
  {
    slug: "robots-txt-generator",
    title: "Robots.txt Generator",
    cat: "SEO Tools",
    tag: "Crawler Access Directives",
    iconType: "robots",
  },
  {
    slug: "keyword-density-checker",
    title: "Keyword Density Checker",
    cat: "SEO Tools",
    tag: "N-Gram Frequency Ratio",
    iconType: "keyword",
  },
  {
    slug: "open-graph-generator",
    title: "Open Graph Generator",
    cat: "SEO Tools",
    tag: "Social Card Previewer",
    iconType: "og",
  },

  // Calculators (61-68)
  {
    slug: "age-calculator",
    title: "Age Calculator",
    cat: "Calculators",
    tag: "Years, Months & Days",
    iconType: "calc",
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    cat: "Calculators",
    tag: "Body Mass Index Formula",
    iconType: "bmi",
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    cat: "Calculators",
    tag: "Markup, Share & Delta",
    iconType: "percent",
  },
  {
    slug: "emi-calculator",
    title: "EMI Calculator",
    cat: "Calculators",
    tag: "Monthly Loan Schedule",
    iconType: "finance",
  },
  {
    slug: "gst-calculator",
    title: "GST Calculator",
    cat: "Calculators",
    tag: "Inclusive & Exclusive Tax",
    iconType: "tax",
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    cat: "Calculators",
    tag: "Final Price & Savings",
    iconType: "discount",
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator",
    cat: "Calculators",
    tag: "Amortization Breakdown",
    iconType: "loan",
  },
  {
    slug: "investment-calculator",
    title: "Investment Calculator",
    cat: "Calculators",
    tag: "Compound Growth Returns",
    iconType: "invest",
  },

  // Utility Tools (69-75)
  {
    slug: "unit-converter",
    title: "Unit Converter",
    cat: "Utility Tools",
    tag: "Metric & Imperial Units",
    iconType: "unit",
  },
  {
    slug: "time-converter",
    title: "Time Converter",
    cat: "Utility Tools",
    tag: "UTC & Global Timezones",
    iconType: "time",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    cat: "Utility Tools",
    tag: "Live FX Exchange Rates",
    iconType: "currency",
  },
  {
    slug: "random-number-generator",
    title: "Random Number Generator",
    cat: "Utility Tools",
    tag: "Cryptographic True Random",
    iconType: "random",
  },
  {
    slug: "dice-roller",
    title: "Dice Roller",
    cat: "Utility Tools",
    tag: "D6, D20 & Multi-Dice",
    iconType: "dice",
  },
  {
    slug: "color-converter",
    title: "Color Converter",
    cat: "Utility Tools",
    tag: "HEX, RGB, HSL, CMYK",
    iconType: "palette",
  },
  {
    slug: "internet-speed-test",
    title: "Internet Speed Test",
    cat: "Utility Tools",
    tag: "Ping, Jitter & Bandwidth",
    iconType: "speed",
  },

  // AI Tools (Demo) (76-80)
  {
    slug: "ai-content-writer",
    title: "AI Content Writer",
    cat: "AI Tools",
    tag: "Gemini Text Studio",
    iconType: "ai-write",
  },
  {
    slug: "ai-blog-generator",
    title: "AI Blog Generator",
    cat: "AI Tools",
    tag: "Full Article Outlines",
    iconType: "ai-blog",
  },
  {
    slug: "ai-title-generator",
    title: "AI Title Generator",
    cat: "AI Tools",
    tag: "Click-Worthy Headlines",
    iconType: "ai-title",
  },
  {
    slug: "ai-caption-generator",
    title: "AI Caption Generator",
    cat: "AI Tools",
    tag: "Instagram & TikTok Tags",
    iconType: "ai-caption",
  },
  {
    slug: "ai-hashtag-generator",
    title: "AI Hashtag Generator",
    cat: "AI Tools",
    tag: "Viral Trend Matcher",
    iconType: "ai-hash",
  },
];

function getCategoryColor(cat) {
  switch (cat) {
    case "PDF Tools":
      return { primary: "#EF4444", secondary: "#F87171", accent: "#FEF2F2" };
    case "Image Tools":
      return { primary: "#2563EB", secondary: "#38BDF8", accent: "#EFF6FF" };
    case "Text Tools":
      return { primary: "#10B981", secondary: "#34D399", accent: "#ECFDF5" };
    case "Developer Tools":
      return { primary: "#6366F1", secondary: "#818CF8", accent: "#EEF2FF" };
    case "SEO Tools":
      return { primary: "#8B5CF6", secondary: "#A78BFA", accent: "#F5F3FF" };
    case "Calculators":
      return { primary: "#F59E0B", secondary: "#FBBF24", accent: "#FFFBEB" };
    case "Utility Tools":
      return { primary: "#06B6D4", secondary: "#22D3EE", accent: "#ECFEFF" };
    case "AI Tools":
      return { primary: "#EC4899", secondary: "#F472B6", accent: "#FDF2F8" };
    default:
      return { primary: "#2563EB", secondary: "#F59E0B", accent: "#EFF6FF" };
  }
}

function getIconGlyph(iconType, colors) {
  // Clean flat modern SaaS vector paths (Blue + Yellow + White)
  switch (iconType) {
    case "split":
      return `
        <rect x="520" y="320" width="130" height="170" rx="16" fill="#FFFFFF" filter="url(#drop)"/>
        <rect x="670" y="320" width="130" height="170" rx="16" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M660 270 L660 540" stroke="#F59E0B" stroke-width="6" stroke-dasharray="12 10"/>
        <path d="M600 370 L560 370 M600 410 L560 410" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <path d="M760 370 L720 370 M760 410 L720 410" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
      `;
    case "lock":
    case "protect":
      return `
        <rect x="540" y="360" width="240" height="170" rx="28" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M590 360 L590 300 C590 250 730 250 730 300 L730 360" fill="none" stroke="#F59E0B" stroke-width="20" stroke-linecap="round"/>
        <circle cx="660" cy="430" r="22" fill="#2563EB"/>
        <rect x="653" y="430" width="14" height="40" rx="6" fill="#2563EB"/>
      `;
    case "unlock":
      return `
        <rect x="540" y="370" width="240" height="170" rx="28" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M590 370 L590 280 C590 220 730 220 730 280" fill="none" stroke="#10B981" stroke-width="20" stroke-linecap="round"/>
        <circle cx="660" cy="440" r="22" fill="#2563EB"/>
        <rect x="653" y="440" width="14" height="40" rx="6" fill="#2563EB"/>
      `;
    case "rotate":
      return `
        <rect x="560" y="310" width="200" height="200" rx="24" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M510 410 A160 160 0 1 1 660 570" fill="none" stroke="#2563EB" stroke-width="14" stroke-linecap="round"/>
        <polygon points="510,410 480,450 540,450" fill="#2563EB"/>
        <path d="M620 370 L700 370 M620 410 L700 410" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
      `;
    case "convert":
    case "img-pdf":
    case "pdf-img":
      return `
        <rect x="490" y="320" width="150" height="190" rx="18" fill="#FFFFFF" filter="url(#drop)"/>
        <rect x="680" y="320" width="150" height="190" rx="18" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M610 415 L710 415" stroke="#F59E0B" stroke-width="12" stroke-linecap="round"/>
        <polygon points="710,415 680,390 680,440" fill="#F59E0B"/>
        <circle cx="565" cy="380" r="22" fill="#2563EB"/>
        <rect x="725" y="360" width="60" height="40" rx="8" fill="#2563EB"/>
      `;
    case "resize":
    case "crop":
      return `
        <rect x="520" y="290" width="280" height="230" rx="20" fill="#FFFFFF" filter="url(#drop)"/>
        <rect x="550" y="320" width="220" height="170" rx="12" fill="none" stroke="#2563EB" stroke-width="6" stroke-dasharray="10 8"/>
        <rect x="510" y="280" width="20" height="20" rx="4" fill="#F59E0B"/>
        <rect x="790" y="280" width="20" height="20" rx="4" fill="#F59E0B"/>
        <rect x="510" y="510" width="20" height="20" rx="4" fill="#F59E0B"/>
        <rect x="790" y="510" width="20" height="20" rx="4" fill="#F59E0B"/>
      `;
    case "bg-remove":
    case "upscale":
      return `
        <rect x="520" y="290" width="280" height="230" rx="24" fill="#FFFFFF" filter="url(#drop)"/>
        <!-- checkerboard pattern on left -->
        <rect x="540" y="310" width="120" height="190" rx="14" fill="#F1F5F9"/>
        <path d="M540 310 h60 v48 h-60 z M600 358 h60 v48 h-60 z M540 406 h60 v48 h-60 z M600 454 h60 v46 h-60 z" fill="#E2E8F0"/>
        <circle cx="660" cy="405" r="48" fill="#F59E0B" filter="url(#drop)"/>
        <path d="M640 405 L655 420 L685 390" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
      `;
    case "counter":
    case "lines":
      return `
        <rect x="520" y="300" width="280" height="210" rx="24" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M560 350 L760 350 M560 390 L720 390 M560 430 L740 430 M560 470 L680 470" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <rect x="680" y="440" width="90" height="42" rx="12" fill="#F59E0B"/>
        <text x="725" y="468" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">12.4K</text>
      `;
    case "json":
    case "code":
    case "xml":
    case "html":
    case "css":
    case "js":
      return `
        <rect x="510" y="290" width="300" height="230" rx="24" fill="#0F172A" filter="url(#drop)"/>
        <circle cx="545" cy="325" r="7" fill="#EF4444"/>
        <circle cx="570" cy="325" r="7" fill="#F59E0B"/>
        <circle cx="595" cy="325" r="7" fill="#10B981"/>
        <path d="M570 380 L620 420 L570 460" fill="none" stroke="#38BDF8" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M750 380 L700 420 L750 460" fill="none" stroke="#F59E0B" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="635" y="405" width="50" height="30" rx="8" fill="#2563EB"/>
      `;
    case "calc":
    case "finance":
    case "tax":
    case "loan":
    case "invest":
    case "bmi":
    case "percent":
    case "discount":
      return `
        <rect x="540" y="280" width="240" height="260" rx="28" fill="#FFFFFF" filter="url(#drop)"/>
        <rect x="570" y="315" width="180" height="60" rx="14" fill="#0F172A"/>
        <text x="730" y="356" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#38BDF8" text-anchor="end">98.4%</text>
        <circle cx="600" cy="420" r="18" fill="#F1F5F9"/><circle cx="660" cy="420" r="18" fill="#F1F5F9"/><circle cx="720" cy="420" r="18" fill="#F59E0B"/>
        <circle cx="600" cy="480" r="18" fill="#F1F5F9"/><circle cx="660" cy="480" r="18" fill="#F1F5F9"/><circle cx="720" cy="480" r="18" fill="#2563EB"/>
      `;
    case "ai-write":
    case "ai-blog":
    case "ai-title":
    case "ai-caption":
    case "ai-hash":
      return `
        <rect x="520" y="290" width="280" height="230" rx="24" fill="#FFFFFF" filter="url(#drop)"/>
        <path d="M660 320 L675 365 L720 380 L675 395 L660 440 L645 395 L600 380 L645 365 Z" fill="#F59E0B" filter="url(#drop)"/>
        <path d="M570 420 L578 445 L605 455 L578 465 L570 490 L562 465 L535 455 L562 445 Z" fill="#2563EB"/>
        <path d="M740 420 L748 440 L770 450 L748 460 L740 480 L732 460 L710 450 L732 440 Z" fill="#38BDF8"/>
      `;
    default:
      return `
        <rect x="520" y="290" width="280" height="230" rx="24" fill="#FFFFFF" filter="url(#drop)"/>
        <circle cx="660" cy="385" r="48" fill="#2563EB"/>
        <rect x="590" y="455" width="140" height="24" rx="12" fill="#F59E0B"/>
        <path d="M640 385 L655 400 L685 370" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
      `;
  }
}

function escapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSvg(tool) {
  const colors = getCategoryColor(tool.cat);
  const glyph = getIconGlyph(tool.iconType, colors);
  const safeTitle = escapeXml(tool.title);
  const safeCat = escapeXml(tool.cat);
  const safeTag = escapeXml(tool.tag);

  return `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient (Deep modern navy/blue SaaS) -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081026"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>

    <!-- Radial Blue Glow -->
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#1D4ED8" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>

    <!-- Yellow Accent Glow -->
    <radialGradient id="yellowGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
    </radialGradient>

    <!-- Soft Drop Shadows -->
    <filter id="drop" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Deep Canvas Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  <circle cx="600" cy="400" r="480" fill="url(#centerGlow)"/>
  <circle cx="850" cy="300" r="280" fill="url(#yellowGlow)"/>

  <!-- Subtle Blueprint Tech Grid Lines -->
  <g stroke="#334155" stroke-opacity="0.22" stroke-width="1.5">
    <line x1="100" y1="0" x2="100" y2="800"/>
    <line x1="300" y1="0" x2="300" y2="800"/>
    <line x1="500" y1="0" x2="500" y2="800"/>
    <line x1="700" y1="0" x2="700" y2="800"/>
    <line x1="900" y1="0" x2="900" y2="800"/>
    <line x1="1100" y1="0" x2="1100" y2="800"/>

    <line x1="0" y1="150" x2="1200" y2="150"/>
    <line x1="0" y1="350" x2="1200" y2="350"/>
    <line x1="0" y1="550" x2="1200" y2="550"/>
    <line x1="0" y1="750" x2="1200" y2="750"/>
  </g>

  <!-- Top Header Bar -->
  <!-- ToolNami Logo -->
  <g transform="translate(80, 75)">
    <rect width="48" height="48" rx="14" fill="#2563EB"/>
    <path d="M12 24 C16 16, 22 16, 26 24 C30 32, 36 32, 40 24" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
    <text x="64" y="34" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">Tool<tspan fill="#F59E0B">Nami</tspan></text>
  </g>

  <!-- Category Badge -->
  <g transform="translate(940, 75)">
    <rect width="180" height="42" rx="21" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <circle cx="24" cy="21" r="6" fill="#F59E0B"/>
    <text x="44" y="27" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="700" fill="#E2E8F0">${safeCat}</text>
  </g>

  <!-- Central 3D / Flat Modern Stage -->
  <!-- Base Ground Pedestal -->
  <ellipse cx="660" cy="530" rx="340" ry="60" fill="#0B132B" opacity="0.8"/>
  <ellipse cx="660" cy="520" rx="300" ry="45" fill="#1E293B" stroke="#3B82F6" stroke-width="2"/>
  <ellipse cx="660" cy="510" rx="260" ry="35" fill="#0F172A" stroke="#F59E0B" stroke-width="1.5"/>

  <!-- Dynamic Tool Specific Graphic Glyphs -->
  ${glyph}

  <!-- Left Side Text & Value Proposition -->
  <g transform="translate(100, 260)">
    <!-- Small Yellow Accent Ribbon -->
    <rect x="0" y="0" width="36" height="6" rx="3" fill="#F59E0B"/>
    <text x="0" y="44" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="20" font-weight="700" fill="#38BDF8" letter-spacing="1.5" text-transform="uppercase">OFFICIAL TOOL</text>
    <text x="0" y="105" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="52" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">${safeTitle}</text>
    <text x="0" y="152" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">${safeTag}</text>

    <!-- Micro Badges -->
    <g transform="translate(0, 200)">
      <rect width="150" height="38" rx="10" fill="#1E293B" stroke="#334155"/>
      <circle cx="20" cy="19" r="5" fill="#10B981"/>
      <text x="36" y="25" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="600" fill="#CBD5E1">100% Client-Side</text>
    </g>
    <g transform="translate(165, 200)">
      <rect width="130" height="38" rx="10" fill="#1E293B" stroke="#334155"/>
      <circle cx="20" cy="19" r="5" fill="#F59E0B"/>
      <text x="36" y="25" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="600" fill="#CBD5E1">Zero Upload</text>
    </g>
  </g>

  <!-- Bottom Brand Footer Strip -->
  <g transform="translate(100, 715)">
    <text x="0" y="16" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="600" fill="#64748B">Simple Tools • Big Possibilities</text>
  </g>
  <g transform="translate(970, 715)">
    <text x="130" y="16" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="700" fill="#38BDF8" text-anchor="end">Private &amp; Secure In Browser</text>
  </g>
</svg>
`;
}

async function run() {
  console.log(`Generating images for ${TOOLS.length} tools...`);
  let generated = 0;

  for (const tool of TOOLS) {
    const pngFilename = `${tool.slug}.png`;
    const publicPath = path.join(publicDir, pngFilename);
    const srcPath = path.join(srcDir, pngFilename);

    if (preservedSlugs.has(tool.slug) && fs.existsSync(publicPath)) {
      console.log(`Preserving existing artwork for: ${tool.slug}`);
      continue;
    }

    const svg = generateSvg(tool);
    const buffer = await sharp(Buffer.from(svg))
      .resize(1200, 800)
      .png({ quality: 95, compressionLevel: 8 })
      .toBuffer();

    fs.writeFileSync(publicPath, buffer);
    fs.writeFileSync(srcPath, buffer);
    generated++;
  }

  console.log(`Successfully generated ${generated} high-end 1200x800 PNG illustrations!`);
}

run().catch(console.error);
