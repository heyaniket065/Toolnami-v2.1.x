import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./reveal-DfkjJJ69.mjs";
import { y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as FormattedMarkdown } from "./formatted-markdown-CGoaiuO6.mjs";
import { i as pageContentQuery, t as Skeleton } from "./tools-data-CZ0KgGB2.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-1b-0J70d.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/legal-page.tsx";
function LegalPage({ pageName, fallbackTitle, fallbackBody }) {
	const { data, isPending } = useQuery(pageContentQuery(pageName));
	const title = fallbackTitle || data?.title || "Legal Document";
	const content = fallbackBody && fallbackBody.length > (data?.content?.length ?? 0) ? fallbackBody : data?.content ?? fallbackBody;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "page-enter",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "surface-hero border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this), " Official Legal Notice"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-5 text-3xl font-bold sm:text-5xl",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Last updated September 24, 2026 · Compliant with Google AdSense & Global Privacy Standards"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "mx-auto w-full max-w-4xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10",
				children: isPending && !content ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-3",
					children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: i % 4 === 3 ? "h-4 w-2/3" : "h-4 w-full" }, i, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "prose prose-slate dark:prose-invert max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormattedMarkdown, { content }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
//#endregion
export { LegalPage as t };
