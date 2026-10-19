import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Plus, Dt as ArrowUp, Mt as ArrowDown, f as Trash2, tt as FileText } from "../_libs/lucide-react.mjs";
import { i as getDynamicUses } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.pdf-merge-CBrye_FD.mjs";
import { r as formatBytes, t as downloadBlob } from "./tool-files-Jw2roL7I.mjs";
import { n as ToolAlert, r as ToolProcessingState, t as FileDrop } from "./tool-processing-state-DaGRWrZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.pdf-merge-Cw7ETeMO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PdfMergePage() {
	const [files, setFiles] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [merged, setMerged] = (0, import_react.useState)(null);
	const dynamicUses = (0, import_react.useMemo)(() => getDynamicUses(TOOL_DATA.baseUses), []);
	const add = (incoming) => {
		const pdfs = incoming.filter((f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"));
		if (pdfs.length === 0) {
			setError("Please choose PDF files only.");
			return;
		}
		setError(null);
		setMerged(null);
		setFiles((prev) => [...prev, ...pdfs]);
	};
	const move = (index, dir) => {
		setMerged(null);
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
	const merge = async () => {
		if (files.length < 2) {
			setError("Please add at least two PDF documents to merge.");
			return;
		}
		setBusy(true);
		setError(null);
		setMerged(null);
		try {
			const { PDFDocument } = await import("../_libs/pdf-lib.mjs").then((n) => n.t);
			const out = await PDFDocument.create();
			for (const file of files) {
				const src = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
				(await out.copyPages(src, src.getPageIndices())).forEach((p) => out.addPage(p));
			}
			const bytes = await out.save({ useObjectStreams: true });
			setMerged(new Blob([bytes], { type: "application/pdf" }));
		} catch {
			setError("We couldn't merge those files. One of them may be password-protected or corrupted. Please verify the files.");
		} finally {
			setBusy(false);
		}
	};
	const resetAll = () => {
		setFiles([]);
		setMerged(null);
		setError(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolShell, {
		title: TITLE,
		tagline: "Bring several PDFs together into one tidy document, in exactly the order you want.",
		categoryLabel: TOOL_DATA.categoryLabel,
		thumbnail: TOOL_DATA.image,
		badge: TOOL_DATA.badge,
		dynamicUses,
		relatedSlugs: TOOL_DATA.relatedSlugs,
		about: "ToolNami's PDF Merge copies every page from each file you add into a single new document, keeping page size, text and images intact. You control the order before merging, and the whole operation happens in your browser so nothing is uploaded.",
		steps: TOOL_DATA.howToSteps,
		benefits: [
			{
				title: "Full order control",
				body: "Rearrange files before merging so chapters land in sequence."
			},
			{
				title: "Private by design",
				body: "Files are merged locally and never uploaded to a server."
			},
			{
				title: "No page limits",
				body: "Combine short forms or long reports without restrictions."
			},
			{
				title: "Keeps quality",
				body: "Pages are copied, not re-rendered, so nothing gets blurry."
			},
			{
				title: "Free forever",
				body: "No account, no watermark, no daily cap."
			},
			{
				title: "Mobile ready",
				body: "Works just as well on a phone as on a laptop."
			}
		],
		faqs: TOOL_DATA.faqs,
		seo: TOOL_DATA.seoArticle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
				accept: "application/pdf,.pdf",
				multiple: true,
				label: "Drop your PDFs here",
				hint: "Add two or more PDF files to combine them.",
				onFiles: add
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-2xl border border-border bg-background p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: f.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: formatBytes(f.size)
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
											setMerged(null);
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
							" Add more PDFs",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "application/pdf,.pdf",
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
						children: "Clear all files"
					})]
				}),
				!busy && !merged && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: merge,
						disabled: files.length < 2,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
						children: [
							"Merge ",
							files.length,
							" PDFs into One Document"
						]
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolProcessingState, {
					isProcessing: busy,
					processingMessage: "Combining and sequencing all pages into single PDF…",
					isSuccess: !!merged,
					successTitle: "PDFs Merged Successfully!",
					successSubtitle: merged ? `Unified document created (${formatBytes(merged.size)}) containing all pages in selected order.` : void 0,
					downloadLabel: "Download Merged PDF",
					onDownload: () => {
						if (merged) downloadBlob(merged, "toolnami-merged.pdf");
					},
					error,
					onRetry: merge,
					onReset: resetAll
				})
			] }), error && files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolAlert, { children: error }) : null]
		})
	});
}
//#endregion
export { PdfMergePage as component };
