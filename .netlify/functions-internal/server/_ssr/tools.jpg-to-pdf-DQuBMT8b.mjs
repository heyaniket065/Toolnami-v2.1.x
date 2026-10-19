import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Plus, Dt as ArrowUp, Mt as ArrowDown, Y as Image, f as Trash2 } from "../_libs/lucide-react.mjs";
import { i as getDynamicUses } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.jpg-to-pdf-CufX1VWc.mjs";
import { r as formatBytes, t as downloadBlob } from "./tool-files-Jw2roL7I.mjs";
import { n as ToolAlert, r as ToolProcessingState, t as FileDrop } from "./tool-processing-state-DaGRWrZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.jpg-to-pdf-DQuBMT8b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function JpgToPdfPage() {
	const [files, setFiles] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [pdf, setPdf] = (0, import_react.useState)(null);
	const dynamicUses = (0, import_react.useMemo)(() => getDynamicUses(TOOL_DATA.baseUses), []);
	const add = (incoming) => {
		const images = incoming.filter((f) => /image\/(jpeg|jpg|png)/.test(f.type));
		if (images.length === 0) {
			setError("Please choose JPG, JPEG or PNG image files.");
			return;
		}
		setError(null);
		setPdf(null);
		setFiles((prev) => [...prev, ...images]);
	};
	const move = (index, dir) => {
		setPdf(null);
		setFiles((prev) => {
			const next = [...prev];
			const target = index + dir;
			if (target < 0 || target >= next.length) return prev;
			const a = next[index];
			next[index] = next[target];
			next[target] = a;
			return next;
		});
	};
	const convert = async () => {
		if (files.length === 0) return;
		setBusy(true);
		setError(null);
		setPdf(null);
		try {
			const { PDFDocument } = await import("../_libs/pdf-lib.mjs").then((n) => n.t);
			const doc = await PDFDocument.create();
			for (const file of files) {
				const bytes = new Uint8Array(await file.arrayBuffer());
				const image = file.type === "image/png" ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
				doc.addPage([image.width, image.height]).drawImage(image, {
					x: 0,
					y: 0,
					width: image.width,
					height: image.height
				});
			}
			const out = await doc.save({ useObjectStreams: true });
			setPdf(new Blob([out], { type: "application/pdf" }));
		} catch {
			setError("We couldn't convert those images. Please ensure files are valid image formats and try again.");
		} finally {
			setBusy(false);
		}
	};
	const resetAll = () => {
		setFiles([]);
		setPdf(null);
		setError(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolShell, {
		title: TITLE,
		tagline: "Turn photos, scans and screenshots into a clean, shareable PDF document.",
		categoryLabel: TOOL_DATA.categoryLabel,
		thumbnail: TOOL_DATA.image,
		badge: TOOL_DATA.badge,
		dynamicUses,
		relatedSlugs: TOOL_DATA.relatedSlugs,
		about: "ToolNami's JPG to PDF converter embeds each image at full resolution on its own page, sized to match the photo so nothing is cropped or padded awkwardly. Add several images, arrange the order, and download a single PDF — all without uploading anything.",
		steps: TOOL_DATA.howToSteps,
		benefits: [
			{
				title: "Original quality",
				body: "Images are embedded as-is, with no recompression."
			},
			{
				title: "Multi-page output",
				body: "Combine a whole set of scans into one document."
			},
			{
				title: "Perfect page fit",
				body: "Each page matches its image ratio — no stretching."
			},
			{
				title: "Private conversion",
				body: "Runs in your browser; photos never leave your device."
			},
			{
				title: "Great for submissions",
				body: "Ideal when a form only accepts PDF uploads."
			},
			{
				title: "Free and unlimited",
				body: "No signup, no watermark, no caps."
			}
		],
		faqs: TOOL_DATA.faqs,
		seo: TOOL_DATA.seoArticle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
				accept: "image/jpeg,image/jpg,image/png",
				multiple: true,
				label: "Drop your images here",
				hint: "JPG, JPEG or PNG. Each image becomes one PDF page.",
				onFiles: add
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-2xl border border-border bg-background p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: f.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Page ",
										i + 1,
										" · ",
										formatBytes(f.size)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Move ${f.name} up`,
										onClick: () => move(i, -1),
										disabled: i === 0,
										className: "inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-primary disabled:opacity-40",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Move ${f.name} down`,
										onClick: () => move(i, 1),
										disabled: i === files.length - 1,
										className: "inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-primary disabled:opacity-40",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remove ${f.name}`,
										onClick: () => {
											setPdf(null);
											setFiles((prev) => prev.filter((_, idx) => idx !== i));
										},
										className: "inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								]
							})
						]
					}, `${f.name}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
							" Add more images",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/jpeg,image/jpg,image/png",
								multiple: true,
								className: "hidden",
								onChange: (e) => {
									if (e.target.files) add(Array.from(e.target.files));
									e.target.value = "";
								}
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: resetAll,
						className: "text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors",
						children: "Clear all images"
					})]
				}),
				!busy && !pdf && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: convert,
						disabled: files.length === 0,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
						children: [
							"Convert ",
							files.length,
							" Image",
							files.length === 1 ? "" : "s",
							" to PDF"
						]
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolProcessingState, {
					isProcessing: busy,
					processingMessage: "Embedding images at original quality into PDF pages…",
					isSuccess: !!pdf,
					successTitle: "PDF Created Successfully!",
					successSubtitle: pdf ? `Generated clean ${files.length}-page PDF document (${formatBytes(pdf.size)}).` : void 0,
					downloadLabel: "Download Generated PDF",
					onDownload: () => {
						if (pdf) downloadBlob(pdf, "toolnami-images.pdf");
					},
					error,
					onRetry: convert,
					onReset: resetAll
				})
			] }), error && files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolAlert, { children: error }) : null]
		})
	});
}
//#endregion
export { JpgToPdfPage as component };
