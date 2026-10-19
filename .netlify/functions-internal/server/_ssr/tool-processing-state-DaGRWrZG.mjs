import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as RotateCcw, U as LoaderCircle, _t as CircleCheck, ct as Download, mt as CloudUpload, vt as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tool-processing-state-DaGRWrZG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FileDrop({ accept, multiple = false, label, hint, onFiles }) {
	const inputRef = (0, import_react.useRef)(null);
	const [over, setOver] = (0, import_react.useState)(false);
	const emit = (list) => {
		if (!list || list.length === 0) return;
		onFiles(Array.from(list));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragOver: (e) => {
			e.preventDefault();
			setOver(true);
		},
		onDragLeave: () => setOver(false),
		onDrop: (e) => {
			e.preventDefault();
			setOver(false);
			emit(e.dataTransfer.files);
		},
		className: `rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 sm:p-10 ${over ? "border-primary bg-primary-soft" : "border-border bg-background"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold sm:text-base",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-1.5 max-w-xs text-xs text-muted-foreground sm:text-sm",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => inputRef.current?.click(),
				className: "mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95",
				children: ["Choose file", multiple ? "s" : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept,
				multiple,
				"aria-label": label,
				className: "hidden",
				onChange: (e) => {
					emit(e.target.files);
					e.target.value = "";
				}
			})
		]
	});
}
function ToolAlert({ tone = "error", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "status",
		className: `mt-4 rounded-xl border px-4 py-3 text-sm ${tone === "error" ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-primary/30 bg-primary-soft text-primary"}`,
		children
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function ToolProcessingState({ isProcessing, processingMessage = "Processing your file…", isSuccess, successTitle = "Task Completed Successfully", successSubtitle, onDownload, downloadLabel = "Download Result", error, onRetry, onReset, customSuccessContent }) {
	const [progress, setProgress] = (0, import_react.useState)(15);
	(0, import_react.useEffect)(() => {
		let timer = null;
		if (isProcessing) {
			setProgress(18);
			timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 92) return prev;
					const inc = Math.floor(Math.random() * 12) + 6;
					return Math.min(prev + inc, 92);
				});
			}, 250);
		} else if (isSuccess) setProgress(100);
		else setProgress(0);
		return () => {
			if (timer) clearInterval(timer);
		};
	}, [isProcessing, isSuccess]);
	if (isProcessing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-primary/30 bg-primary-soft/50 p-6 text-center shadow-soft animate-in fade-in zoom-in-95 duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-card text-primary shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-7 animate-spin text-primary" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-4 text-base font-semibold text-foreground",
				children: processingMessage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Processing safely in your browser. Almost ready…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-4 max-w-sm space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: progress,
					className: "h-2.5 bg-primary/15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-[11px] font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progress, "%"] })]
				})]
			})
		]
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-destructive/40 bg-destructive/10 p-6 text-left shadow-soft animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-destructive/20 text-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold text-destructive",
						children: "Unable to complete processing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center gap-2.5",
						children: [onRetry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onRetry,
							className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Try Again"]
						}) : null, onReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onReset,
							className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/40 active:scale-95",
							children: "Choose Different File"
						}) : null]
					})
				]
			})]
		})
	});
	if (isSuccess) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-left shadow-soft animate-in fade-in zoom-in-95 duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-500",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-base font-semibold text-foreground",
					children: successTitle
				}), successSubtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: successSubtitle
				}) : null] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2.5",
				children: [onDownload ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onDownload,
					className: "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), downloadLabel]
				}) : null, onReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onReset,
					className: "inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Start Over"]
				}) : null]
			})]
		}), customSuccessContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 pt-3 border-t border-border/50",
			children: customSuccessContent
		}) : null]
	});
	return null;
}
//#endregion
export { ToolAlert as n, ToolProcessingState as r, FileDrop as t };
