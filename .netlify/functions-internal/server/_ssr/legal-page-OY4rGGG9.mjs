import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as FormattedMarkdown } from "./formatted-markdown-H6RU-c3b.mjs";
import { i as pageContentQuery, t as Skeleton } from "./tools-data-sBnd-p4v.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-OY4rGGG9.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ pageName, fallbackTitle, fallbackBody }) {
	const { data, isPending } = useQuery(pageContentQuery(pageName));
	const title = fallbackTitle || data?.title || "Legal Document";
	const content = fallbackBody && fallbackBody.length > (data?.content?.length ?? 0) ? fallbackBody : data?.content ?? fallbackBody;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-hero border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " Official Legal Notice"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-3xl font-bold sm:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Last updated September 24, 2026 · Compliant with Google AdSense & Global Privacy Standards"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-4xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10",
				children: isPending && !content ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: i % 4 === 3 ? "h-4 w-2/3" : "h-4 w-full" }, i))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-slate dark:prose-invert max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormattedMarkdown, { content })
				})
			}) })
		})]
	});
}
//#endregion
export { LegalPage as t };
