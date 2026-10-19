import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-CaCwB8Wz.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className = "", size = "md", showText = true }) {
	const sizeClasses = {
		sm: "size-8",
		md: "size-9 sm:size-10",
		lg: "size-12"
	}[size];
	const imgPx = {
		sm: 32,
		md: 40,
		lg: 48
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `group inline-flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${className}`,
		"aria-label": "ToolNami home — fast free online utilities",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-600 opacity-60 blur-xs transition-opacity duration-300 group-hover:opacity-100 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative overflow-hidden rounded-full border-2 border-cyan-400/80 bg-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.45)] transition-transform duration-300 group-hover:scale-105 ${sizeClasses}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					srcSet: "/logo.png 1x, /logo-1024.png 2x",
					alt: "ToolNami 3D Anime Emblem Logo",
					width: imgPx,
					height: imgPx,
					decoding: "async",
					className: "size-full object-cover block"
				})
			})]
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary",
			children: ["Tool", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-gradient-to-r from-sky-400 to-primary bg-clip-text text-transparent",
				children: "Nami"
			})]
		})]
	});
}
//#endregion
export { Logo as t };
