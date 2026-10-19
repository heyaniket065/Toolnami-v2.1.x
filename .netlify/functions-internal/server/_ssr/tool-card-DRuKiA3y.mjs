import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ot as ArrowUpRight, _ as Sparkles, a as Wrench, at as Eye, t as lucide_react_exports } from "../_libs/lucide-react.mjs";
import { n as getToolBySlug } from "./ssr.mjs";
import { t as Skeleton } from "./tools-data-sBnd-p4v.mjs";
import { o as useToolUsage } from "./phase1-tools-BWufFB2w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tool-card-DRuKiA3y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryIcon({ name, className }) {
	const Fallback = Wrench;
	const Comp = name && lucide_react_exports[name] || Fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		"aria-hidden": "true"
	});
}
function ToolCard({ tool, category }) {
	const completeTool = getToolBySlug(tool.slug);
	const initialImage = tool.image || tool.thumbnail_url || completeTool?.image || `/assets/tools/${tool.slug}.png`;
	const [imgSrc, setImgSrc] = (0, import_react.useState)(initialImage);
	const fallbackImage = `/assets/tools/${tool.category_id === "pdf" ? "3d-pdf-compressor" : tool.category_id === "image" ? "image-converter" : tool.category_id === "ai" ? "ai-content-writer" : tool.category_id === "calculator" ? "age-calculator" : tool.category_id === "text" ? "text-formatter" : tool.category_id === "developer" ? "json-formatter" : tool.category_id === "seo" ? "meta-tag-generator" : "unit-converter"}.png`;
	const { formatted: usageCount, hasIncremented } = useToolUsage(completeTool?.baseUses || tool.views || 18e3, tool.slug, { enableLiveGrowth: true });
	const targetSlug = completeTool?.slug || tool.slug;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: `/tools/${targetSlug}`,
		"aria-label": tool.title,
		className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-muted/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imgSrc,
					alt: tool.title,
					width: 400,
					height: 250,
					decoding: "async",
					onError: () => {
						if (imgSrc !== fallbackImage) setImgSrc(fallbackImage);
					},
					className: "w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105",
					referrerPolicy: "no-referrer",
					loading: "lazy"
				}),
				tool.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), " Featured"]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-card/85 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4 sm:p-5",
			children: [
				category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold tracking-wide text-primary uppercase",
					children: category.name
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold text-card-foreground sm:text-lg group-hover:text-primary transition-colors",
					children: tool.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm text-muted-foreground",
					children: tool.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground border-t border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						suppressHydrationWarning: true,
						className: `flex items-center gap-1.5 transition-all duration-300 ${hasIncremented ? "text-emerald-400 font-semibold" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							suppressHydrationWarning: true,
							children: usageCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary font-semibold text-[11px] group-hover:underline",
						children: "Use tool →"
					})]
				})
			]
		})]
	});
}
function ToolCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[16/10] w-full rounded-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-3/4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-2/3" })
			]
		})]
	});
}
//#endregion
export { ToolCard as n, ToolCardSkeleton as r, CategoryIcon as t };
