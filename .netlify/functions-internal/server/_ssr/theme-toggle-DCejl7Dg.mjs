import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as Moon, p as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-DCejl7Dg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "toolnami-theme";
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.style.colorScheme = theme;
}
function ThemeToggle({ className = "" }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initial = localStorage.getItem(STORAGE_KEY) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
		localStorage.setItem(STORAGE_KEY, next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `size-[18px] transition-all duration-300 ${mounted && theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `absolute size-[18px] transition-all duration-300 ${mounted && theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90 opacity-0"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className })
		]
	});
}
//#endregion
export { applyTheme as n, ThemeToggle as t };
