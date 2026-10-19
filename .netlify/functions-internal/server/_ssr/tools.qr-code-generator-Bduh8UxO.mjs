import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { k as QrCode } from "../_libs/lucide-react.mjs";
import { i as getDynamicUses } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.qr-code-generator-De14gQb5.mjs";
import { n as downloadDataUrl } from "./tool-files-Jw2roL7I.mjs";
import { n as ToolAlert, r as ToolProcessingState } from "./tool-processing-state-DaGRWrZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.qr-code-generator-Bduh8UxO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	{
		label: "Classic",
		dark: "#0f172a",
		light: "#ffffff"
	},
	{
		label: "Blue",
		dark: "#1d63ff",
		light: "#ffffff"
	},
	{
		label: "Ink",
		dark: "#000000",
		light: "#ffffff"
	}
];
function QrCodePage() {
	const [value, setValue] = (0, import_react.useState)("");
	const [color, setColor] = (0, import_react.useState)(0);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [png, setPng] = (0, import_react.useState)(null);
	const dynamicUses = (0, import_react.useMemo)(() => getDynamicUses(TOOL_DATA.baseUses), []);
	const generate = async () => {
		if (!value.trim()) {
			setError("Please enter a link, text, or Wi-Fi information to encode.");
			return;
		}
		setBusy(true);
		setError(null);
		setPng(null);
		try {
			const QRCode = (await import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			const chosen = COLORS[color] ?? COLORS[0];
			const dataUrl = await QRCode.toDataURL(value.trim(), {
				width: 1024,
				margin: 2,
				errorCorrectionLevel: "M",
				color: {
					dark: chosen.dark,
					light: chosen.light
				}
			});
			setPng(dataUrl);
		} catch {
			setError("We couldn't generate a QR code for that input. Please try shortening or checking the text.");
		} finally {
			setBusy(false);
		}
	};
	const resetAll = () => {
		setValue("");
		setPng(null);
		setError(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolShell, {
		title: TITLE,
		tagline: "Create a sharp, permanent QR code for any link or piece of text in one click.",
		categoryLabel: TOOL_DATA.categoryLabel,
		thumbnail: TOOL_DATA.image,
		badge: TOOL_DATA.badge,
		dynamicUses,
		relatedSlugs: TOOL_DATA.relatedSlugs,
		about: "ToolNami's QR Code Generator encodes your text or URL directly into the image, so there is no redirect service, no tracking and no expiry date. Choose a colour style, generate a high-resolution PNG and download it for use online or in print.",
		steps: TOOL_DATA.howToSteps,
		benefits: [
			{
				title: "Never expires",
				body: "Data is inside the code itself — no third-party redirect to break."
			},
			{
				title: "Print ready",
				body: "1024×1024 PNG output stays crisp on posters and packaging."
			},
			{
				title: "No tracking",
				body: "We don't log your links or count scans."
			},
			{
				title: "Works offline",
				body: "Generation happens in your browser, not on a server."
			},
			{
				title: "Any content",
				body: "Links, Wi-Fi, contact details, payment strings or plain text."
			},
			{
				title: "Free forever",
				body: "No account, no watermark, no scan limits."
			}
		],
		faqs: TOOL_DATA.faqs,
		seo: TOOL_DATA.seoArticle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "qr-input",
					className: "text-sm font-semibold",
					children: "Target URL or Plain Text"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "qr-input",
					value,
					onChange: (e) => {
						setValue(e.target.value);
						setPng(null);
					},
					rows: 3,
					placeholder: "https://example.com or any text...",
					className: "mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/30"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
					children: "Color style"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: COLORS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setColor(i);
							setPng(null);
						},
						className: `rounded-full border px-4 py-2 text-xs font-semibold transition-all ${color === i ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
						children: c.label
					}, c.label))
				})] }),
				!busy && !png && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: generate,
						disabled: busy || !value.trim(),
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-4" }), "Generate QR Code Now"]
					})
				}) : null,
				png ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background p-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: png,
						alt: `QR code for ${value.trim()}`,
						width: 256,
						height: 256,
						className: "mx-auto size-56 rounded-xl shadow-soft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "1024×1024 Crisp PNG · Point phone camera to scan"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolProcessingState, {
					isProcessing: busy,
					processingMessage: "Encoding data into QR matrix and computing Reed-Solomon error correction…",
					isSuccess: !!png,
					successTitle: "QR Code Ready to Use!",
					successSubtitle: "Permanent, unexpirable QR code generated at ultra-high 1024×1024 resolution.",
					downloadLabel: "Download High-Res PNG",
					onDownload: () => {
						if (png) downloadDataUrl(png, "toolnami-qr-code.png");
					},
					error,
					onRetry: generate,
					onReset: resetAll
				}),
				error && !value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolAlert, { children: error }) : null
			]
		})
	});
}
//#endregion
export { QrCodePage as component };
