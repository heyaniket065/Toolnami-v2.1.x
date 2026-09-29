import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { it as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/formatted-markdown-CGoaiuO6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/ui/formatted-markdown.tsx";
/**
* Parses inline text including:
* - Markdown & WhatsApp bold: **text** and *text*
* - Markdown & WhatsApp italic: _text_
* - Strikethrough: ~text~ and ~~text~~
* - Inline code: `text`
* - Markdown links: [Label](url) or **[Label](url)**
*/
function parseInlineFormatting(text, onLinkClick, keyPrefix = "inline") {
	if (!text) return [];
	const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(?<=^|[\s(])\*([^*\n]+)\*(?=[\s.,!?:;)]|$)|(?<=^|[\s(])_([^_\n]+)_(?=[\s.,!?:;)]|$)|~+([^~\n]+)~+|`([^`\n]+)`)/g;
	const elements = [];
	let lastIndex = 0;
	let match;
	let idx = 0;
	while ((match = tokenRegex.exec(text)) !== null) {
		const matchIndex = match.index;
		if (matchIndex > lastIndex) elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: text.substring(lastIndex, matchIndex) }, `${keyPrefix}-txt-${idx++}`, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 9
		}, this));
		const fullMatch = match[0];
		const linkText = match[2];
		const linkHref = match[3];
		const boldDouble = match[4];
		const boldSingle = match[5];
		const italicUnder = match[6];
		const strikeText = match[7];
		const codeText = match[8];
		if (linkHref) {
			const isInternal = linkHref.startsWith("/") || linkHref.startsWith("#");
			elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: linkHref,
				onClick: onLinkClick,
				className: "inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-2 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: linkText }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this), !isInternal && /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3 inline opacity-70" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 27
				}, this)]
			}, `${keyPrefix}-link-${idx++}`, true, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 9
			}, this));
		} else if (boldDouble !== void 0 || boldSingle !== void 0) {
			const boldContent = boldDouble ?? boldSingle;
			elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
				className: "font-bold text-foreground tracking-tight",
				children: parseInlineFormatting(boldContent, onLinkClick, `${keyPrefix}-sub-b`)
			}, `${keyPrefix}-b-${idx++}`, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this));
		} else if (italicUnder !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
			className: "italic text-foreground/90 font-medium",
			children: parseInlineFormatting(italicUnder, onLinkClick, `${keyPrefix}-sub-em`)
		}, `${keyPrefix}-em-${idx++}`, false, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 9
		}, this));
		else if (strikeText !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("del", {
			className: "line-through text-muted-foreground opacity-80",
			children: strikeText
		}, `${keyPrefix}-del-${idx++}`, false, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 9
		}, this));
		else if (codeText !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
			className: "px-1.5 py-0.5 rounded-md bg-muted font-mono text-[13px] text-primary font-semibold border border-border/60",
			children: codeText
		}, `${keyPrefix}-code-${idx++}`, false, {
			fileName: _jsxFileName,
			lineNumber: 100,
			columnNumber: 9
		}, this));
		else elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fullMatch }, `${keyPrefix}-raw-${idx++}`, false, {
			fileName: _jsxFileName,
			lineNumber: 108,
			columnNumber: 21
		}, this));
		lastIndex = matchIndex + fullMatch.length;
	}
	if (lastIndex < text.length) elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: text.substring(lastIndex) }, `${keyPrefix}-txt-end`, false, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 19
	}, this));
	return elements;
}
/**
* Robust, high-fidelity markdown & WhatsApp-style text renderer.
* Handles headings (hiding ### and styling as proper bold headers),
* WhatsApp formatting (*bold*, _italic_, ~strike~), lists, links,
* and horizontal rules without raw syntax clutter.
*/
function FormattedMarkdown({ content, className = "", onLinkClick }) {
	const renderedBlocks = (0, import_react.useMemo)(() => {
		if (!content) return null;
		const rawLines = content.replace(/\r\n/g, "\n").split("\n");
		const blocks = [];
		let currentList = null;
		const flushList = (blockIdx) => {
			if (!currentList) return;
			if (currentList.type === "ol") blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
				className: "my-3 space-y-2 pl-5 list-decimal text-foreground/90 text-sm sm:text-base leading-relaxed",
				children: currentList.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "pl-1",
					children: parseInlineFormatting(item.text, onLinkClick, `ol-${blockIdx}-${i}`)
				}, `li-${i}`, false, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 15
				}, this))
			}, `list-${blockIdx}`, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 11
			}, this));
			else blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "my-3 space-y-2 pl-5 list-disc text-foreground/90 text-sm sm:text-base leading-relaxed",
				children: currentList.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "pl-1",
					children: parseInlineFormatting(item.text, onLinkClick, `ul-${blockIdx}-${i}`)
				}, `li-${i}`, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 15
				}, this))
			}, `list-${blockIdx}`, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 11
			}, this));
			currentList = null;
		};
		let blockCounter = 0;
		for (let i = 0; i < rawLines.length; i++) {
			const line = rawLines[i].trimEnd();
			if (/^(\s*[-*_]\s*){3,}$/.test(line)) {
				flushList(blockCounter++);
				blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "my-4 border-t border-border/70" }, `hr-${blockCounter++}`, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 21
				}, this));
				continue;
			}
			const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
			if (headingMatch) {
				flushList(blockCounter++);
				const level = headingMatch[1].length;
				let rawTitle = headingMatch[2].trim();
				if (rawTitle.startsWith("**") && rawTitle.endsWith("**") && rawTitle.length > 4) rawTitle = rawTitle.slice(2, -2).trim();
				const titleNodes = parseInlineFormatting(rawTitle, onLinkClick, `h-${blockCounter}`);
				if (level === 1) blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-5 mb-2.5 text-xl sm:text-2xl font-black tracking-tight text-foreground border-b border-border/60 pb-2",
					children: titleNodes
				}, `h1-${blockCounter++}`, false, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 13
				}, this));
				else if (level === 2) blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 mb-2 text-lg sm:text-xl font-extrabold tracking-tight text-foreground",
					children: titleNodes
				}, `h2-${blockCounter++}`, false, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 13
				}, this));
				else blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "mt-3.5 mb-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-block w-1.5 h-4 bg-primary rounded-full flex-shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: titleNodes }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 15
					}, this)]
				}, `h3-${blockCounter++}`, true, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 13
				}, this));
				continue;
			}
			const olMatch = line.match(/^(\d+)[.)]\s+(.*)$/);
			if (olMatch) {
				if (!currentList || currentList.type !== "ol") {
					flushList(blockCounter++);
					currentList = {
						type: "ol",
						items: []
					};
				}
				currentList.items.push({
					num: olMatch[1],
					text: olMatch[2]
				});
				continue;
			}
			const ulMatch = line.match(/^[-*•]\s+(.*)$/);
			if (ulMatch) {
				if (!currentList || currentList.type !== "ul") {
					flushList(blockCounter++);
					currentList = {
						type: "ul",
						items: []
					};
				}
				currentList.items.push({ text: ulMatch[1] });
				continue;
			}
			const quoteMatch = line.match(/^>\s*(.*)$/);
			if (quoteMatch) {
				flushList(blockCounter++);
				blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
					className: "my-2.5 pl-4 py-1.5 border-l-4 border-primary/70 bg-muted/40 rounded-r-xl text-foreground/90 italic text-sm sm:text-base",
					children: parseInlineFormatting(quoteMatch[1], onLinkClick, `quote-${blockCounter}`)
				}, `quote-${blockCounter++}`, false, {
					fileName: _jsxFileName,
					lineNumber: 260,
					columnNumber: 11
				}, this));
				continue;
			}
			if (line.trim() === "") {
				flushList(blockCounter++);
				continue;
			}
			flushList(blockCounter++);
			blocks.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "my-2 text-sm sm:text-base leading-relaxed text-foreground/90 break-words",
				children: parseInlineFormatting(line, onLinkClick, `p-line-${blockCounter}`)
			}, `p-${blockCounter++}`, false, {
				fileName: _jsxFileName,
				lineNumber: 280,
				columnNumber: 9
			}, this));
		}
		flushList(blockCounter++);
		return blocks;
	}, [content, onLinkClick]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `formatted-content space-y-1 font-sans text-foreground select-text ${className}`,
		children: renderedBlocks
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 295,
		columnNumber: 5
	}, this);
}
//#endregion
export { FormattedMarkdown as t };
