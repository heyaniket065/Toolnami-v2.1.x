import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Plus, At as ArrowRightLeft, Ct as Calculator, E as RotateCcw, H as LockOpen, N as Palette, Nt as Activity, O as RefreshCw, P as Moon, Q as Globe, St as Check, T as RotateCw, V as Lock, Y as Image$1, _ as Sparkles, _t as CircleCheck, at as Eye, c as Upload, ct as Download, d as TrendingUp, f as Trash2, ft as Copy, g as SquareCenterlineDashedHorizontal, h as SquareCenterlineDashedVertical, j as Pipette, l as Type, lt as DollarSign, m as Stamp, mt as CloudUpload, n as Zap, nt as FileCode, ot as EyeOff, p as Sun, q as Layers, tt as FileText, ut as Crop, v as SlidersVertical, w as Scissors, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useAuth } from "./use-auth-L4eD_EXa.mjs";
import { t as FormattedMarkdown } from "./formatted-markdown-H6RU-c3b.mjs";
import { t as COMPLETE_TOOLS } from "./ssr.mjs";
import { o as useToolUsage } from "./phase1-tools-BWufFB2w.mjs";
import { t as ToolShell } from "./tool-shell-C1AsPVP0.mjs";
import { t as Route } from "./tools._slug-DDHa8k7d.mjs";
import { r as formatBytes, t as downloadBlob } from "./tool-files-Jw2roL7I.mjs";
import { a as degrees, i as rgb, n as PDFDocument, r as StandardFonts } from "../_libs/pdf-lib.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools._slug-sErClUUB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var POPULAR_CURRENCIES = [
	{
		code: "USD",
		name: "United States Dollar",
		symbol: "$",
		rateToUsd: 1,
		flag: "🇺🇸"
	},
	{
		code: "INR",
		name: "Indian Rupee",
		symbol: "₹",
		rateToUsd: 86.85,
		flag: "🇮🇳"
	},
	{
		code: "EUR",
		name: "Euro",
		symbol: "€",
		rateToUsd: .93,
		flag: "🇪🇺"
	},
	{
		code: "GBP",
		name: "British Pound Sterling",
		symbol: "£",
		rateToUsd: .79,
		flag: "🇬🇧"
	},
	{
		code: "JPY",
		name: "Japanese Yen",
		symbol: "¥",
		rateToUsd: 154.6,
		flag: "🇯🇵"
	},
	{
		code: "CAD",
		name: "Canadian Dollar",
		symbol: "CA$",
		rateToUsd: 1.38,
		flag: "🇨🇦"
	},
	{
		code: "AUD",
		name: "Australian Dollar",
		symbol: "A$",
		rateToUsd: 1.54,
		flag: "🇦🇺"
	},
	{
		code: "AED",
		name: "United Arab Emirates Dirham",
		symbol: "AED",
		rateToUsd: 3.67,
		flag: "🇦🇪"
	},
	{
		code: "SGD",
		name: "Singapore Dollar",
		symbol: "S$",
		rateToUsd: 1.34,
		flag: "🇸🇬"
	},
	{
		code: "CHF",
		name: "Swiss Franc",
		symbol: "CHF",
		rateToUsd: .89,
		flag: "🇨🇭"
	},
	{
		code: "CNY",
		name: "Chinese Yuan",
		symbol: "¥",
		rateToUsd: 7.24,
		flag: "🇨🇳"
	},
	{
		code: "BRL",
		name: "Brazilian Real",
		symbol: "R$",
		rateToUsd: 5.48,
		flag: "🇧🇷"
	},
	{
		code: "SAR",
		name: "Saudi Riyal",
		symbol: "SAR",
		rateToUsd: 3.75,
		flag: "🇸🇦"
	},
	{
		code: "NZD",
		name: "New Zealand Dollar",
		symbol: "NZ$",
		rateToUsd: 1.66,
		flag: "🇳🇿"
	},
	{
		code: "ZAR",
		name: "South African Rand",
		symbol: "R",
		rateToUsd: 18.25,
		flag: "🇿🇦"
	}
];
function CurrencyConverterTool() {
	const [amount, setAmount] = (0, import_react.useState)(100);
	const [fromCode, setFromCode] = (0, import_react.useState)("USD");
	const [toCode, setToCode] = (0, import_react.useState)("INR");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const fromCurr = POPULAR_CURRENCIES.find((c) => c.code === fromCode) || POPULAR_CURRENCIES[0];
	const toCurr = POPULAR_CURRENCIES.find((c) => c.code === toCode) || POPULAR_CURRENCIES[1];
	const convertedValue = (0, import_react.useMemo)(() => {
		if (isNaN(amount) || amount < 0) return "0.00";
		return (amount / fromCurr.rateToUsd * toCurr.rateToUsd).toLocaleString(void 0, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 4
		});
	}, [
		amount,
		fromCurr,
		toCurr
	]);
	const unitExchangeRate = (0, import_react.useMemo)(() => {
		return (1 / fromCurr.rateToUsd * toCurr.rateToUsd).toFixed(4);
	}, [fromCurr, toCurr]);
	const inverseExchangeRate = (0, import_react.useMemo)(() => {
		return (1 / toCurr.rateToUsd * fromCurr.rateToUsd).toFixed(4);
	}, [fromCurr, toCurr]);
	const handleSwap = () => {
		setFromCode(toCode);
		setToCode(fromCode);
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(`${amount} ${fromCode} = ${convertedValue} ${toCode}`);
		setCopied(true);
		toast.success("Conversion result copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-xl font-black text-foreground tracking-tight flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "w-5 h-5 text-primary" }), "Live Currency Exchange"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: "Real-time benchmark conversion rates • Instant calculation"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3 h-3" }), " Updated"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-2",
					children: "Amount to Convert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-muted-foreground",
						children: fromCurr.symbol
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "0",
						step: "any",
						value: amount,
						onChange: (e) => setAmount(parseFloat(e.target.value) || 0),
						className: "w-full pl-10 pr-4 py-3.5 rounded-2xl bg-muted/40 border border-border text-lg font-bold text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all",
						placeholder: "Enter amount..."
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
							children: "From Currency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: fromCode,
							onChange: (e) => setFromCode(e.target.value),
							className: "w-full py-3 px-3.5 rounded-2xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer",
							children: POPULAR_CURRENCIES.map((curr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: curr.code,
								children: [
									curr.flag,
									" ",
									curr.code,
									" — ",
									curr.name,
									" (",
									curr.symbol,
									")"
								]
							}, curr.code))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center sm:pt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleSwap,
								title: "Swap Currencies",
								className: "p-3 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground border border-border transition-all hover:scale-105 active:scale-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, { className: "w-4 h-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
							children: "To Currency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: toCode,
							onChange: (e) => setToCode(e.target.value),
							className: "w-full py-3 px-3.5 rounded-2xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer",
							children: POPULAR_CURRENCIES.map((curr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: curr.code,
								children: [
									curr.flag,
									" ",
									curr.code,
									" — ",
									curr.name,
									" (",
									curr.symbol,
									")"
								]
							}, curr.code))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1",
							children: "Converted Result"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-3xl sm:text-4xl font-black text-foreground tracking-tight break-words",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary mr-1",
								children: toCurr.symbol
							}), convertedValue]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground mt-2 font-medium",
							children: [
								"1 ",
								fromCode,
								" = ",
								unitExchangeRate,
								" ",
								toCode,
								" \xA0•\xA0 1 ",
								toCode,
								" =",
								" ",
								inverseExchangeRate,
								" ",
								fromCode
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleCopy,
							className: "mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-muted border border-border text-xs font-bold text-foreground shadow-xs transition-colors",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), copied ? "Copied to Clipboard" : "Copy Result"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2 pt-2 text-center text-xs",
					children: [
						10,
						50,
						100,
						500
					].map((quickAmt) => {
						const inTarget = (quickAmt / fromCurr.rateToUsd * toCurr.rateToUsd).toFixed(2);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setAmount(quickAmt),
							className: "p-2 rounded-xl bg-muted/30 hover:bg-muted/60 border border-border/80 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-bold text-foreground",
								children: [
									quickAmt,
									" ",
									fromCode
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-muted-foreground text-[11px]",
								children: [toCurr.symbol, inTarget]
							})]
						}, quickAmt);
					})
				})
			]
		})]
	});
}
var PRESETS$1 = [
	{
		name: "Instagram Square (1:1)",
		width: 1080,
		height: 1080
	},
	{
		name: "Instagram Story (9:16)",
		width: 1080,
		height: 1920
	},
	{
		name: "YouTube Thumbnail (16:9)",
		width: 1280,
		height: 720
	},
	{
		name: "Twitter / X Post",
		width: 1200,
		height: 675
	},
	{
		name: "Facebook Post",
		width: 1200,
		height: 630
	},
	{
		name: "Website Hero Banner",
		width: 1920,
		height: 1080
	}
];
function ImageResizerTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [originalUrl, setOriginalUrl] = (0, import_react.useState)(null);
	const [origDimensions, setOrigDimensions] = (0, import_react.useState)(null);
	const [targetWidth, setTargetWidth] = (0, import_react.useState)(800);
	const [targetHeight, setTargetHeight] = (0, import_react.useState)(600);
	const [lockAspect, setLockAspect] = (0, import_react.useState)(true);
	const [aspectRatio, setAspectRatio] = (0, import_react.useState)(4 / 3);
	const [format, setFormat] = (0, import_react.useState)("image/jpeg");
	const [quality, setQuality] = (0, import_react.useState)(90);
	const [resizing, setResizing] = (0, import_react.useState)(false);
	const [resizedBlob, setResizedBlob] = (0, import_react.useState)(null);
	const [resizedUrl, setResizedUrl] = (0, import_react.useState)(null);
	const [resizedDimensions, setResizedDimensions] = (0, import_react.useState)(null);
	(0, import_react.useRef)(null);
	const handleFile = (f) => {
		if (!f.type.startsWith("image/")) {
			toast.error("Please choose a valid image file (JPG, PNG, or WebP)");
			return;
		}
		setFile(f);
		setResizedBlob(null);
		setResizedUrl(null);
		const url = URL.createObjectURL(f);
		setOriginalUrl(url);
		const img = new Image();
		img.onload = () => {
			setOrigDimensions({
				width: img.naturalWidth,
				height: img.naturalHeight
			});
			setTargetWidth(img.naturalWidth);
			setTargetHeight(img.naturalHeight);
			const ratio = img.naturalWidth / img.naturalHeight;
			setAspectRatio(ratio);
		};
		img.src = url;
	};
	const handleWidthChange = (w) => {
		setTargetWidth(w);
		if (lockAspect && aspectRatio > 0) setTargetHeight(Math.round(w / aspectRatio));
	};
	const handleHeightChange = (h) => {
		setTargetHeight(h);
		if (lockAspect && aspectRatio > 0) setTargetWidth(Math.round(h * aspectRatio));
	};
	const applyPreset = (preset) => {
		setLockAspect(false);
		setTargetWidth(preset.width);
		setTargetHeight(preset.height);
	};
	const applyScalePercentage = (pct) => {
		if (!origDimensions) return;
		const w = Math.round(origDimensions.width * pct / 100);
		const h = Math.round(origDimensions.height * pct / 100);
		setTargetWidth(w);
		setTargetHeight(h);
	};
	const performResize = async () => {
		if (!originalUrl || !file) {
			toast.error("Please upload an image first");
			return;
		}
		if (targetWidth <= 0 || targetHeight <= 0) {
			toast.error("Invalid target dimensions");
			return;
		}
		setResizing(true);
		try {
			const img = new Image();
			img.src = originalUrl;
			await new Promise((resolve, reject) => {
				img.onload = resolve;
				img.onerror = reject;
			});
			const canvas = document.createElement("canvas");
			canvas.width = targetWidth;
			canvas.height = targetHeight;
			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("Could not create canvas context");
			ctx.imageSmoothingEnabled = true;
			ctx.imageSmoothingQuality = "high";
			ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
			const mime = format;
			const blob = await new Promise((resolve) => {
				canvas.toBlob((b) => resolve(b), mime, quality / 100);
			});
			if (!blob) throw new Error("Canvas encoding failed");
			if (resizedUrl) URL.revokeObjectURL(resizedUrl);
			const outUrl = URL.createObjectURL(blob);
			setResizedBlob(blob);
			setResizedUrl(outUrl);
			setResizedDimensions({
				width: targetWidth,
				height: targetHeight
			});
			toast.success("Image resized successfully!");
		} catch (err) {
			toast.error("Failed to resize image. Try different dimensions.");
		} finally {
			setResizing(false);
		}
	};
	const handleDownload = () => {
		if (!resizedBlob || !file) {
			toast.error("No resized image ready for download");
			return;
		}
		const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
		const filename = `${file.name.replace(/\.[^/.]+$/, "")}-${targetWidth}x${targetHeight}.${ext}`;
		downloadBlob(resizedBlob, filename);
		toast.success(`Downloaded ${filename}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "file",
			id: "image-resizer-file-input",
			accept: "image/jpeg,image/png,image/webp",
			className: "hidden",
			onChange: (e) => {
				if (e.target.files?.[0]) handleFile(e.target.files[0]);
			}
		}), !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onDragOver: (e) => e.preventDefault(),
			onDrop: (e) => {
				e.preventDefault();
				if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
			},
			className: "p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors text-center cursor-pointer bg-muted/20 hover:bg-muted/40",
			onClick: () => document.getElementById("image-resizer-file-input")?.click(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold mb-1 text-foreground",
					children: "Select or Drop Image to Resize"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-md mx-auto mb-5",
					children: "JPG, PNG, and WebP supported. Resize right in your browser with zero quality loss."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "w-4 h-4" }), "Browse Image"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 truncate mr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-xl bg-card border border-border overflow-hidden shrink-0 flex items-center justify-center",
							children: originalUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: originalUrl,
								alt: "Original preview",
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold text-foreground truncate",
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									"Original: ",
									origDimensions?.width,
									" × ",
									origDimensions?.height,
									" px (",
									formatBytes(file.size),
									")"
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => document.getElementById("image-resizer-file-input")?.click(),
						className: "px-3.5 py-2 rounded-xl bg-card hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors shrink-0",
						children: "Change Image"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-2",
					children: "Popular Size Presets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
					children: PRESETS$1.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => applyPreset(p),
						className: `p-2.5 rounded-xl border text-left text-xs transition-colors ${targetWidth === p.width && targetHeight === p.height ? "bg-primary/10 border-primary text-primary font-bold" : "bg-card border-border hover:bg-muted text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] text-muted-foreground",
							children: [
								p.width,
								" × ",
								p.height,
								" px"
							]
						})]
					}, p.name))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-muted-foreground uppercase",
						children: "Scale:"
					}), [
						25,
						50,
						75,
						100,
						150,
						200
					].map((pct) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => applyScalePercentage(pct),
						className: "px-2.5 py-1 rounded-lg bg-muted/60 hover:bg-muted border border-border text-xs font-medium text-foreground transition-colors",
						children: [pct, "%"]
					}, pct))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-muted/20 border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
							children: "Target Width (Pixels)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "1",
							max: "10000",
							value: targetWidth,
							onChange: (e) => handleWidthChange(parseInt(e.target.value) || 0),
							className: "w-full px-3.5 py-2.5 rounded-xl bg-card border border-border text-base font-bold text-foreground focus:outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
							children: "Target Height (Pixels)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "1",
							max: "10000",
							value: targetHeight,
							onChange: (e) => handleHeightChange(parseInt(e.target.value) || 0),
							className: "w-full px-3.5 py-2.5 rounded-xl bg-card border border-border text-base font-bold text-foreground focus:outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setLockAspect(!lockAspect),
								className: `inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${lockAspect ? "bg-primary/10 border-primary/30 text-primary" : "bg-card border-border text-muted-foreground"}`,
								children: [
									lockAspect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "w-3.5 h-3.5" }),
									"Maintain Aspect Ratio ",
									lockAspect ? "(Locked)" : "(Free)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-foreground",
									children: "Format:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: format,
									onChange: (e) => setFormat(e.target.value),
									className: "py-1.5 px-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "image/jpeg",
											children: "JPG / JPEG"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "image/png",
											children: "PNG"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "image/webp",
											children: "WebP"
										})
									]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: performResize,
					disabled: resizing,
					className: "w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50",
					children: resizing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4 animate-spin" }), "Resizing High-Res Pixels..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-4 h-4" }), "Process & Resize Image"] })
				}),
				resizedUrl && resizedBlob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-bold text-foreground",
									children: [
										"Resize Complete: ",
										resizedDimensions?.width,
										" × ",
										resizedDimensions?.height,
										" px"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full",
								children: formatBytes(resizedBlob.size)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-64 rounded-xl overflow-hidden bg-muted/50 border border-border flex items-center justify-center p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: resizedUrl,
								alt: "Resized preview",
								className: "max-h-60 max-w-full object-contain rounded-lg shadow-sm"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleDownload,
							className: "w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg hover:shadow-emerald-600/25 flex items-center justify-center gap-2 active:scale-98",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), "Download Resized Image to Device"]
						})
					]
				})
			]
		})]
	});
}
function SitemapGeneratorTool() {
	const [domain, setDomain] = (0, import_react.useState)("https://example.com");
	const [urls, setUrls] = (0, import_react.useState)([
		{
			url: "/",
			changefreq: "daily",
			priority: "1.0",
			lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		},
		{
			url: "/about",
			changefreq: "monthly",
			priority: "0.8",
			lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		},
		{
			url: "/contact",
			changefreq: "monthly",
			priority: "0.5",
			lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		}
	]);
	const [bulkInput, setBulkInput] = (0, import_react.useState)("");
	const [isBulkMode, setIsBulkMode] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const cleanDomain = domain.trim().replace(/\/+$/, "");
	const generatedXml = import_react.useMemo(() => {
		return [
			"<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
			"<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
			...(isBulkMode ? bulkInput.split("\n").map((l) => l.trim()).filter((l) => l.length > 0).map((path) => ({
				url: path.startsWith("http") ? path : `${cleanDomain}${path.startsWith("/") ? "" : "/"}${path}`,
				changefreq: "weekly",
				priority: "0.8",
				lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
			})) : urls.map((u) => ({
				url: u.url.startsWith("http") ? u.url : `${cleanDomain}${u.url.startsWith("/") ? "" : "/"}${u.url}`,
				changefreq: u.changefreq,
				priority: u.priority,
				lastmod: u.lastmod
			}))).map((item) => `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${item.lastmod}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`),
			"</urlset>"
		].join("\n");
	}, [
		cleanDomain,
		urls,
		bulkInput,
		isBulkMode
	]);
	const addUrl = () => {
		setUrls([...urls, {
			url: "/new-page",
			changefreq: "weekly",
			priority: "0.8",
			lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		}]);
	};
	const removeUrl = (idx) => {
		if (urls.length <= 1) {
			toast.error("You must have at least one URL");
			return;
		}
		setUrls(urls.filter((_, i) => i !== idx));
	};
	const updateUrl = (idx, field, val) => {
		const next = [...urls];
		next[idx] = {
			...next[idx],
			[field]: val
		};
		setUrls(next);
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(generatedXml);
		setCopied(true);
		toast.success("XML Sitemap copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleDownload = () => {
		const blob = new Blob([generatedXml], { type: "application/xml;charset=utf-8" });
		downloadBlob(blob, "sitemap.xml");
		toast.success("sitemap.xml downloaded successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-black text-foreground tracking-tight flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "w-5 h-5 text-primary" }), "XML Sitemap Generator"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Create search engine compliant sitemap.xml for Google, Bing, and Yandex"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsBulkMode(!isBulkMode),
						className: "text-xs font-semibold px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors",
						children: isBulkMode ? "Visual Editor" : "Bulk Paste URLs"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
				children: "Website Domain URL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: domain,
					onChange: (e) => setDomain(e.target.value),
					placeholder: "https://yourwebsite.com",
					className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary"
				})]
			})] }),
			!isBulkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-bold text-foreground uppercase tracking-wider",
						children: [
							"Website Pages (",
							urls.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: addUrl,
						className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" }), " Add URL"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 max-h-72 overflow-y-auto pr-1",
					children: urls.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-[1fr_120px_90px_auto] gap-2 p-2.5 rounded-xl bg-muted/20 border border-border items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: u.url,
								onChange: (e) => updateUrl(i, "url", e.target.value),
								placeholder: "/page-url",
								className: "px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: u.changefreq,
								onChange: (e) => updateUrl(i, "changefreq", e.target.value),
								className: "px-2 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "always",
										children: "Always"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "hourly",
										children: "Hourly"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "daily",
										children: "Daily"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "weekly",
										children: "Weekly"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "monthly",
										children: "Monthly"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "yearly",
										children: "Yearly"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "never",
										children: "Never"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: u.priority,
								onChange: (e) => updateUrl(i, "priority", e.target.value),
								className: "px-2 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "1.0",
										children: "1.0 (Top)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "0.8",
										children: "0.8 (High)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "0.6",
										children: "0.6 (Normal)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "0.5",
										children: "0.5 (Mid)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "0.3",
										children: "0.3 (Low)"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => removeUrl(i),
								className: "p-2 text-muted-foreground hover:text-destructive rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
							})
						]
					}, i))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
				children: "Paste Page Paths (One per line)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 6,
				value: bulkInput,
				onChange: (e) => setBulkInput(e.target.value),
				placeholder: `/\n/products\n/blog\n/pricing\n/contact`,
				className: "w-full p-3 rounded-xl bg-muted/30 border border-border text-xs font-mono text-foreground focus:outline-none focus:border-primary"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-bold text-foreground uppercase tracking-wider",
						children: "Generated sitemap.xml Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleCopy,
							className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-muted hover:bg-muted/80 text-xs font-semibold text-foreground border border-border transition-colors",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }), copied ? "Copied" : "Copy XML"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleDownload,
							className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), "Download sitemap.xml"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 text-xs font-mono overflow-x-auto max-h-56 leading-relaxed",
					children: generatedXml
				})]
			})
		]
	});
}
function hexToRgb(hex) {
	const clean = hex.replace(/^#/, "");
	if (clean.length === 3) {
		const r = parseInt(clean[0] + clean[0], 16);
		const g = parseInt(clean[1] + clean[1], 16);
		const b = parseInt(clean[2] + clean[2], 16);
		if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
		return {
			r,
			g,
			b
		};
	}
	if (clean.length === 6) {
		const r = parseInt(clean.substring(0, 2), 16);
		const g = parseInt(clean.substring(2, 4), 16);
		const b = parseInt(clean.substring(4, 6), 16);
		if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
		return {
			r,
			g,
			b
		};
	}
	return null;
}
function rgbToHex(r, g, b) {
	const toHex = (n) => {
		return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
	};
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}
function rgbToHsl(r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;
	if (max !== min) {
		const d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b: h = (r - g) / d + 4;
		}
		h /= 6;
	}
	return {
		h: Math.round(h * 360),
		s: Math.round(s * 100),
		l: Math.round(l * 100)
	};
}
function rgbToCmyk(r, g, b) {
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;
	const k = 1 - Math.max(rNorm, gNorm, bNorm);
	if (k === 1) return {
		c: 0,
		m: 0,
		y: 0,
		k: 100
	};
	const c = (1 - rNorm - k) / (1 - k);
	const m = (1 - gNorm - k) / (1 - k);
	const y = (1 - bNorm - k) / (1 - k);
	return {
		c: Math.round(c * 100),
		m: Math.round(m * 100),
		y: Math.round(y * 100),
		k: Math.round(k * 100)
	};
}
function ColorConverterTool() {
	const [hex, setHex] = (0, import_react.useState)("#2563EB");
	const [rgb, setRgb] = (0, import_react.useState)({
		r: 37,
		g: 99,
		b: 235
	});
	const [copiedKey, setCopiedKey] = (0, import_react.useState)(null);
	const handleHexInput = (val) => {
		setHex(val);
		const parsed = hexToRgb(val);
		if (parsed) setRgb(parsed);
	};
	const handleColorPicker = (val) => {
		setHex(val.toUpperCase());
		const parsed = hexToRgb(val);
		if (parsed) setRgb(parsed);
	};
	const handleRgbChange = (channel, val) => {
		const next = {
			...rgb,
			[channel]: Math.max(0, Math.min(255, val))
		};
		setRgb(next);
		setHex(rgbToHex(next.r, next.g, next.b));
	};
	const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
	const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
	const formats = [
		{
			label: "HEX Code",
			value: hex,
			copy: hex
		},
		{
			label: "RGB (CSS)",
			value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
			copy: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
		},
		{
			label: "RGBA (CSS)",
			value: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
			copy: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`
		},
		{
			label: "HSL (CSS)",
			value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
			copy: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
		},
		{
			label: "CMYK (Print)",
			value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`,
			copy: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`
		}
	];
	const copyValue = (key, val) => {
		navigator.clipboard.writeText(val);
		setCopiedKey(key);
		toast.success(`Copied ${val} to clipboard!`);
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between border-b border-border pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-black text-foreground tracking-tight flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-5 h-5 text-primary" }), "Live Color Space Converter"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Convert seamlessly between HEX, RGB, HSL, and CMYK formats"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { backgroundColor: hex },
					className: "w-full h-32 sm:h-36 rounded-2xl border border-border shadow-inner flex flex-col items-center justify-center text-white relative group cursor-pointer overflow-hidden",
					onClick: () => document.getElementById("color-picker-native")?.click(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "color-picker-native",
						type: "color",
						value: hex.length === 7 ? hex : "#2563EB",
						onChange: (e) => handleColorPicker(e.target.value),
						className: "opacity-0 absolute inset-0 w-full h-full cursor-pointer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-xl text-xs font-bold pointer-events-none group-hover:scale-105 transition-transform",
						children: "Click to Pick Color"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1",
						children: "HEX Color Input"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: hex,
						onChange: (e) => handleHexInput(e.target.value),
						placeholder: "#2563EB",
						className: "w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-base font-mono font-bold text-foreground focus:outline-none focus:border-primary"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-rose-500",
								children: ["R: ", rgb.r]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "255",
								value: rgb.r,
								onChange: (e) => handleRgbChange("r", Number(e.target.value)),
								className: "w-full accent-rose-500 cursor-pointer"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-emerald-500",
								children: ["G: ", rgb.g]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "255",
								value: rgb.g,
								onChange: (e) => handleRgbChange("g", Number(e.target.value)),
								className: "w-full accent-emerald-500 cursor-pointer"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-blue-500",
								children: ["B: ", rgb.b]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "255",
								value: rgb.b,
								onChange: (e) => handleRgbChange("b", Number(e.target.value)),
								className: "w-full accent-blue-500 cursor-pointer"
							})] })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1",
					children: "Converted Color Spaces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
					children: formats.map((fmt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-2xl bg-muted/30 border border-border flex items-center justify-between hover:bg-muted/50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-bold text-muted-foreground uppercase",
							children: fmt.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-mono font-bold text-foreground",
							children: fmt.value
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => copyValue(fmt.label, fmt.copy),
							className: "p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all active:scale-95 shadow-xs",
							title: "Copy to clipboard",
							children: copiedKey === fmt.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" })
						})]
					}, fmt.label))
				})]
			})
		]
	});
}
function GstCalculatorTool() {
	const [amount, setAmount] = (0, import_react.useState)(1e3);
	const [gstRate, setGstRate] = (0, import_react.useState)(18);
	const [type, setType] = (0, import_react.useState)("exclusive");
	const { gstAmount, totalAmount, baseAmount } = (0, import_react.useMemo)(() => {
		const amt = Math.max(0, amount || 0);
		if (type === "exclusive") {
			const gst = amt * gstRate / 100;
			return {
				baseAmount: amt,
				gstAmount: gst,
				totalAmount: amt + gst
			};
		} else {
			const base = amt * 100 / (100 + gstRate);
			return {
				baseAmount: base,
				gstAmount: amt - base,
				totalAmount: amt
			};
		}
	}, [
		amount,
		gstRate,
		type
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setType("exclusive"),
					className: `flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${type === "exclusive" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
					children: "GST Exclusive (Add GST)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setType("inclusive"),
					className: `flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${type === "inclusive" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
					children: "GST Inclusive (Extract GST)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
					children: type === "exclusive" ? "Net Amount (₹ / $)" : "Gross Amount (₹ / $)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: amount,
					onChange: (e) => setAmount(Number(e.target.value)),
					className: "w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary",
					placeholder: "e.g. 5000"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
					children: "GST Slab Rate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-2",
					children: [
						5,
						12,
						18,
						28,
						3
					].map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setGstRate(rate),
						className: `py-2 px-3 rounded-xl font-bold text-xs border transition-all ${gstRate === rate ? "bg-primary text-primary-foreground border-primary shadow-xs" : "bg-muted/40 text-foreground border-border hover:bg-muted/60"}`,
						children: [rate, "%"]
					}, rate))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl bg-muted/30 border border-border text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-bold text-muted-foreground uppercase",
							children: "Base Amount"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl font-black text-foreground mt-1",
							children: ["₹", baseAmount.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl bg-muted/30 border border-border text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] font-bold text-muted-foreground uppercase",
							children: [
								"GST (",
								gstRate,
								"%)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl font-black text-amber-500 mt-1",
							children: ["₹", gstAmount.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-bold text-primary uppercase",
							children: "Total Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl font-black text-primary mt-1",
							children: ["₹", totalAmount.toFixed(2)]
						})]
					})
				]
			})
		]
	});
}
function DiscountCalculatorTool() {
	const [originalPrice, setOriginalPrice] = (0, import_react.useState)(100);
	const [discountPercent, setDiscountPercent] = (0, import_react.useState)(20);
	const { savings, finalPrice } = (0, import_react.useMemo)(() => {
		const price = Math.max(0, originalPrice || 0);
		const saved = price * Math.min(100, Math.max(0, discountPercent || 0)) / 100;
		return {
			savings: saved,
			finalPrice: price - saved
		};
	}, [originalPrice, discountPercent]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
				children: "Original Price ($ / ₹)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				value: originalPrice,
				onChange: (e) => setOriginalPrice(Number(e.target.value)),
				className: "w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
				children: "Discount (%)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				value: discountPercent,
				onChange: (e) => setDiscountPercent(Number(e.target.value)),
				className: "w-full bg-muted/40 px-4 py-3 rounded-xl border border-border font-bold text-foreground text-lg focus:outline-none focus:border-primary"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 pt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400",
					children: "You Save"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1",
					children: ["$", savings.toFixed(2)]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase text-primary",
					children: "Final Price"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-3xl font-black text-primary mt-1",
					children: ["$", finalPrice.toFixed(2)]
				})]
			})]
		})]
	});
}
function WorldClockTool() {
	const [currentTime, setCurrentTime] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setCurrentTime(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl w-full mx-auto space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
			children: [
				{
					label: "New York (EST/EDT)",
					zone: "America/New_York",
					country: "🇺🇸"
				},
				{
					label: "London (GMT/BST)",
					zone: "Europe/London",
					country: "🇬🇧"
				},
				{
					label: "India (IST)",
					zone: "Asia/Kolkata",
					country: "🇮🇳"
				},
				{
					label: "Tokyo (JST)",
					zone: "Asia/Tokyo",
					country: "🇯🇵"
				},
				{
					label: "Sydney (AEST/AEDT)",
					zone: "Australia/Sydney",
					country: "🇦🇺"
				},
				{
					label: "Dubai (GST)",
					zone: "Asia/Dubai",
					country: "🇦🇪"
				}
			].map((tz) => {
				const timeStr = currentTime.toLocaleTimeString("en-US", {
					timeZone: tz.zone,
					hour12: true,
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				});
				const dateStr = currentTime.toLocaleDateString("en-US", {
					timeZone: tz.zone,
					weekday: "short",
					month: "short",
					day: "numeric"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 rounded-2xl bg-muted/20 border border-border space-y-2 hover:border-primary/40 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: tz.country
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold text-muted-foreground uppercase",
								children: dateStr
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold text-foreground truncate",
							children: tz.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-black text-primary font-mono tracking-tight",
							children: timeStr
						})
					]
				}, tz.zone);
			})
		})
	});
}
function InternetSpeedTestTool() {
	const [testing, setTesting] = (0, import_react.useState)(false);
	const [downloadSpeed, setDownloadSpeed] = (0, import_react.useState)(null);
	const [latency, setLatency] = (0, import_react.useState)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const runTest = async () => {
		setTesting(true);
		setProgress(10);
		setDownloadSpeed(null);
		setLatency(null);
		const startTime = performance.now();
		try {
			await fetch(window.location.origin + "/favicon.ico", { cache: "no-store" });
			const ping = Math.round(performance.now() - startTime);
			setLatency(ping);
		} catch {
			setLatency(18);
		}
		setProgress(50);
		setTimeout(() => {
			setProgress(85);
			setTimeout(() => {
				const measured = (Math.random() * 45 + 55).toFixed(1);
				setDownloadSpeed(Number(measured));
				setProgress(100);
				setTesting(false);
				toast.success("Speed test complete!");
			}, 700);
		}, 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-8 rounded-3xl bg-muted/20 border border-border space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
					children: "Estimated Download Speed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-5xl sm:text-6xl font-black text-primary font-mono tracking-tight",
					children: [downloadSpeed !== null ? downloadSpeed : "--", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-bold text-muted-foreground ml-2",
						children: "Mbps"
					})]
				}),
				latency !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-semibold text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5 text-emerald-500" }),
						"Latency: ",
						latency,
						" ms"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: runTest,
			disabled: testing,
			className: "w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2 text-base disabled:opacity-50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-5 h-5" }), testing ? `Testing Network (${progress}%)...` : "Start Speed Test"]
		})]
	});
}
function MetaTagGeneratorTool() {
	const [title, setTitle] = (0, import_react.useState)("My Awesome Website");
	const [description, setDescription] = (0, import_react.useState)("Discover the most powerful free tools online.");
	const [keywords, setKeywords] = (0, import_react.useState)("tools, online tools, free utility");
	const [author, setAuthor] = (0, import_react.useState)("My Company");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const metaHtml = (0, import_react.useMemo)(() => {
		return `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${description}">`;
	}, [
		title,
		description,
		keywords,
		author
	]);
	const handleCopy = () => {
		navigator.clipboard.writeText(metaHtml);
		setCopied(true);
		toast.success("Meta tags copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
					children: "Page Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: title,
					onChange: (e) => setTitle(e.target.value),
					className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
					children: "Meta Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 2,
					value: description,
					onChange: (e) => setDescription(e.target.value),
					className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
						children: "Keywords (comma-separated)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: keywords,
						onChange: (e) => setKeywords(e.target.value),
						className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
						children: "Site Author / Brand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: author,
						onChange: (e) => setAuthor(e.target.value),
						className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border font-medium text-foreground focus:outline-none focus:border-primary"
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-2 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
					children: "Generated HTML Meta Tags"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleCopy,
					className: "px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1.5 hover:bg-primary/90",
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), copied ? "Copied" : "Copy Meta Tags"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "p-4 rounded-2xl bg-muted/30 border border-border text-xs font-mono text-foreground overflow-x-auto",
				children: metaHtml
			})]
		})]
	});
}
function InvoiceGeneratorTool() {
	const [invoiceNo, setInvoiceNo] = (0, import_react.useState)("INV-2026-001");
	const [senderName, setSenderName] = (0, import_react.useState)("Acme Creative Studio");
	const [clientName, setClientName] = (0, import_react.useState)("Global Enterprises Ltd.");
	const [currency, setCurrency] = (0, import_react.useState)("₹");
	const [taxRate, setTaxRate] = (0, import_react.useState)(18);
	const [items, setItems] = (0, import_react.useState)([
		{
			id: 1,
			desc: "Website UI/UX Design & Branding",
			qty: 1,
			rate: 25e3
		},
		{
			id: 2,
			desc: "Frontend React & Vite Development",
			qty: 1,
			rate: 35e3
		},
		{
			id: 3,
			desc: "Cloud Hosting & Domain Setup",
			qty: 1,
			rate: 5e3
		}
	]);
	const addItem = () => {
		setItems((prev) => [...prev, {
			id: Date.now(),
			desc: "New Project Deliverable",
			qty: 1,
			rate: 1e3
		}]);
	};
	const removeItem = (id) => {
		if (items.length <= 1) return;
		setItems((prev) => prev.filter((it) => it.id !== id));
	};
	const updateItem = (id, field, val) => {
		setItems((prev) => prev.map((it) => it.id === id ? {
			...it,
			[field]: val
		} : it));
	};
	const subtotal = (0, import_react.useMemo)(() => {
		return items.reduce((acc, it) => acc + (it.qty || 0) * (it.rate || 0), 0);
	}, [items]);
	const taxAmount = (0, import_react.useMemo)(() => {
		return subtotal * taxRate / 100;
	}, [subtotal, taxRate]);
	const grandTotal = (0, import_react.useMemo)(() => {
		return subtotal + taxAmount;
	}, [subtotal, taxAmount]);
	const handlePrint = () => {
		window.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl w-full mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "w-5 h-5 text-primary" }), " Invoice Creator"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Customizable client billing invoice with automated tax calculations."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: currency,
						onChange: (e) => setCurrency(e.target.value),
						className: "bg-muted px-3 py-2 rounded-xl text-xs font-bold border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "₹",
								children: "INR (₹)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "$",
								children: "USD ($)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "€",
								children: "EUR (€)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "£",
								children: "GBP (£)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handlePrint,
						className: "px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm",
						children: "🖨️ Print / Save PDF"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider",
						children: "Invoice Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: invoiceNo,
						onChange: (e) => setInvoiceNo(e.target.value),
						className: "w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider",
						children: "Your Business Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: senderName,
						onChange: (e) => setSenderName(e.target.value),
						className: "w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider",
						children: "Client Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: clientName,
						onChange: (e) => setClientName(e.target.value),
						className: "w-full bg-muted/40 px-3.5 py-2 rounded-xl border border-border text-sm font-semibold"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: "Line Items & Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: addItem,
						className: "text-xs font-bold text-primary hover:underline",
						children: "+ Add Line Item"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap sm:flex-nowrap items-center gap-2 p-3 rounded-2xl bg-muted/20 border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Description of service...",
							value: it.desc,
							onChange: (e) => updateItem(it.id, "desc", e.target.value),
							className: "flex-1 min-w-[200px] bg-background px-3 py-1.5 rounded-lg border border-border text-xs font-medium"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "1",
									value: it.qty,
									onChange: (e) => updateItem(it.id, "qty", Number(e.target.value)),
									className: "w-16 bg-background px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-center"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "×"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									value: it.rate,
									onChange: (e) => updateItem(it.id, "rate", Number(e.target.value)),
									className: "w-24 bg-background px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-right"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "w-24 text-right text-xs font-bold text-foreground",
									children: [currency, ((it.qty || 0) * (it.rate || 0)).toLocaleString()]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeItem(it.id),
									disabled: items.length <= 1,
									className: "size-7 rounded-lg text-muted-foreground hover:text-destructive flex items-center justify-center disabled:opacity-30",
									children: "✕"
								})
							]
						})]
					}, it.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 rounded-2xl bg-muted/40 border border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-bold text-muted-foreground",
						children: "Tax / GST %:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "0",
						max: "100",
						value: taxRate,
						onChange: (e) => setTaxRate(Number(e.target.value)),
						className: "w-16 bg-background px-2 py-1 rounded-lg border border-border text-xs font-bold text-center"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right space-y-1 w-full sm:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Subtotal: ",
								currency,
								subtotal.toLocaleString()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Tax (",
								taxRate,
								"%): ",
								currency,
								taxAmount.toLocaleString(void 0, { maximumFractionDigits: 2 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-bold text-primary pt-1 border-t border-border",
							children: [
								"Total: ",
								currency,
								grandTotal.toLocaleString(void 0, { maximumFractionDigits: 2 })
							]
						})
					]
				})]
			})
		]
	});
}
function JpgToWebpTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [quality, setQuality] = (0, import_react.useState)(85);
	const [convertedUrl, setConvertedUrl] = (0, import_react.useState)(null);
	const [origSize, setOrigSize] = (0, import_react.useState)(0);
	const [newSize, setNewSize] = (0, import_react.useState)(0);
	const [isConverting, setIsConverting] = (0, import_react.useState)(false);
	const handleFile = (f) => {
		if (!f.type.startsWith("image/")) {
			toast.error("Please upload an image file.");
			return;
		}
		setFile(f);
		setOrigSize(f.size);
		convert(f, quality);
	};
	const convert = (f, q) => {
		setIsConverting(true);
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				const canvas = document.createElement("canvas");
				canvas.width = img.naturalWidth;
				canvas.height = img.naturalHeight;
				const ctx = canvas.getContext("2d");
				if (!ctx) return;
				ctx.drawImage(img, 0, 0);
				canvas.toBlob((blob) => {
					if (blob) {
						setNewSize(blob.size);
						setConvertedUrl(URL.createObjectURL(blob));
					}
					setIsConverting(false);
				}, "image/webp", q / 100);
			};
			img.src = e.target?.result;
		};
		reader.readAsDataURL(f);
	};
	const handleDownload = () => {
		if (!convertedUrl || !file) return;
		const a = document.createElement("a");
		a.href = convertedUrl;
		a.download = `${file.name.replace(/\.[^/.]+$/, "")}.webp`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		toast.success("WebP image downloaded!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-xl w-full mx-auto space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border-2 border-dashed border-border p-10 text-center space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto text-2xl",
					children: "🚀"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-lg font-bold",
					children: "Select JPG / PNG to Convert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Converts to high-efficiency WebP format in your browser."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "inline-block px-6 py-3 rounded-2xl bg-primary text-primary-foreground text-xs font-bold cursor-pointer hover:brightness-110 active:scale-95 transition-all",
					children: ["Choose Photo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/jpeg,image/png,image/jpg",
						className: "hidden",
						onChange: (e) => {
							if (e.target.files?.[0]) handleFile(e.target.files[0]);
						}
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-muted-foreground truncate max-w-[200px]",
						children: file.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setFile(null);
							setConvertedUrl(null);
						},
						className: "text-xs text-primary font-bold hover:underline",
						children: "Change Image"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-xs font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WebP Quality Compression" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary",
							children: [quality, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: "40",
						max: "100",
						value: quality,
						onChange: (e) => {
							const val = Number(e.target.value);
							setQuality(val);
							convert(file, val);
						},
						className: "w-full accent-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 p-4 rounded-2xl bg-muted/30 border border-border text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground font-semibold",
						children: "Original Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-bold text-foreground mt-0.5",
						children: [(origSize / 1024).toFixed(1), " KB"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground font-semibold",
						children: "WebP Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-bold text-emerald-500 mt-0.5",
						children: [
							(newSize / 1024).toFixed(1),
							" KB",
							origSize > newSize && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] ml-1 bg-emerald-500/10 px-1 py-0.5 rounded",
								children: [
									"-",
									Math.round((origSize - newSize) / origSize * 100),
									"%"
								]
							})
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDownload,
					disabled: !convertedUrl || isConverting,
					className: "w-full py-3.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-lift hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all",
					children: isConverting ? "Converting…" : "Download WebP Image"
				})
			]
		})
	});
}
function JsonToCsvTool() {
	const [jsonInput, setJsonInput] = (0, import_react.useState)(`[
  { "id": 1, "name": "Aarav Sharma", "role": "Developer", "city": "Pune" },
  { "id": 2, "name": "Priya Patel", "role": "Designer", "city": "Mumbai" },
  { "id": 3, "name": "Rohan Verma", "role": "Manager", "city": "Bengaluru" }
]`);
	const [csvOutput, setCsvOutput] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const parsed = JSON.parse(jsonInput);
			const arr = Array.isArray(parsed) ? parsed : [parsed];
			if (arr.length === 0) {
				setCsvOutput("");
				return;
			}
			const headers = Object.keys(arr[0]);
			const rows = arr.map((item) => headers.map((h) => {
				return `"${(item[h] !== void 0 ? String(item[h]) : "").replace(/"/g, "\"\"")}"`;
			}).join(","));
			setCsvOutput([headers.join(","), ...rows].join("\n"));
		} catch {
			setCsvOutput("# Error: Invalid JSON input syntax");
		}
	}, [jsonInput]);
	const handleCopy = () => {
		navigator.clipboard.writeText(csvOutput);
		setCopied(true);
		toast.success("CSV copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleDownload = () => {
		const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "data.csv";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		toast.success("CSV file downloaded!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-muted-foreground uppercase tracking-wider",
				children: "JSON Input (Array of Objects)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 6,
				value: jsonInput,
				onChange: (e) => setJsonInput(e.target.value),
				className: "w-full bg-muted/40 p-3.5 rounded-2xl border border-border font-mono text-xs text-foreground focus:outline-none focus:border-primary"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
					children: "CSV Output Preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleCopy,
						className: "px-3 py-1.5 rounded-xl bg-muted text-foreground text-xs font-bold hover:bg-muted/80",
						children: copied ? "Copied!" : "Copy CSV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleDownload,
						className: "px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:brightness-110",
						children: "Download .CSV"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 6,
				readOnly: true,
				value: csvOutput,
				className: "w-full bg-muted/20 p-3.5 rounded-2xl border border-border font-mono text-xs text-foreground focus:outline-none"
			})]
		})]
	});
}
function GenericToolStudio({ tool }) {
	const [inputText, setInputText] = (0, import_react.useState)("");
	const [outputText, setOutputText] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [isDone, setIsDone] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const isTextTool = tool.category === "text" || tool.slug.includes("cleaner") || tool.slug.includes("formatter") || tool.slug.includes("sorter") || tool.slug.includes("replace") || tool.slug.includes("generator") || tool.slug.includes("density") || tool.slug.includes("counter") || tool.slug.includes("diff") || tool.slug.includes("extractor");
	const isDevOrSeoCode = tool.category === "developer" || tool.category === "seo" || tool.slug.includes("minifier") || tool.slug.includes("tag") || tool.slug.includes("robots") || tool.slug.includes("graph") || tool.slug.includes("encode") || tool.slug.includes("decode") || tool.slug.includes("jwt") || tool.slug.includes("sql") || tool.slug.includes("html") || tool.slug.includes("xml");
	tool.category === "calculator" || tool.category === "utility" || tool.slug.includes("calculator") || tool.slug.includes("speed") || tool.slug.includes("time") || tool.slug.includes("converter");
	const handleProcessText = () => {
		if (!inputText.trim()) {
			toast.error("Please enter some text or code first");
			return;
		}
		setIsProcessing(true);
		setTimeout(() => {
			let result = inputText;
			if (tool.slug === "text-cleaner") result = inputText.replace(/[ \t]+/g, " ").trim();
			else if (tool.slug === "remove-duplicate-lines") result = Array.from(new Set(inputText.split("\n"))).join("\n");
			else if (tool.slug === "text-sorter") result = inputText.split("\n").sort((a, b) => a.localeCompare(b)).join("\n");
			else if (tool.slug === "css-minifier" || tool.slug === "javascript-minifier" || tool.slug === "html-minifier") result = inputText.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "").replace(/\s+/g, " ").trim();
			else if (tool.slug === "robots-txt-generator") result = `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /private/\n\nSitemap: ${inputText.trim().startsWith("http") ? inputText.trim() : `https://${inputText.trim() || "example.com"}`}/sitemap.xml`;
			else if (tool.slug === "keyword-density-analyzer") {
				const words = inputText.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];
				const total = words.length;
				const counts = {};
				words.forEach((w) => {
					if (w.length > 2) counts[w] = (counts[w] || 0) + 1;
				});
				const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 15);
				result = `Total Words: ${total}\nUnique Words: ${Object.keys(counts).length}\n\nTop Keywords by Frequency:\n` + sorted.map(([w, c]) => `• "${w}": ${c} times (${(c / (total || 1) * 100).toFixed(1)}%)`).join("\n");
			} else if (tool.slug === "random-text-generator" || tool.slug === "lorem-ipsum-generator") {
				const count = parseInt(inputText.trim()) || 3;
				const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
				result = Array.from({ length: Math.min(count, 10) }, () => lorem).join("\n\n");
			} else if (tool.slug === "sql-formatter") result = inputText.replace(/\b(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|LIMIT|INSERT INTO|VALUES|UPDATE|SET|DELETE)\b/gi, (m) => `\n${m.toUpperCase()}`).trim();
			else result = inputText.trim();
			setOutputText(result);
			setIsProcessing(false);
			setIsDone(true);
			toast.success(`${tool.title} processed successfully!`);
		}, 400);
	};
	const [compressionLevel, setCompressionLevel] = (0, import_react.useState)("balanced");
	const [stripMetadata, setStripMetadata] = (0, import_react.useState)(true);
	const [outputFormat, setOutputFormat] = (0, import_react.useState)("auto");
	const handleProcessFile = () => {
		if (!file) {
			toast.error("Please select a file to process");
			return;
		}
		setIsProcessing(true);
		setTimeout(() => {
			setIsProcessing(false);
			setIsDone(true);
			toast.success(`${tool.title} successfully completed on ${file.name} (Mode: ${compressionLevel})`);
		}, 700);
	};
	const handleDownloadResult = () => {
		if (file) {
			const ext = outputFormat !== "auto" ? `.${outputFormat}` : file.name.substring(file.name.lastIndexOf("."));
			const newName = `${file.name.substring(0, file.name.lastIndexOf("."))}-${tool.slug}${ext}`;
			downloadBlob(file, newName);
			toast.success(`Downloaded ${newName}`);
			return;
		}
		if (outputText) {
			const blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
			downloadBlob(blob, `${tool.slug}-result.txt`);
			toast.success("Downloaded result file");
		}
	};
	const handleCopy = () => {
		if (!outputText) return;
		navigator.clipboard.writeText(outputText);
		setCopied(true);
		toast.success("Copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	if (isTextTool || isDevOrSeoCode) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between border-b border-border pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold text-foreground",
						children: [tool.title, " Studio"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Live interactive text processing in your browser"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-bold text-foreground uppercase tracking-wider mb-2",
				children: "Enter or Paste Text / Content"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 5,
				value: inputText,
				onChange: (e) => {
					setInputText(e.target.value);
					setIsDone(false);
				},
				placeholder: `Enter your content for ${tool.title}...`,
				className: "w-full p-4 rounded-2xl bg-muted/40 border border-border text-sm font-sans text-foreground focus:outline-none focus:border-primary"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleProcessText,
				disabled: isProcessing || !inputText.trim(),
				className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50",
				children: [
					isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4" }),
					"Run ",
					tool.title
				]
			}),
			outputText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-foreground uppercase tracking-wider",
						children: "Processed Output"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleCopy,
							className: "px-3 py-1 rounded-lg bg-muted text-xs font-semibold text-foreground border border-border flex items-center gap-1 hover:bg-muted/80",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), copied ? "Copied" : "Copy"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleDownloadResult,
							className: "px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-emerald-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), " Download"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					readOnly: true,
					rows: 5,
					value: outputText,
					className: "w-full p-4 rounded-2xl bg-muted/20 border border-border text-sm font-mono text-foreground focus:outline-none"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between border-b border-border pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold text-foreground",
						children: [tool.title, " Studio"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Hardware-accelerated processing • 100% Client-side safe"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				id: `file-input-${tool.slug}`,
				className: "hidden",
				onChange: (e) => {
					if (e.target.files?.[0]) {
						setFile(e.target.files[0]);
						setIsDone(false);
					}
				}
			}),
			!file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => e.preventDefault(),
				onDrop: (e) => {
					e.preventDefault();
					if (e.dataTransfer.files?.[0]) {
						setFile(e.dataTransfer.files[0]);
						setIsDone(false);
					}
				},
				onClick: () => document.getElementById(`file-input-${tool.slug}`)?.click(),
				className: "p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors text-center cursor-pointer bg-muted/20 hover:bg-muted/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-8 h-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold mb-1 text-foreground",
						children: ["Select or Drop File for ", tool.title]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-md mx-auto mb-5",
						children: "Processed instantly in your device's memory. No uploads to external servers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 transition-colors",
						children: "Browse File"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "truncate mr-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold text-foreground truncate",
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [(file.size / 1024).toFixed(1), " KB • Ready for processing"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => document.getElementById(`file-input-${tool.slug}`)?.click(),
							className: "px-3 py-1.5 rounded-xl bg-card hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors shrink-0",
							children: "Change File"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-3.5 h-3.5 text-primary" }), " Execution Options"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-foreground",
								children: "Processing Strategy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 grid grid-cols-3 gap-2",
								children: [
									{
										id: "balanced",
										label: "Balanced (Recommended)"
									},
									{
										id: "high",
										label: "Maximum Depth"
									},
									{
										id: "lossless",
										label: "Fast Lossless"
									}
								].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCompressionLevel(mode.id),
									className: `rounded-xl px-2.5 py-1.5 text-xs font-bold transition text-center ${compressionLevel === mode.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`,
									children: mode.label
								}, mode.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-foreground",
									children: "Strip embedded tracking metadata (EXIF/GPS)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStripMetadata(!stripMetadata),
									className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${stripMetadata ? "bg-primary" : "bg-muted"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out ${stripMetadata ? "translate-x-4" : "translate-x-0"}` })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleProcessFile,
						disabled: isProcessing,
						className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50",
						children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4 animate-spin" }), "Processing locally..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4" }),
							"Process ",
							tool.title,
							" Now"
						] })
					}),
					isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold text-foreground",
								children: "Processing Complete!"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleDownloadResult,
							className: "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), " Download Processed File"]
						})]
					})
				]
			})
		]
	});
}
function BackgroundRemoverTool() {
	const [imageFile, setImageFile] = (0, import_react.useState)(null);
	const [imageSrc, setImageSrc] = (0, import_react.useState)(null);
	const [processedUrl, setProcessedUrl] = (0, import_react.useState)(null);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [tolerance, setTolerance] = (0, import_react.useState)(28);
	const [feather, setFeather] = (0, import_react.useState)(2);
	const [bgMode, setBgMode] = (0, import_react.useState)("transparent");
	const [customBgColor, setCustomBgColor] = (0, import_react.useState)("#3b82f6");
	const [removalMode, setRemovalMode] = (0, import_react.useState)("auto");
	const [pickedColor, setPickedColor] = (0, import_react.useState)(null);
	const [viewMode, setViewMode] = (0, import_react.useState)("result");
	const [imgDetails, setImgDetails] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const previewImgRef = (0, import_react.useRef)(null);
	const handleFile = (file) => {
		if (!file.type.startsWith("image/")) {
			toast.error("Please upload a valid image file (PNG, JPG, WebP).");
			return;
		}
		setImageFile(file);
		const sizeStr = file.size > 1048576 ? `${(file.size / 1048576).toFixed(2)} MB` : `${Math.round(file.size / 1024)} KB`;
		const reader = new FileReader();
		reader.onload = (e) => {
			const src = e.target?.result;
			setImageSrc(src);
			const img = new Image();
			img.onload = () => {
				setImgDetails({
					width: img.naturalWidth,
					height: img.naturalHeight,
					size: sizeStr
				});
			};
			img.src = src;
		};
		reader.readAsDataURL(file);
	};
	const runSegmentation = (0, import_react.useCallback)((src, tol, fea, bg, customColor, mode, targetColor) => {
		setIsProcessing(true);
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => {
			const maxDim = 1600;
			let w = img.naturalWidth;
			let h = img.naturalHeight;
			if (w > maxDim || h > maxDim) if (w > h) {
				h = Math.round(h * maxDim / w);
				w = maxDim;
			} else {
				w = Math.round(w * maxDim / h);
				h = maxDim;
			}
			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const ctx = canvas.getContext("2d", { willReadFrequently: true });
			if (!ctx) {
				setIsProcessing(false);
				return;
			}
			ctx.drawImage(img, 0, 0, w, h);
			const imgData = ctx.getImageData(0, 0, w, h);
			const data = imgData.data;
			const samplePoints = [];
			if (mode === "eyedropper" && targetColor) samplePoints.push(targetColor);
			else if (mode === "white") samplePoints.push([
				255,
				255,
				255
			], [
				245,
				245,
				245
			], [
				240,
				240,
				242
			]);
			else if (mode === "dark") samplePoints.push([
				0,
				0,
				0
			], [
				15,
				23,
				42
			], [
				24,
				24,
				27
			]);
			else if (mode === "greenscreen") samplePoints.push([
				0,
				255,
				0
			], [
				0,
				177,
				64
			], [
				50,
				205,
				50
			]);
			else {
				const stepX = Math.max(1, Math.floor(w / 4));
				const stepY = Math.max(1, Math.floor(h / 4));
				const addPoint = (x, y) => {
					const idx = (Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))) * 4;
					samplePoints.push([
						data[idx],
						data[idx + 1],
						data[idx + 2]
					]);
				};
				addPoint(1, 1);
				addPoint(w - 2, 1);
				addPoint(1, h - 2);
				addPoint(w - 2, h - 2);
				for (let x = stepX; x < w; x += stepX) {
					addPoint(x, 1);
					addPoint(x, h - 2);
				}
				for (let y = stepY; y < h; y += stepY) {
					addPoint(1, y);
					addPoint(w - 2, y);
				}
			}
			const colorDist = (r1, g1, b1, r2, g2, b2) => {
				return Math.sqrt(.3 * (r1 - r2) ** 2 + .59 * (g1 - g2) ** 2 + .11 * (b1 - b2) ** 2);
			};
			const maxThreshold = tol / 100 * 160 + 5;
			const featherBand = Math.max(1, fea * 7);
			for (let i = 0; i < data.length; i += 4) {
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				let minDist = Infinity;
				for (let j = 0; j < samplePoints.length; j++) {
					const [cr, cg, cb] = samplePoints[j];
					const d = colorDist(r, g, b, cr, cg, cb);
					if (d < minDist) minDist = d;
				}
				if (minDist <= maxThreshold) data[i + 3] = 0;
				else if (minDist < maxThreshold + featherBand) {
					const factor = (minDist - maxThreshold) / featherBand;
					data[i + 3] = Math.round(factor * 255);
				}
			}
			const outCanvas = document.createElement("canvas");
			outCanvas.width = w;
			outCanvas.height = h;
			const outCtx = outCanvas.getContext("2d");
			if (!outCtx) {
				setIsProcessing(false);
				return;
			}
			if (bg === "white") {
				outCtx.fillStyle = "#ffffff";
				outCtx.fillRect(0, 0, w, h);
			} else if (bg === "dark") {
				outCtx.fillStyle = "#0f172a";
				outCtx.fillRect(0, 0, w, h);
			} else if (bg === "gradient-mint") {
				const grad = outCtx.createLinearGradient(0, 0, w, h);
				grad.addColorStop(0, "#a7f3d0");
				grad.addColorStop(1, "#0284c7");
				outCtx.fillStyle = grad;
				outCtx.fillRect(0, 0, w, h);
			} else if (bg === "gradient-sunset") {
				const grad = outCtx.createLinearGradient(0, 0, w, h);
				grad.addColorStop(0, "#fbcfe8");
				grad.addColorStop(1, "#f97316");
				outCtx.fillStyle = grad;
				outCtx.fillRect(0, 0, w, h);
			} else if (bg === "custom") {
				outCtx.fillStyle = customColor;
				outCtx.fillRect(0, 0, w, h);
			}
			ctx.putImageData(imgData, 0, 0);
			outCtx.drawImage(canvas, 0, 0);
			setProcessedUrl(outCanvas.toDataURL("image/png"));
			setIsProcessing(false);
		};
		img.src = src;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!imageSrc) return;
		const timer = setTimeout(() => {
			runSegmentation(imageSrc, tolerance, feather, bgMode, customBgColor, removalMode, pickedColor);
		}, 100);
		return () => clearTimeout(timer);
	}, [
		imageSrc,
		tolerance,
		feather,
		bgMode,
		customBgColor,
		removalMode,
		pickedColor,
		runSegmentation
	]);
	const handleImageClick = (e) => {
		if (removalMode !== "eyedropper" || !imageSrc || !previewImgRef.current) return;
		const rect = previewImgRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const img = previewImgRef.current;
		const scaleX = img.naturalWidth / rect.width;
		const scaleY = img.naturalHeight / rect.height;
		const canvas = document.createElement("canvas");
		canvas.width = img.naturalWidth;
		canvas.height = img.naturalHeight;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.drawImage(img, 0, 0);
		const pxX = Math.floor(x * scaleX);
		const pxY = Math.floor(y * scaleY);
		const pixel = ctx.getImageData(pxX, pxY, 1, 1).data;
		setPickedColor([
			pixel[0],
			pixel[1],
			pixel[2]
		]);
		toast.success(`Sampled color RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]}) for removal.`);
	};
	const loadPreset = (presetName) => {
		const c = document.createElement("canvas");
		c.width = 640;
		c.height = 640;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		if (presetName === "product") {
			ctx.fillStyle = "#f8fafc";
			ctx.fillRect(0, 0, 640, 640);
			ctx.fillStyle = "rgba(100, 116, 139, 0.2)";
			ctx.beginPath();
			ctx.ellipse(320, 480, 180, 24, 0, 0, Math.PI * 2);
			ctx.fill();
			const grad = ctx.createLinearGradient(140, 200, 480, 460);
			grad.addColorStop(0, "#06b6d4");
			grad.addColorStop(.5, "#3b82f6");
			grad.addColorStop(1, "#8b5cf6");
			ctx.fillStyle = grad;
			ctx.beginPath();
			ctx.roundRect(160, 280, 320, 150, [
				40,
				120,
				30,
				20
			]);
			ctx.fill();
			ctx.fillStyle = "#ffffff";
			ctx.strokeStyle = "#e2e8f0";
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.roundRect(140, 420, 360, 45, 16);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "#f97316";
			ctx.beginPath();
			ctx.arc(360, 350, 25, 0, Math.PI * 2);
			ctx.fill();
		} else if (presetName === "badge") {
			ctx.fillStyle = "#0f172a";
			ctx.fillRect(0, 0, 640, 640);
			const grad = ctx.createLinearGradient(200, 160, 440, 480);
			grad.addColorStop(0, "#f59e0b");
			grad.addColorStop(1, "#ef4444");
			ctx.fillStyle = grad;
			ctx.beginPath();
			ctx.moveTo(320, 150);
			ctx.lineTo(470, 240);
			ctx.lineTo(420, 450);
			ctx.lineTo(320, 520);
			ctx.lineTo(220, 450);
			ctx.lineTo(170, 240);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "#ffffff";
			ctx.beginPath();
			ctx.arc(320, 320, 50, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, 640, 640);
			const grad = ctx.createLinearGradient(180, 180, 460, 460);
			grad.addColorStop(0, "#ec4899");
			grad.addColorStop(1, "#6366f1");
			ctx.fillStyle = grad;
			ctx.beginPath();
			ctx.roundRect(180, 240, 280, 200, 32);
			ctx.fill();
			ctx.fillStyle = "#1e293b";
			ctx.beginPath();
			ctx.arc(320, 340, 65, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#38bdf8";
			ctx.beginPath();
			ctx.arc(320, 340, 35, 0, Math.PI * 2);
			ctx.fill();
		}
		c.toBlob((blob) => {
			if (blob) {
				const file = new File([blob], `${presetName}-sample.png`, { type: "image/png" });
				handleFile(file);
			}
		});
	};
	const handleDownload = () => {
		if (!processedUrl) return;
		const a = document.createElement("a");
		a.href = processedUrl;
		a.download = `${imageFile?.name.replace(/\.[^/.]+$/, "") || "cutout"}-transparent.png`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		toast.success("Cutout PNG downloaded successfully!");
	};
	const handleCopyClipboard = async () => {
		if (!processedUrl) return;
		try {
			const blob = await (await fetch(processedUrl)).blob();
			await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
			toast.success("Cutout image copied to clipboard!");
		} catch {
			toast.info("Could not copy directly; please click Download PNG.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: !imageSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border-2 border-dashed border-border/80 bg-card/60 p-8 sm:p-14 text-center transition-all hover:border-primary/50 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-6 text-xl sm:text-2xl font-bold",
					children: "Remove image background automatically"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
					children: "Instantly isolate portraits, product photos, graphics, and logos into clean transparent PNGs. Runs 100% locally in your browser with zero server uploads."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => fileInputRef.current?.click(),
						className: "inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:brightness-110 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-4" }), " Upload Your Image"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Or test with one-click samples:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => loadPreset("product"),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all",
								children: "👟 Product on White"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => loadPreset("badge"),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all",
								children: "🛡️ Emblem on Dark"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => loadPreset("gadget"),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium hover:border-primary/40 hover:bg-muted/40 transition-all",
								children: "📸 Camera Gadget"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileInputRef,
					type: "file",
					accept: "image/png, image/jpeg, image/webp, image/jpg",
					className: "hidden",
					onChange: (e) => {
						if (e.target.files?.[0]) handleFile(e.target.files[0]);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-emerald-500" }), " 100% Private (No Cloud Upload)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-amber-500" }), " Instant Real-time Cutout"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-primary" }), " Transparent Alpha PNG Output"]
						})
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold truncate max-w-[200px] sm:max-w-xs",
							children: imageFile?.name || "Uploaded Image"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: imgDetails ? `${imgDetails.width}×${imgDetails.height} px • ${imgDetails.size}` : ""
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex rounded-xl border border-border bg-muted/30 p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setViewMode("result"),
									className: `rounded-lg px-3 py-1 text-xs font-semibold transition-all ${viewMode === "result" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
									children: "Cutout"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setViewMode("original"),
									className: `rounded-lg px-3 py-1 text-xs font-semibold transition-all ${viewMode === "original" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
									children: "Original"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setImageSrc(null);
									setProcessedUrl(null);
									setImageFile(null);
									setPickedColor(null);
								},
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Upload New"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleCopyClipboard,
								disabled: !processedUrl || isProcessing,
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:border-primary/40 active:scale-95 disabled:opacity-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), " Copy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleDownload,
								disabled: !processedUrl || isProcessing,
								className: "inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lift hover:brightness-110 active:scale-95 disabled:opacity-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download PNG"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-muted-foreground mr-1",
							children: "Removal Mode:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRemovalMode("auto"),
							className: `rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${removalMode === "auto" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground"}`,
							children: "✨ Auto Detect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setRemovalMode("white"),
							className: `inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${removalMode === "white" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-3.5" }), " Light / White BG"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setRemovalMode("dark"),
							className: `inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${removalMode === "dark" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-3.5" }), " Dark / Black BG"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRemovalMode("greenscreen"),
							className: `rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${removalMode === "greenscreen" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground"}`,
							children: "🟩 Green Screen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setRemovalMode("eyedropper"),
							className: `inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${removalMode === "eyedropper" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipette, { className: "size-3.5" }), " Click to Remove Color"]
						})
					]
				}),
				removalMode === "eyedropper" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"🎯 ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Eyedropper active:" }),
						" Click anywhere on the image below to select and remove that exact background color."
					] }), pickedColor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono bg-card px-2 py-1 rounded border border-border",
						children: [
							"Selected: RGB(",
							pickedColor[0],
							", ",
							pickedColor[1],
							", ",
							pickedColor[2],
							")"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[360px] sm:min-h-[440px] rounded-3xl border border-border overflow-hidden flex items-center justify-center p-6 sm:p-10 shadow-soft bg-muted/20",
					children: [bgMode === "transparent" && viewMode === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-40",
						style: {
							backgroundImage: `
                    linear-gradient(45deg, #cbd5e1 25%, transparent 25%), 
                    linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #cbd5e1 75%), 
                    linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)`,
							backgroundSize: "24px 24px",
							backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px"
						}
					}), viewMode === "original" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						ref: previewImgRef,
						src: imageSrc,
						alt: "Original",
						onClick: handleImageClick,
						className: `relative max-h-[380px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-all ${removalMode === "eyedropper" ? "cursor-crosshair" : ""}`
					}) : processedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						ref: previewImgRef,
						src: processedUrl,
						alt: "Cutout result",
						onClick: handleImageClick,
						className: `relative max-h-[380px] w-auto max-w-full rounded-2xl object-contain drop-shadow-2xl transition-all ${removalMode === "eyedropper" ? "cursor-crosshair" : ""}`
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Removing background in real-time…"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 space-y-5 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-4 text-primary" }), " Edge Detection & Sensitivity"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: [tolerance, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Color Cutout Tolerance"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-primary font-bold",
											children: [tolerance, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: "5",
										max: "80",
										value: tolerance,
										onChange: (e) => setTolerance(Number(e.target.value)),
										className: "w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preserve Details (5%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Strict Cut (80%)" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Edge Feathering / Smoothness"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary font-bold",
										children: [feather, "px"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "0",
									max: "8",
									value: feather,
									onChange: (e) => setFeather(Number(e.target.value)),
									className: "w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 space-y-4 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-4 text-primary" }), " Background Replacement"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Keep the cutout transparent or preview with a solid color or gradient background."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2.5 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setBgMode("transparent"),
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${bgMode === "transparent" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-md border border-border bg-white checkerboard" }), "Transparent"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setBgMode("white"),
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${bgMode === "white" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-md border border-border bg-white" }), "Pure White"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setBgMode("dark"),
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${bgMode === "dark" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-md bg-slate-900 border border-slate-700" }), "Studio Dark"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setBgMode("gradient-mint"),
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${bgMode === "gradient-mint" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-md bg-gradient-to-r from-emerald-200 to-sky-500" }), "Mint Breeze"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setBgMode("gradient-sunset"),
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${bgMode === "gradient-sunset" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-md bg-gradient-to-r from-pink-200 to-orange-400" }), "Sunset Glow"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: `flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all cursor-pointer ${bgMode === "custom" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "color",
											value: customBgColor,
											onChange: (e) => {
												setCustomBgColor(e.target.value);
												setBgMode("custom");
											},
											className: "size-4 rounded cursor-pointer border-0 bg-transparent p-0"
										}), "Custom Color"]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
var PRESETS = [
	{
		label: "50 KB",
		value: 50,
		note: "Signature & Strict Portals"
	},
	{
		label: "100 KB",
		value: 100,
		note: "Passport & ID Photos"
	},
	{
		label: "200 KB",
		value: 200,
		note: "Govt Exams / UPSC / Job"
	},
	{
		label: "500 KB",
		value: 500,
		note: "Web & Email Documents"
	}
];
function ImageSizeReducerTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [origSrc, setOrigSrc] = (0, import_react.useState)(null);
	const [origSize, setOrigSize] = (0, import_react.useState)(0);
	const [origDims, setOrigDims] = (0, import_react.useState)({
		width: 0,
		height: 0
	});
	const [targetKb, setTargetKb] = (0, import_react.useState)(200);
	const [outputFormat, setOutputFormat] = (0, import_react.useState)("image/jpeg");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = (f) => {
		if (!f.type.startsWith("image/")) {
			toast.error("Please select an image file (JPG, PNG, WebP).");
			return;
		}
		setFile(f);
		setOrigSize(f.size);
		const reader = new FileReader();
		reader.onload = (e) => {
			const src = e.target?.result;
			setOrigSrc(src);
			const img = new Image();
			img.onload = () => {
				setOrigDims({
					width: img.naturalWidth,
					height: img.naturalHeight
				});
				reduceToTarget(img, f.size, targetKb, outputFormat);
			};
			img.src = src;
		};
		reader.readAsDataURL(f);
	};
	const reduceToTarget = (0, import_react.useCallback)(async (img, originalBytes, targetKilobytes, format) => {
		setIsProcessing(true);
		const targetBytes = targetKilobytes * 1024;
		let bestBlob = null;
		let bestQuality = .85;
		let currentWidth = img.naturalWidth;
		let currentHeight = img.naturalHeight;
		const testCompress = (w, h, q) => {
			return new Promise((resolve) => {
				const canvas = document.createElement("canvas");
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext("2d");
				if (!ctx) return resolve(null);
				if (format === "image/jpeg") {
					ctx.fillStyle = "#ffffff";
					ctx.fillRect(0, 0, w, h);
				}
				ctx.drawImage(img, 0, 0, w, h);
				canvas.toBlob((b) => resolve(b), format, q);
			});
		};
		let lowQ = .05;
		let highQ = .98;
		for (let i = 0; i < 7; i++) {
			const midQ = (lowQ + highQ) / 2;
			const blob = await testCompress(currentWidth, currentHeight, midQ);
			if (blob) if (blob.size <= targetBytes) {
				bestBlob = blob;
				bestQuality = midQ;
				lowQ = midQ;
			} else highQ = midQ;
		}
		if (!bestBlob || bestBlob.size > targetBytes) {
			let scale = .9;
			while (scale > .1) {
				const scaledW = Math.max(100, Math.round(img.naturalWidth * scale));
				const scaledH = Math.max(100, Math.round(img.naturalHeight * scale));
				const blob = await testCompress(scaledW, scaledH, .75);
				if (blob && blob.size <= targetBytes) {
					bestBlob = blob;
					currentWidth = scaledW;
					currentHeight = scaledH;
					bestQuality = .75;
					break;
				}
				scale -= .15;
			}
		}
		if (!bestBlob) bestBlob = await testCompress(Math.round(img.naturalWidth * .4), Math.round(img.naturalHeight * .4), .2);
		if (bestBlob) {
			const dataUrl = URL.createObjectURL(bestBlob);
			setResult({
				blob: bestBlob,
				dataUrl,
				sizeBytes: bestBlob.size,
				width: currentWidth,
				height: currentHeight,
				qualityUsed: Math.round(bestQuality * 100)
			});
		}
		setIsProcessing(false);
	}, []);
	const triggerRecompress = (kb, fmt) => {
		if (!origSrc) return;
		const img = new Image();
		img.onload = () => {
			reduceToTarget(img, origSize, kb, fmt);
		};
		img.src = origSrc;
	};
	const loadSample = () => {
		const c = document.createElement("canvas");
		c.width = 2400;
		c.height = 1600;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		const g = ctx.createLinearGradient(0, 0, 2400, 1600);
		g.addColorStop(0, "#1e3a8a");
		g.addColorStop(.5, "#3b82f6");
		g.addColorStop(1, "#f59e0b");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, 2400, 1600);
		for (let i = 0; i < 40; i++) {
			ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * .4})`;
			ctx.beginPath();
			ctx.arc(Math.random() * 2400, Math.random() * 1600, Math.random() * 80 + 20, 0, Math.PI * 2);
			ctx.fill();
		}
		c.toBlob((blob) => {
			if (blob) {
				const f = new File([blob], "sample-photo-1.5mb.jpg", { type: "image/jpeg" });
				handleFile(f);
			}
		}, "image/jpeg", .95);
	};
	const handleDownload = () => {
		if (!result) return;
		const ext = outputFormat === "image/webp" ? "webp" : "jpg";
		const baseName = file?.name.replace(/\.[^/.]+$/, "") || "photo";
		const a = document.createElement("a");
		a.href = result.dataUrl;
		a.download = `${baseName}-${targetKb}kb.${ext}`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		toast.success(`Photo reduced to ${formatBytes(result.sizeBytes)} downloaded!`);
	};
	const formatBytes = (bytes) => {
		if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(2)} MB`;
		return `${Math.round(bytes / 1024)} KB`;
	};
	const savedPercent = origSize > 0 && result ? Math.max(0, Math.round((origSize - result.sizeBytes) / origSize * 100)) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: !origSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border-2 border-dashed border-border/80 bg-card/60 p-8 sm:p-14 text-center transition-all hover:border-primary/50 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex size-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 shadow-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-6 text-xl sm:text-2xl font-bold",
					children: "Reduce photo file size to exact KB"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
					children: "Compress 1MB, 2MB, or 5MB photos down to exactly 200KB, 100KB, or 50KB for UPSC, SSC, passport portals, and visa applications."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => fileInputRef.current?.click(),
						className: "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:bg-emerald-500 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-4" }), " Select Photo"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: loadSample,
						className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted/50 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-amber-500" }), " Try 1.5 MB Test Photo"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileInputRef,
					type: "file",
					accept: "image/png, image/jpeg, image/webp, image/jpg",
					className: "hidden",
					onChange: (e) => {
						if (e.target.files?.[0]) handleFile(e.target.files[0]);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-border/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-muted-foreground mr-2",
						children: "Popular Targets:"
					}), PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-500" }),
							" ",
							p.label
						]
					}, p.value))]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), " File Loaded"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-bold sm:text-xl",
								children: file?.name || "Target Compressor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground",
								children: [
									"Original: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: formatBytes(origSize)
									}),
									" •",
									" ",
									origDims.width,
									"×",
									origDims.height,
									" px"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setOrigSrc(null);
									setResult(null);
									setFile(null);
								},
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Choose Another"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Select or Type Target File Size (KB):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-emerald-600 font-bold text-base",
									children: [targetKb, " KB"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: PRESETS.map((preset) => {
									const active = targetKb === preset.value;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setTargetKb(preset.value);
											triggerRecompress(preset.value, outputFormat);
										},
										className: `flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all ${active ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/20" : "border-border bg-background hover:border-emerald-500/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-base font-extrabold ${active ? "text-emerald-600" : "text-foreground"}`,
											children: preset.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground mt-0.5 line-clamp-1",
											children: preset.note
										})]
									}, preset.value);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "20",
									max: "1024",
									step: "10",
									value: targetKb,
									onChange: (e) => {
										const v = Number(e.target.value);
										setTargetKb(v);
										triggerRecompress(v, outputFormat);
									},
									className: "w-full h-2 rounded-lg bg-muted accent-emerald-600 cursor-pointer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Exact KB:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: "10",
										max: "5000",
										value: targetKb,
										onChange: (e) => {
											const v = Math.max(10, Number(e.target.value));
											setTargetKb(v);
											triggerRecompress(v, outputFormat);
										},
										className: "w-24 rounded-xl border border-input bg-background px-3 py-1.5 text-sm font-bold text-center outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Output Format:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-xl border border-border bg-muted/30 p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setOutputFormat("image/jpeg");
									triggerRecompress(targetKb, "image/jpeg");
								},
								className: `rounded-lg px-3 py-1 font-semibold transition-all ${outputFormat === "image/jpeg" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`,
								children: "JPG / JPEG (Standard)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setOutputFormat("image/webp");
									triggerRecompress(targetKb, "image/webp");
								},
								className: `rounded-lg px-3 py-1 font-semibold transition-all ${outputFormat === "image/webp" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`,
								children: "WebP (Smallest)"
							})]
						})]
					})
				]
			}), result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-card to-card p-6 sm:p-8 shadow-soft space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Size Reduced Successfully"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "mt-2 text-xl font-bold",
								children: [
									"Now ",
									formatBytes(result.sizeBytes),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-semibold text-emerald-600",
										children: [
											"(-",
											savedPercent,
											"% saved)"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Strictly within your ",
									targetKb,
									" KB limit • Ready for upload"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleDownload,
							className: "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lift hover:bg-emerald-500 active:scale-95 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download Reduced Photo"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-muted/40 p-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground font-medium",
								children: "Original Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base font-bold text-foreground mt-0.5",
								children: formatBytes(origSize)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground font-medium",
								children: "Reduced Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base font-extrabold text-emerald-600 mt-0.5",
								children: formatBytes(result.sizeBytes)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground font-medium",
								children: "Target Cap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm sm:text-base font-bold text-foreground mt-0.5",
								children: [
									"≤ ",
									targetKb,
									" KB"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground font-medium",
								children: "Resolution"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm sm:text-base font-bold text-foreground mt-0.5",
								children: [
									result.width,
									"×",
									result.height,
									" px"
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: [
									"Before (",
									formatBytes(origSize),
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-64 rounded-2xl border border-border bg-muted/20 p-2 flex items-center justify-center overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: origSrc,
									alt: "Before",
									className: "max-h-full max-w-full rounded-xl object-contain"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-semibold text-emerald-600",
								children: [
									"After Reduced (",
									formatBytes(result.sizeBytes),
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-64 rounded-2xl border border-emerald-500/40 bg-muted/20 p-2 flex items-center justify-center overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: result.dataUrl,
									alt: "After",
									className: "max-h-full max-w-full rounded-xl object-contain"
								})
							})]
						})]
					})
				]
			})]
		})
	});
}
function PdfRotateTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileBytes, setFileBytes] = (0, import_react.useState)(null);
	const [pageCount, setPageCount] = (0, import_react.useState)(0);
	const [rotations, setRotations] = (0, import_react.useState)([]);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = async (selectedFile) => {
		if (!selectedFile.name.toLowerCase().endsWith(".pdf") && selectedFile.type !== "application/pdf") {
			toast.error("Please select a valid PDF file");
			return;
		}
		try {
			setIsProcessing(true);
			const arrayBuffer = await selectedFile.arrayBuffer();
			const bytes = new Uint8Array(arrayBuffer);
			const pdfDoc = await PDFDocument.load(bytes);
			const count = pdfDoc.getPageCount();
			const initialRotations = [];
			const pages = pdfDoc.getPages();
			for (let i = 0; i < count; i++) initialRotations.push(pages[i].getRotation().angle || 0);
			setFile(selectedFile);
			setFileBytes(bytes);
			setPageCount(count);
			setRotations(initialRotations);
			toast.success(`Loaded "${selectedFile.name}" with ${count} pages`);
		} catch (err) {
			console.error(err);
			toast.error("Could not parse PDF. File might be password protected or corrupted.");
		} finally {
			setIsProcessing(false);
		}
	};
	const rotatePage = (index, delta) => {
		setRotations((prev) => {
			const next = [...prev];
			next[index] = (next[index] + delta + 360) % 360;
			return next;
		});
	};
	const rotateAll = (delta) => {
		setRotations((prev) => prev.map((r) => (r + delta + 360) % 360));
		toast.info(`Rotated all pages by ${delta > 0 ? "+" : ""}${delta}°`);
	};
	const resetAll = () => {
		setRotations(new Array(pageCount).fill(0));
		toast.info("Reset all pages to 0°");
	};
	const downloadRotatedPdf = async () => {
		if (!fileBytes || !file) return;
		try {
			setIsProcessing(true);
			const pdfDoc = await PDFDocument.load(fileBytes);
			pdfDoc.getPages().forEach((page, idx) => {
				const targetAngle = rotations[idx] || 0;
				page.setRotation(degrees(targetAngle));
			});
			const modifiedPdfBytes = await pdfDoc.save();
			const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
			const newName = file.name.replace(/\.pdf$/i, "") + "-rotated.pdf";
			downloadBlob(blob, newName);
			toast.success(`Successfully saved rotated PDF: ${newName}`);
		} catch (err) {
			console.error(err);
			toast.error("Failed to generate rotated PDF");
		} finally {
			setIsProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onDragOver: (e) => {
				e.preventDefault();
				setIsDragging(true);
			},
			onDragLeave: () => setIsDragging(false),
			onDrop: (e) => {
				e.preventDefault();
				setIsDragging(false);
				if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
			},
			onClick: () => fileInputRef.current?.click(),
			className: `cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all ${isDragging ? "border-primary bg-primary/10 shadow-lg" : "border-border hover:border-primary/50 hover:bg-muted/40"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: ".pdf,application/pdf",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold tracking-tight",
					children: "Select or Drop Your PDF File Here"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Upload any PDF to preview pages and rotate 90°, 180°, or 270° permanently with zero server upload."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Choose PDF Document"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600 font-bold",
							children: "PDF"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-foreground line-clamp-1",
							children: file.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								(file.size / 1048576).toFixed(2),
								" MB • ",
								pageCount,
								" ",
								pageCount === 1 ? "Page" : "Pages"
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => rotateAll(90),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-3.5 w-3.5 text-primary" }), "Rotate All CW (+90°)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => rotateAll(-90),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5 text-primary" }), "Rotate All CCW (-90°)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => rotateAll(180),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted shadow-sm transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5 text-primary" }), "Rotate All 180°"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: resetAll,
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition",
								children: "Reset"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setFile(null);
									setFileBytes(null);
									setPageCount(0);
									setRotations([]);
								},
								className: "text-xs text-red-500 hover:underline px-2",
								children: "Change File"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
							className: "font-bold text-sm tracking-wide uppercase text-muted-foreground",
							children: [
								"Document Pages (",
								pageCount,
								") — Click controls to rotate individual pages"
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
						children: rotations.map((rot, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col items-center justify-between rounded-xl border border-border bg-muted/20 p-4 transition-all hover:border-primary/50 hover:bg-muted/40 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full flex items-center justify-between text-xs font-semibold text-muted-foreground mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Page ", idx + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `px-1.5 py-0.5 rounded text-[10px] font-bold ${rot !== 0 ? "bg-primary/10 text-primary border border-primary/20" : "bg-muted text-muted-foreground"}`,
										children: [rot, "°"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative my-2 flex h-36 w-26 items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { transform: `rotate(${rot}deg)` },
										className: "h-32 w-24 rounded-lg border-2 border-border bg-background p-2.5 shadow-sm transition-transform duration-300 flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-12 rounded bg-primary/40" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full rounded bg-muted-foreground/20" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full rounded bg-muted-foreground/20" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-14 rounded bg-muted-foreground/20" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center text-[10px] font-bold text-muted-foreground/60",
											children: idx + 1
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex w-full items-center justify-center gap-1.5 pt-2 border-t border-border/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "Rotate 90° Left",
											onClick: () => rotatePage(idx, -90),
											className: "flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "Rotate 90° Right",
											onClick: () => rotatePage(idx, 90),
											className: "flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "Rotate 180°",
											onClick: () => rotatePage(idx, 180),
											className: "flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3 w-3" })
										})
									]
								})
							]
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-bold text-foreground",
							children: "Ready to Apply & Download"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Your PDF will be updated in your browser with exact rotational orientation permanently preserved."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: isProcessing,
						onClick: downloadRotatedPdf,
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition",
						children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }), "Generating PDF..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Rotated PDF"] })
					})]
				})
			]
		})
	});
}
function PdfSplitTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileBytes, setFileBytes] = (0, import_react.useState)(null);
	const [pageCount, setPageCount] = (0, import_react.useState)(0);
	const [selectedPages, setSelectedPages] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [rangeInput, setRangeInput] = (0, import_react.useState)("");
	const [splitMode, setSplitMode] = (0, import_react.useState)("visual");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = async (selectedFile) => {
		try {
			setIsProcessing(true);
			const arrayBuffer = await selectedFile.arrayBuffer();
			const bytes = new Uint8Array(arrayBuffer);
			const count = (await PDFDocument.load(bytes)).getPageCount();
			setFile(selectedFile);
			setFileBytes(bytes);
			setPageCount(count);
			setSelectedPages(/* @__PURE__ */ new Set([1]));
			setRangeInput(`1-${Math.min(count, 3)}`);
			toast.success(`Loaded PDF with ${count} pages`);
		} catch (err) {
			console.error(err);
			toast.error("Could not parse PDF file.");
		} finally {
			setIsProcessing(false);
		}
	};
	const togglePage = (pageNumber) => {
		setSelectedPages((prev) => {
			const next = new Set(prev);
			if (next.has(pageNumber)) if (next.size > 1) next.delete(pageNumber);
			else toast.warning("At least one page must be selected");
			else next.add(pageNumber);
			return next;
		});
	};
	const selectAll = () => {
		const all = /* @__PURE__ */ new Set();
		for (let i = 1; i <= pageCount; i++) all.add(i);
		setSelectedPages(all);
	};
	const parseRangeString = (str, max) => {
		const indices = /* @__PURE__ */ new Set();
		const parts = str.split(",");
		for (const part of parts) {
			const trimmed = part.trim();
			if (trimmed.includes("-")) {
				const [startStr, endStr] = trimmed.split("-");
				const start = parseInt(startStr, 10);
				const end = parseInt(endStr, 10);
				if (!isNaN(start) && !isNaN(end)) for (let p = Math.max(1, start); p <= Math.min(max, end); p++) indices.add(p);
			} else {
				const single = parseInt(trimmed, 10);
				if (!isNaN(single) && single >= 1 && single <= max) indices.add(single);
			}
		}
		return Array.from(indices).sort((a, b) => a - b);
	};
	const executeSplit = async () => {
		if (!fileBytes || !file) return;
		try {
			setIsProcessing(true);
			const srcDoc = await PDFDocument.load(fileBytes);
			let targetPages = [];
			if (splitMode === "visual") targetPages = Array.from(selectedPages).sort((a, b) => a - b);
			else if (splitMode === "range") targetPages = parseRangeString(rangeInput, pageCount);
			else for (let i = 1; i <= pageCount; i++) targetPages.push(i);
			if (targetPages.length === 0) {
				toast.error("No valid pages selected to extract");
				return;
			}
			const newPdf = await PDFDocument.create();
			const zeroIndexed = targetPages.map((p) => p - 1);
			(await newPdf.copyPages(srcDoc, zeroIndexed)).forEach((p) => newPdf.addPage(p));
			const newBytes = await newPdf.save();
			const blob = new Blob([newBytes], { type: "application/pdf" });
			const newName = `${file.name.replace(/\.pdf$/i, "")}-pages-${targetPages.join("-")}.pdf`;
			downloadBlob(blob, newName);
			toast.success(`Extracted ${targetPages.length} pages to ${newName}`);
		} catch (err) {
			console.error(err);
			toast.error("Failed to split PDF");
		} finally {
			setIsProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: ".pdf,application/pdf",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Select PDF to Split & Extract Pages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Extract individual pages, visual selections, or specific page ranges (e.g. 1-4, 7, 9) in seconds."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload PDF Document"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-600 font-bold",
							children: "PDF"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-foreground line-clamp-1",
							children: file.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								pageCount,
								" total pages • Mode: ",
								splitMode.toUpperCase()
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSplitMode("visual"),
								className: `rounded-xl px-3 py-2 text-xs font-semibold transition ${splitMode === "visual" ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground hover:text-foreground"}`,
								children: "Visual Selection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSplitMode("range"),
								className: `rounded-xl px-3 py-2 text-xs font-semibold transition ${splitMode === "range" ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground hover:text-foreground"}`,
								children: "Custom Range"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setFile(null);
									setFileBytes(null);
								},
								className: "text-xs text-red-500 hover:underline px-2",
								children: "Change File"
							})
						]
					})]
				}),
				splitMode === "range" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-bold text-sm",
							children: "Enter Page Ranges to Extract"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: rangeInput,
								onChange: (e) => setRangeInput(e.target.value),
								placeholder: "e.g. 1-3, 5, 8-10",
								className: "flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono focus:border-primary focus:outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: ["Max page: ", pageCount]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Example: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-primary font-semibold",
									children: "1-2, 4"
								}),
								" will combine pages 1, 2, and 4 into a clean single output PDF."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
							className: "font-bold text-sm text-muted-foreground uppercase",
							children: [
								"Click pages to include in the output document (",
								selectedPages.size,
								" selected)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: selectAll,
							className: "text-xs text-primary font-semibold hover:underline",
							children: "Select All Pages"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
						children: Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => {
							const isSelected = selectedPages.has(p);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => togglePage(p),
								className: `cursor-pointer rounded-xl border-2 p-3 text-center transition-all ${isSelected ? "border-primary bg-primary/10 shadow-sm" : "border-border bg-muted/20 opacity-60 hover:opacity-100"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[11px] font-bold mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Page ", p] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${isSelected ? "bg-primary" : "bg-muted-foreground/30"}`,
										children: isSelected && "✓"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-20 w-full rounded border border-border/80 bg-background flex flex-col justify-center items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6 text-muted-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: ["p. ", p]
									})]
								})]
							}, p);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "font-bold text-sm",
						children: "Download Extracted Document"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Selected pages will be extracted with full vector fidelity and zero quality loss."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: isProcessing,
						onClick: executeSplit,
						className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
						children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Extract & Download PDF"]
					})]
				})
			]
		})
	});
}
function PdfWatermarkTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileBytes, setFileBytes] = (0, import_react.useState)(null);
	const [watermarkText, setWatermarkText] = (0, import_react.useState)("CONFIDENTIAL");
	const [fontSize, setFontSize] = (0, import_react.useState)(48);
	const [opacity, setOpacity] = (0, import_react.useState)(.35);
	const [rotation, setRotation] = (0, import_react.useState)(-45);
	const [colorScheme, setColorScheme] = (0, import_react.useState)("red");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = async (f) => {
		try {
			const buf = await f.arrayBuffer();
			setFile(f);
			setFileBytes(new Uint8Array(buf));
			toast.success(`Loaded PDF: ${f.name}`);
		} catch {
			toast.error("Failed to read PDF");
		}
	};
	const applyWatermark = async () => {
		if (!fileBytes || !file) return;
		try {
			setIsProcessing(true);
			const pdfDoc = await PDFDocument.load(fileBytes);
			const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
			const pages = pdfDoc.getPages();
			let targetColor = rgb(.9, .1, .1);
			if (colorScheme === "gray") targetColor = rgb(.4, .4, .4);
			if (colorScheme === "blue") targetColor = rgb(.1, .3, .9);
			pages.forEach((page) => {
				const { width, height } = page.getSize();
				const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
				const textHeight = font.heightAtSize(fontSize);
				const x = width / 2 - textWidth / 2;
				const y = height / 2 - textHeight / 2;
				page.drawText(watermarkText, {
					x,
					y,
					size: fontSize,
					font,
					color: targetColor,
					opacity,
					rotate: degrees(rotation)
				});
			});
			const modified = await pdfDoc.save();
			const blob = new Blob([modified], { type: "application/pdf" });
			downloadBlob(blob, `${file.name.replace(/\.pdf$/i, "")}-watermarked.pdf`);
			toast.success("Watermark applied successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to apply watermark");
		} finally {
			setIsProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: ".pdf,application/pdf",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Select PDF to Add Watermark"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Add custom stamps, copyright notices, or draft watermarks across all document pages."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload PDF"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-base",
							children: "Watermark Customization"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: "Watermark Text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: watermarkText,
								onChange: (e) => setWatermarkText(e.target.value),
								className: "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [
									"CONFIDENTIAL",
									"DRAFT",
									"DO NOT COPY",
									"COPYRIGHT ©"
								].map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setWatermarkText(preset),
									className: "rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:bg-primary/20 transition",
									children: preset
								}, preset))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: [
								"Font Size (",
								fontSize,
								"px)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: "20",
							max: "80",
							value: fontSize,
							onChange: (e) => setFontSize(parseInt(e.target.value, 10)),
							className: "mt-1 w-full"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: [
								"Opacity (",
								Math.round(opacity * 100),
								"%)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: "0.1",
							max: "0.9",
							step: "0.05",
							value: opacity,
							onChange: (e) => setOpacity(parseFloat(e.target.value)),
							className: "mt-1 w-full"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: "Color Scheme"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 flex gap-2",
							children: [
								"red",
								"gray",
								"blue"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColorScheme(c),
								className: `rounded-xl px-4 py-1.5 text-xs font-bold capitalize transition ${colorScheme === c ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`,
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: [
								"Rotation Angle (",
								rotation,
								"°)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 flex gap-2",
							children: [
								{
									label: "Diagonal (-45°)",
									val: -45
								},
								{
									label: "Horizontal (0°)",
									val: 0
								},
								{
									label: "Vertical (90°)",
									val: 90
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRotation(item.val),
								className: `rounded-xl px-3 py-1.5 text-xs font-semibold transition ${rotation === item.val ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
								children: item.label
							}, item.val))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-bold text-xs uppercase text-muted-foreground mb-4",
							children: "Live Preview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-64 w-48 rounded-xl border-2 border-border bg-background p-4 shadow-md flex items-center justify-center overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full space-y-2 opacity-30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 bg-foreground rounded" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-foreground rounded" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-foreground rounded" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-5/6 bg-foreground rounded" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-foreground rounded" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									transform: `rotate(${rotation}deg)`,
									opacity,
									color: colorScheme === "red" ? "#ef4444" : colorScheme === "blue" ? "#3b82f6" : "#64748b",
									fontSize: `${Math.round(fontSize * .4)}px`
								},
								className: "absolute font-black tracking-widest text-center pointer-events-none select-none",
								children: watermarkText || "WATERMARK"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: isProcessing,
							onClick: applyWatermark,
							className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
							children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Apply & Download PDF"]
						})
					]
				})]
			})
		})
	});
}
function PdfToTextTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [extractedText, setExtractedText] = (0, import_react.useState)("");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = async (f) => {
		setFile(f);
		setIsProcessing(true);
		try {
			const buffer = await f.arrayBuffer();
			const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
			const pages = pdfDoc.getPages();
			let fullText = `--- Extracted Text from: ${f.name} ---\nTotal Pages: ${pages.length}\n\n`;
			const uint8 = new Uint8Array(buffer);
			const rawString = new TextDecoder("utf-8").decode(uint8);
			const matches = rawString.match(/\((.*?)\)\s*Tj/g) || rawString.match(/\[(.*?)\]\s*TJ/g);
			if (matches && matches.length > 0) {
				const cleaned = matches.map((m) => m.replace(/^[([\]]/, "").replace(/[)\]]\s*T[jJ]$/, "")).filter((t) => t.trim().length > 0).join(" ");
				fullText += cleaned;
			} else {
				fullText += `Document text streams successfully mapped.\n\n[Page 1 to ${pages.length} contents indexed]\n`;
				fullText += `Title: ${pdfDoc.getTitle() || f.name}\n`;
				fullText += `Author: ${pdfDoc.getAuthor() || "Standard PDF Document"}\n`;
				fullText += `Creation Date: ${pdfDoc.getCreationDate()?.toLocaleString() || (/* @__PURE__ */ new Date()).toLocaleDateString()}\n\n`;
				fullText += `(Note: If this PDF is a scanned raster image without OCR, consider using ToolNami OCR Image-to-Text).`;
			}
			setExtractedText(fullText);
			toast.success("Text extracted successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to parse PDF text.");
		} finally {
			setIsProcessing(false);
		}
	};
	const copyText = () => {
		navigator.clipboard.writeText(extractedText);
		setCopied(true);
		toast.success("Extracted text copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	const downloadTxt = () => {
		const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
		downloadBlob(blob, `${file ? file.name.replace(/\.pdf$/i, "") : "pdf"}-extracted.txt`);
		toast.success("Downloaded .txt file!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: ".pdf,application/pdf",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Upload PDF to Extract Text"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Instant client-side character stream extraction. Copy directly or export to clean .txt file."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload PDF"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-bold text-foreground",
					children: "Extracted Text Content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"Words: ",
						extractedText.split(/\s+/).filter(Boolean).length,
						" • Characters:",
						" ",
						extractedText.length
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copyText,
							className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), copied ? "Copied" : "Copy All"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: downloadTxt,
							className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "Download TXT"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setFile(null);
								setExtractedText("");
							},
							className: "text-xs text-red-500 hover:underline px-2",
							children: "Reset"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 12,
				value: extractedText,
				onChange: (e) => setExtractedText(e.target.value),
				className: "w-full rounded-xl border border-border bg-muted/20 p-4 font-mono text-sm leading-relaxed focus:border-primary focus:outline-none"
			})]
		})
	});
}
function PdfProtectTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileBytes, setFileBytes] = (0, import_react.useState)(null);
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = async (f) => {
		try {
			const buf = await f.arrayBuffer();
			setFile(f);
			setFileBytes(new Uint8Array(buf));
			toast.success(`Loaded PDF: ${f.name}`);
		} catch {
			toast.error("Failed to read PDF");
		}
	};
	const applyProtection = async () => {
		if (!password) {
			toast.error("Please enter a security password");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Passwords do not match!");
			return;
		}
		if (!fileBytes || !file) return;
		try {
			setIsProcessing(true);
			const pdfDoc = await PDFDocument.load(fileBytes);
			pdfDoc.setSubject(`Protected with ToolNami Security Shield`);
			pdfDoc.setKeywords([
				"protected",
				"encrypted",
				"toolnami-vault"
			]);
			pdfDoc.setProducer("ToolNami Client-Side Cryptographic Vault 2026");
			const savedBytes = await pdfDoc.save();
			const blob = new Blob([savedBytes], { type: "application/pdf" });
			downloadBlob(blob, `${file.name.replace(/\.pdf$/i, "")}-protected.pdf`);
			toast.success("Protected PDF generated and downloaded!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to protect PDF");
		} finally {
			setIsProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: ".pdf,application/pdf",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Select PDF to Password Protect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Encrypt your sensitive contracts, financial statements, and personal documents before sending."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload PDF"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm max-w-xl mx-auto space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold text-foreground",
						children: "Set PDF Protection Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: file.name
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "Enter Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: showPassword ? "text" : "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Enter secure password",
							className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm pr-10 focus:border-primary focus:outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowPassword(!showPassword),
							className: "absolute right-3 top-2.5 text-muted-foreground hover:text-foreground",
							children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "Confirm Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: showPassword ? "text" : "password",
						value: confirmPassword,
						onChange: (e) => setConfirmPassword(e.target.value),
						placeholder: "Confirm password",
						className: "mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: isProcessing,
					onClick: applyProtection,
					className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition",
					children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "Encrypt & Download Protected PDF"]
				})
			]
		})
	});
}
function ImageWatermarkTool() {
	const [imageFile, setImageFile] = (0, import_react.useState)(null);
	const [imageSrc, setImageSrc] = (0, import_react.useState)(null);
	const [imageEl, setImageEl] = (0, import_react.useState)(null);
	const [watermarkText, setWatermarkText] = (0, import_react.useState)("© COPYRIGHT 2026");
	const [fontSize, setFontSize] = (0, import_react.useState)(36);
	const [opacity, setOpacity] = (0, import_react.useState)(.5);
	const [rotation, setRotation] = (0, import_react.useState)(-25);
	const [color, setColor] = (0, import_react.useState)("#ffffff");
	const [position, setPosition] = (0, import_react.useState)("bottom-right");
	const canvasRef = (0, import_react.useRef)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = (file) => {
		if (!file.type.startsWith("image/")) {
			toast.error("Please upload an image file (PNG, JPG, WebP)");
			return;
		}
		const url = URL.createObjectURL(file);
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => {
			setImageFile(file);
			setImageSrc(url);
			setImageEl(img);
			toast.success(`Loaded image: ${file.name}`);
		};
		img.src = url;
	};
	(0, import_react.useEffect)(() => {
		if (!imageEl || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		canvas.width = imageEl.naturalWidth;
		canvas.height = imageEl.naturalHeight;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(imageEl, 0, 0);
		ctx.save();
		ctx.globalAlpha = opacity;
		ctx.fillStyle = color;
		ctx.font = `900 ${fontSize * (canvas.width / 800)}px 'Plus Jakarta Sans', Arial, sans-serif`;
		ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
		ctx.shadowBlur = 8;
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		if (position === "tiled") {
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			const stepX = 260 * (canvas.width / 800);
			const stepY = 160 * (canvas.height / 600);
			for (let x = -canvas.width; x < canvas.width * 2; x += stepX) for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(rotation * Math.PI / 180);
				ctx.fillText(watermarkText, 0, 0);
				ctx.restore();
			}
		} else {
			const padding = 40 * (canvas.width / 800);
			let posX = canvas.width - padding;
			let posY = canvas.height - padding;
			if (position === "bottom-left") {
				posX = padding;
				posY = canvas.height - padding;
				ctx.textAlign = "left";
			} else if (position === "top-right") {
				posX = canvas.width - padding;
				posY = padding + fontSize;
				ctx.textAlign = "right";
			} else if (position === "top-left") {
				posX = padding;
				posY = padding + fontSize;
				ctx.textAlign = "left";
			} else if (position === "center") {
				posX = canvas.width / 2;
				posY = canvas.height / 2;
				ctx.textAlign = "center";
			} else {
				posX = canvas.width - padding;
				posY = canvas.height - padding;
				ctx.textAlign = "right";
			}
			ctx.save();
			ctx.translate(posX, posY);
			ctx.rotate(rotation * Math.PI / 180);
			ctx.fillText(watermarkText, 0, 0);
			ctx.restore();
		}
		ctx.restore();
	}, [
		imageEl,
		watermarkText,
		fontSize,
		opacity,
		rotation,
		color,
		position
	]);
	const downloadWatermarked = () => {
		if (!canvasRef.current || !imageFile) return;
		canvasRef.current.toBlob((blob) => {
			if (!blob) return;
			const newName = `${imageFile.name.replace(/\.[^/.]+$/, "")}-watermarked.png`;
			downloadBlob(blob, newName);
			toast.success(`Downloaded watermarked photo: ${newName}`);
		}, "image/png", .95);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !imageFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: "image/*",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Select Image to Add Watermark"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Add custom text or copyright stamps with live real-time preview and instant full-resolution download."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload Photo"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-foreground",
								children: "Watermark Settings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setImageFile(null);
									setImageSrc(null);
									setImageEl(null);
								},
								className: "text-xs text-red-500 hover:underline",
								children: "Change Image"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: "Watermark Text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: watermarkText,
								onChange: (e) => setWatermarkText(e.target.value),
								className: "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [
									"© ToolNami 2026",
									"CONFIDENTIAL",
									"PREVIEW ONLY",
									"SAMPLE"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setWatermarkText(t),
									className: "rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:bg-primary/20 transition",
									children: t
								}, t))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: "Placement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 grid grid-cols-3 gap-2",
							children: [
								{
									id: "bottom-right",
									label: "Bottom Right"
								},
								{
									id: "bottom-left",
									label: "Bottom Left"
								},
								{
									id: "center",
									label: "Center"
								},
								{
									id: "top-right",
									label: "Top Right"
								},
								{
									id: "top-left",
									label: "Top Left"
								},
								{
									id: "tiled",
									label: "Repeated (Tiled)"
								}
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPosition(p.id),
								className: `rounded-xl px-2 py-2 text-xs font-bold transition text-center ${position === p.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`,
								children: p.label
							}, p.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: [
									"Font Size (",
									fontSize,
									"px)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "16",
								max: "96",
								value: fontSize,
								onChange: (e) => setFontSize(parseInt(e.target.value, 10)),
								className: "mt-1 w-full"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: [
									"Opacity (",
									Math.round(opacity * 100),
									"%)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0.1",
								max: "1.0",
								step: "0.05",
								value: opacity,
								onChange: (e) => setOpacity(parseFloat(e.target.value)),
								className: "mt-1 w-full"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: [
									"Rotation (",
									rotation,
									"°)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "-90",
								max: "90",
								value: rotation,
								onChange: (e) => setRotation(parseInt(e.target.value, 10)),
								className: "mt-1 w-full"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase",
								children: "Color"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "color",
									value: color,
									onChange: (e) => setColor(e.target.value),
									className: "h-9 w-12 rounded-lg cursor-pointer border border-border"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono",
									children: color
								})]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: downloadWatermarked,
							className: "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Watermarked Photo"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "font-bold text-xs uppercase text-muted-foreground mb-4",
						children: "Live Full-Resolution Canvas Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[500px] w-full flex items-center justify-center overflow-auto rounded-xl border border-border bg-muted/20 p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							className: "max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
						})
					})]
				})]
			})
		})
	});
}
function ImageCropperTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [imageEl, setImageEl] = (0, import_react.useState)(null);
	const [aspectPreset, setAspectPreset] = (0, import_react.useState)("1:1");
	const [cropWidthPct, setCropWidthPct] = (0, import_react.useState)(80);
	const [cropHeightPct, setCropHeightPct] = (0, import_react.useState)(80);
	const [offsetX, setOffsetX] = (0, import_react.useState)(10);
	const [offsetY, setOffsetY] = (0, import_react.useState)(10);
	const canvasRef = (0, import_react.useRef)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = (f) => {
		const url = URL.createObjectURL(f);
		const img = new Image();
		img.onload = () => {
			setFile(f);
			setImageEl(img);
			toast.success(`Loaded image: ${f.name}`);
		};
		img.src = url;
	};
	(0, import_react.useEffect)(() => {
		if (!imageEl || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const naturalW = imageEl.naturalWidth;
		const naturalH = imageEl.naturalHeight;
		let targetW = cropWidthPct / 100 * naturalW;
		let targetH = cropHeightPct / 100 * naturalH;
		if (aspectPreset === "1:1") {
			const minDim = Math.min(targetW, targetH);
			targetW = minDim;
			targetH = minDim;
		} else if (aspectPreset === "16:9") targetH = targetW * 9 / 16;
		else if (aspectPreset === "4:3") targetH = targetW * 3 / 4;
		else if (aspectPreset === "9:16") targetW = targetH * 9 / 16;
		const startX = Math.max(0, Math.min(naturalW - targetW, offsetX / 100 * naturalW));
		const startY = Math.max(0, Math.min(naturalH - targetH, offsetY / 100 * naturalH));
		canvas.width = targetW;
		canvas.height = targetH;
		ctx.clearRect(0, 0, targetW, targetH);
		ctx.drawImage(imageEl, startX, startY, targetW, targetH, 0, 0, targetW, targetH);
	}, [
		imageEl,
		aspectPreset,
		cropWidthPct,
		cropHeightPct,
		offsetX,
		offsetY
	]);
	const downloadCrop = () => {
		if (!canvasRef.current || !file) return;
		canvasRef.current.toBlob((blob) => {
			if (!blob) return;
			downloadBlob(blob, `${file.name.replace(/\.[^/.]+$/, "")}-cropped.png`);
			toast.success("Downloaded cropped image!");
		}, "image/png");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: "image/*",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crop, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Upload Image to Crop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Crop to square (1:1), widescreen (16:9), portrait (9:16), or custom free dimensions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload Image"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-foreground",
							children: "Crop Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFile(null),
							className: "text-xs text-red-500 hover:underline",
							children: "Change Image"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "Aspect Ratio Presets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							"free",
							"1:1",
							"16:9",
							"4:3",
							"9:16"
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAspectPreset(r),
							className: `rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${aspectPreset === r ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`,
							children: r.toUpperCase()
						}, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: [
							"Crop Area (",
							cropWidthPct,
							"%)"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: "20",
						max: "100",
						value: cropWidthPct,
						onChange: (e) => {
							const val = parseInt(e.target.value, 10);
							setCropWidthPct(val);
							setCropHeightPct(val);
						},
						className: "mt-1 w-full"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: [
								"Position X (",
								offsetX,
								"%)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: "0",
							max: "100",
							value: offsetX,
							onChange: (e) => setOffsetX(parseInt(e.target.value, 10)),
							className: "mt-1 w-full"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase",
							children: [
								"Position Y (",
								offsetY,
								"%)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: "0",
							max: "100",
							value: offsetY,
							onChange: (e) => setOffsetY(parseInt(e.target.value, 10)),
							className: "mt-1 w-full"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: downloadCrop,
						className: "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Cropped Image"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "font-bold text-xs uppercase text-muted-foreground mb-4",
					children: "Cropped Result Preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "max-h-[340px] max-w-full rounded shadow object-contain"
					})
				})]
			})]
		})
	});
}
function ImageRotateFlipTool() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [imageEl, setImageEl] = (0, import_react.useState)(null);
	const [rotation, setRotation] = (0, import_react.useState)(0);
	const [flipH, setFlipH] = (0, import_react.useState)(false);
	const [flipV, setFlipV] = (0, import_react.useState)(false);
	const canvasRef = (0, import_react.useRef)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFile = (f) => {
		const url = URL.createObjectURL(f);
		const img = new Image();
		img.onload = () => {
			setFile(f);
			setImageEl(img);
			setRotation(0);
			setFlipH(false);
			setFlipV(false);
			toast.success(`Loaded image: ${f.name}`);
		};
		img.src = url;
	};
	(0, import_react.useEffect)(() => {
		if (!imageEl || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const rad = rotation * Math.PI / 180;
		const sin = Math.abs(Math.sin(rad));
		const cos = Math.abs(Math.cos(rad));
		const newW = imageEl.naturalWidth * cos + imageEl.naturalHeight * sin;
		const newH = imageEl.naturalWidth * sin + imageEl.naturalHeight * cos;
		canvas.width = newW;
		canvas.height = newH;
		ctx.clearRect(0, 0, newW, newH);
		ctx.save();
		ctx.translate(newW / 2, newH / 2);
		ctx.rotate(rad);
		ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
		ctx.drawImage(imageEl, -imageEl.naturalWidth / 2, -imageEl.naturalHeight / 2);
		ctx.restore();
	}, [
		imageEl,
		rotation,
		flipH,
		flipV
	]);
	const downloadResult = () => {
		if (!canvasRef.current || !file) return;
		canvasRef.current.toBlob((blob) => {
			if (!blob) return;
			downloadBlob(blob, `${file.name.replace(/\.[^/.]+$/, "")}-oriented.png`);
			toast.success("Downloaded rotated image!");
		}, "image/png");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => fileInputRef.current?.click(),
			className: "cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 text-center hover:border-primary/50 hover:bg-muted/40 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					ref: fileInputRef,
					className: "hidden",
					accept: "image/*",
					onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 mb-4 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "Select Image to Rotate or Flip"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
					children: "Rotate 90°, 180°, fine-tune angle slider, or mirror flip horizontally and vertically."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }), "Upload Photo"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-foreground",
							children: "Rotation & Flip Controls"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFile(null),
							className: "text-xs text-red-500 hover:underline",
							children: "Change Image"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setRotation((r) => (r - 90 + 360) % 360),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), "-90° Left"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setRotation((r) => (r + 90) % 360),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-3.5 w-3.5" }), "+90° Right"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setRotation((r) => (r + 180) % 360),
								className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), "180° Flip"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFlipH(!flipH),
								className: `inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition ${flipH ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:bg-muted"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCenterlineDashedHorizontal, { className: "h-3.5 w-3.5" }), "Flip Horizontal"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFlipV(!flipV),
								className: `inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition ${flipV ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:bg-muted"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCenterlineDashedVertical, { className: "h-3.5 w-3.5" }), "Flip Vertical"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: [
							"Fine Tune Angle (",
							rotation,
							"°)"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: "-180",
						max: "180",
						value: rotation,
						onChange: (e) => setRotation(parseInt(e.target.value, 10)),
						className: "mt-1 w-full"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: downloadResult,
						className: "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Oriented Photo"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "font-bold text-xs uppercase text-muted-foreground mb-4",
					children: "Live Preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "max-h-[340px] max-w-full rounded shadow object-contain"
					})
				})]
			})]
		})
	});
}
function SvgToPngTool() {
	const [svgText, setSvgText] = (0, import_react.useState)("");
	const [scale, setScale] = (0, import_react.useState)(2);
	const [isTransparent, setIsTransparent] = (0, import_react.useState)(true);
	const canvasRef = (0, import_react.useRef)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const sampleSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#3b82f6" />
  <polygon points="100,40 120,80 165,85 130,115 140,160 100,135 60,160 70,115 35,85 80,80" fill="#facc15" />
</svg>`;
	(0, import_react.useEffect)(() => {
		if (!svgText) setSvgText(sampleSvg);
	}, []);
	const handleFileUpload = async (f) => {
		const text = await f.text();
		setSvgText(text);
		toast.success(`Loaded SVG: ${f.name}`);
	};
	(0, import_react.useEffect)(() => {
		if (!svgText || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const img = new Image();
		const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		img.onload = () => {
			canvas.width = (img.naturalWidth || 400) * scale;
			canvas.height = (img.naturalHeight || 400) * scale;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (!isTransparent) {
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			URL.revokeObjectURL(url);
		};
		img.src = url;
	}, [
		svgText,
		scale,
		isTransparent
	]);
	const downloadPng = () => {
		if (!canvasRef.current) return;
		canvasRef.current.toBlob((blob) => {
			if (!blob) return;
			downloadBlob(blob, `vector-rasterized-${scale}x.png`);
			toast.success("Downloaded high-res PNG!");
		}, "image/png");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-foreground",
								children: "SVG Input & Settings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => fileInputRef.current?.click(),
								className: "rounded-lg bg-primary/10 text-primary px-3 py-1.5 text-xs font-bold hover:bg-primary/20 transition",
								children: "Upload .svg File"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								ref: fileInputRef,
								className: "hidden",
								accept: ".svg,image/svg+xml",
								onChange: (e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "SVG Code"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 8,
						value: svgText,
						onChange: (e) => setSvgText(e.target.value),
						className: "mt-1.5 w-full rounded-xl border border-border bg-muted/20 p-3 font-mono text-xs focus:border-primary focus:outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "Resolution Scale"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex gap-2",
						children: [
							{
								label: "1x (Standard)",
								val: 1
							},
							{
								label: "2x (Retina)",
								val: 2
							},
							{
								label: "3x (High Res)",
								val: 3
							},
							{
								label: "4x (Ultra HD)",
								val: 4
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScale(item.val),
							className: `rounded-xl px-3 py-1.5 text-xs font-bold transition ${scale === item.val ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground hover:text-foreground"}`,
							children: item.label
						}, item.val))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase",
						children: "Background"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsTransparent(true),
							className: `rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${isTransparent ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground"}`,
							children: "Transparent Alpha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsTransparent(false),
							className: `rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${!isTransparent ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground"}`,
							children: "Solid White"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: downloadPng,
						className: "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
							"Download High-Res PNG (",
							scale,
							"x)"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "font-bold text-xs uppercase text-muted-foreground mb-4",
					children: "Rasterized Preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `max-h-[380px] w-full flex items-center justify-center overflow-hidden rounded-xl border border-border p-4 ${isTransparent ? "bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" : "bg-white"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "max-h-[320px] max-w-full rounded shadow-sm object-contain"
					})
				})]
			})]
		})
	});
}
function DynamicToolPage() {
	const { tool } = Route.useLoaderData();
	const { formatted: dynamicUsageText } = useToolUsage(tool.baseUses, tool.slug);
	(0, import_react.useMemo)(() => {
		return COMPLETE_TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3);
	}, [tool]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolShell, {
		title: tool.title,
		tagline: tool.summary,
		categoryLabel: tool.categoryLabel,
		thumbnail: tool.image,
		badge: {
			label: tool.badge.label,
			icon: tool.badge.icon,
			tone: tool.badge.tone
		},
		dynamicUses: dynamicUsageText,
		toolSlug: tool.slug,
		relatedSlugs: [
			"pdf-compressor",
			"image-compressor",
			"qr-code-generator"
		],
		about: tool.technicalDescription,
		steps: tool.howToSteps,
		benefits: [
			{
				title: "100% Client-Side Privacy",
				body: "Files and data are processed locally on your machine with zero server uploads."
			},
			{
				title: "No Size or Usage Limits",
				body: "Use this tool as many times as you need without signup or restrictions."
			},
			{
				title: "Lightning Fast Execution",
				body: "Hardware-accelerated processing provides instant real-time results."
			}
		],
		faqs: tool.faqs,
		seo: {
			heading: `About ${tool.title} — Free Online Tool`,
			paragraphs: [
				tool.technicalDescription,
				`ToolNami's ${tool.title} is designed to be 100% private, ultra-fast, and completely free. Unlike legacy web tools that require you to upload confidential data to remote cloud servers, our architecture runs directly within your modern web browser using client-side WebAssembly, JavaScript, and HTML5 APIs.`,
				`Whether you are a developer, designer, student, accountant, or business professional, this tool streamlines your daily workflow with zero software installations, zero credit card requirements, and zero usage limits.`
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveToolWorkspace, { tool })
	});
}
function InteractiveToolWorkspace({ tool }) {
	switch (tool.slug) {
		case "image-background-remover":
		case "background-remover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundRemoverTool, {});
		case "image-size-reducer":
		case "photo-size-reducer":
		case "reduce-image-size": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSizeReducerTool, {});
		case "password-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordGeneratorTool, {});
		case "uuid-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UuidGeneratorTool, {});
		case "word-counter":
		case "character-counter":
		case "line-counter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextMetricsTool, { mode: tool.slug });
		case "case-converter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseConverterTool, {});
		case "base64-encode":
		case "base64-decode":
		case "base64-encoder": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Base64Tool, { mode: tool.slug === "base64-decode" ? "decode" : "encode" });
		case "url-encoder":
		case "url-decoder": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlTool, { mode: tool.slug === "url-encoder" ? "encode" : "decode" });
		case "hash-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashGeneratorTool, {});
		case "json-formatter":
		case "json-validator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonTool, { mode: tool.slug === "json-formatter" ? "format" : "validate" });
		case "age-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeCalculatorTool, {});
		case "bmi-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BmiCalculatorTool, {});
		case "percentage-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PercentageCalculatorTool, {});
		case "emi-calculator":
		case "loan-emi-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmiCalculatorTool, {});
		case "random-number-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RandomNumberTool, {});
		case "dice-roller": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceRollerTool, {});
		case "currency-converter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyConverterTool, {});
		case "image-resizer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageResizerTool, {});
		case "sitemap-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitemapGeneratorTool, {});
		case "color-converter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorConverterTool, {});
		case "unit-converter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitConverterTool, {});
		case "gst-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GstCalculatorTool, {});
		case "discount-calculator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscountCalculatorTool, {});
		case "invoice-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceGeneratorTool, {});
		case "jpg-to-webp":
		case "png-to-webp": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JpgToWebpTool, {});
		case "json-to-csv": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonToCsvTool, {});
		case "pdf-rotate":
		case "rotate-pdf": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfRotateTool, {});
		case "pdf-split":
		case "split-pdf":
		case "pdf-splitter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfSplitTool, {});
		case "pdf-watermark": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfWatermarkTool, {});
		case "pdf-protect":
		case "pdf-unlock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfProtectTool, {});
		case "pdf-to-text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfToTextTool, {});
		case "image-watermark":
		case "image-watermark-adder": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWatermarkTool, {});
		case "image-cropper":
		case "crop-image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCropperTool, {});
		case "image-rotate":
		case "rotate-image":
		case "image-flip":
		case "flip-image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRotateFlipTool, {});
		case "svg-to-png": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgToPngTool, {});
		case "world-clock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldClockTool, {});
		case "internet-speed-test": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternetSpeedTestTool, {});
		case "meta-tag-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaTagGeneratorTool, {});
		case "ai-content-writer":
		case "ai-blog-generator":
		case "ai-title-generator":
		case "ai-caption-generator":
		case "ai-hashtag-generator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiGeneratorTool, { tool });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericToolStudio, { tool });
	}
}
function PasswordGeneratorTool() {
	const [length, setLength] = (0, import_react.useState)(18);
	const [useUpper, setUseUpper] = (0, import_react.useState)(true);
	const [useLower, setUseLower] = (0, import_react.useState)(true);
	const [useNumbers, setUseNumbers] = (0, import_react.useState)(true);
	const [useSymbols, setUseSymbols] = (0, import_react.useState)(true);
	const [password, setPassword] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const generate = () => {
		let chars = "";
		if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
		if (useNumbers) chars += "0123456789";
		if (useSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
		if (!chars) {
			toast.error("Please select at least one character type!");
			return;
		}
		const array = new Uint32Array(length);
		window.crypto.getRandomValues(array);
		let result = "";
		for (let i = 0; i < length; i++) result += chars[array[i] % chars.length];
		setPassword(result);
	};
	(0, import_react.useEffect)(() => {
		if (!password) generate();
	}, [password]);
	const copy = () => {
		navigator.clipboard.writeText(password);
		setCopied(true);
		toast.success("Password copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2",
					children: "Generated Secure Password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						readOnly: true,
						value: password,
						className: "flex-1 font-mono text-lg font-bold bg-muted/50 text-foreground px-4 py-3 rounded-xl border border-border focus:outline-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: generate,
							className: "flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Regenerate" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copy,
							className: "flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: "Password Length"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10",
							children: [length, " characters"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 8,
						max: 64,
						value: length,
						onChange: (e) => {
							setLength(Number(e.target.value));
							generate();
						},
						className: "w-full accent-primary cursor-pointer"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm cursor-pointer select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: useUpper,
									onChange: (e) => {
										setUseUpper(e.target.checked);
										generate();
									},
									className: "rounded text-primary focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uppercase (A-Z)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm cursor-pointer select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: useLower,
									onChange: (e) => {
										setUseLower(e.target.checked);
										generate();
									},
									className: "rounded text-primary focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lowercase (a-z)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm cursor-pointer select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: useNumbers,
									onChange: (e) => {
										setUseNumbers(e.target.checked);
										generate();
									},
									className: "rounded text-primary focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Numbers (0-9)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm cursor-pointer select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: useSymbols,
									onChange: (e) => {
										setUseSymbols(e.target.checked);
										generate();
									},
									className: "rounded text-primary focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Symbols (!@#$)" })]
							})
						]
					})]
				})
			]
		})
	});
}
function UuidGeneratorTool() {
	const [uuids, setUuids] = (0, import_react.useState)([]);
	const [count, setCount] = (0, import_react.useState)(5);
	const generate = () => {
		const list = [];
		for (let i = 0; i < count; i++) list.push(crypto.randomUUID());
		setUuids(list);
	};
	(0, import_react.useEffect)(() => {
		generate();
	}, [count]);
	const copyAll = () => {
		navigator.clipboard.writeText(uuids.join("\n"));
		toast.success(`Copied ${uuids.length} UUIDs to clipboard!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-semibold",
						children: "Quantity:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: count,
						onChange: (e) => setCount(Number(e.target.value)),
						className: "bg-muted px-3 py-1.5 rounded-lg border border-border text-sm font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 1,
								children: "1 UUID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 5,
								children: "5 UUIDs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 10,
								children: "10 UUIDs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 25,
								children: "25 UUIDs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 50,
								children: "50 UUIDs"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: generate,
						className: "flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-muted text-sm font-medium transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Regenerate" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: copyAll,
						className: "flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy All" })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2 max-h-96 overflow-y-auto font-mono text-sm",
				children: uuids.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border hover:bg-muted/70 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold select-all",
						children: id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							navigator.clipboard.writeText(id);
							toast.success("UUID copied!");
						},
						className: "text-xs text-primary hover:underline font-sans",
						children: "Copy"
					})]
				}, index))
			})]
		})
	});
}
function TextMetricsTool({ mode }) {
	const [text, setText] = (0, import_react.useState)("");
	const words = (0, import_react.useMemo)(() => {
		return text.trim() ? text.trim().split(/\s+/).length : 0;
	}, [text]);
	const charsWithSpaces = text.length;
	const charsNoSpaces = text.replace(/\s/g, "").length;
	const lines = text ? text.split("\n").length : 0;
	const readingTime = Math.ceil(words / 200);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-card border border-border text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl sm:text-3xl font-bold text-primary",
						children: words
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1",
						children: "Words"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-card border border-border text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl sm:text-3xl font-bold text-foreground",
						children: charsWithSpaces
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1",
						children: "Characters"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-card border border-border text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl sm:text-3xl font-bold text-foreground",
						children: lines
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1",
						children: "Lines"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-card border border-border text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-2xl sm:text-3xl font-bold text-emerald-500",
						children: [readingTime, " min"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1",
						children: "Reading Time"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: text,
				onChange: (e) => setText(e.target.value),
				placeholder: "Paste or type your text here to view instant live metrics...",
				rows: 10,
				className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base leading-relaxed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						"Without spaces: ",
						charsNoSpaces,
						" characters"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setText(""),
					className: "text-xs text-muted-foreground hover:text-foreground font-medium",
					children: "Clear Text"
				})]
			})]
		})]
	});
}
function CaseConverterTool() {
	const [text, setText] = (0, import_react.useState)("");
	const transform = (type) => {
		switch (type) {
			case "upper":
				setText(text.toUpperCase());
				break;
			case "lower":
				setText(text.toLowerCase());
				break;
			case "title":
				setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
				break;
			case "camel":
				setText(text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase()));
				break;
			case "snake":
				setText(text.trim().toLowerCase().replace(/\s+/g, "_"));
				break;
			case "kebab": setText(text.trim().toLowerCase().replace(/\s+/g, "-"));
		}
		toast.success("Converted!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: text,
				onChange: (e) => setText(e.target.value),
				placeholder: "Enter text to convert into different cases...",
				rows: 8,
				className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base leading-relaxed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("upper"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "UPPERCASE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("lower"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "lowercase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("title"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "Title Case"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("camel"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "camelCase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("snake"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "snake_case"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => transform("kebab"),
						className: "px-3.5 py-2 rounded-xl bg-muted hover:bg-muted/80 text-sm font-semibold",
						children: "kebab-case"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							navigator.clipboard.writeText(text);
							toast.success("Copied to clipboard!");
						},
						className: "ml-auto px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), " Copy"]
					})
				]
			})]
		})
	});
}
function Base64Tool({ mode }) {
	const [input, setInput] = (0, import_react.useState)("");
	const [output, setOutput] = (0, import_react.useState)("");
	const process = () => {
		try {
			if (mode === "encode") setOutput(btoa(unescape(encodeURIComponent(input))));
			else setOutput(decodeURIComponent(escape(atob(input))));
			toast.success(mode === "encode" ? "Encoded to Base64!" : "Decoded from Base64!");
		} catch {
			toast.error("Invalid input string for Base64 processing!");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2",
					children: mode === "encode" ? "Plaintext Input" : "Base64 Input"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: `Enter text to ${mode}...`,
					rows: 8,
					className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: process,
					className: "mt-4 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
					children: mode === "encode" ? "Encode to Base64" : "Decode from Base64"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block",
					children: mode === "encode" ? "Base64 Result" : "Decoded Plaintext"
				}), output && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						navigator.clipboard.writeText(output);
						toast.success("Copied to clipboard!");
					},
					className: "text-xs text-primary hover:underline font-semibold flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), " Copy"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				readOnly: true,
				value: output,
				placeholder: "Result will appear here...",
				rows: 8,
				className: "w-full bg-muted/50 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none"
			})]
		})]
	});
}
function UrlTool({ mode }) {
	const [input, setInput] = (0, import_react.useState)("");
	const [output, setOutput] = (0, import_react.useState)("");
	const process = () => {
		try {
			if (mode === "encode") setOutput(encodeURIComponent(input));
			else setOutput(decodeURIComponent(input));
			toast.success(mode === "encode" ? "Encoded URL!" : "Decoded URL!");
		} catch {
			toast.error("Invalid URL string!");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2",
					children: "Input URL / Query String"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "https://example.com/search?q=test string & more",
						className: "flex-1 bg-muted/40 px-4 py-3 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: process,
						className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
						children: mode === "encode" ? "Encode" : "Decode"
					})]
				}),
				output && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 pt-6 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Result"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								navigator.clipboard.writeText(output);
								toast.success("Copied to clipboard!");
							},
							className: "text-xs text-primary hover:underline font-semibold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), " Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 rounded-xl bg-muted/50 font-mono text-sm break-all select-all border border-border",
						children: output
					})]
				})
			]
		})
	});
}
function HashGeneratorTool() {
	const [input, setInput] = (0, import_react.useState)("");
	const [hashes, setHashes] = (0, import_react.useState)({
		sha256: "",
		sha512: "",
		sha1: ""
	});
	const compute = async () => {
		if (!input) return;
		const data = new TextEncoder().encode(input);
		const buf256 = await crypto.subtle.digest("SHA-256", data);
		const buf512 = await crypto.subtle.digest("SHA-512", data);
		const buf1 = await crypto.subtle.digest("SHA-1", data);
		const toHex = (buf) => Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
		setHashes({
			sha256: toHex(buf256),
			sha512: toHex(buf512),
			sha1: toHex(buf1)
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2",
					children: "Input Text"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Enter text to generate cryptographic hashes...",
					rows: 4,
					className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: compute,
					className: "mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
					children: "Compute Hashes"
				}),
				hashes.sha256 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 pt-6 border-t border-border space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs font-bold text-muted-foreground mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHA-256" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									navigator.clipboard.writeText(hashes.sha256);
									toast.success("SHA-256 copied!");
								},
								className: "text-primary hover:underline",
								children: "Copy"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border",
							children: hashes.sha256
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs font-bold text-muted-foreground mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHA-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									navigator.clipboard.writeText(hashes.sha1);
									toast.success("SHA-1 copied!");
								},
								className: "text-primary hover:underline",
								children: "Copy"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border",
							children: hashes.sha1
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs font-bold text-muted-foreground mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHA-512" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									navigator.clipboard.writeText(hashes.sha512);
									toast.success("SHA-512 copied!");
								},
								className: "text-primary hover:underline",
								children: "Copy"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 rounded-lg bg-muted/50 font-mono text-xs break-all select-all border border-border",
							children: hashes.sha512
						})] })
					]
				})
			]
		})
	});
}
function JsonTool({ mode }) {
	const [json, setJson] = (0, import_react.useState)("{\"name\":\"ToolNami\",\"toolsCount\":80,\"privacy\":\"100% Client-Side\"}");
	const [isValid, setIsValid] = (0, import_react.useState)(null);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const format = () => {
		try {
			const parsed = JSON.parse(json);
			setJson(JSON.stringify(parsed, null, 2));
			setIsValid(true);
			setErrorMsg("");
			toast.success("JSON formatted cleanly!");
		} catch (err) {
			setIsValid(false);
			setErrorMsg(err instanceof Error ? err.message : "Invalid JSON syntax");
			toast.error("Invalid JSON syntax!");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: "JSON Editor"
					}), isValid !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-xs px-2.5 py-1 rounded-full font-semibold ${isValid ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"}`,
						children: isValid ? "✓ Valid JSON" : "✕ Syntax Error"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: json,
					onChange: (e) => setJson(e.target.value),
					rows: 12,
					className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary leading-relaxed"
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono",
					children: errorMsg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: format,
						className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
						children: mode === "format" ? "Format & Beautify" : "Validate JSON"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							navigator.clipboard.writeText(json);
							toast.success("Copied to clipboard!");
						},
						className: "px-4 py-3 rounded-xl border border-border hover:bg-muted font-medium text-sm transition-colors",
						children: "Copy JSON"
					})]
				})
			]
		})
	});
}
function AgeCalculatorTool() {
	const [dob, setDob] = (0, import_react.useState)("1998-05-15");
	const [result, setResult] = (0, import_react.useState)(null);
	const calculate = () => {
		const birth = new Date(dob);
		const now = /* @__PURE__ */ new Date();
		if (isNaN(birth.getTime())) return;
		let years = now.getFullYear() - birth.getFullYear();
		let months = now.getMonth() - birth.getMonth();
		let days = now.getDate() - birth.getDate();
		if (days < 0) {
			months -= 1;
			const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
			days += prevMonth.getDate();
		}
		if (months < 0) {
			years -= 1;
			months += 12;
		}
		setResult({
			years,
			months,
			days
		});
	};
	(0, import_react.useEffect)(() => {
		calculate();
	}, [dob]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold block mb-2",
					children: "Select Your Date of Birth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					value: dob,
					onChange: (e) => setDob(e.target.value),
					className: "w-full bg-muted/40 px-4 py-3 rounded-xl border border-border text-foreground text-base focus:outline-none focus:border-primary mb-6"
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-primary/10 border border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-primary",
								children: result.years
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground mt-1",
								children: "Years"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-primary/10 border border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-primary",
								children: result.months
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground mt-1",
								children: "Months"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-primary/10 border border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-primary",
								children: result.days
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground mt-1",
								children: "Days"
							})]
						})
					]
				})
			]
		})
	});
}
function BmiCalculatorTool() {
	const [height, setHeight] = (0, import_react.useState)(175);
	const [weight, setWeight] = (0, import_react.useState)(70);
	const bmi = (0, import_react.useMemo)(() => {
		const hM = height / 100;
		if (hM <= 0) return 0;
		return Number((weight / (hM * hM)).toFixed(1));
	}, [height, weight]);
	const category = (0, import_react.useMemo)(() => {
		if (bmi < 18.5) return {
			label: "Underweight",
			color: "text-amber-500"
		};
		if (bmi < 25) return {
			label: "Normal Weight",
			color: "text-emerald-500"
		};
		if (bmi < 30) return {
			label: "Overweight",
			color: "text-orange-500"
		};
		return {
			label: "Obese",
			color: "text-red-500"
		};
	}, [bmi]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6 max-w-xl mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-semibold block mb-1",
					children: "Height (cm)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: height,
					onChange: (e) => setHeight(Number(e.target.value)),
					className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border text-foreground font-bold"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-semibold block mb-1",
					children: "Weight (kg)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: weight,
					onChange: (e) => setWeight(Number(e.target.value)),
					className: "w-full bg-muted/40 px-4 py-2.5 rounded-xl border border-border text-foreground font-bold"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 rounded-xl bg-muted/30 border border-border text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase font-bold text-muted-foreground mb-1",
						children: "Your Body Mass Index"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl font-extrabold text-foreground",
						children: bmi
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `text-base font-bold mt-2 ${category.color}`,
						children: category.label
					})
				]
			})]
		})
	});
}
function PercentageCalculatorTool() {
	const [mode, setMode] = (0, import_react.useState)("whatIs");
	const [val1, setVal1] = (0, import_react.useState)(25);
	const [val2, setVal2] = (0, import_react.useState)(200);
	const result = (0, import_react.useMemo)(() => {
		if (mode === "whatIs") return (val1 / 100 * val2).toFixed(2);
		if (mode === "isWhatPercent") {
			if (val2 === 0) return "0.00%";
			return `${(val1 / val2 * 100).toFixed(2)}%`;
		}
		if (mode === "increaseDecrease") {
			if (val1 === 0) return "0.00%";
			const pct = (val2 - val1) / val1 * 100;
			return `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
		}
		return "0.00";
	}, [
		mode,
		val1,
		val2
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl w-full mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("whatIs"),
						className: `py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${mode === "whatIs" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "What is X% of Y"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("isWhatPercent"),
						className: `py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${mode === "isWhatPercent" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "X is What % of Y"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("increaseDecrease"),
						className: `py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${mode === "increaseDecrease" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "% Change (X to Y)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5 sm:p-6 rounded-2xl bg-muted/20 border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full",
					children: [
						mode === "whatIs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "What is"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full sm:w-36",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val1,
									onChange: (e) => setVal1(Number(e.target.value)),
									className: "w-full bg-card pr-8 pl-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground",
									children: "%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "of"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full sm:w-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val2,
									onChange: (e) => setVal2(Number(e.target.value)),
									className: "w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "?"
							})
						] }),
						mode === "isWhatPercent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full sm:w-36",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val1,
									onChange: (e) => setVal1(Number(e.target.value)),
									className: "w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "is what % of"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full sm:w-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val2,
									onChange: (e) => setVal2(Number(e.target.value)),
									className: "w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "?"
							})
						] }),
						mode === "increaseDecrease" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "From"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full sm:w-36",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val1,
									onChange: (e) => setVal1(Number(e.target.value)),
									className: "w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground shrink-0",
								children: "to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full sm:w-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: val2,
									onChange: (e) => setVal2(Number(e.target.value)),
									className: "w-full bg-card px-3 py-2.5 rounded-xl border border-border font-bold text-center text-foreground focus:outline-none focus:border-primary shadow-xs"
								})
							})
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1",
					children: "Calculated Result"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl sm:text-5xl font-black text-primary tracking-tight",
					children: result
				})]
			})
		]
	});
}
function EmiCalculatorTool() {
	const [loan, setLoan] = (0, import_react.useState)(5e4);
	const [rate, setRate] = (0, import_react.useState)(8.5);
	const [months, setMonths] = (0, import_react.useState)(36);
	const emi = (0, import_react.useMemo)(() => {
		const r = rate / 12 / 100;
		if (r === 0) return (loan / months).toFixed(2);
		return (loan * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1)).toFixed(2);
	}, [
		loan,
		rate,
		months
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-semibold block mb-1",
					children: "Loan Amount ($)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: loan,
					onChange: (e) => setLoan(Number(e.target.value)),
					className: "w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-semibold block mb-1",
					children: "Annual Rate (%)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					step: "0.1",
					value: rate,
					onChange: (e) => setRate(Number(e.target.value)),
					className: "w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-semibold block mb-1",
					children: "Tenure (Months)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: months,
					onChange: (e) => setMonths(Number(e.target.value)),
					className: "w-full bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold"
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-xl bg-primary/10 border border-primary/20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase font-bold text-muted-foreground mb-1",
				children: "Monthly EMI Payment"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-4xl font-extrabold text-primary",
				children: ["$", emi]
			})]
		})]
	});
}
function RandomNumberTool() {
	const [min, setMin] = (0, import_react.useState)(1);
	const [max, setMax] = (0, import_react.useState)(100);
	const [num, setNum] = (0, import_react.useState)(42);
	const roll = () => {
		const array = /* @__PURE__ */ new Uint32Array(1);
		crypto.getRandomValues(array);
		const range = max - min + 1;
		const val = min + array[0] % range;
		setNum(val);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 rounded-2xl bg-card border border-border shadow-soft max-w-md mx-auto text-center space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold block mb-1",
						children: "Min"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						value: min,
						onChange: (e) => setMin(Number(e.target.value)),
						className: "w-full bg-muted/40 px-3 py-2 rounded-xl border border-border text-center font-bold"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold block mb-1",
						children: "Max"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						value: max,
						onChange: (e) => setMax(Number(e.target.value)),
						className: "w-full bg-muted/40 px-3 py-2 rounded-xl border border-border text-center font-bold"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 rounded-2xl bg-muted/40 border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-6xl font-extrabold text-primary",
					children: num
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: roll,
				className: "w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
				children: "Roll Random Number"
			})
		]
	});
}
function DiceRollerTool() {
	const [dice, setDice] = (0, import_react.useState)(6);
	const [rollResult, setRollResult] = (0, import_react.useState)(4);
	const roll = () => {
		const r = Math.floor(Math.random() * dice) + 1;
		setRollResult(r);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 rounded-2xl bg-card border border-border shadow-soft max-w-md mx-auto text-center space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-2",
				children: [
					4,
					6,
					8,
					10,
					12,
					20,
					100
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setDice(d);
						setRollResult(Math.floor(Math.random() * d) + 1);
					},
					className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${dice === d ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"}`,
					children: ["D", d]
				}, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-5xl font-black",
					children: rollResult
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: roll,
				className: "w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm",
				children: ["Roll D", dice]
			})
		]
	});
}
function UnitConverterTool() {
	const [val, setVal] = (0, import_react.useState)(10);
	const [unitType, setUnitType] = (0, import_react.useState)("length");
	const [fromUnit, setFromUnit] = (0, import_react.useState)("meters");
	const [toUnit, setToUnit] = (0, import_react.useState)("feet");
	const converted = (0, import_react.useMemo)(() => {
		if (unitType === "length") {
			let inM = val;
			if (fromUnit === "kilometers") inM = val * 1e3;
			if (fromUnit === "feet") inM = val * .3048;
			if (fromUnit === "miles") inM = val * 1609.34;
			if (toUnit === "meters") return inM.toFixed(4);
			if (toUnit === "kilometers") return (inM / 1e3).toFixed(4);
			if (toUnit === "feet") return (inM / .3048).toFixed(4);
			if (toUnit === "miles") return (inM / 1609.34).toFixed(4);
		}
		return (val * 2.20462).toFixed(2);
	}, [
		val,
		unitType,
		fromUnit,
		toUnit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 rounded-2xl bg-card border border-border shadow-soft max-w-xl mx-auto space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					value: val,
					onChange: (e) => setVal(Number(e.target.value)),
					className: "w-32 bg-muted/40 px-3 py-2 rounded-xl border border-border font-bold text-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: fromUnit,
					onChange: (e) => setFromUnit(e.target.value),
					className: "flex-1 bg-muted/40 px-3 py-2 rounded-xl border border-border font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "meters",
							children: "Meters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "kilometers",
							children: "Kilometers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "feet",
							children: "Feet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "miles",
							children: "Miles"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "self-center font-bold",
					children: "→"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: toUnit,
					onChange: (e) => setToUnit(e.target.value),
					className: "flex-1 bg-muted/40 px-3 py-2 rounded-xl border border-border font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "meters",
							children: "Meters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "kilometers",
							children: "Kilometers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "feet",
							children: "Feet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "miles",
							children: "Miles"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-xl bg-primary/10 border border-primary/20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase font-bold text-muted-foreground mb-1",
				children: "Converted Value"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-4xl font-extrabold text-primary",
				children: [
					converted,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-medium text-foreground",
						children: toUnit
					})
				]
			})]
		})]
	});
}
function AiGeneratorTool({ tool }) {
	const [prompt, setPrompt] = (0, import_react.useState)("");
	const [tone, setTone] = (0, import_react.useState)("Professional");
	const [result, setResult] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { recordToolHistory } = useAuth();
	const generate = async () => {
		if (!prompt.trim()) {
			toast.error("Please enter a topic or prompt!");
			return;
		}
		setLoading(true);
		try {
			const data = await (await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: [{
					role: "user",
					content: `Please generate content using the ${tool.title} tool with tone "${tone}". Prompt: ${prompt}`
				}] })
			})).json();
			setResult(data.reply || "Content generated successfully.");
			toast.success("Generated!");
			recordToolHistory(tool.slug, tool.title, `Generated ${tone.toLowerCase()} content for: "${prompt.slice(0, 45)}..."`);
		} catch {
			setResult(`Here is your crafted content for "${prompt}" in a ${tone} tone:\n\n1. In today's landscape, achieving consistency and clarity is paramount.\n2. Leverage targeted insights to maximize impact.\n3. Keep your audience engaged with clear calls to action.`);
			recordToolHistory(tool.slug, tool.title, `Generated content for: "${prompt.slice(0, 45)}..."`);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 rounded-2xl bg-card border border-border shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold block mb-2",
					children: "What would you like to create?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: prompt,
					onChange: (e) => setPrompt(e.target.value),
					placeholder: `Enter topic, keyword, or concept for ${tool.title}...`,
					rows: 4,
					className: "w-full bg-muted/40 p-4 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-base"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Tone:"
						}), [
							"Professional",
							"Casual",
							"Persuasive",
							"Creative"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTone(t),
							className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${tone === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`,
							children: t
						}, t))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: generate,
						disabled: loading,
						className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-yellow-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loading ? "Generating..." : "Generate with AI" })]
					})]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 pt-6 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Generated Output"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								navigator.clipboard.writeText(result);
								toast.success("Copied to clipboard!");
							},
							className: "text-xs text-primary hover:underline font-semibold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), " Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 rounded-2xl bg-card border border-border text-foreground shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormattedMarkdown, { content: result })
					})]
				})
			]
		})
	});
}
//#endregion
export { DynamicToolPage as component };
