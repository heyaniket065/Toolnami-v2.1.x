import imageCompressorImg from "@/assets/tools/image-compressor.jpg";
import jpgToPdfImg from "@/assets/tools/jpg-to-pdf.jpg";
import pdfCompressorImg from "@/assets/tools/pdf-compressor.jpg";
import pdfMergeImg from "@/assets/tools/pdf-merge.jpg";
import qrCodeImg from "@/assets/tools/qr-code-generator.jpg";

/**
 * Phase 1 built-in ToolNami tools. These run entirely in the browser and are
 * registered here (not in the database) so the directory can list them
 * alongside the existing Supabase-backed catalogue.
 */
export type LiveToolSlug =
  "pdf-compressor" | "pdf-merge" | "image-compressor" | "jpg-to-pdf" | "qr-code-generator";

export type LiveTool = {
  slug: LiveToolSlug;
  to:
    | "/tools/pdf-compressor"
    | "/tools/pdf-merge"
    | "/tools/image-compressor"
    | "/tools/jpg-to-pdf"
    | "/tools/qr-code-generator";
  title: string;
  description: string;
  image: string;
  categoryLabel: string;
  keywords: string[];
};

export const LIVE_TOOLS: LiveTool[] = [
  {
    slug: "pdf-compressor",
    to: "/tools/pdf-compressor",
    title: "PDF Compressor",
    description: "Reduce PDF file size while maintaining quality.",
    image: pdfCompressorImg,
    categoryLabel: "PDF Tools",
    keywords: ["compress pdf", "reduce pdf size", "pdf optimiser", "shrink pdf"],
  },
  {
    slug: "pdf-merge",
    to: "/tools/pdf-merge",
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document.",
    image: pdfMergeImg,
    categoryLabel: "PDF Tools",
    keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf joiner"],
  },
  {
    slug: "image-compressor",
    to: "/tools/image-compressor",
    title: "Image Compressor",
    description: "Compress images without noticeable quality loss.",
    image: imageCompressorImg,
    categoryLabel: "Image Tools",
    keywords: ["compress image", "reduce image size", "optimise jpg", "shrink png"],
  },
  {
    slug: "jpg-to-pdf",
    to: "/tools/jpg-to-pdf",
    title: "JPG to PDF",
    description: "Convert JPG images into PDF documents.",
    image: jpgToPdfImg,
    categoryLabel: "Converters",
    keywords: ["jpg to pdf", "image to pdf", "photo to pdf", "jpeg converter"],
  },
  {
    slug: "qr-code-generator",
    to: "/tools/qr-code-generator",
    title: "QR Code Generator",
    description: "Generate custom QR codes instantly.",
    image: qrCodeImg,
    categoryLabel: "Generators",
    keywords: ["qr code generator", "create qr code", "url qr code", "free qr maker"],
  },
];

export function findLiveTool(slug: LiveToolSlug): LiveTool {
  return LIVE_TOOLS.find((t) => t.slug === slug) as LiveTool;
}

export function matchLiveTools(term: string): LiveTool[] {
  const q = term.trim().toLowerCase();
  if (!q) return LIVE_TOOLS;
  return LIVE_TOOLS.filter((t) =>
    [t.title, t.description, t.categoryLabel, ...t.keywords].join(" ").toLowerCase().includes(q),
  );
}
