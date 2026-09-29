import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-DfkjJJ69.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/reveal.tsx";
function Reveal({ children, delay = 0, className = "", as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(as, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
//#endregion
export { Reveal as t };
