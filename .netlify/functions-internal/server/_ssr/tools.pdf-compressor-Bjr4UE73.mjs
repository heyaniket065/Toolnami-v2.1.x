import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as RotateCcw, tt as FileText } from "../_libs/lucide-react.mjs";
import { i as getDynamicUses } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.pdf-compressor-DTWPPpAH.mjs";
import { a as stripExtension, i as savingsLabel, r as formatBytes, t as downloadBlob } from "./tool-files-Jw2roL7I.mjs";
import { n as ToolAlert, r as ToolProcessingState, t as FileDrop } from "./tool-processing-state-DaGRWrZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.pdf-compressor-Bjr4UE73.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PdfCompressorPage() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)(null);
	const dynamicUses = (0, import_react.useMemo)(() => getDynamicUses(TOOL_DATA.baseUses), []);
	const reset = () => {
		setFile(null);
		setResult(null);
		setError(null);
	};
	const compress = async () => {
		if (!file) return;
		setBusy(true);
		setError(null);
		setResult(null);
		try {
			const { PDFDocument } = await import("../_libs/pdf-lib.mjs").then((n) => n.t);
			const bytes = await file.arrayBuffer();
			const pdf = await PDFDocument.load(bytes, {
				ignoreEncryption: true,
				updateMetadata: false
			});
			pdf.setTitle("");
			pdf.setSubject("");
			pdf.setKeywords([]);
			pdf.setProducer("ToolNami");
			pdf.setCreator("ToolNami");
			const out = await pdf.save({
				useObjectStreams: true,
				addDefaultPage: false
			});
			const blob = new Blob([out], { type: "application/pdf" });
			setResult({
				blob,
				size: blob.size
			});
		} catch {
			setError("We couldn't process that PDF. It may be password-protected or corrupted. Please try another file.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolShell, {
		title: TITLE,
		tagline: "Shrink bulky PDFs so they're easy to email, upload and share — without wrecking the quality.",
		categoryLabel: TOOL_DATA.categoryLabel,
		thumbnail: TOOL_DATA.image,
		badge: TOOL_DATA.badge,
		dynamicUses,
		relatedSlugs: TOOL_DATA.relatedSlugs,
		about: "The ToolNami PDF Compressor rebuilds your document with compressed object streams, strips leftover metadata and removes redundant internal structures. Text stays sharp and selectable because pages are never flattened into images. Everything runs locally in your browser, so even confidential contracts and invoices stay private.",
		steps: TOOL_DATA.howToSteps,
		benefits: [
			{
				title: "Quality preserved",
				body: "Pages aren't rasterised, so text, links and vectors stay crisp."
			},
			{
				title: "Completely private",
				body: "Your PDF is processed on your own device and never uploaded."
			},
			{
				title: "No signup, no cost",
				body: "Unlimited compressions with no account or watermark."
			},
			{
				title: "Email friendly",
				body: "Get under attachment limits for Gmail, Outlook and upload forms."
			},
			{
				title: "Works everywhere",
				body: "Runs in any modern browser on desktop, tablet or phone."
			},
			{
				title: "Instant results",
				body: "No queues or waiting rooms — compression starts immediately."
			}
		],
		faqs: TOOL_DATA.faqs,
		seo: TOOL_DATA.seoArticle,
		children: [!file ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
			accept: "application/pdf,.pdf",
			label: "Drop your PDF here",
			hint: "PDF files only. Processed privately in your browser.",
			onFiles: (files) => {
				const f = files[0];
				if (!f) return;
				if (!f.name.toLowerCase().endsWith(".pdf") && f.type !== "application/pdf") {
					setError("Please choose a valid PDF document.");
					return;
				}
				setError(null);
				setResult(null);
				setFile(f);
			}
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-2xl border border-border bg-background p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: formatBytes(file.size)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: reset,
							className: "inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Change"]
						})
					]
				}),
				!busy && !result && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: compress,
						disabled: busy,
						className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95",
						children: "Compress PDF Now"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolProcessingState, {
					isProcessing: busy,
					processingMessage: "Compressing and rebuilding PDF streams…",
					isSuccess: !!result,
					successTitle: "PDF Compressed Successfully!",
					successSubtitle: result ? `Reduced from ${formatBytes(file.size)} to ${formatBytes(result.size)} (${savingsLabel(file.size, result.size)} savings).` : void 0,
					downloadLabel: "Download Compressed PDF",
					onDownload: () => {
						if (result && file) downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.pdf`);
					},
					error,
					onRetry: compress,
					onReset: reset
				})
			]
		}), error && !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolAlert, { children: error }) : null]
	});
}
//#endregion
export { PdfCompressorPage as component };
