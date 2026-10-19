import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as RotateCcw, Y as Image } from "../_libs/lucide-react.mjs";
import { i as getDynamicUses } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.image-compressor-D-Xi8IvM.mjs";
import { a as stripExtension, i as savingsLabel, r as formatBytes, t as downloadBlob } from "./tool-files-Jw2roL7I.mjs";
import { n as ToolAlert, r as ToolProcessingState, t as FileDrop } from "./tool-processing-state-DaGRWrZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.image-compressor-Bx4a-LD1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TARGETS = [
	{
		label: "Light (1.5 MB)",
		mb: 1.5
	},
	{
		label: "Balanced (600 KB)",
		mb: .6
	},
	{
		label: "Maximum (200 KB)",
		mb: .2
	}
];
function ImageCompressorPage() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [preset, setPreset] = (0, import_react.useState)(1);
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
			const imageCompression = (await import("../_libs/browser-image-compression.mjs").then((n) => n.t)).default;
			const target = TARGETS[preset] ?? TARGETS[1];
			const out = await imageCompression(file, {
				maxSizeMB: target.mb,
				maxWidthOrHeight: 2560,
				useWebWorker: true,
				initialQuality: .82
			});
			setResult({
				blob: out,
				url: URL_from(out)
			});
		} catch {
			setError("We couldn't compress that image. The file may be corrupt or unreadable. Please try a different image.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolShell, {
		title: TITLE,
		tagline: "Make photos and graphics dramatically lighter while keeping them looking sharp.",
		categoryLabel: TOOL_DATA.categoryLabel,
		thumbnail: TOOL_DATA.image,
		badge: TOOL_DATA.badge,
		dynamicUses,
		relatedSlugs: TOOL_DATA.relatedSlugs,
		about: "The ToolNami Image Compressor re-encodes your picture at an optimised quality level and, when needed, gently reduces oversized dimensions. It uses your browser's own image pipeline in a background worker, so large photos compress quickly without freezing the page and without ever being uploaded.",
		steps: TOOL_DATA.howToSteps,
		benefits: [
			{
				title: "Faster websites",
				body: "Lighter images mean quicker page loads and better Core Web Vitals."
			},
			{
				title: "Visually lossless",
				body: "Tuned quality settings keep detail where your eye notices it."
			},
			{
				title: "Private processing",
				body: "Nothing is uploaded — compression happens on your device."
			},
			{
				title: "Metadata removed",
				body: "Camera and GPS EXIF data is stripped during re-encoding."
			},
			{
				title: "Upload limits solved",
				body: "Fit inside forms, marketplaces and email attachment caps."
			},
			{
				title: "Free and unlimited",
				body: "No signup, no watermark, no daily quota."
			}
		],
		faqs: TOOL_DATA.faqs,
		seo: TOOL_DATA.seoArticle,
		children: [!file ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
			accept: "image/jpeg,image/png,image/webp",
			label: "Drop your image here",
			hint: "JPG, PNG or WebP. Compressed privately in your browser.",
			onFiles: (files) => {
				const f = files[0];
				if (!f) return;
				if (!f.type.startsWith("image/")) {
					setError("Please choose a valid image file (JPG, PNG, or WebP).");
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-5" })
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
					children: "Compression strength target"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: TARGETS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setPreset(i);
							setResult(null);
						},
						className: `rounded-full border px-4 py-2 text-xs font-semibold transition-all ${preset === i ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
						children: t.label
					}, t.label))
				})] }),
				!busy && !result && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: compress,
						disabled: busy,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
						children: "Compress Image Now"
					})
				}) : null,
				result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-background/50 p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: result.url,
						alt: "Compressed preview",
						loading: "lazy",
						className: "max-h-72 w-full rounded-xl object-contain"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolProcessingState, {
					isProcessing: busy,
					processingMessage: "Compressing pixel matrices and stripping redundant EXIF headers…",
					isSuccess: !!result,
					successTitle: "Image Compressed Successfully!",
					successSubtitle: result ? `Reduced from ${formatBytes(file.size)} to ${formatBytes(result.blob.size)} (${savingsLabel(file.size, result.blob.size)} savings).` : void 0,
					downloadLabel: "Download Compressed Image",
					onDownload: () => {
						if (result && file) downloadBlob(result.blob, `${stripExtension(file.name)}-compressed.jpg`);
					},
					error,
					onRetry: compress,
					onReset: reset
				})
			]
		}), error && !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolAlert, { children: error }) : null]
	});
}
function URL_from(blob) {
	return globalThis.URL.createObjectURL(blob);
}
//#endregion
export { ImageCompressorPage as component };
