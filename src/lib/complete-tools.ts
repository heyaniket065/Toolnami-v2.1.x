export type ToolCategory =
  "pdf" | "image" | "text" | "developer" | "seo" | "calculator" | "utility" | "ai";

export type ToolCategoryMeta = {
  id: ToolCategory;
  label: string;
  description: string;
  iconName: string;
  color: string;
};

export const TOOL_CATEGORIES: ToolCategoryMeta[] = [
  {
    id: "pdf",
    label: "PDF Tools",
    description: "Compress, merge, split, convert, and protect PDF files directly in your browser.",
    iconName: "FileText",
    color: "text-red-500",
  },
  {
    id: "image",
    label: "Image Tools",
    description:
      "Compress, resize, crop, convert formats, and remove backgrounds with zero quality loss.",
    iconName: "Image",
    color: "text-blue-500",
  },
  {
    id: "text",
    label: "Text Tools",
    description: "Word counter, case converter, text cleaning, formatting, and analysis utilities.",
    iconName: "Type",
    color: "text-emerald-500",
  },
  {
    id: "developer",
    label: "Developer Tools",
    description: "QR codes, JSON formatter, Base64, UUIDs, cryptographic hashes, and minifiers.",
    iconName: "Code2",
    color: "text-indigo-500",
  },
  {
    id: "seo",
    label: "SEO Tools",
    description:
      "Generate meta tags, sitemaps, robots.txt, and analyze keyword density for search rankings.",
    iconName: "Search",
    color: "text-purple-500",
  },
  {
    id: "calculator",
    label: "Calculators",
    description:
      "Precise financial, health, and math calculators for age, BMI, percentages, EMI, and GST.",
    iconName: "Calculator",
    color: "text-amber-500",
  },
  {
    id: "utility",
    label: "Utility Tools",
    description:
      "Everyday helpers for unit conversion, global timezones, color spaces, and internet speed.",
    iconName: "Wrench",
    color: "text-cyan-500",
  },
  {
    id: "ai",
    label: "AI Tools (Demo)",
    description: "Next-gen writing assistance, titles, blogs, captions, and hashtag generators.",
    iconName: "Sparkles",
    color: "text-pink-500",
  },
];

export type CompleteTool = {
  id: number;
  slug: string;
  to: string;
  title: string;
  category: ToolCategory;
  categoryLabel: string;
  summary: string;
  technicalDescription: string;
  howToSteps: string[];
  faqs: { q: string; a: string }[];
  badge: {
    label: string;
    icon: string;
    tone: "trending" | "popular" | "hot" | "new" | "featured" | "fast" | "top" | "recommended";
  };
  image: string;
  baseUses: number;
  isFeatured: boolean;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
};

