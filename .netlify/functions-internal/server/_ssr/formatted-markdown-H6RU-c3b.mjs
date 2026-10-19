import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { st as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/formatted-markdown-H6RU-c3b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
		if (matchIndex > lastIndex) elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.substring(lastIndex, matchIndex) }, `${keyPrefix}-txt-${idx++}`));
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
			elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: linkHref,
				onClick: onLinkClick,
				className: "inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-2 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: linkText }), !isInternal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 inline opacity-70" })]
			}, `${keyPrefix}-link-${idx++}`));
		} else if (boldDouble !== void 0 || boldSingle !== void 0) {
			const boldContent = boldDouble ?? boldSingle;
			elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-bold text-foreground tracking-tight",
				children: parseInlineFormatting(boldContent, onLinkClick, `${keyPrefix}-sub-b`)
			}, `${keyPrefix}-b-${idx++}`));
		} else if (italicUnder !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "italic text-foreground/90 font-medium",
			children: parseInlineFormatting(italicUnder, onLinkClick, `${keyPrefix}-sub-em`)
		}, `${keyPrefix}-em-${idx++}`));
		else if (strikeText !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", {
			className: "line-through text-muted-foreground opacity-80",
			children: strikeText
		}, `${keyPrefix}-del-${idx++}`));
		else if (codeText !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "px-1.5 py-0.5 rounded-md bg-muted font-mono text-[13px] text-primary font-semibold border border-border/60",
			children: codeText
		}, `${keyPrefix}-code-${idx++}`));
		else elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fullMatch }, `${keyPrefix}-raw-${idx++}`));
		lastIndex = matchIndex + fullMatch.length;
	}
	if (lastIndex < text.length) elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.substring(lastIndex) }, `${keyPrefix}-txt-end`));
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
			if (currentList.type === "ol") blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "my-3 space-y-2 pl-5 list-decimal text-foreground/90 text-sm sm:text-base leading-relaxed",
				children: currentList.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pl-1",
					children: parseInlineFormatting(item.text, onLinkClick, `ol-${blockIdx}-${i}`)
				}, `li-${i}`))
			}, `list-${blockIdx}`));
			else blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "my-3 space-y-2 pl-5 list-disc text-foreground/90 text-sm sm:text-base leading-relaxed",
				children: currentList.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pl-1",
					children: parseInlineFormatting(item.text, onLinkClick, `ul-${blockIdx}-${i}`)
				}, `li-${i}`))
			}, `list-${blockIdx}`));
			currentList = null;
		};
		let blockCounter = 0;
		for (let i = 0; i < rawLines.length; i++) {
			const line = rawLines[i].trimEnd();
			if (/^(\s*[-*_]\s*){3,}$/.test(line)) {
				flushList(blockCounter++);
				blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-4 border-t border-border/70" }, `hr-${blockCounter++}`));
				continue;
			}
			const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
			if (headingMatch) {
				flushList(blockCounter++);
				const level = headingMatch[1].length;
				let rawTitle = headingMatch[2].trim();
				if (rawTitle.startsWith("**") && rawTitle.endsWith("**") && rawTitle.length > 4) rawTitle = rawTitle.slice(2, -2).trim();
				const titleNodes = parseInlineFormatting(rawTitle, onLinkClick, `h-${blockCounter}`);
				if (level === 1) blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 mb-2.5 text-xl sm:text-2xl font-black tracking-tight text-foreground border-b border-border/60 pb-2",
					children: titleNodes
				}, `h1-${blockCounter++}`));
				else if (level === 2) blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 mb-2 text-lg sm:text-xl font-extrabold tracking-tight text-foreground",
					children: titleNodes
				}, `h2-${blockCounter++}`));
				else blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-3.5 mb-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-1.5 h-4 bg-primary rounded-full flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: titleNodes })]
				}, `h3-${blockCounter++}`));
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
				blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "my-2.5 pl-4 py-1.5 border-l-4 border-primary/70 bg-muted/40 rounded-r-xl text-foreground/90 italic text-sm sm:text-base",
					children: parseInlineFormatting(quoteMatch[1], onLinkClick, `quote-${blockCounter}`)
				}, `quote-${blockCounter++}`));
				continue;
			}
			if (line.trim() === "") {
				flushList(blockCounter++);
				continue;
			}
			flushList(blockCounter++);
			blocks.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-2 text-sm sm:text-base leading-relaxed text-foreground/90 break-words",
				children: parseInlineFormatting(line, onLinkClick, `p-line-${blockCounter}`)
			}, `p-${blockCounter++}`));
		}
		flushList(blockCounter++);
		return blocks;
	}, [content, onLinkClick]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `formatted-content space-y-1 font-sans text-foreground select-text ${className}`,
		children: renderedBlocks
	});
}
//#endregion
export { FormattedMarkdown as t };