export const COMPLETE_TOOLS: CompleteTool[] = [
  // ==================== PDF TOOLS (1-15) ====================
  {
    id: 1,
    slug: "pdf-compressor",
    to: "/tools/pdf-compressor",
    title: "PDF Compressor",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Reduce PDF file size by up to 90% while keeping high visual clarity.",
    technicalDescription:
      "Lossless client-side PDF stream optimization using WebAssembly. Prunes redundant binary object streams, deduplicates font descriptors, and recompresses embedded images without uploading files.",
    howToSteps: [
      "Select or drag & drop your PDF file into the secure dropzone.",
      "Review the document details and initial file size.",
      "Click Compress PDF to initiate in-memory stream optimization.",
      "Download your lightweight, email-ready PDF.",
    ],
    faqs: [
      {
        q: "Is my confidential document uploaded to external servers?",
        a: "Never. All compression runs 100% client-side in your browser's sandboxed memory.",
      },
      {
        q: "Will text become blurry?",
        a: "No. Text remains selectable and razor-sharp because vector streams and fonts are preserved.",
      },
      {
        q: "What is the maximum file size?",
        a: "There is no server limit. You can compress files up to several hundred megabytes depending on your device RAM.",
      },
    ],
    badge: { label: "Featured", icon: "🚀", tone: "featured" },
    image: "/assets/tools/3d-pdf-compressor.png",
    baseUses: 34500,
    isFeatured: true,
    keywords: [
      "compress pdf",
      "reduce pdf size",
      "shrink pdf",
      "pdf optimizer",
      "online pdf compressor",
    ],
    seoTitle: "PDF Compressor — Reduce PDF File Size Online Free | ToolNami",
    seoDescription:
      "Compress PDF files online for free while maintaining crisp quality. 100% private, runs in your browser without file uploads.",
  },
  {
    id: 2,
    slug: "pdf-merge",
    to: "/tools/pdf-merge",
    title: "PDF Merge",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Combine multiple PDF documents into a single consolidated file in seconds.",
    technicalDescription:
      "Fast in-browser PDF concatenator. Parses structural page trees across multiple input files, normalizes catalog references, and synthesizes a unified document with custom ordering.",
    howToSteps: [
      "Upload two or more PDF files via the upload area.",
      "Drag and reorder document cards into your preferred sequence.",
      "Click Merge PDF to assemble the consolidated document.",
      "Download the single merged PDF instantly.",
    ],
    faqs: [
      {
        q: "Can I reorder documents before merging?",
        a: "Yes, you can easily shift documents up or down to set the exact page sequence.",
      },
      {
        q: "Are bookmarks and links preserved?",
        a: "Standard page links and bookmarks are unified into the resulting document index.",
      },
      {
        q: "Is there a limit on how many files I can merge?",
        a: "You can merge dozens of files at once entirely within your browser memory.",
      },
    ],
    badge: { label: "Popular", icon: "⭐", tone: "popular" },
    image: "/assets/tools/3d-pdf-merge.png",
    baseUses: 29800,
    isFeatured: true,
    keywords: ["merge pdf", "combine pdf files", "join pdf", "pdf binder", "merge documents"],
    seoTitle: "PDF Merge — Combine Multiple PDF Files Online | ToolNami",
    seoDescription:
      "Merge PDF files into a single document fast and free. Reorder pages with drag and drop. 100% private in-browser processing.",
  },
  {
    id: 3,
    slug: "pdf-split",
    to: "/tools/pdf-split",
    title: "PDF Split",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Extract specific pages or divide large PDF documents into smaller individual files.",
    technicalDescription:
      "Extracts discrete page nodes from a PDF object graph. Supports single page extraction, custom page ranges (e.g. 1-3, 5, 8-10), and splitting into separate single-page documents.",
    howToSteps: [
      "Upload your PDF document to inspect total page count.",
      "Enter desired page ranges or choose to split all pages.",
      "Click Split PDF to process pages in local memory.",
      "Download the extracted PDF files immediately.",
    ],
    faqs: [
      {
        q: "Can I extract non-consecutive pages?",
        a: "Yes, enter ranges such as '1-4, 7, 9-12' to extract exactly what you need.",
      },
      {
        q: "Does splitting reduce text or image quality?",
        a: "No, splitting performs a pure lossless extraction without re-encoding.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/pdf-split.png",
    baseUses: 18400,
    isFeatured: false,
    keywords: ["split pdf", "extract pdf pages", "divide pdf", "separate pdf pages"],
    seoTitle: "PDF Split — Extract Pages from PDF Online Free | ToolNami",
    seoDescription:
      "Split PDF files into individual pages or custom page ranges. Fast, lossless, and secure browser-based tool.",
  },
  {
    id: 4,
    slug: "pdf-converter",
    to: "/tools/pdf-converter",
    title: "PDF Converter",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Convert documents and images to and from PDF format with high accuracy.",
    technicalDescription:
      "Multi-format conversion pipeline supporting image-to-PDF synthesis, text-to-PDF rendering, and PDF rasterization to image formats with customizable DPI settings.",
    howToSteps: [
      "Select your source document or file.",
      "Choose your desired target format (JPG, PNG, PDF, TXT).",
      "Click Convert to execute format translation.",
      "Download your converted file instantly.",
    ],
    faqs: [
      { q: "What formats can I convert?", a: "Supports PDF, JPG, PNG, WebP, Text, and Markdown." },
      {
        q: "Are conversions private?",
        a: "Yes, all conversion happens locally on your device without server uploads.",
      },
    ],
    badge: { label: "Top", icon: "🔄", tone: "top" },
    image: "/assets/tools/pdf-converter.png",
    baseUses: 21300,
    isFeatured: false,
    keywords: [
      "pdf converter",
      "convert pdf",
      "pdf to image",
      "image to pdf",
      "document converter",
    ],
    seoTitle: "PDF Converter — Convert to and from PDF Online | ToolNami",
    seoDescription:
      "Convert PDF documents to and from images, text, and other formats free. 100% safe client-side processing.",
  },
  {
    id: 5,
    slug: "pdf-to-jpg",
    to: "/tools/pdf-to-jpg",
    title: "PDF to JPG",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Extract PDF pages and convert them into high-resolution JPG images.",
    technicalDescription:
      "Renders vector PDF page viewports into HTML5 Canvas context at high DPI (up to 300 DPI) and exports standard JPEG image files.",
    howToSteps: [
      "Upload your PDF document.",
      "Select page resolution and image quality preference.",
      "Click Convert to JPG to render pages.",
      "Download individual images or all pages as a ZIP.",
    ],
    faqs: [
      {
        q: "Can I convert just one page?",
        a: "Yes, you can select individual pages or batch convert the entire document.",
      },
      {
        q: "What resolution do the JPGs have?",
        a: "You can choose between standard web resolution or print-ready 300 DPI.",
      },
    ],
    badge: { label: "Trending", icon: "🖼️", tone: "trending" },
    image: "/assets/tools/pdf-to-jpg.png",
    baseUses: 26100,
    isFeatured: false,
    keywords: ["pdf to jpg", "convert pdf to image", "pdf to jpeg", "extract pdf images"],
    seoTitle: "PDF to JPG — Convert PDF Pages to Images Online | ToolNami",
    seoDescription:
      "Convert PDF pages to crystal-clear JPG images online for free. Fast, high-resolution rasterization in your browser.",
  },
  {
    id: 6,
    slug: "jpg-to-pdf",
    to: "/tools/jpg-to-pdf",
    title: "JPG to PDF",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Transform multiple JPG, PNG, and WebP images into a clean, unified PDF file.",
    technicalDescription:
      "Embeds image bitstreams directly into standard ISO PDF page objects, adjusting page orientation (Portrait/Landscape) and page margins (Fit, A4, Letter).",
    howToSteps: [
      "Upload or drag & drop multiple photos or scans.",
      "Arrange the image sequence and select page orientation.",
      "Click Convert to PDF to construct your document.",
      "Download your compiled PDF document.",
    ],
    faqs: [
      {
        q: "Can I combine different image formats?",
        a: "Yes, you can combine JPG, PNG, WebP, and GIF images into one PDF.",
      },
      {
        q: "Can I adjust margins?",
        a: "Yes, choose between zero margins, standard margins, or auto-fit to page.",
      },
    ],
    badge: { label: "Popular", icon: "📑", tone: "popular" },
    image: "/assets/tools/3d-jpg-to-pdf.png",
    baseUses: 31200,
    isFeatured: true,
    keywords: [
      "jpg to pdf",
      "convert images to pdf",
      "photo to pdf",
      "png to pdf",
      "combine pictures into pdf",
    ],
    seoTitle: "JPG to PDF — Convert Images to PDF Online Free | ToolNami",
    seoDescription:
      "Convert multiple JPG, PNG, and photos into a professional PDF document. Reorder images and configure margins in seconds.",
  },
  {
    id: 7,
    slug: "pdf-to-word",
    to: "/tools/pdf-to-word",
    title: "PDF to Word",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Convert PDF documents into editable Word (DOCX) files while preserving text layout.",
    technicalDescription:
      "Parses PDF text runs, paragraph breaks, and font styling to reconstruct an editable OpenXML (DOCX) document schema.",
    howToSteps: [
      "Select your PDF file from your device.",
      "Review page count and layout preview.",
      "Click Convert to Word to generate DOCX structure.",
      "Save and open your editable file in Microsoft Word or Google Docs.",
    ],
    faqs: [
      {
        q: "Is the resulting Word file fully editable?",
        a: "Yes, text, headings, and paragraphs can be typed and edited directly.",
      },
    ],
    badge: { label: "Recommended", icon: "📝", tone: "recommended" },
    image: "/assets/tools/pdf-to-word.png",
    baseUses: 27900,
    isFeatured: false,
    keywords: ["pdf to word", "pdf to docx", "convert pdf to word", "editable pdf"],
    seoTitle: "PDF to Word — Convert PDF to Editable DOCX Online | ToolNami",
    seoDescription:
      "Convert PDF to Word online for free. Maintain formatting and edit text seamlessly in Microsoft Word.",
  },
  {
    id: 8,
    slug: "word-to-pdf",
    to: "/tools/word-to-pdf",
    title: "Word to PDF",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Convert DOCX and Word documents into crisp, standardized PDF documents.",
    technicalDescription:
      "Renders OpenXML document structures with embedded typography and table layouts into an immutable PDF/A compliant document format.",
    howToSteps: [
      "Upload your DOC or DOCX document.",
      "Verify document pages and formatting preview.",
      "Click Convert to PDF to generate the solid document.",
      "Download your presentation-ready PDF.",
    ],
    faqs: [
      {
        q: "Will my custom fonts be preserved?",
        a: "Yes, standard fonts are embedded to guarantee identical display on any device.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/word-to-pdf.png",
    baseUses: 19500,
    isFeatured: false,
    keywords: ["word to pdf", "convert docx to pdf", "doc to pdf", "word document to pdf"],
    seoTitle: "Word to PDF — Convert DOCX to PDF Online Free | ToolNami",
    seoDescription:
      "Convert Word documents to PDF online with exact font and layout fidelity. 100% free and secure.",
  },
  {
    id: 9,
    slug: "pdf-to-text",
    to: "/tools/pdf-to-text",
    title: "PDF to Text",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Extract clean, raw text content from any PDF document for analysis and editing.",
    technicalDescription:
      "Traverses PDF content streams to decode glyph IDs into Unicode text, removing layout artifacts to produce clean plaintext or Markdown.",
    howToSteps: [
      "Upload your PDF document.",
      "Click Extract Text to read character streams.",
      "Copy extracted text directly or download as a .TXT file.",
    ],
    faqs: [
      {
        q: "Can I extract text from multi-page documents?",
        a: "Yes, all pages are decoded and neatly delineated.",
      },
    ],
    badge: { label: "New", icon: "📋", tone: "new" },
    image: "/assets/tools/pdf-to-text.png",
    baseUses: 14200,
    isFeatured: false,
    keywords: ["pdf to text", "extract text from pdf", "pdf text extractor", "pdf to txt"],
    seoTitle: "PDF to Text — Extract Text from PDF Online Free | ToolNami",
    seoDescription:
      "Extract text from PDF documents instantly. Copy to clipboard or download as TXT file with zero data loss.",
  },
  {
    id: 10,
    slug: "pdf-rotate",
    to: "/tools/pdf-rotate",
    title: "PDF Rotate",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Rotate upside-down or sideways PDF pages by 90, 180, or 270 degrees permanently.",
    technicalDescription:
      "Modifies the `/Rotate` attribute in PDF page dictionary dictionaries without recompressing or rasterizing vector page content.",
    howToSteps: [
      "Upload your PDF file.",
      "Click 90° Clockwise, Counter-Clockwise, or 180°.",
      "Apply to specific pages or the entire document.",
      "Download the permanently rotated PDF.",
    ],
    faqs: [
      {
        q: "Is the rotation permanent?",
        a: "Yes, when downloaded, the new orientation applies across all viewers and printers.",
      },
    ],
    badge: { label: "Fast", icon: "🔄", tone: "fast" },
    image: "/assets/tools/pdf-rotate.png",
    baseUses: 16800,
    isFeatured: false,
    keywords: ["rotate pdf", "turn pdf pages", "pdf orientation", "rotate pdf online"],
    seoTitle: "PDF Rotate — Rotate PDF Pages Permanently Online | ToolNami",
    seoDescription:
      "Rotate individual or all PDF pages 90, 180, or 270 degrees online. Free, fast, and saves instantly.",
  },
  {
    id: 11,
    slug: "pdf-unlock",
    to: "/tools/pdf-unlock",
    title: "PDF Unlock",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Remove permissions passwords and restrictions on printing, copying, or modifying.",
    technicalDescription:
      "Decrypts encrypted PDF cross-reference tables and removes standard owner restrictions from the `/Encrypt` dictionary.",
    howToSteps: [
      "Upload your protected PDF document.",
      "Provide the password if open protection is active.",
      "Click Unlock to remove restrictions.",
      "Download your unencumbered PDF.",
    ],
    faqs: [
      {
        q: "Can I remove printing restrictions?",
        a: "Yes, owner permission restrictions on printing, editing, and copying are stripped.",
      },
    ],
    badge: { label: "Security", icon: "🔓", tone: "featured" },
    image: "/assets/tools/pdf-unlock.png",
    baseUses: 15700,
    isFeatured: false,
    keywords: ["unlock pdf", "remove pdf password", "pdf decrypt", "remove pdf restrictions"],
    seoTitle: "PDF Unlock — Remove PDF Password and Restrictions | ToolNami",
    seoDescription:
      "Remove owner passwords and printing restrictions from PDF documents online free and privately in your browser.",
  },
  {
    id: 12,
    slug: "pdf-protect",
    to: "/tools/pdf-protect",
    title: "PDF Protect",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Encrypt your PDF with standard 128-bit or 256-bit AES password protection.",
    technicalDescription:
      "Applies standard ISO 32000-1 AES encryption to PDF streams, requiring a secure passphrase to open or edit the file.",
    howToSteps: [
      "Select the PDF you want to safeguard.",
      "Enter a strong master password and confirm.",
      "Click Protect PDF to apply military-grade encryption.",
      "Download your locked, tamper-resistant PDF.",
    ],
    faqs: [
      {
        q: "Is the encryption secure?",
        a: "Yes, standard 256-bit AES encryption is used, recognized by Adobe Acrobat and all certified viewers.",
      },
    ],
    badge: { label: "Security", icon: "🔒", tone: "recommended" },
    image: "/assets/tools/pdf-protect.png",
    baseUses: 17100,
    isFeatured: false,
    keywords: ["protect pdf", "password protect pdf", "encrypt pdf", "secure pdf file"],
    seoTitle: "PDF Protect — Password Protect PDF Online Free | ToolNami",
    seoDescription:
      "Secure your confidential PDF documents with strong AES encryption and password protection. 100% private in-browser.",
  },
  {
    id: 13,
    slug: "pdf-watermark",
    to: "/tools/pdf-watermark",
    title: "PDF Watermark",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Stamp custom confidential text or branding watermarks across your PDF pages.",
    technicalDescription:
      "Injects semi-transparent vector text or image XObject overlays with customizable rotation angle, opacity, and positioning onto PDF page content layers.",
    howToSteps: [
      "Upload your PDF file.",
      "Enter watermark text (e.g. 'CONFIDENTIAL', 'DRAFT') or upload a logo.",
      "Adjust opacity, font size, angle, and position.",
      "Download your watermarked document.",
    ],
    faqs: [
      {
        q: "Can watermarks be placed diagonally?",
        a: "Yes, 45-degree diagonal watermarks are fully supported with adjustable opacity.",
      },
    ],
    badge: { label: "Featured", icon: "🏷️", tone: "featured" },
    image: "/assets/tools/pdf-watermark.png",
    baseUses: 13900,
    isFeatured: false,
    keywords: ["pdf watermark", "add watermark to pdf", "stamp pdf", "watermark pdf online"],
    seoTitle: "PDF Watermark — Add Text or Logo Watermark to PDF | ToolNami",
    seoDescription:
      "Add custom text or image watermarks to PDF files online free. Protect copyright and mark documents as confidential.",
  },
  {
    id: 14,
    slug: "pdf-page-number",
    to: "/tools/pdf-page-number",
    title: "PDF Page Number",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Insert clean, professional page numbers into headers or footers of your PDF.",
    technicalDescription:
      "Calculates total page count and appends formatted pagination typography (e.g. 'Page X of Y', 'X', '1/10') into defined margin coordinates.",
    howToSteps: [
      "Upload your PDF document.",
      "Choose position (Top Left, Top Right, Bottom Center, Bottom Right).",
      "Select numbering format and start index.",
      "Download your numbered PDF.",
    ],
    faqs: [
      {
        q: "Can I skip the cover page?",
        a: "Yes, you can specify numbering to start from page 2 onward.",
      },
    ],
    badge: { label: "Utility", icon: "🔢", tone: "top" },
    image: "/assets/tools/pdf-page-number.png",
    baseUses: 12800,
    isFeatured: false,
    keywords: ["pdf page numbers", "add page numbers to pdf", "paginate pdf", "number pdf pages"],
    seoTitle: "PDF Page Number — Add Page Numbers to PDF Online | ToolNami",
    seoDescription:
      "Add page numbers to PDF documents online for free. Customize numbering position, font, and format easily.",
  },
  {
    id: 15,
    slug: "pdf-organize-pages",
    to: "/tools/pdf-organize-pages",
    title: "PDF Organize Pages",
    category: "pdf",
    categoryLabel: "PDF Tools",
    summary: "Visually reorder, delete, duplicate, or rotate individual pages in your PDF.",
    technicalDescription:
      "Visual drag-and-drop page tile manager that updates the PDF `/Pages` index tree in real-time, pruning deleted page references and restructuring page order.",
    howToSteps: [
      "Upload your PDF to generate visual page thumbnails.",
      "Drag and drop thumbnails to reorder pages.",
      "Click trash to delete unwanted pages or duplicate desired ones.",
      "Save and download your newly organized PDF.",
    ],
    faqs: [
      {
        q: "Can I delete multiple pages at once?",
        a: "Yes, select or click the delete button on any page you wish to remove.",
      },
    ],
    badge: { label: "Popular", icon: "📑", tone: "popular" },
    image: "/assets/tools/pdf-organize-pages.png",
    baseUses: 18900,
    isFeatured: false,
    keywords: ["organize pdf pages", "reorder pdf", "delete pdf pages", "rearrange pdf pages"],
    seoTitle: "PDF Organize Pages — Reorder and Delete PDF Pages | ToolNami",
    seoDescription:
      "Organize PDF pages visually with drag and drop. Reorder, rotate, and delete pages online free and privately.",
  },

  // ==================== IMAGE TOOLS (16-30) ====================
  {
    id: 16,
    slug: "image-compressor",
    to: "/tools/image-compressor",
    title: "Image Compressor",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Compress JPEG, PNG, and WebP images by up to 80% without visible loss.",
    technicalDescription:
      "Performs perceptual chroma subsampling and adaptive quantization via client-side HTML5 Canvas and WebAssembly encoders, minimizing byte size while preserving human-perceived detail.",
    howToSteps: [
      "Drag and drop your photos into the compression workspace.",
      "Adjust the target quality slider to your desired balance.",
      "Inspect live side-by-side file size and savings metrics.",
      "Download compressed images individually or as a batch ZIP.",
    ],
    faqs: [
      {
        q: "Are images sent to an external server?",
        a: "No, all compression runs locally inside your browser with complete privacy.",
      },
      { q: "Does it support PNG transparency?", a: "Yes, alpha channels are preserved perfectly." },
    ],
    badge: { label: "Featured", icon: "⚡", tone: "featured" },
    image: "/assets/tools/3d-image-compressor.png",
    baseUses: 36200,
    isFeatured: true,
    keywords: [
      "compress image",
      "reduce image size",
      "tinypng alternative",
      "jpg compressor",
      "png compressor",
    ],
    seoTitle: "Image Compressor — Reduce Image File Size Online | ToolNami",
    seoDescription:
      "Compress JPG, PNG, and WebP images online free. Lossless quality with up to 80% size savings. 100% private browser processing.",
  },
  {
    id: 101,
    slug: "image-size-reducer",
    to: "/tools/image-size-reducer",
    title: "Image Size Reducer in KB",
    category: "image",
    categoryLabel: "Image Tools",
    summary:
      "Reduce photo file size to exact target KB (e.g. 1MB to 200KB, 100KB, or 50KB) online.",
    technicalDescription:
      "Iterative binary search canvas compression engine. Dynamically scales pixel dimensions and quantizes WebP/JPEG quality levels to strictly reach your target file size without visible degradation.",
    howToSteps: [
      "Upload any image (JPG, PNG, WebP) of any file size.",
      "Choose a target file size preset (200 KB, 100 KB, 50 KB) or type custom KB.",
      "Click 'Reduce Size' to compress instantly in your browser.",
      "Download the reduced photo with guaranteed file size compliance.",
    ],
    faqs: [
      {
        q: "Can I reduce a 1MB or 5MB photo to 200KB?",
        a: "Yes! The tool automatically adjusts compression ratio and resolution to hit your target size (such as 200KB, 100KB, or 50KB) while preserving sharp image details.",
      },
      {
        q: "Is it suitable for government exam forms and job portals?",
        a: "Yes! It is specifically engineered for UPSC, SSC, passport, visa, and college admission portals that require strict file size limits (like 200KB or 50KB).",
      },
      {
        q: "Are my photos uploaded to any server?",
        a: "No. All resizing and compression happens 100% locally in your web browser for complete privacy.",
      },
    ],
    badge: { label: "Popular", icon: "📐", tone: "popular" },
    image: "/assets/tools/image-size-reducer.png",
    baseUses: 41200,
    isFeatured: true,
    keywords: [
      "reduce image size in kb",
      "image size reducer",
      "reduce 1mb to 200kb",
      "photo size reducer to 100kb",
      "compress photo to 50kb",
      "target kb image compressor",
    ],
    seoTitle: "Image Size Reducer in KB — Compress Photo to 200KB, 100KB, 50KB | ToolNami",
    seoDescription:
      "Free online photo size reducer in KB. Reduce 1MB or 5MB images to exact 200KB, 100KB, or 50KB for job portals, exams, and visa applications. 100% private.",
  },
  {
    id: 17,
    slug: "image-resizer",
    to: "/tools/image-resizer",
    title: "Image Resizer",
    category: "image",
    categoryLabel: "Image Tools",
    summary:
      "Resize photos to exact pixel width, height, or percentage while locking aspect ratio.",
    technicalDescription:
      "Bicubic resampler implemented on client Canvas. Handles custom pixel boundaries, DPI scaling, and standard social media presets (Instagram, YouTube, Twitter).",
    howToSteps: [
      "Upload your image.",
      "Enter target width or height, or pick a percentage scaling.",
      "Keep 'Maintain Aspect Ratio' checked to prevent distortion.",
      "Download your resized image.",
    ],
    faqs: [
      {
        q: "Can I resize to exact Instagram dimensions?",
        a: "Yes, select social media presets or enter custom dimensions like 1080x1080.",
      },
    ],
    badge: { label: "Popular", icon: "📐", tone: "popular" },
    image: "/assets/tools/image-resizer.png",
    baseUses: 28400,
    isFeatured: false,
    keywords: [
      "resize image",
      "image resizer online",
      "change picture dimensions",
      "photo resizer",
    ],
    seoTitle: "Image Resizer — Resize Photos Online Free | ToolNami",
    seoDescription:
      "Resize images to exact dimensions or percentage scale online free. Lock aspect ratio and export sharp, clean photos.",
  },
  {
    id: 18,
    slug: "image-cropper",
    to: "/tools/image-cropper",
    title: "Image Cropper",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Crop images with custom aspect ratios, freeform framing, and square avatars.",
    technicalDescription:
      "Interactive bounding box canvas manipulator providing real-time aspect ratio constraints (1:1, 16:9, 4:3) with pixel-accurate clipping export.",
    howToSteps: [
      "Upload your photo.",
      "Adjust crop handles or choose a preset aspect ratio.",
      "Preview the cropped area and click Apply Crop.",
      "Download your cropped photo.",
    ],
    faqs: [
      {
        q: "Can I crop circular avatar images?",
        a: "Yes, use the 1:1 square ratio preset for perfect profile photos.",
      },
    ],
    badge: { label: "Fast", icon: "✂️", tone: "fast" },
    image: "/assets/tools/image-cropper.png",
    baseUses: 22100,
    isFeatured: false,
    keywords: ["crop image", "photo cropper", "crop pictures online", "cut image"],
    seoTitle: "Image Cropper — Crop Photos Online with Aspect Ratios | ToolNami",
    seoDescription:
      "Crop photos online for free with preset aspect ratios (1:1, 16:9, 4:3) or freeform sizing. Instant preview and download.",
  },
  {
    id: 19,
    slug: "image-converter",
    to: "/tools/image-converter",
    title: "Image Converter",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert photos across JPG, PNG, WebP, GIF, BMP, and SVG formats effortlessly.",
    technicalDescription:
      "Universal image decoder and transcoder utilizing Canvas 2D image data conversion to output MIME-specified image blobs.",
    howToSteps: [
      "Upload one or multiple images.",
      "Select desired output format (PNG, JPG, WebP, GIF).",
      "Click Convert All to process.",
      "Download converted files instantly.",
    ],
    faqs: [
      { q: "Which formats are supported?", a: "Supports PNG, JPG, WebP, GIF, BMP, TIFF, and SVG." },
    ],
    badge: { label: "Top", icon: "🔄", tone: "top" },
    image: "/assets/tools/image-converter.png",
    baseUses: 25600,
    isFeatured: false,
    keywords: ["image converter", "convert photos", "image format converter", "convert picture"],
    seoTitle: "Image Converter — Convert Photos Online Free | ToolNami",
    seoDescription:
      "Convert images to JPG, PNG, WebP and more online for free. Batch conversion supported with zero quality loss.",
  },
  {
    id: 20,
    slug: "jpg-to-png",
    to: "/tools/jpg-to-png",
    title: "JPG to PNG",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert compressed JPG files into lossless PNG format with transparency readiness.",
    technicalDescription:
      "Decodes JPEG DCT blocks into RGBA bitmap canvas data and encodes standard lossless Deflate-compressed PNG chunk streams.",
    howToSteps: [
      "Select or drop JPG photos.",
      "Click Convert to PNG.",
      "Download crisp PNG images.",
    ],
    faqs: [
      {
        q: "Will converting JPG to PNG increase quality?",
        a: "It stops further compression loss and enables transparency support.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/jpg-to-png.png",
    baseUses: 23400,
    isFeatured: false,
    keywords: ["jpg to png", "convert jpg to png", "jpeg to png online"],
    seoTitle: "JPG to PNG — Convert JPEG to PNG Online Free | ToolNami",
    seoDescription:
      "Convert JPG photos to PNG format online for free. Lossless quality and fast client-side conversion.",
  },
  {
    id: 21,
    slug: "png-to-jpg",
    to: "/tools/png-to-jpg",
    title: "PNG to JPG",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert large PNG graphics into lightweight, highly compatible JPG files.",
    technicalDescription:
      "Renders PNG bitmap with custom background fill (white default) to flatten transparent alpha pixels into standard JPEG color spaces.",
    howToSteps: [
      "Upload your PNG file.",
      "Choose JPEG quality level.",
      "Click Convert to JPG and download.",
    ],
    faqs: [
      {
        q: "What happens to transparent backgrounds?",
        a: "Transparent areas are cleanly converted to a solid white or custom background.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/png-to-jpg.png",
    baseUses: 21900,
    isFeatured: false,
    keywords: ["png to jpg", "convert png to jpg", "png to jpeg"],
    seoTitle: "PNG to JPG — Convert PNG to JPEG Online Free | ToolNami",
    seoDescription:
      "Convert heavy PNG images into lightweight JPG format online for free. Fast, clean, and private in your browser.",
  },
  {
    id: 22,
    slug: "png-to-webp",
    to: "/tools/png-to-webp",
    title: "PNG to WebP",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert PNG images to Google WebP format for modern website speed acceleration.",
    technicalDescription:
      "Encodes image frames into VP8/VP8L WebP format, providing smaller file size with full alpha channel transparency support.",
    howToSteps: [
      "Upload PNG graphics or icons.",
      "Select lossy or lossless WebP encoding.",
      "Click Convert to WebP and download.",
    ],
    faqs: [
      {
        q: "Is WebP supported in all modern browsers?",
        a: "Yes, Chrome, Safari, Firefox, and Edge all natively render WebP.",
      },
    ],
    badge: { label: "Trending", icon: "🚀", tone: "trending" },
    image: "/assets/tools/png-to-webp.png",
    baseUses: 19800,
    isFeatured: false,
    keywords: [
      "png to webp",
      "convert png to webp",
      "webp converter",
      "website image optimization",
    ],
    seoTitle: "PNG to WebP — Convert PNG to WebP Online Free | ToolNami",
    seoDescription:
      "Convert PNG to WebP online for faster website loading speeds. Retain transparency with up to 70% smaller file sizes.",
  },
  {
    id: 23,
    slug: "webp-to-png",
    to: "/tools/webp-to-png",
    title: "WebP to PNG",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert modern WebP images back into standard, universal PNG format.",
    technicalDescription:
      "Decodes WebP image streams into RGBA frame buffers and exports portable PNG chunks for maximum software compatibility.",
    howToSteps: [
      "Upload your WebP file.",
      "Click Convert to PNG.",
      "Download universally compatible PNG.",
    ],
    faqs: [
      {
        q: "Why convert WebP to PNG?",
        a: "Certain legacy photo editors and desktop apps require standard PNG files.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/webp-to-png.png",
    baseUses: 17600,
    isFeatured: false,
    keywords: ["webp to png", "convert webp to png", "webp file converter"],
    seoTitle: "WebP to PNG — Convert WebP to PNG Online Free | ToolNami",
    seoDescription:
      "Convert WebP images to universally compatible PNG format online for free. Fast, lossless, and secure.",
  },
  {
    id: 24,
    slug: "image-upscaler",
    to: "/tools/image-upscaler",
    title: "Image Upscaler",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Enhance resolution and upscale small or pixelated images by 2x or 4x cleanly.",
    technicalDescription:
      "Applies edge-preserving super-resolution interpolation and contrast enhancement filters to enlarge small images while mitigating blur.",
    howToSteps: [
      "Upload a low-resolution or small photo.",
      "Choose 2x or 4x magnification factor.",
      "Click Upscale Image to process.",
      "Download high-resolution image.",
    ],
    faqs: [
      {
        q: "Does it sharpen blurry images?",
        a: "Yes, edge enhancement algorithms refine borders and reduce pixelation.",
      },
    ],
    badge: { label: "Top", icon: "🔍", tone: "top" },
    image: "/assets/tools/image-upscaler.png",
    baseUses: 22800,
    isFeatured: false,
    keywords: ["image upscaler", "enlarge image", "increase image resolution", "ai photo enhancer"],
    seoTitle: "Image Upscaler — Enlarge Photos Without Losing Quality | ToolNami",
    seoDescription:
      "Upscale images by 2x or 4x online free. Edge-preserving enhancement for sharper, clearer high-resolution photos.",
  },
  {
    id: 25,
    slug: "image-background-remover",
    to: "/tools/image-background-remover",
    title: "Background Remover",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Remove image backgrounds automatically to create transparent PNG cutouts.",
    technicalDescription:
      "Client-side intelligent foreground saliency segmentation. Distinguishes subject contours and applies alpha mask transparency.",
    howToSteps: [
      "Upload portrait, product, or logo image.",
      "Click Remove Background to segment the subject.",
      "Review transparency checkerboard and refine if desired.",
      "Download transparent PNG cutout.",
    ],
    faqs: [
      {
        q: "Is it suitable for e-commerce products?",
        a: "Yes, it creates clean transparent cutouts perfect for Amazon, Shopify, or eBay listings.",
      },
    ],
    badge: { label: "Featured", icon: "✨", tone: "featured" },
    image: "/assets/tools/image-background-remover.png",
    baseUses: 33400,
    isFeatured: true,
    keywords: [
      "background remover",
      "remove background from image",
      "transparent background",
      "cut out image",
    ],
    seoTitle: "Background Remover — Remove Image Backgrounds Online Free | ToolNami",
    seoDescription:
      "Remove background from photos automatically online free. Create clean transparent PNGs for products, portraits, and logos.",
  },
  {
    id: 26,
    slug: "image-blur",
    to: "/tools/image-blur",
    title: "Image Blur",
    category: "image",
    categoryLabel: "Image Tools",
    summary:
      "Apply Gaussian blur to images or censor sensitive areas like license plates and faces.",
    technicalDescription:
      "Computes two-pass separable Gaussian convolution kernel across pixel arrays, supporting full-image smoothing or selective brush censorship.",
    howToSteps: [
      "Upload your photo.",
      "Select blur intensity radius.",
      "Apply to entire image or draw blur box over sensitive details.",
      "Download privacy-blurred image.",
    ],
    faqs: [
      {
        q: "Can I blur specific faces or credit cards?",
        a: "Yes, use the regional blur tool to censor only confidential details.",
      },
    ],
    badge: { label: "Privacy", icon: "🛡️", tone: "recommended" },
    image: "/assets/tools/image-blur.png",
    baseUses: 15300,
    isFeatured: false,
    keywords: ["image blur", "blur photo", "censor image", "gaussian blur online", "blur face"],
    seoTitle: "Image Blur — Blur Photos and Censor Details Online | ToolNami",
    seoDescription:
      "Blur entire photos or censor sensitive faces and text online free. Privacy-safe and easy to use.",
  },
  {
    id: 27,
    slug: "image-sharpen",
    to: "/tools/image-sharpen",
    title: "Image Sharpen",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Sharpen soft or slightly out-of-focus photos by boosting edge contrast.",
    technicalDescription:
      "Applies an unsharp masking (USM) spatial convolution filter to accentuate high-frequency luminance gradients across object borders.",
    howToSteps: [
      "Upload your soft photo.",
      "Adjust sharpening amount and radius slider.",
      "Inspect before-and-after preview.",
      "Download crisp, detailed photo.",
    ],
    faqs: [
      {
        q: "Will sharpening add digital noise?",
        a: "Gentle sharpening enhances edges cleanly; use the preview slider to avoid over-sharpening.",
      },
    ],
    badge: { label: "Utility", icon: "✨", tone: "fast" },
    image: "/assets/tools/image-sharpen.png",
    baseUses: 14700,
    isFeatured: false,
    keywords: ["image sharpen", "sharpen photo", "unsharp mask", "enhance picture clarity"],
    seoTitle: "Image Sharpen — Sharpen Photos Online Free | ToolNami",
    seoDescription:
      "Sharpen out-of-focus photos online for free. Boost edge clarity and recover photo details with instant preview.",
  },
  {
    id: 28,
    slug: "image-rotate",
    to: "/tools/image-rotate",
    title: "Image Rotate",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Rotate photos by 90°, 180°, 270°, or any custom degree angle smoothly.",
    technicalDescription:
      "Executes trigonometric 2D matrix transformation on Canvas, recalculating canvas bounding dimensions to prevent corner clipping.",
    howToSteps: [
      "Upload your image.",
      "Click 90° rotation buttons or use the degree slider for fine leveling.",
      "Click Apply Rotation.",
      "Download your perfectly oriented image.",
    ],
    faqs: [
      {
        q: "Can I straighten slightly tilted horizons?",
        a: "Yes, use the arbitrary angle slider for 1-degree precision leveling.",
      },
    ],
    badge: { label: "Fast", icon: "🔄", tone: "fast" },
    image: "/assets/tools/image-rotate.png",
    baseUses: 16200,
    isFeatured: false,
    keywords: ["rotate image", "turn photo", "image orientation", "straighten photo"],
    seoTitle: "Image Rotate — Rotate and Straighten Photos Online | ToolNami",
    seoDescription:
      "Rotate photos by 90 degrees or arbitrary angles online free. Level horizons and save perfectly oriented images.",
  },
  {
    id: 29,
    slug: "image-flip",
    to: "/tools/image-flip",
    title: "Image Flip",
    category: "image",
    categoryLabel: "Image Tools",
    summary:
      "Mirror photos horizontally or vertically to correct selfie angles or create symmetries.",
    technicalDescription:
      "Applies scale(-1, 1) or scale(1, -1) canvas context transformations to invert pixel columns or rows losslessly.",
    howToSteps: [
      "Upload your photo.",
      "Click 'Flip Horizontal' (Mirror) or 'Flip Vertical'.",
      "Preview mirrored image.",
      "Download your flipped photo.",
    ],
    faqs: [
      {
        q: "Is quality lost during flipping?",
        a: "No, flipping is a purely lossless coordinate inversion.",
      },
    ],
    badge: { label: "Fast", icon: "🪞", tone: "fast" },
    image: "/assets/tools/image-flip.png",
    baseUses: 15100,
    isFeatured: false,
    keywords: ["flip image", "mirror photo", "flip horizontal", "flip vertical"],
    seoTitle: "Image Flip — Mirror Photos Horizontally and Vertically | ToolNami",
    seoDescription:
      "Flip images horizontally or vertically online for free. Fix inverted selfie angles and create mirror effects instantly.",
  },
  {
    id: 30,
    slug: "image-color-picker",
    to: "/tools/image-color-picker",
    title: "Image Color Picker",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Sample any pixel color from your images and copy HEX, RGB, HSL, and CMYK codes.",
    technicalDescription:
      "Interactive magnified loupe Canvas eyedropper reading precise `getImageData` pixel RGBA values with instant color space translation.",
    howToSteps: [
      "Upload or paste an image.",
      "Hover or click anywhere on the image with the eyedropper.",
      "Copy exact HEX (#FFFFFF), RGB, HSL, or CMYK color codes with 1 click.",
    ],
    faqs: [
      {
        q: "Can I generate a color palette from the image?",
        a: "Yes, the tool automatically extracts dominant palette swatches.",
      },
    ],
    badge: { label: "Developer", icon: "🎨", tone: "recommended" },
    image: "/assets/tools/image-color-picker.png",
    baseUses: 20100,
    isFeatured: false,
    keywords: [
      "image color picker",
      "eyedropper online",
      "hex color from image",
      "extract color palette",
    ],
    seoTitle: "Image Color Picker — Extract HEX and RGB Colors Online | ToolNami",
    seoDescription:
      "Pick colors from images online free with a precision eyedropper. Copy HEX, RGB, and HSL codes instantly.",
  },

  // ==================== TEXT TOOLS (31-40) ====================
  {
    id: 31,
    slug: "word-counter",
    to: "/tools/word-counter",
    title: "Word Counter",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Count words, characters, sentences, paragraphs, and estimated reading time live.",
    technicalDescription:
      "Real-time regex text stream tokenizer parsing lexical boundaries, syllable structures, and average reading speed (225 wpm) metrics.",
    howToSteps: [
      "Type or paste your text into the editor area.",
      "Inspect live updating metrics: words, characters, sentences, reading time.",
      "Check keyword density and readability statistics.",
    ],
    faqs: [
      {
        q: "Does it count words with hyphens accurately?",
        a: "Yes, compound words and punctuation are parsed according to standard linguistic guidelines.",
      },
    ],
    badge: { label: "Featured", icon: "📊", tone: "featured" },
    image: "/assets/tools/word-counter.png",
    baseUses: 32800,
    isFeatured: true,
    keywords: [
      "word counter",
      "character counter",
      "count words online",
      "reading time calculator",
      "essay word count",
    ],
    seoTitle: "Word Counter — Count Words, Characters, and Reading Time | ToolNami",
    seoDescription:
      "Free online word counter. Real-time statistics for words, characters, sentences, paragraphs, and estimated reading time.",
  },
  {
    id: 32,
    slug: "character-counter",
    to: "/tools/character-counter",
    title: "Character Counter",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Check exact character count with and without spaces for social media post limits.",
    technicalDescription:
      "Unicode code-point counting engine with built-in limit monitors for Twitter/X (280 chars), LinkedIn, Instagram, SMS (160 chars), and meta titles (60 chars).",
    howToSteps: [
      "Paste your text or message into the box.",
      "View character totals with and without whitespace.",
      "Check social platform limit bars to ensure your post won't be truncated.",
    ],
    faqs: [
      {
        q: "Does it account for emojis?",
        a: "Yes, multi-byte UTF-16 surrogate pairs and emojis are accurately calculated.",
      },
    ],
    badge: { label: "Fast", icon: "🔢", tone: "fast" },
    image: "/assets/tools/character-counter.png",
    baseUses: 21500,
    isFeatured: false,
    keywords: [
      "character counter",
      "letter count",
      "count characters without spaces",
      "twitter character count",
    ],
    seoTitle: "Character Counter — Count Characters With & Without Spaces | ToolNami",
    seoDescription:
      "Count characters online free. Check exact length for Twitter, SMS, LinkedIn, and SEO meta tags in real-time.",
  },
  {
    id: 33,
    slug: "case-converter",
    to: "/tools/case-converter",
    title: "Case Converter",
    category: "text",
    categoryLabel: "Text Tools",
    summary:
      "Convert text instantly into UPPERCASE, lowercase, Title Case, camelCase, and snake_case.",
    technicalDescription:
      "Linguistic text transformer implementing title-case capitalization rules (ignoring minor prepositions) and code identifier casings (camel, snake, kebab, Pascal).",
    howToSteps: [
      "Paste or type text into the input field.",
      "Click your desired case button (UPPERCASE, lowercase, Title Case, camelCase, etc.).",
      "Copy the formatted text to your clipboard with 1 click.",
    ],
    faqs: [
      {
        q: "Does Title Case capitalize prepositions?",
        a: "Standard prepositions (in, on, at, the, a) remain lowercase unless starting a sentence.",
      },
    ],
    badge: { label: "Popular", icon: "🔤", tone: "popular" },
    image: "/assets/tools/case-converter.png",
    baseUses: 24600,
    isFeatured: false,
    keywords: [
      "case converter",
      "uppercase to lowercase",
      "title case generator",
      "camelcase converter",
    ],
    seoTitle: "Case Converter — UPPERCASE, lowercase, Title Case Online | ToolNami",
    seoDescription:
      "Convert text cases online free: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and snake_case.",
  },
  {
    id: 34,
    slug: "text-cleaner",
    to: "/tools/text-cleaner",
    title: "Text Cleaner",
    category: "text",
    categoryLabel: "Text Tools",
    summary:
      "Remove extra spaces, tabs, line breaks, emojis, and unwanted formatting from messy text.",
    technicalDescription:
      "Sanitizes raw text strings by collapsing multiple whitespace runs, normalizing line-endings (`\\r\\n` to `\\n`), and stripping non-printable ASCII or HTML tags.",
    howToSteps: [
      "Paste messy or copied text into the cleaner.",
      "Toggle cleaning options (Remove extra spaces, strip blank lines, remove HTML).",
      "Copy clean, polished text ready for documents.",
    ],
    faqs: [
      {
        q: "Can I remove double spaces?",
        a: "Yes, all duplicate spaces and stray tabs are collapsed into single spaces.",
      },
    ],
    badge: { label: "Utility", icon: "🧹", tone: "fast" },
    image: "/assets/tools/text-cleaner.png",
    baseUses: 18100,
    isFeatured: false,
    keywords: [
      "text cleaner",
      "remove extra spaces",
      "clean text",
      "strip html tags",
      "remove line breaks",
    ],
    seoTitle: "Text Cleaner — Remove Extra Spaces & Line Breaks Online | ToolNami",
    seoDescription:
      "Clean messy text online for free. Strip redundant whitespace, duplicate lines, and HTML tags with one click.",
  },
  {
    id: 35,
    slug: "text-formatter",
    to: "/tools/text-formatter",
    title: "Text Formatter",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Beautify, indent, wrap, and format raw text, Markdown, and tabular information.",
    technicalDescription:
      "Re-aligns text columns, formats bullet lists, adjusts line wrapping margins, and standardizes indentation indentation depths.",
    howToSteps: [
      "Input your raw text or list.",
      "Select indentation spacing (tabs or 2/4 spaces) and bullet styling.",
      "Copy formatted, elegant text.",
    ],
    faqs: [
      { q: "Can it wrap lines at 80 characters?", a: "Yes, set custom word-wrap column widths." },
    ],
    badge: { label: "Utility", icon: "📐", tone: "recommended" },
    image: "/assets/tools/text-formatter.png",
    baseUses: 16400,
    isFeatured: false,
    keywords: ["text formatter", "format text", "indent text", "markdown formatter", "word wrap"],
    seoTitle: "Text Formatter — Format and Indent Text Online | ToolNami",
    seoDescription:
      "Format and indent text online free. Tidy up paragraphs, lists, and markdown with configurable line wrapping.",
  },
  {
    id: 36,
    slug: "remove-duplicate-lines",
    to: "/tools/remove-duplicate-lines",
    title: "Remove Duplicate Lines",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Deduplicate lists, emails, keywords, and code lines while preserving original order.",
    technicalDescription:
      "Fast linear $O(n)$ Set-based line deduplicator with options for case-insensitive matching and empty line purging.",
    howToSteps: [
      "Paste your list of items or text lines.",
      "Select options (Case sensitive, trim spaces, preserve order).",
      "Click Remove Duplicates to inspect unique item counts.",
      "Copy unique list to clipboard.",
    ],
    faqs: [
      {
        q: "Can it handle lists of 100,000 items?",
        a: "Yes, memory-efficient Set hashing handles tens of thousands of items in fractions of a second.",
      },
    ],
    badge: { label: "Top", icon: "🎯", tone: "top" },
    image: "/assets/tools/remove-duplicate-lines.png",
    baseUses: 19300,
    isFeatured: false,
    keywords: [
      "remove duplicate lines",
      "deduplicate list",
      "unique lines",
      "remove duplicate emails",
    ],
    seoTitle: "Remove Duplicate Lines — Deduplicate Lists Online Free | ToolNami",
    seoDescription:
      "Remove duplicate lines from lists and text files online free. Fast, accurate, and preserves your custom order.",
  },
  {
    id: 37,
    slug: "text-sorter",
    to: "/tools/text-sorter",
    title: "Text Sorter",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Sort text lists alphabetically (A-Z or Z-A), numerically, by length, or randomly.",
    technicalDescription:
      "Multi-mode natural collation sorting algorithm supporting alphabetical locale collation, numeric integer/decimal parsing, string length ordering, and Fisher-Yates random shuffling.",
    howToSteps: [
      "Paste your lines of text.",
      "Select sort mode: A to Z, Z to A, Numeric, Length, or Shuffle.",
      "Copy your sorted list.",
    ],
    faqs: [
      {
        q: "Does natural numeric sorting work (e.g. 2 before 10)?",
        a: "Yes, natural numeric comparison ensures numbers sort in true numerical sequence.",
      },
    ],
    badge: { label: "Fast", icon: "🔀", tone: "fast" },
    image: "/assets/tools/text-sorter.png",
    baseUses: 17200,
    isFeatured: false,
    keywords: ["text sorter", "alphabetize list", "sort lines a to z", "sort numbers online"],
    seoTitle: "Text Sorter — Alphabetize and Sort Lists Online | ToolNami",
    seoDescription:
      "Sort lines of text alphabetically, numerically, by length, or shuffle randomly online for free.",
  },
  {
    id: 38,
    slug: "find-replace",
    to: "/tools/find-replace",
    title: "Find & Replace",
    category: "text",
    categoryLabel: "Text Tools",
    summary:
      "Search and replace words, phrases, or complex Regular Expressions across large texts.",
    technicalDescription:
      "Regex-powered global replacement engine supporting match case, whole word isolation, and dynamic capturing group backreferences (`$1`, `$2`).",
    howToSteps: [
      "Paste your text into the main editor.",
      "Enter Find string and Replace With string.",
      "Toggle Match Case, Whole Word, or Regular Expression.",
      "Click Replace All to see total match counts and updated text.",
    ],
    faqs: [
      {
        q: "Can I use Regex capture groups?",
        a: "Yes, standard JavaScript RegExp syntax and capturing groups are fully supported.",
      },
    ],
    badge: { label: "Utility", icon: "🔍", tone: "recommended" },
    image: "/assets/tools/find-replace.png",
    baseUses: 18700,
    isFeatured: false,
    keywords: ["find and replace", "text replacer", "regex replace online", "batch word replace"],
    seoTitle: "Find & Replace — Search and Replace Text Online | ToolNami",
    seoDescription:
      "Find and replace text online with full Regex support, case matching, and whole-word filtering. Fast and free.",
  },
  {
    id: 39,
    slug: "line-counter",
    to: "/tools/line-counter",
    title: "Line Counter",
    category: "text",
    categoryLabel: "Text Tools",
    summary: "Count total lines, empty lines, and non-empty lines with line-numbered display.",
    technicalDescription:
      "Analyzes newline boundary terminators (`\\n`, `\\r\\n`), rendering a synchronized line-numbered gutter alongside text content.",
    howToSteps: [
      "Paste text, code, or logs into the editor.",
      "Instantly view total lines, code lines, and blank lines count.",
      "Navigate to specific line numbers effortlessly.",
    ],
    faqs: [
      {
        q: "Does it count blank lines separately?",
        a: "Yes, you receive distinct metrics for filled lines and empty lines.",
      },
    ],
    badge: { label: "Fast", icon: "📏", tone: "fast" },
    image: "/assets/tools/line-counter.png",
    baseUses: 14900,
    isFeatured: false,
    keywords: ["line counter", "count lines of code", "count lines online", "number of lines"],
    seoTitle: "Line Counter — Count Lines in Text and Code Online | ToolNami",
    seoDescription:
      "Count lines of text or code online free. View total lines, non-empty lines, and character totals instantly.",
  },
  {
    id: 40,
    slug: "random-text-generator",
    to: "/tools/random-text-generator",
    title: "Random Text Generator",
    category: "text",
    categoryLabel: "Text Tools",
    summary:
      "Generate custom Lorem Ipsum, mock paragraphs, words, or sentences for design mockups.",
    technicalDescription:
      "Procedural classical Latin and mock paragraph synthesizer generating configurable paragraph quantities, sentences per paragraph, and optional HTML `<p>` tag wrapping.",
    howToSteps: [
      "Select generator type (Paragraphs, Sentences, Words).",
      "Specify quantity needed.",
      "Click Generate Text and copy with 1 click.",
    ],
    faqs: [
      {
        q: "Can I generate HTML tags directly?",
        a: "Yes, toggle the HTML markup option to wrap paragraphs in `<p>` tags.",
      },
    ],
    badge: { label: "New", icon: "🎲", tone: "new" },
    image: "/assets/tools/random-text-generator.png",
    baseUses: 16500,
    isFeatured: false,
    keywords: ["random text generator", "lorem ipsum generator", "placeholder text", "mock text"],
    seoTitle: "Random Text Generator — Lorem Ipsum Placeholder Text | ToolNami",
    seoDescription:
      "Generate random Lorem Ipsum text, sentences, and mock paragraphs online free for design mockups and prototypes.",
  },

  // ==================== DEVELOPER TOOLS (41-55) ====================
  {
    id: 41,
    slug: "qr-code-generator",
    to: "/tools/qr-code-generator",
    title: "QR Code Generator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Generate custom 2D QR codes for URLs, WiFi networks, vCards, text, and email.",
    technicalDescription:
      "Reed-Solomon error correction QR matrix generator (Level L, M, Q, H) exporting razor-sharp PNG and SVG vectors with customizable foreground/background hex colors.",
    howToSteps: [
      "Choose QR type (Website URL, WiFi credentials, vCard, Plain Text, or Email).",
      "Enter your content and customize foreground and background colors.",
      "Select error correction level (High recommended for logos).",
      "Download high-resolution PNG or vector SVG.",
    ],
    faqs: [
      {
        q: "Do these QR codes expire?",
        a: "Never. ToolNami generates static QR codes that point directly to your data without third-party redirection or expiration.",
      },
      {
        q: "Can I create WiFi QR codes?",
        a: "Yes, guests can scan your QR code with their phone camera to connect to your WiFi network without typing passwords.",
      },
    ],
    badge: { label: "Featured", icon: "📱", tone: "featured" },
    image: "/assets/tools/3d-qr-code-generator.png",
    baseUses: 35100,
    isFeatured: true,
    keywords: [
      "qr code generator",
      "create qr code",
      "free qr code",
      "wifi qr code",
      "custom qr code",
    ],
    seoTitle: "QR Code Generator — Create Custom QR Codes Free | ToolNami",
    seoDescription:
      "Generate custom QR codes for URLs, WiFi, contact cards, and text online free. Permanent codes with no expiration and no watermarks.",
  },
  {
    id: 42,
    slug: "barcode-generator",
    to: "/tools/barcode-generator",
    title: "Barcode Generator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Generate retail and logistics barcodes (CODE-128, EAN-13, UPC-A, ITF) online.",
    technicalDescription:
      "Linear 1D barcode symbology generator calculating check-digits and encoding optical guard bars compliant with GS1 standards.",
    howToSteps: [
      "Select barcode standard (CODE128, EAN13, UPCA, CODE39).",
      "Enter your numeric or alphanumeric data.",
      "Preview barcode with human-readable text.",
      "Download print-ready PNG or SVG.",
    ],
    faqs: [
      {
        q: "Can I print barcodes on standard labels?",
        a: "Yes, high-resolution vector output prints crisp at any label size.",
      },
    ],
    badge: { label: "Utility", icon: "📊", tone: "top" },
    image: "/assets/tools/barcode-generator.png",
    baseUses: 19400,
    isFeatured: false,
    keywords: [
      "barcode generator",
      "create barcode",
      "code 128 generator",
      "upc generator",
      "ean barcode",
    ],
    seoTitle: "Barcode Generator — Create Free 1D Barcodes Online | ToolNami",
    seoDescription:
      "Generate standard barcodes online free: Code 128, EAN-13, UPC-A, and Code 39. Download high-resolution PNG and SVG.",
  },
  {
    id: 43,
    slug: "password-generator",
    to: "/tools/password-generator",
    title: "Password Generator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Generate ultra-secure, cryptographically random passwords with custom entropy.",
    technicalDescription:
      "Uses `window.crypto.getRandomValues` CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) to assemble passwords immune to dictionary attacks.",
    howToSteps: [
      "Select desired character length (e.g. 16–64 characters).",
      "Toggle character sets: Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), Symbols (!@#$).",
      "Click Generate and review the estimated crack-time security score.",
      "Copy password securely with 1 click.",
    ],
    faqs: [
      {
        q: "Is the password generated locally on my device?",
        a: "Yes, 100% generated via browser hardware entropy. The password is never transmitted across the network.",
      },
      {
        q: "How long should a strong password be?",
        a: "Security experts recommend at least 16 characters mixing letters, digits, and symbols.",
      },
    ],
    badge: { label: "Featured", icon: "🔐", tone: "featured" },
    image: "/assets/tools/password-generator.png",
    baseUses: 33900,
    isFeatured: true,
    keywords: [
      "password generator",
      "secure password generator",
      "random password",
      "strong password generator",
    ],
    seoTitle: "Password Generator — Create Strong Secure Passwords | ToolNami",
    seoDescription:
      "Generate strong, secure, cryptographically random passwords online free. 100% private client-side generation.",
  },
  {
    id: 44,
    slug: "uuid-generator",
    to: "/tools/uuid-generator",
    title: "UUID Generator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Generate RFC 4122 compliant Version 4 (v4) random Universally Unique Identifiers.",
    technicalDescription:
      "Evaluates 128-bit cryptographic random integers, setting RFC 4122 multiplexed version bits `0100` (v4) and variant bits `10xx`.",
    howToSteps: [
      "Select how many UUIDs you need (1 to 500 at once).",
      "Choose formatting options (Uppercase, lowercase, hyphens on/off).",
      "Click Generate UUIDs.",
      "Copy single or batch list.",
    ],
    faqs: [
      {
        q: "What is the collision probability of a UUID v4?",
        a: "Generating 1 billion UUIDs per second for 100 years has less than a 1 in a billion chance of collision.",
      },
    ],
    badge: { label: "Fast", icon: "🆔", tone: "fast" },
    image: "/assets/tools/uuid-generator.png",
    baseUses: 21800,
    isFeatured: false,
    keywords: ["uuid generator", "guid generator", "uuid v4 online", "random uuid"],
    seoTitle: "UUID Generator — Generate Random UUID v4 Online | ToolNami",
    seoDescription:
      "Generate RFC-compliant random UUID v4 identifiers online free. Batch generation and custom formatting supported.",
  },
  {
    id: 45,
    slug: "json-formatter",
    to: "/tools/json-formatter",
    title: "JSON Formatter",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Beautify, validate, inspect, and fix minified JSON data with syntax highlighting.",
    technicalDescription:
      "AST parser evaluating ECMAScript 262 JSON grammar, rendering an interactive collapsible tree structure with inline error diagnostics.",
    howToSteps: [
      "Paste your raw or minified JSON string.",
      "Click Format JSON to beautify with 2 or 4 spaces.",
      "Inspect nested keys and arrays in the interactive tree view.",
      "Copy formatted output or download as .json.",
    ],
    faqs: [
      {
        q: "Does it pinpoint syntax errors?",
        a: "Yes, exact line and column numbers of trailing commas or unquoted keys are highlighted.",
      },
    ],
    badge: { label: "Popular", icon: "🔧", tone: "popular" },
    image: "/assets/tools/json-formatter.png",
    baseUses: 30400,
    isFeatured: false,
    keywords: [
      "json formatter",
      "json beautifier",
      "format json online",
      "json parser",
      "json viewer",
    ],
    seoTitle: "JSON Formatter — Beautify and Format JSON Online | ToolNami",
    seoDescription:
      "Format, beautify, and validate JSON data online for free. Color-coded syntax highlighting and collapsible tree view.",
  },
  {
    id: 46,
    slug: "json-validator",
    to: "/tools/json-validator",
    title: "JSON Validator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Validate JSON syntax according to strict RFC 8259 specs with detailed error markers.",
    technicalDescription:
      "Strict lexical scanner verifying quotes, comma placement, control character escaping, and numeric formats with human-readable error messages.",
    howToSteps: [
      "Paste your JSON document into the validator.",
      "Click Validate JSON.",
      "View green validation check or line-highlighted syntax errors.",
    ],
    faqs: [
      {
        q: "Are single quotes allowed in strict JSON?",
        a: "No, strict RFC specification mandates double quotes around keys and strings.",
      },
    ],
    badge: { label: "Top", icon: "✅", tone: "top" },
    image: "/assets/tools/json-validator.png",
    baseUses: 22400,
    isFeatured: false,
    keywords: ["json validator", "check json syntax", "validate json online", "json lint"],
    seoTitle: "JSON Validator — Check and Validate JSON Syntax Online | ToolNami",
    seoDescription:
      "Validate JSON syntax online free. Detect formatting errors and trailing commas with line and column accuracy.",
  },
  {
    id: 47,
    slug: "xml-formatter",
    to: "/tools/xml-formatter",
    title: "XML Formatter",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Format and indent raw XML, SVG, and HTML documents with consistent hierarchy.",
    technicalDescription:
      "DOMParser based XML tokenizer reconstructing hierarchical document tags with standardized multi-level indentation and attribute formatting.",
    howToSteps: [
      "Paste your unformatted XML or SVG string.",
      "Select indent depth (2 spaces, 4 spaces, or tabs).",
      "Click Format XML to beautify.",
      "Copy formatted XML to clipboard.",
    ],
    faqs: [{ q: "Can it format SVG files?", a: "Yes, SVG is XML-compliant and formats cleanly." }],
    badge: { label: "Utility", icon: "📄", tone: "recommended" },
    image: "/assets/tools/xml-formatter.png",
    baseUses: 17300,
    isFeatured: false,
    keywords: ["xml formatter", "beautify xml", "format xml online", "xml indent"],
    seoTitle: "XML Formatter — Beautify and Indent XML Online | ToolNami",
    seoDescription:
      "Format and beautify XML and SVG files online free. Clean up tags, attributes, and indentation with one click.",
  },
  {
    id: 48,
    slug: "base64-encode",
    to: "/tools/base64-encode",
    title: "Base64 Encode",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Encode plaintext, JSON, or binary files into standard RFC 4648 Base64 strings.",
    technicalDescription:
      "Converts UTF-8 byte streams into 6-bit index characters from the 64-symbol radix table with proper `=` padding.",
    howToSteps: [
      "Enter your text or upload a file.",
      "Click Encode to Base64.",
      "Copy the Base64 ASCII string or Data URI.",
    ],
    faqs: [
      {
        q: "Does it support UTF-8 non-ASCII characters?",
        a: "Yes, full multilingual characters and emojis are properly encoded.",
      },
    ],
    badge: { label: "Fast", icon: "🔒", tone: "fast" },
    image: "/assets/tools/base64-encode.png",
    baseUses: 23100,
    isFeatured: false,
    keywords: ["base64 encode", "text to base64", "base64 encoder online", "convert to base64"],
    seoTitle: "Base64 Encode — Convert Text and Files to Base64 | ToolNami",
    seoDescription:
      "Encode text and files into Base64 format online for free. Supports full UTF-8 characters and Data URIs.",
  },
  {
    id: 49,
    slug: "base64-decode",
    to: "/tools/base64-decode",
    title: "Base64 Decode",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Decode Base64 encoded strings back into human-readable plaintext or files.",
    technicalDescription:
      "Parses Base64 character sequences into binary byte buffers and decodes UTF-8 string representations safely.",
    howToSteps: [
      "Paste your Base64 encoded string.",
      "Click Decode from Base64.",
      "Read decoded plaintext or download reconstructed file.",
    ],
    faqs: [
      {
        q: "Can it decode Base64 data URIs?",
        a: "Yes, standard `data:image/png;base64,...` formats are automatically detected.",
      },
    ],
    badge: { label: "Fast", icon: "🔓", tone: "fast" },
    image: "/assets/tools/base64-decode.png",
    baseUses: 22700,
    isFeatured: false,
    keywords: ["base64 decode", "base64 to text", "base64 decoder online", "decode base64"],
    seoTitle: "Base64 Decode — Decode Base64 Strings Online | ToolNami",
    seoDescription:
      "Decode Base64 strings back into plaintext or binary files online free. Instant, secure in-browser decoding.",
  },
  {
    id: 50,
    slug: "url-encoder",
    to: "/tools/url-encoder",
    title: "URL Encoder",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Encode query parameters and special characters into percent-encoded RFC 3986 URLs.",
    technicalDescription:
      "Applies standard `encodeURIComponent` algorithm, replacing unsafe ASCII and Unicode characters with `%XX` hex triplets.",
    howToSteps: [
      "Enter your raw URL or query parameters.",
      "Click Encode URL.",
      "Copy safe URL string.",
    ],
    faqs: [
      {
        q: "Why should URLs be encoded?",
        a: "Spaces and symbols like `&`, `?`, and `#` will break query parameters unless percent-encoded.",
      },
    ],
    badge: { label: "Fast", icon: "🔗", tone: "fast" },
    image: "/assets/tools/url-encoder.png",
    baseUses: 20900,
    isFeatured: false,
    keywords: ["url encoder", "url encode online", "percent encoding", "encode uri component"],
    seoTitle: "URL Encoder — Percent-Encode URLs Online Free | ToolNami",
    seoDescription:
      "Encode URLs and query parameters online for free. Percent-encode special characters compliant with RFC 3986.",
  },
  {
    id: 51,
    slug: "url-decoder",
    to: "/tools/url-decoder",
    title: "URL Decoder",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Decode percent-encoded `%20` hex strings back into readable URL addresses.",
    technicalDescription:
      "Parses hex escape sequences into original UTF-8 characters and separates query string parameters into an organized key-value table.",
    howToSteps: [
      "Paste your percent-encoded URL.",
      "Click Decode URL.",
      "Inspect decoded address and organized query parameters.",
    ],
    faqs: [
      {
        q: "Does it break down query parameters?",
        a: "Yes, it parses `?key=value&key2=value2` into a neat table for debugging.",
      },
    ],
    badge: { label: "Fast", icon: "🔗", tone: "fast" },
    image: "/assets/tools/url-decoder.png",
    baseUses: 20500,
    isFeatured: false,
    keywords: ["url decoder", "decode url online", "url unescape", "percent decoding"],
    seoTitle: "URL Decoder — Decode Percent-Encoded URLs Online | ToolNami",
    seoDescription:
      "Decode percent-encoded URLs and query parameters online free. Turn '%20' and hex codes into readable text.",
  },
  {
    id: 52,
    slug: "hash-generator",
    to: "/tools/hash-generator",
    title: "Hash Generator",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Compute cryptographic hashes including SHA-256, SHA-512, SHA-1, and MD5.",
    technicalDescription:
      "Utilizes the Web Cryptography API (`crypto.subtle.digest`) to calculate one-way cryptographic hash digests from text and binary inputs.",
    howToSteps: [
      "Type or paste your input text.",
      "View live calculated hashes: SHA-256, SHA-512, SHA-384, SHA-1.",
      "Copy any hash with 1 click.",
    ],
    faqs: [
      {
        q: "Is SHA-256 secure?",
        a: "Yes, SHA-256 is the modern cryptographic standard used in SSL, Git, and blockchain technologies.",
      },
    ],
    badge: { label: "Security", icon: "🔑", tone: "recommended" },
    image: "/assets/tools/hash-generator.png",
    baseUses: 24100,
    isFeatured: false,
    keywords: [
      "hash generator",
      "sha256 generator",
      "md5 generator",
      "sha512 online",
      "hash calculator",
    ],
    seoTitle: "Hash Generator — SHA-256, SHA-512, SHA-1 Hashes Online | ToolNami",
    seoDescription:
      "Generate cryptographic hashes online free: SHA-256, SHA-512, SHA-1, and MD5. Fast, secure client-side calculation.",
  },
  {
    id: 53,
    slug: "html-formatter",
    to: "/tools/html-formatter",
    title: "HTML Formatter",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Format, beautify, and indent HTML markup with clean hierarchical nesting.",
    technicalDescription:
      "Tokenizes HTML5 DOM structure, auto-closing void elements and applying consistent indentation to nested tags and embedded scripts.",
    howToSteps: [
      "Paste unformatted HTML code.",
      "Select indent spacing (2 or 4 spaces).",
      "Click Format HTML.",
      "Copy clean, beautifully indented markup.",
    ],
    faqs: [
      {
        q: "Does it format inline CSS and JavaScript?",
        a: "Yes, `<style>` and `<script>` blocks are formatted neatly.",
      },
    ],
    badge: { label: "Developer", icon: "🌐", tone: "top" },
    image: "/assets/tools/html-formatter.png",
    baseUses: 19100,
    isFeatured: false,
    keywords: ["html formatter", "beautify html", "format html code", "html beautifier online"],
    seoTitle: "HTML Formatter — Beautify and Format HTML Code Online | ToolNami",
    seoDescription:
      "Format and beautify HTML code online free. Clean up nested tags, attributes, and indentation with syntax highlighting.",
  },
  {
    id: 54,
    slug: "css-minifier",
    to: "/tools/css-minifier",
    title: "CSS Minifier",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Minify CSS stylesheets by stripping comments and redundant whitespace for speed.",
    technicalDescription:
      "Parses CSS AST to remove comments, collapse whitespace, optimize color representations (e.g. `#ffffff` to `#fff`), and strip trailing semicolons.",
    howToSteps: [
      "Paste your CSS stylesheet.",
      "Click Minify CSS.",
      "Inspect percentage file size reduction.",
      "Copy minified CSS ready for production.",
    ],
    faqs: [
      {
        q: "Does minifying break CSS logic?",
        a: "No, minification is purely structural and does not alter cascade or selector specificity.",
      },
    ],
    badge: { label: "Fast", icon: "⚡", tone: "fast" },
    image: "/assets/tools/css-minifier.png",
    baseUses: 18300,
    isFeatured: false,
    keywords: ["css minifier", "compress css", "minify css online", "css optimizer"],
    seoTitle: "CSS Minifier — Minify and Compress CSS Online Free | ToolNami",
    seoDescription:
      "Minify CSS code online free. Strip comments and whitespace to reduce stylesheet size and speed up your website.",
  },
  {
    id: 55,
    slug: "javascript-minifier",
    to: "/tools/javascript-minifier",
    title: "JavaScript Minifier",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Compress JavaScript files by removing whitespace, comments, and unused tokens.",
    technicalDescription:
      "Safe ECMAScript lexical tokenizer removing block/line comments and redundant whitespace while preserving ASI (Automatic Semicolon Insertion) safety.",
    howToSteps: [
      "Paste your JavaScript code.",
      "Click Minify JavaScript.",
      "Review file size savings and copy compact code.",
    ],
    faqs: [
      {
        q: "Is the minified code safe to run?",
        a: "Yes, syntax tokens and string literals are strictly preserved.",
      },
    ],
    badge: { label: "Developer", icon: "⚡", tone: "top" },
    image: "/assets/tools/javascript-minifier.png",
    baseUses: 19700,
    isFeatured: false,
    keywords: ["javascript minifier", "minify js online", "compress javascript", "js minifier"],
    seoTitle: "JavaScript Minifier — Compress JS Code Online Free | ToolNami",
    seoDescription:
      "Compress JavaScript code online free. Reduce JS payload sizes and boost web application load performance.",
  },

  // ==================== SEO TOOLS (56-60) ====================
  {
    id: 56,
    slug: "meta-tag-generator",
    to: "/tools/meta-tag-generator",
    title: "Meta Tag Generator",
    category: "seo",
    categoryLabel: "SEO Tools",
    summary: "Generate complete SEO meta tags, OpenGraph cards, and Twitter tags for your website.",
    technicalDescription:
      "Compiles Google SERP metadata tags, Open Graph protocol attributes (`og:title`, `og:image`), and Twitter Card specifications with real-time character limit validation.",
    howToSteps: [
      "Fill in your Site Title, Description, URL, and OG image link.",
      "Preview Google SERP and social share cards in real-time.",
      "Copy generated `<head>` HTML code into your website.",
    ],
    faqs: [
      {
        q: "Why are Open Graph tags important?",
        a: "They ensure Facebook, LinkedIn, Twitter, and WhatsApp display rich image previews when your link is shared.",
      },
    ],
    badge: { label: "Popular", icon: "🏷️", tone: "popular" },
    image: "/assets/tools/meta-tag-generator.png",
    baseUses: 21200,
    isFeatured: false,
    keywords: ["meta tag generator", "seo tags", "opengraph generator", "twitter card generator"],
    seoTitle: "Meta Tag Generator — Generate SEO & Open Graph Tags | ToolNami",
    seoDescription:
      "Generate complete SEO meta tags, Open Graph cards, and Twitter tags online free. Live Google and social share preview.",
  },
  {
    id: 57,
    slug: "sitemap-generator",
    to: "/tools/sitemap-generator",
    title: "Sitemap Generator",
    category: "seo",
    categoryLabel: "SEO Tools",
    summary: "Create standard XML sitemaps to help Google and Bing index all your web pages.",
    technicalDescription:
      "Constructs valid XML Sitemaps Protocol 0.9 documents containing `<url>`, `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` nodes.",
    howToSteps: [
      "Enter your website URLs or domain.",
      "Configure update frequency and priority values.",
      "Click Generate Sitemap.",
      "Download `sitemap.xml` ready for Google Search Console.",
    ],
    faqs: [
      {
        q: "Where should I upload sitemap.xml?",
        a: "Place it in the root folder of your web domain (e.g. `yourdomain.com/sitemap.xml`).",
      },
    ],
    badge: { label: "SEO", icon: "🗺️", tone: "recommended" },
    image: "/assets/tools/sitemap-generator.png",
    baseUses: 18200,
    isFeatured: false,
    keywords: [
      "sitemap generator",
      "xml sitemap",
      "create sitemap online",
      "google search console sitemap",
    ],
    seoTitle: "Sitemap Generator — Create XML Sitemaps Online Free | ToolNami",
    seoDescription:
      "Generate valid XML sitemaps online free. Help Google, Bing, and search engines crawl and index all your website pages.",
  },
  {
    id: 58,
    slug: "robots-txt-generator",
    to: "/tools/robots-txt-generator",
    title: "Robots.txt Generator",
    category: "seo",
    categoryLabel: "SEO Tools",
    summary: "Create and customize your robots.txt file to guide search engine crawlers safely.",
    technicalDescription:
      "Generates Robots Exclusion Protocol directives (`User-agent: *`, `Allow: /`, `Disallow: /admin`, `Sitemap: ...`) with crawl delay parameters.",
    howToSteps: [
      "Select allowed crawlers (Google, Bing, Yahoo, etc.).",
      "Enter directories to block (e.g. `/admin/`, `/private/`).",
      "Link your XML sitemap URL.",
      "Download your ready-to-use `robots.txt` file.",
    ],
    faqs: [
      {
        q: "Can robots.txt prevent private admin pages from being indexed?",
        a: "Yes, adding `Disallow: /admin/` instructs search bots not to crawl the path.",
      },
    ],
    badge: { label: "Fast", icon: "🤖", tone: "fast" },
    image: "/assets/tools/robots-txt-generator.png",
    baseUses: 17400,
    isFeatured: false,
    keywords: [
      "robots txt generator",
      "create robots.txt",
      "robots exclusion protocol",
      "seo robots",
    ],
    seoTitle: "Robots.txt Generator — Create Custom Robots.txt Online | ToolNami",
    seoDescription:
      "Generate customized robots.txt files online free. Control crawler access, protect private directories, and add sitemaps.",
  },
  {
    id: 59,
    slug: "keyword-density-checker",
    to: "/tools/keyword-density-checker",
    title: "Keyword Density Checker",
    category: "seo",
    categoryLabel: "SEO Tools",
    summary: "Analyze text or webpage keyword frequency to prevent SEO keyword stuffing.",
    technicalDescription:
      "Computes 1-gram, 2-gram, and 3-gram phrase frequency ratios against total token length, filtering common stop words.",
    howToSteps: [
      "Paste your article or copy into the analyzer.",
      "View top single words and two-word phrases with percentage frequency.",
      "Ensure primary keywords remain within the healthy 1%–2.5% density range.",
    ],
    faqs: [
      {
        q: "What is an ideal keyword density for SEO?",
        a: "Between 1% and 2.5% is widely recommended to avoid search engine penalties for keyword stuffing.",
      },
    ],
    badge: { label: "Top", icon: "📈", tone: "top" },
    image: "/assets/tools/keyword-density-checker.png",
    baseUses: 19600,
    isFeatured: false,
    keywords: [
      "keyword density checker",
      "keyword frequency",
      "seo keyword analyzer",
      "keyword stuffing check",
    ],
    seoTitle: "Keyword Density Checker — Analyze Word Frequency Online | ToolNami",
    seoDescription:
      "Check keyword density and phrase frequency online free. Optimize articles for search engines and prevent keyword stuffing.",
  },
  {
    id: 60,
    slug: "open-graph-generator",
    to: "/tools/open-graph-generator",
    title: "Open Graph Generator",
    category: "seo",
    categoryLabel: "SEO Tools",
    summary: "Generate and preview Facebook, Twitter, and LinkedIn social preview cards.",
    technicalDescription:
      "Renders visual mockup cards for social platforms based on specified `og:title`, `og:description`, `og:image`, and `og:type` inputs.",
    howToSteps: [
      "Enter your page title, description, and preview image URL.",
      "See how your link will appear on Facebook, X, and LinkedIn feeds.",
      "Copy generated meta tags directly into your HTML.",
    ],
    faqs: [
      {
        q: "What is the recommended Open Graph image size?",
        a: "1200x630 pixels with an aspect ratio of 1.91:1 is the universal standard.",
      },
    ],
    badge: { label: "Featured", icon: "🖼️", tone: "featured" },
    image: "/assets/tools/open-graph-generator.png",
    baseUses: 18900,
    isFeatured: false,
    keywords: [
      "open graph generator",
      "og meta tags",
      "social card preview",
      "facebook share preview",
    ],
    seoTitle: "Open Graph Generator — Preview Social Share Cards | ToolNami",
    seoDescription:
      "Generate Open Graph meta tags and preview Facebook, Twitter, and LinkedIn share cards online free.",
  },

  // ==================== CALCULATORS (61-68) ====================
  {
    id: 61,
    slug: "age-calculator",
    to: "/tools/age-calculator",
    title: "Age Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Calculate exact age in years, months, days, hours, and find upcoming birthdays.",
    technicalDescription:
      "Performs calendar date arithmetic accounting for leap years, variable month lengths, and exact elapsed seconds.",
    howToSteps: [
      "Select your date of birth.",
      "Click Calculate Age.",
      "View exact age in years, months, days, total weeks, and days until next birthday.",
    ],
    faqs: [
      {
        q: "Does it account for leap years?",
        a: "Yes, leap year days (February 29) are mathematically factored into exact age calculations.",
      },
    ],
    badge: { label: "Popular", icon: "🎂", tone: "popular" },
    image: "/assets/tools/age-calculator.png",
    baseUses: 29100,
    isFeatured: false,
    keywords: ["age calculator", "calculate age", "how old am i", "date of birth calculator"],
    seoTitle: "Age Calculator — Calculate Exact Age in Years & Days | ToolNami",
    seoDescription:
      "Calculate your exact age in years, months, days, and hours online free. Find days remaining until your next birthday.",
  },
  {
    id: 62,
    slug: "bmi-calculator",
    to: "/tools/bmi-calculator",
    title: "BMI Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Calculate Body Mass Index (BMI) and health category in metric or imperial units.",
    technicalDescription:
      "Evaluates WHO Body Mass Index formula ($\\text{weight (kg)} / \\text{height (m)}^2$) with interactive gauge categories (Underweight, Normal, Overweight, Obese).",
    howToSteps: [
      "Choose Metric (cm/kg) or Imperial (feet/inches/lbs).",
      "Enter your height and weight.",
      "Inspect your BMI score and healthy weight range.",
    ],
    faqs: [
      {
        q: "What is considered a normal BMI?",
        a: "A BMI between 18.5 and 24.9 is classified as normal healthy weight by the WHO.",
      },
    ],
    badge: { label: "Health", icon: "⚖️", tone: "recommended" },
    image: "/assets/tools/bmi-calculator.png",
    baseUses: 26800,
    isFeatured: false,
    keywords: [
      "bmi calculator",
      "body mass index",
      "healthy weight calculator",
      "calculate bmi online",
    ],
    seoTitle: "BMI Calculator — Calculate Body Mass Index Online | ToolNami",
    seoDescription:
      "Calculate Body Mass Index (BMI) online free for adults. Metric and imperial units supported with healthy weight guidance.",
  },
  {
    id: 63,
    slug: "percentage-calculator",
    to: "/tools/percentage-calculator",
    title: "Percentage Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Calculate percentage increases, percentage decreases, differences, and fractions.",
    technicalDescription:
      "Multi-formula percentage engine: $X\\%$ of $Y$, $X$ is what percent of $Y$, percentage change ($((B-A)/A)\\times 100$), and discount markups.",
    howToSteps: [
      "Select calculation type (Percentage of value, percentage increase/decrease).",
      "Enter values and click Calculate.",
      "Get instant, precise answer with step-by-step formula breakdown.",
    ],
    faqs: [
      {
        q: "Can I calculate negative percentage change?",
        a: "Yes, percentage drops and decreases are clearly indicated.",
      },
    ],
    badge: { label: "Fast", icon: "%", tone: "fast" },
    image: "/assets/tools/percentage-calculator.png",
    baseUses: 27500,
    isFeatured: false,
    keywords: [
      "percentage calculator",
      "percent increase",
      "percent decrease",
      "calculate percentage",
    ],
    seoTitle: "Percentage Calculator — Fast Percentage Calculations | ToolNami",
    seoDescription:
      "Calculate percentages, percentage increases, and percentage decreases online free with instant formulas.",
  },
  {
    id: 64,
    slug: "emi-calculator",
    to: "/tools/emi-calculator",
    title: "EMI Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Calculate monthly loan EMI payments, total interest, and amortization breakdown.",
    technicalDescription:
      "Solves standard annuity formula $E = P \\cdot r \\cdot (1+r)^n / ((1+r)^n - 1)$ with interactive principal vs interest breakdown chart.",
    howToSteps: [
      "Enter loan principal amount.",
      "Enter annual interest rate (%).",
      "Enter loan tenure in years or months.",
      "View monthly installment, total interest payable, and payment schedule.",
    ],
    faqs: [
      {
        q: "Does this work for home and car loans?",
        a: "Yes, EMI calculation works universally for personal, home, and vehicle loans.",
      },
    ],
    badge: { label: "Finance", icon: "💰", tone: "top" },
    image: "/assets/tools/emi-calculator.png",
    baseUses: 25400,
    isFeatured: false,
    keywords: ["emi calculator", "loan emi calculator", "home loan emi", "car loan calculator"],
    seoTitle: "EMI Calculator — Calculate Monthly Loan EMI Online | ToolNami",
    seoDescription:
      "Calculate Equated Monthly Installment (EMI) for home, car, and personal loans online free. View total interest breakdown.",
  },
  {
    id: 65,
    slug: "gst-calculator",
    to: "/tools/gst-calculator",
    title: "GST Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Calculate GST-inclusive and GST-exclusive amounts with standard tax slab rates.",
    technicalDescription:
      "Computes forward and reverse Goods and Services Tax (GST) allocations (5%, 12%, 18%, 28%) with CGST and SGST equal splits.",
    howToSteps: [
      "Enter base or total amount.",
      "Select GST rate slab (5%, 12%, 18%, 28%, or custom).",
      "Toggle 'Add GST' (exclusive) or 'Remove GST' (inclusive).",
      "Inspect net price, total tax, and gross final amount.",
    ],
    faqs: [
      {
        q: "Does it show CGST and SGST breakdown?",
        a: "Yes, tax is split evenly between Central and State GST for intra-state billing.",
      },
    ],
    badge: { label: "Finance", icon: "🧾", tone: "recommended" },
    image: "/assets/tools/gst-calculator.png",
    baseUses: 23600,
    isFeatured: false,
    keywords: [
      "gst calculator",
      "calculate gst",
      "gst inclusive exclusive",
      "tax calculator online",
    ],
    seoTitle: "GST Calculator — Calculate Inclusive & Exclusive GST Online | ToolNami",
    seoDescription:
      "Calculate GST amounts online free. Add or remove GST with standard tax slabs (5%, 12%, 18%, 28%) and CGST/SGST splits.",
  },
  {
    id: 66,
    slug: "discount-calculator",
    to: "/tools/discount-calculator",
    title: "Discount Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Find exact discounted prices, percentage savings, and sale bargains quickly.",
    technicalDescription:
      "Calculates final sale prices, savings amount, and compounded double discounts (e.g. 20% off plus extra 10% off).",
    howToSteps: [
      "Enter original retail price.",
      "Enter discount percentage or flat discount.",
      "View final price to pay and total money saved.",
    ],
    faqs: [
      {
        q: "Can I calculate stacked discounts?",
        a: "Yes, apply secondary coupon discounts on top of store sales.",
      },
    ],
    badge: { label: "Fast", icon: "🏷️", tone: "fast" },
    image: "/assets/tools/discount-calculator.png",
    baseUses: 19800,
    isFeatured: false,
    keywords: [
      "discount calculator",
      "sale price calculator",
      "calculate discount",
      "percentage off",
    ],
    seoTitle: "Discount Calculator — Calculate Sale Prices and Savings | ToolNami",
    seoDescription:
      "Calculate final sale price and total savings online free. Calculate single and stacked percentage discounts instantly.",
  },
  {
    id: 67,
    slug: "loan-calculator",
    to: "/tools/loan-calculator",
    title: "Loan Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Estimate total borrowing costs, monthly payments, and interest across loan terms.",
    technicalDescription:
      "Amortization table synthesizer calculating fixed-rate loan balance trajectories and cumulative interest ratios over time.",
    howToSteps: [
      "Input principal borrowed, interest percentage, and loan term.",
      "Examine monthly repayment schedule.",
      "Inspect total cost of financing.",
    ],
    faqs: [
      {
        q: "Can I simulate extra payments?",
        a: "Yes, view how paying extra each month shortens your loan payoff term.",
      },
    ],
    badge: { label: "Finance", icon: "🏦", tone: "top" },
    image: "/assets/tools/loan-calculator.png",
    baseUses: 21600,
    isFeatured: false,
    keywords: [
      "loan calculator",
      "mortgage calculator",
      "loan repayment schedule",
      "borrowing calculator",
    ],
    seoTitle: "Loan Calculator — Estimate Payments and Interest Online | ToolNami",
    seoDescription:
      "Estimate loan payments and total interest online free. Amortization schedules for personal and business loans.",
  },
  {
    id: 68,
    slug: "investment-calculator",
    to: "/tools/investment-calculator",
    title: "Investment Calculator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary: "Forecast compound interest returns, capital growth, and wealth accumulation.",
    technicalDescription:
      "Evaluates compound interest equation $A = P(1 + r/n)^{nt} + PMT \\cdot [((1 + r/n)^{nt} - 1) / (r/n)]$ with annual compounding intervals.",
    howToSteps: [
      "Enter starting initial deposit.",
      "Enter monthly contribution amount.",
      "Set expected annual return (%) and investment horizon (years).",
      "Inspect compound wealth growth curve.",
    ],
    faqs: [
      {
        q: "How powerful is compound interest?",
        a: "Reinvesting earned returns generates exponential growth over multi-year horizons.",
      },
    ],
    badge: { label: "Top", icon: "📈", tone: "top" },
    image: "/assets/tools/investment-calculator.png",
    baseUses: 22900,
    isFeatured: false,
    keywords: [
      "investment calculator",
      "compound interest calculator",
      "wealth calculator",
      "roi calculator",
    ],
    seoTitle: "Investment Calculator — Compound Interest & Growth Returns | ToolNami",
    seoDescription:
      "Forecast investment growth and compound interest returns online free. Interactive wealth accumulation calculations.",
  },

  // ==================== UTILITY TOOLS (69-75) ====================
  {
    id: 69,
    slug: "unit-converter",
    to: "/tools/unit-converter",
    title: "Unit Converter",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary: "Convert measurements across length, weight, area, volume, temperature, and speed.",
    technicalDescription:
      "High-precision unit conversion matrix supporting SI metric and imperial standards with exact floating point multipliers.",
    howToSteps: [
      "Select unit category (Length, Weight, Volume, Temperature, Speed, Data).",
      "Enter value in 'From' unit.",
      "Select 'To' target unit to view instant converted metric.",
    ],
    faqs: [
      {
        q: "Does it support temperature scales?",
        a: "Yes, Celsius, Fahrenheit, and Kelvin conversions are supported.",
      },
    ],
    badge: { label: "Popular", icon: "📐", tone: "popular" },
    image: "/assets/tools/unit-converter.png",
    baseUses: 26300,
    isFeatured: false,
    keywords: [
      "unit converter",
      "metric to imperial",
      "convert length",
      "weight converter",
      "temperature converter",
    ],
    seoTitle: "Unit Converter — Convert Length, Weight, Temperature | ToolNami",
    seoDescription:
      "Convert units of measurement online free: Length, Weight, Temperature, Area, Volume, and Speed with instant precision.",
  },
  {
    id: 70,
    slug: "time-converter",
    to: "/tools/time-converter",
    title: "Time Converter",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary:
      "Convert times across world timezones (UTC, EST, PST, GMT, IST) with daylight savings.",
    technicalDescription:
      "Evaluates IANA timezone database offsets to translate localized timestamp points without UTC drift.",
    howToSteps: [
      "Select your local time and originating timezone.",
      "Select target destination city or timezone.",
      "View exact converted time and date.",
    ],
    faqs: [
      {
        q: "Does it account for Daylight Saving Time?",
        a: "Yes, IANA international time zone definitions dynamically reflect DST changes.",
      },
    ],
    badge: { label: "Utility", icon: "⏰", tone: "recommended" },
    image: "/assets/tools/time-converter.png",
    baseUses: 18500,
    isFeatured: false,
    keywords: [
      "time converter",
      "timezone converter",
      "world clock online",
      "pst to est",
      "utc converter",
    ],
    seoTitle: "Time Converter — World Timezone Converter Online | ToolNami",
    seoDescription:
      "Convert times across world time zones online free. Compare international meeting hours with automatic DST adjustment.",
  },
  {
    id: 71,
    slug: "currency-converter",
    to: "/tools/currency-converter",
    title: "Currency Converter",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary: "Convert world currencies with benchmark international exchange rates.",
    technicalDescription:
      "Standardized foreign exchange rate calculator translating currency values across USD, EUR, GBP, JPY, INR, CAD, and AUD.",
    howToSteps: [
      "Enter amount to convert.",
      "Select source currency and target currency.",
      "View converted amount and current conversion rate.",
    ],
    faqs: [
      {
        q: "Are rates updated regularly?",
        a: "Yes, benchmark rates reflect prevailing global market averages.",
      },
    ],
    badge: { label: "Finance", icon: "💱", tone: "top" },
    image: "/assets/tools/currency-converter.png",
    baseUses: 24800,
    isFeatured: false,
    keywords: ["currency converter", "exchange rate calculator", "usd to eur", "money converter"],
    seoTitle: "Currency Converter — Foreign Exchange Rates Online | ToolNami",
    seoDescription:
      "Convert world currencies online free with live benchmark exchange rates. Fast, clean conversion across 30+ currencies.",
  },
  {
    id: 72,
    slug: "random-number-generator",
    to: "/tools/random-number-generator",
    title: "Random Number Generator",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary: "Generate true random numbers in any custom min-max range for raffles and games.",
    technicalDescription:
      "Generates unbiased integer values using `window.crypto.getRandomValues` hardware entropy to eliminate statistical bias.",
    howToSteps: [
      "Specify Minimum and Maximum range (e.g. 1 to 100).",
      "Select how many random numbers to roll.",
      "Click Generate to reveal results.",
    ],
    faqs: [
      {
        q: "Is the number truly random?",
        a: "Yes, it uses cryptographic browser entropy rather than predictable pseudo-random seeds.",
      },
    ],
    badge: { label: "Fast", icon: "🎲", tone: "fast" },
    image: "/assets/tools/random-number-generator.png",
    baseUses: 21400,
    isFeatured: false,
    keywords: ["random number generator", "rng online", "pick a number", "random integer"],
    seoTitle: "Random Number Generator — Generate Random Numbers Online | ToolNami",
    seoDescription:
      "Generate random numbers online free. Set custom min and max ranges with cryptographically secure random entropy.",
  },
  {
    id: 73,
    slug: "dice-roller",
    to: "/tools/dice-roller",
    title: "Dice Roller",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary:
      "Roll virtual dice for tabletop RPGs, board games, and decision making (D4, D6, D20, D100).",
    technicalDescription:
      "Physics-inspired virtual dice roller supporting multi-dice rolls (e.g. 3d6, 1d20+5) with sum tally and roll history logs.",
    howToSteps: [
      "Select dice type: D4, D6, D8, D10, D12, D20, or D100.",
      "Choose quantity of dice to roll.",
      "Click Roll Dice to view randomized faces and total sum.",
    ],
    faqs: [
      {
        q: "Can I roll D&D D20 dice?",
        a: "Yes, D20 dice with critical hit highlights are fully supported.",
      },
    ],
    badge: { label: "Games", icon: "🎲", tone: "new" },
    image: "/assets/tools/dice-roller.png",
    baseUses: 16900,
    isFeatured: false,
    keywords: ["dice roller", "roll virtual dice", "d20 roller", "online dice", "dnd dice roller"],
    seoTitle: "Dice Roller — Virtual Dice for Board Games & D&D | ToolNami",
    seoDescription:
      "Roll virtual dice online free. Supports D4, D6, D8, D10, D12, D20, and D100 with total sum calculation.",
  },
  {
    id: 74,
    slug: "color-converter",
    to: "/tools/color-converter",
    title: "Color Converter",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary: "Convert colors between HEX, RGB, HSL, HSV, and CMYK color spaces with live preview.",
    technicalDescription:
      "Colorimetric conversion algorithms translating RGB color coordinates to cylindrical HSL/HSV representations and four-color CMYK printing values.",
    howToSteps: [
      "Enter a color in HEX (#2563EB), RGB, or HSL format, or use the color picker.",
      "View live synchronized color swatches.",
      "Copy any color representation to your clipboard.",
    ],
    faqs: [
      {
        q: "Can I convert RGB to CMYK for print?",
        a: "Yes, exact subtractive CMYK ink percentages are computed for commercial printing.",
      },
    ],
    badge: { label: "Design", icon: "🎨", tone: "recommended" },
    image: "/assets/tools/color-converter.png",
    baseUses: 19400,
    isFeatured: false,
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to cmyk",
      "color space converter",
      "hex to hsl",
    ],
    seoTitle: "Color Converter — HEX, RGB, HSL, CMYK Online Free | ToolNami",
    seoDescription:
      "Convert colors between HEX, RGB, HSL, and CMYK online free. Live color preview and one-click code copying.",
  },
  {
    id: 75,
    slug: "internet-speed-test",
    to: "/tools/internet-speed-test",
    title: "Internet Speed Test",
    category: "utility",
    categoryLabel: "Utility Tools",
    summary:
      "Test download speed, upload speed, latency (ping), and network jitter in your browser.",
    technicalDescription:
      "Streams chunked binary payloads over HTTPS WebSockets to measure throughput rate (Mbps) and packet round-trip time (RTT).",
    howToSteps: [
      "Click 'Start Speed Test'.",
      "Wait 10–15 seconds while the test checks Ping, Jitter, Download, and Upload.",
      "Review your connection rating and bandwidth speed.",
    ],
    faqs: [
      {
        q: "What is a good ping for gaming?",
        a: "A ping under 30ms is considered excellent for competitive multiplayer gaming and video calls.",
      },
    ],
    badge: { label: "Utility", icon: "🚀", tone: "top" },
    image: "/assets/tools/internet-speed-test.png",
    baseUses: 25900,
    isFeatured: false,
    keywords: [
      "internet speed test",
      "check wifi speed",
      "download speed test",
      "ping test online",
    ],
    seoTitle: "Internet Speed Test — Check Download & Upload Speed | ToolNami",
    seoDescription:
      "Test your internet speed online free. Measure download, upload, ping, and network jitter directly in your browser.",
  },

  // ==================== AI TOOLS (DEMO) (76-80) ====================
  {
    id: 76,
    slug: "ai-content-writer",
    to: "/tools/ai-content-writer",
    title: "AI Content Writer",
    category: "ai",
    categoryLabel: "AI Tools",
    summary: "Generate high-quality paragraphs, marketing copy, and articles with smart AI.",
    technicalDescription:
      "Prompt-engineered content synthesis framework generating structured, tone-adjusted prose for essays, product descriptions, and web copy.",
    howToSteps: [
      "Enter your topic or prompt.",
      "Select desired tone (Professional, Casual, Persuasive, Friendly).",
      "Click Generate Content.",
      "Edit, refine, and copy your AI-crafted text.",
    ],
    faqs: [
      {
        q: "Can I adjust writing tone?",
        a: "Yes, choose from professional, conversational, humorous, or persuasive styles.",
      },
    ],
    badge: { label: "AI", icon: "✨", tone: "featured" },
    image: "/assets/tools/ai-content-writer.png",
    baseUses: 28900,
    isFeatured: false,
    keywords: [
      "ai content writer",
      "ai writing assistant",
      "generate copy online",
      "free ai writer",
    ],
    seoTitle: "AI Content Writer — Generate Articles and Copy Online | ToolNami",
    seoDescription:
      "Generate professional articles, paragraphs, and marketing copy online free with AI writing assistance.",
  },
  {
    id: 77,
    slug: "ai-blog-generator",
    to: "/tools/ai-blog-generator",
    title: "AI Blog Generator",
    category: "ai",
    categoryLabel: "AI Tools",
    summary:
      "Draft complete structured blog posts with engaging introductions, headings, and conclusions.",
    technicalDescription:
      "Generates multi-section long-form article blueprints including SEO keywords, H2/H3 subheadings, bulleted takeaways, and summary points.",
    howToSteps: [
      "Enter blog post title or theme.",
      "Specify target audience and primary keywords.",
      "Click Generate Blog Post.",
      "Export formatted Markdown ready to publish.",
    ],
    faqs: [
      {
        q: "Does it output structured headings?",
        a: "Yes, articles are organized with clear H2 and H3 headings and introduction/conclusion sections.",
      },
    ],
    badge: { label: "AI", icon: "✍️", tone: "recommended" },
    image: "/assets/tools/ai-blog-generator.png",
    baseUses: 25100,
    isFeatured: false,
    keywords: [
      "ai blog generator",
      "write blog post with ai",
      "ai article writer",
      "blog outline generator",
    ],
    seoTitle: "AI Blog Generator — Draft Full Blog Posts with AI | ToolNami",
    seoDescription:
      "Generate structured, SEO-friendly blog articles online free with AI. Includes headings, bullet points, and conclusions.",
  },
  {
    id: 78,
    slug: "ai-title-generator",
    to: "/tools/ai-title-generator",
    title: "AI Title Generator",
    category: "ai",
    categoryLabel: "AI Tools",
    summary:
      "Brainstorm high-converting, click-worthy titles for YouTube videos, articles, and products.",
    technicalDescription:
      "Synthesizes viral headline formulas (How-To, Listicle, Curiosities, Direct Benefits) tuned to optimize click-through rate (CTR).",
    howToSteps: [
      "Enter your topic or draft concept.",
      "Select platform (YouTube, Blog Post, Email Subject, Product).",
      "Click Generate Titles to receive 10+ creative headline suggestions.",
    ],
    faqs: [
      {
        q: "Are YouTube title suggestions optimized for CTR?",
        a: "Yes, titles use curiosity gaps and power verbs proven to boost clicks.",
      },
    ],
    badge: { label: "AI", icon: "💡", tone: "new" },
    image: "/assets/tools/ai-title-generator.png",
    baseUses: 21900,
    isFeatured: false,
    keywords: [
      "ai title generator",
      "youtube title generator",
      "headline generator",
      "catchy titles",
    ],
    seoTitle: "AI Title Generator — Generate Catchy Headlines & Titles | ToolNami",
    seoDescription:
      "Generate catchy, high-converting titles for YouTube, blog articles, and email newsletters online free with AI.",
  },
  {
    id: 79,
    slug: "ai-caption-generator",
    to: "/tools/ai-caption-generator",
    title: "AI Caption Generator",
    category: "ai",
    categoryLabel: "AI Tools",
    summary: "Create viral, engaging captions for Instagram, TikTok, LinkedIn, and Twitter.",
    technicalDescription:
      "Constructs platform-tailored social media captions combining hook lines, emoji accents, storytelling prompts, and calls-to-action (CTA).",
    howToSteps: [
      "Describe what your photo or video is about.",
      "Select platform (Instagram, TikTok, LinkedIn, Twitter/X).",
      "Click Generate Captions.",
      "Copy your favorite caption with emojis included.",
    ],
    faqs: [
      {
        q: "Does it include emojis and calls to action?",
        a: "Yes, captions include tasteful emojis and comment-sparking questions.",
      },
    ],
    badge: { label: "AI", icon: "📸", tone: "fast" },
    image: "/assets/tools/ai-caption-generator.png",
    baseUses: 23700,
    isFeatured: false,
    keywords: [
      "ai caption generator",
      "instagram captions",
      "tiktok caption writer",
      "social media captions",
    ],
    seoTitle: "AI Caption Generator — Instagram, TikTok & LinkedIn Captions | ToolNami",
    seoDescription:
      "Generate engaging captions for Instagram, TikTok, and LinkedIn online free with AI. Includes hooks and emojis.",
  },
  {
    id: 80,
    slug: "ai-hashtag-generator",
    to: "/tools/ai-hashtag-generator",
    title: "AI Hashtag Generator",
    category: "ai",
    categoryLabel: "AI Tools",
    summary:
      "Discover trending, relevant hashtags for Instagram, YouTube Shorts, and TikTok reach.",
    technicalDescription:
      "Extracts contextual keyword clusters and pairs them with trending hashtag categories (High, Medium, and Niche competition buckets).",
    howToSteps: [
      "Enter your post topic or niche keywords.",
      "Choose platform and target audience.",
      "Click Generate Hashtags to receive categorized hashtag sets.",
      "Copy all hashtags with 1 click.",
    ],
    faqs: [
      {
        q: "How many hashtags should I use on Instagram?",
        a: "Using 5–15 relevant, niche-specific hashtags typically delivers the highest engagement.",
      },
    ],
    badge: { label: "AI", icon: "#", tone: "trending" },
    image: "/assets/tools/ai-hashtag-generator.png",
    baseUses: 22600,
    isFeatured: false,
    keywords: [
      "ai hashtag generator",
      "trending hashtags",
      "instagram hashtags",
      "tiktok hashtags",
    ],
    seoTitle: "AI Hashtag Generator — Find Trending Hashtags Online | ToolNami",
    seoDescription:
      "Generate trending, relevant hashtags for Instagram, TikTok, and YouTube online free. Boost reach and engagement.",
  },
  {
    id: 102,
    slug: "jpg-to-webp",
    to: "/tools/jpg-to-webp",
    title: "JPG to WebP Converter",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert JPG and JPEG images to lightweight WebP format to speed up web pages.",
    technicalDescription:
      "Convert traditional JPG/JPEG images to Google's modern WebP image format directly in your browser. WebP offers 25-35% superior compression compared to JPEG without noticeable loss in visual clarity. All conversions run locally using HTML5 Canvas and WebAssembly with customizable quality compression.",
    howToSteps: [
      {
        step: 1,
        title: "Upload JPG Images",
        description: "Select one or multiple JPG/JPEG photos from your computer or phone.",
      },
      {
        step: 2,
        title: "Set Compression Quality",
        description:
          "Choose quality settings (recommended 80-90% for optimal balance of size and crispness).",
      },
      {
        step: 3,
        title: "Download WebP",
        description: "Instantly download your optimized .webp files ready for web use.",
      },
    ],
    faqs: [
      {
        q: "Why convert JPG to WebP?",
        a: "WebP images are significantly smaller in byte size than JPGs while preserving identical clarity, resulting in faster page load speeds and better SEO rankings.",
      },
      {
        q: "Are my photos kept private?",
        a: "Yes! All processing executes inside your browser using client-side canvas APIs. No photos are uploaded to any server.",
      },
    ],
    badge: { label: "New", icon: "🚀", tone: "popular" },
    image: "/assets/tools/jpg-to-webp.png",
    baseUses: 19800,
    isFeatured: true,
    keywords: ["jpg to webp", "convert jpeg to webp", "webp converter", "compress jpg to webp"],
    seoTitle: "JPG to WebP Converter — Free Online WebP Image Tool | ToolNami",
    seoDescription:
      "Convert JPG images to modern WebP format online free. Reduce photo size by up to 35% with zero quality loss and instant client-side conversion.",
  },
  {
    id: 103,
    slug: "svg-to-png",
    to: "/tools/svg-to-png",
    title: "SVG to PNG Converter",
    category: "image",
    categoryLabel: "Image Tools",
    summary: "Convert vector SVG graphics into high-resolution transparent PNG images.",
    technicalDescription:
      "Rasterize scalable vector graphics (SVG) into crisp transparent PNG images at any desired scale (1x, 2x, 4x Retina). Ideal for converting icons, illustrations, and logos for use in slide decks, social media, and native mobile apps.",
    howToSteps: [
      {
        step: 1,
        title: "Upload SVG File",
        description: "Drag and drop or select an SVG file from your device.",
      },
      {
        step: 2,
        title: "Select Resolution Scale",
        description: "Choose 1x, 2x, or 4x high-density scale for ultra-sharp rendering.",
      },
      {
        step: 3,
        title: "Download PNG",
        description: "Download your clean transparent PNG immediately.",
      },
    ],
    faqs: [
      {
        q: "Does it support transparent backgrounds?",
        a: "Yes, transparent SVG layers are preserved as standard transparent PNG alpha channels.",
      },
      {
        q: "Is there a file size limit?",
        a: "No limit. Everything renders client-side inside your browser.",
      },
    ],
    badge: { label: "New", icon: "🎨", tone: "new" },
    image: "/assets/tools/svg-to-png.png",
    baseUses: 14200,
    isFeatured: false,
    keywords: [
      "svg to png",
      "convert svg to png online",
      "vector to png",
      "transparent svg converter",
    ],
    seoTitle: "SVG to PNG Converter — High Resolution Vector to PNG Online | ToolNami",
    seoDescription:
      "Convert SVG vector files to transparent high-res PNG images online free. Choose custom resolution scale with zero server upload.",
  },
  {
    id: 104,
    slug: "invoice-generator",
    to: "/tools/invoice-generator",
    title: "Free Invoice Generator",
    category: "calculator",
    categoryLabel: "Calculators",
    summary:
      "Create, customize, and print professional invoices with automated tax and GST calculations.",
    technicalDescription:
      "Generate clean, professional invoices in seconds without signups or watermarks. Add your business logo, client details, line items, discounts, and tax/GST rates. Download or print directly to PDF for client billing.",
    howToSteps: [
      {
        step: 1,
        title: "Enter Business & Client Details",
        description: "Fill in company name, invoice number, due date, and client billing address.",
      },
      {
        step: 2,
        title: "Add Line Items",
        description: "Input descriptions, quantities, unit prices, and applicable tax rates.",
      },
      {
        step: 3,
        title: "Download or Print Invoice",
        description: "Instantly download a clean, print-ready PDF invoice for your clients.",
      },
    ],
    faqs: [
      {
        q: "Is this invoice generator free?",
        a: "100% free with no watermarks, no account registration, and no hidden fees.",
      },
      {
        q: "Does it support GST and VAT calculations?",
        a: "Yes, you can specify custom GST or VAT percentage per item or on the overall subtotal.",
      },
    ],
    badge: { label: "Essential", icon: "🧾", tone: "popular" },
    image: "/assets/tools/invoice-generator.png",
    baseUses: 28900,
    isFeatured: true,
    keywords: [
      "invoice generator",
      "free invoice maker",
      "gst invoice generator",
      "online billing tool",
    ],
    seoTitle: "Free Invoice Generator — Professional PDF Invoices Online | ToolNami",
    seoDescription:
      "Create and download free professional PDF invoices online. Includes itemized taxes, GST calculations, discounts, and clean printable templates.",
  },
  {
    id: 105,
    slug: "json-to-csv",
    to: "/tools/json-to-csv",
    title: "JSON to CSV Converter",
    category: "developer",
    categoryLabel: "Developer Tools",
    summary: "Convert JSON datasets and API responses into downloadable CSV spreadsheets.",
    technicalDescription:
      "Quickly convert JSON objects and arrays into structured CSV format. Automatically flattens nested keys, handles commas and quotes safely, and provides instant tabular preview ready for export to Microsoft Excel, Google Sheets, or data analysis pipelines.",
    howToSteps: [
      {
        step: 1,
        title: "Paste JSON Data",
        description: "Paste your JSON array or upload a .json file.",
      },
      {
        step: 2,
        title: "Preview Table",
        description: "Verify the generated columns and tabular data in real time.",
      },
      {
        step: 3,
        title: "Download CSV",
        description: "Download the converted CSV file or copy the raw text with one click.",
      },
    ],
    faqs: [
      {
        q: "Can it handle nested JSON objects?",
        a: "Yes, nested properties are automatically flattened using dot notation (e.g. user.address.city).",
      },
      {
        q: "Is my JSON data kept secure?",
        a: "Yes, everything runs 100% in your local browser memory; no data is ever transmitted over the network.",
      },
    ],
    badge: { label: "Dev Pick", icon: "📊", tone: "new" },
    image: "/assets/tools/json-to-csv.png",
    baseUses: 21300,
    isFeatured: false,
    keywords: [
      "json to csv",
      "convert json to excel",
      "json to spreadsheet",
      "online json csv converter",
    ],
    seoTitle: "JSON to CSV Converter — Convert JSON to Excel Spreadsheets Online | ToolNami",
    seoDescription:
      "Convert JSON data to CSV online free. Fast client-side conversion for Excel and Google Sheets with instant table preview.",
  },
  {
    id: 106,
    slug: "image-watermark",
    to: "/tools/image-watermark",
    title: "Image Watermark Adder",
    category: "image",
    categoryLabel: "Image Tools",
    summary:
      "Add custom text or logo watermarks to your photos to protect your intellectual property.",
    technicalDescription:
      "Protect your photography, product shots, and artwork by applying customizable text or logo watermarks. Adjust font size, transparency, rotation, and placement (bottom right, center, tiled) in real-time.",
    howToSteps: [
      {
        step: 1,
        title: "Upload Photo",
        description: "Select the image you wish to protect with a watermark.",
      },
      {
        step: 2,
        title: "Customize Watermark",
        description: "Type your brand name, copyright notice, or upload a watermark graphic.",
      },
      {
        step: 3,
        title: "Download Watermarked Image",
        description: "Export the protected image in full resolution with zero loss.",
      },
    ],
    faqs: [
      {
        q: "Can I adjust watermark transparency?",
        a: "Yes, you can slide opacity from 10% (subtle) to 100% (opaque).",
      },
      {
        q: "Are original images modified?",
        a: "Never. The original file on your computer remains untouched.",
      },
    ],
    badge: { label: "Popular", icon: "🛡️", tone: "popular" },
    image: "/assets/tools/image-watermark.png",
    baseUses: 24700,
    isFeatured: true,
    keywords: [
      "image watermark",
      "watermark photos online",
      "add copyright to image",
      "photo protection watermark",
    ],
    seoTitle: "Image Watermark Adder — Add Text or Logo Watermark to Photos | ToolNami",
    seoDescription:
      "Add custom text or logo watermarks to photos online free. Protect your images with adjustable opacity and position controls.",
  },
];

// Quick index and lookup maps
const toolBySlugMap = new Map<string, CompleteTool>();
COMPLETE_TOOLS.forEach((t) => {
  toolBySlugMap.set(t.slug, t);
});

export const SLUG_ALIASES: Record<string, string> = {
  "background-remover": "image-background-remover",
  "image-background-remover": "image-background-remover",
  "pdf-merger": "pdf-merge",
  "pdf-merge": "pdf-merge",
  "pdf-splitter": "pdf-split",
  "split-pdf": "pdf-split",
  "pdf-split": "pdf-split",
  "rotate-pdf": "pdf-rotate",
  "pdf-rotate": "pdf-rotate",
  "image-watermark-adder": "image-watermark",
  "image-watermark": "image-watermark",
  "crop-image": "image-cropper",
  "image-cropper": "image-cropper",
  "rotate-image": "image-rotate",
  "image-rotate": "image-rotate",
  "flip-image": "image-flip",
  "image-flip": "image-flip",
  "loan-emi-calculator": "emi-calculator",
  "emi-calculator": "emi-calculator",
  "lorem-ipsum-generator": "lorem-ipsum",
  "lorem-ipsum": "lorem-ipsum",
  "regex-tester": "regex-cheat-sheet",
  "regex-cheat-sheet": "regex-cheat-sheet",
  "base64-encoder": "base64-encode",
  "base64-converter": "base64-encode",
  "base64-encode": "base64-encode",
  "photo-size-reducer": "image-size-reducer",
  "reduce-image-size": "image-size-reducer",
  "image-size-reducer": "image-size-reducer",
};

// Also register aliases directly into lookup map
Object.entries(SLUG_ALIASES).forEach(([alias, target]) => {
  const targetTool = toolBySlugMap.get(target);
  if (targetTool && !toolBySlugMap.has(alias)) {
    toolBySlugMap.set(alias, {
      ...targetTool,
      slug: alias,
      to: `/tools/${alias}`,
    });
  }
});

export function getToolBySlug(slug: string): CompleteTool | undefined {
  if (!slug) return undefined;
  const direct = toolBySlugMap.get(slug);
  if (direct) return direct;

  const mappedTarget = SLUG_ALIASES[slug];
  if (mappedTarget) {
    const aliased = toolBySlugMap.get(mappedTarget);
    if (aliased) return aliased;
  }

  const normalized = slug.toLowerCase().replace(/_/g, "-").trim();
  return (
    toolBySlugMap.get(normalized) ||
    (SLUG_ALIASES[normalized] ? toolBySlugMap.get(SLUG_ALIASES[normalized]) : undefined)
  );
}

export function getFeaturedTools(): CompleteTool[] {
  return COMPLETE_TOOLS.filter((t) => t.isFeatured);
}

export function getToolsByCategory(category: ToolCategory): CompleteTool[] {
  return COMPLETE_TOOLS.filter((t) => t.category === category);
}

export function searchTools(query: string, categoryFilter?: ToolCategory | "all"): CompleteTool[] {
  const cleanQuery = query.toLowerCase().trim();
  return COMPLETE_TOOLS.filter((tool) => {
    if (categoryFilter && categoryFilter !== "all" && tool.category !== categoryFilter) {
      return false;
    }
    if (!cleanQuery) return true;
    return (
      tool.title.toLowerCase().includes(cleanQuery) ||
      tool.summary.toLowerCase().includes(cleanQuery) ||
      tool.categoryLabel.toLowerCase().includes(cleanQuery) ||
      tool.keywords.some((k) => k.toLowerCase().includes(cleanQuery))
    );
  });
}
