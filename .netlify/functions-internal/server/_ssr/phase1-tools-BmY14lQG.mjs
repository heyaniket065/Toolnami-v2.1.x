import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowUpRight, d as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phase1-tools-BmY14lQG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
/**
* Deterministic hash to generate stable pseudo-random variations per tool.
*/
function hashString(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash |= 0;
	}
	return Math.abs(hash);
}
/**
* Calculates a deterministic baseline usage count with slight organic offset.
* Strictly deterministic based solely on baseUses and slug, ensuring server and client
* render identically during SSR and initial hydration.
*/
function calculateRealisticUsage(baseUses, slug = "tool") {
	const jitterPercent = (hashString(slug) % 70 - 20) / 1e3;
	const jitter = Math.round(baseUses * jitterPercent);
	return Math.max(120, baseUses + jitter);
}
/**
* Calculates time-of-day progression addition (safe to call on client after mount).
*/
function calculateDayProgressDelta(slug = "tool") {
	const hash = hashString(slug);
	const now = /* @__PURE__ */ new Date();
	const dayProgressFactor = (now.getHours() * 60 + now.getMinutes()) / 1440;
	return Math.floor(dayProgressFactor * (40 + hash % 180));
}
/**
* Formats a count into a human-readable string like "18.2K Uses" or "1.4M Uses".
*/
function formatUsageNumber(count, suffix = "Uses") {
	if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M ${suffix}`;
	if (count >= 1e4) return `${(count / 1e3).toFixed(1)}K ${suffix}`;
	if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K ${suffix}`;
	return `${count.toLocaleString()} ${suffix}`;
}
/**
* Hook that generates realistic, slightly randomized usage numbers for each tool
* that slowly tick upwards to feel live, active, and continuously growing.
*/
function useToolUsage(baseUses, toolSlug = "general", options = {}) {
	const { enableLiveGrowth = true, minIntervalSec = 14, maxIntervalSec = 38 } = options;
	const initialCount = (0, import_react.useMemo)(() => calculateRealisticUsage(baseUses, toolSlug), [baseUses, toolSlug]);
	const [count, setCount] = (0, import_react.useState)(initialCount);
	const [hasIncremented, setHasIncremented] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const dayDelta = calculateDayProgressDelta(toolSlug);
		if (dayDelta > 0) setCount((prev) => prev + dayDelta);
	}, [toolSlug]);
	(0, import_react.useEffect)(() => {
		if (!enableLiveGrowth) return;
		let timer;
		const scheduleNextTick = () => {
			const delayMs = (Math.floor(Math.random() * (maxIntervalSec - minIntervalSec + 1)) + minIntervalSec) * 1e3;
			timer = setTimeout(() => {
				setCount((prev) => prev + (Math.random() > .4 ? 1 : 2));
				setHasIncremented(true);
				setTimeout(() => setHasIncremented(false), 1500);
				scheduleNextTick();
			}, delayMs);
		};
		scheduleNextTick();
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [
		enableLiveGrowth,
		minIntervalSec,
		maxIntervalSec
	]);
	const recordUse = (0, import_react.useCallback)(() => {
		setCount((prev) => prev + 1);
		setHasIncremented(true);
		setTimeout(() => setHasIncremented(false), 1500);
	}, []);
	return {
		count,
		formatted: (0, import_react.useMemo)(() => formatUsageNumber(count, "Uses"), [count]),
		hasIncremented,
		recordUse
	};
}
var _jsxFileName = "/app/applet/src/components/tools/live-tool-card.tsx";
function LiveToolCard({ tool }) {
	const { formatted: dynamicUses, hasIncremented } = useToolUsage(tool.baseUses, tool.slug, { enableLiveGrowth: true });
	const badgeToneStyles = {
		trending: "bg-sky-500/15 text-sky-400 border-sky-500/30",
		popular: "bg-amber-500/15 text-amber-300 border-amber-500/30",
		hot: "bg-rose-500/15 text-rose-400 border-rose-500/30",
		new: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
		featured: "bg-purple-500/15 text-purple-300 border-purple-500/30",
		fast: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
		top: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
		recommended: "bg-blue-500/15 text-blue-300 border-blue-500/30"
	}[tool.badge.tone];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-primary/50 hover:shadow-lift hover:shadow-primary/10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative aspect-[16/10] w-full overflow-hidden bg-muted/30",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: tool.image,
				alt: `${tool.title} — ${tool.description}`,
				loading: "lazy",
				referrerPolicy: "no-referrer",
				width: 1200,
				height: 750,
				className: "w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col gap-2.5 p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-secondary/80 border border-border/60 px-2.5 py-0.5 text-[11px] font-semibold text-foreground shadow-xs",
						children: tool.categoryLabel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: `inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold shadow-xs ${badgeToneStyles}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tool.badge.icon }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tool.badge.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between gap-2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-bold text-card-foreground sm:text-lg tracking-tight group-hover:text-primary transition-colors",
						children: tool.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm leading-relaxed text-muted-foreground line-clamp-2",
					children: tool.description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-auto flex items-center justify-between pt-3 pb-1 border-t border-border/40 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						suppressHydrationWarning: true,
						className: `inline-flex items-center gap-1.5 font-medium transition-all duration-300 ${hasIncremented ? "text-emerald-400 font-semibold scale-105" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "size-3.5 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								suppressHydrationWarning: true,
								children: dynamicUses
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] font-medium text-muted-foreground/80",
						children: "Runs in Browser"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: tool.to,
					className: "group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_10px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)] hover:brightness-110 active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open Tool" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
var _3d_image_compressor_default = "/assets/3d-image-compressor-C8HxI4En.png";
var _3d_jpg_to_pdf_default = "/assets/3d-jpg-to-pdf-DQYHcoFY.png";
var _3d_pdf_compressor_default = "/assets/3d-pdf-compressor-DF6H3ODm.png";
var _3d_pdf_merge_default = "/assets/3d-pdf-merge-DFytQ8d_.png";
var _3d_qr_code_generator_default = "/assets/3d-qr-code-generator-BT0Ee4_h.png";
/**
* Formats a consistent usage counter string (e.g. "18.2K Uses").
* Uses a deterministic hash and time-of-day offset for active, organic growth feel.
*/
function getDynamicUses(baseUses, seedOffset = 0) {
	const jitter = Math.floor((baseUses * 17 + seedOffset * 31) % 700 - 200);
	const total = Math.max(150, baseUses + jitter);
	if (total >= 1e6) return `${(total / 1e6).toFixed(1)}M Uses`;
	return `${(total / 1e3).toFixed(1)}K Uses`;
}
var LIVE_TOOLS = [
	{
		slug: "pdf-compressor",
		to: "/tools/pdf-compressor",
		title: "PDF Compressor",
		description: "Reduce PDF file size while maintaining quality — free, instant and fully private.",
		image: _3d_pdf_compressor_default,
		categoryLabel: "PDF Tools",
		keywords: [
			"compress pdf",
			"reduce pdf size",
			"pdf optimiser",
			"shrink pdf",
			"pdf compress online"
		],
		badge: {
			label: "Trending",
			icon: "🚀",
			tone: "trending"
		},
		baseUses: 31420,
		relatedSlugs: [
			"pdf-merge",
			"jpg-to-pdf",
			"image-compressor"
		],
		howToSteps: [
			"Upload or drag & drop your PDF file into the secure dropzone.",
			"Review your document details and file size.",
			"Click Compress PDF to initiate browser-level stream optimization.",
			"Wait 1–3 seconds while structural compression completes.",
			"Download your optimized, light PDF ready for email or upload."
		],
		faqs: [
			{
				q: "Is this PDF compressor tool 100% free to use?",
				a: "Yes. ToolNami's PDF Compressor is completely free with no hidden paywalls, no monthly subscription requirements, and no daily usage caps."
			},
			{
				q: "Are my confidential files uploaded or saved on external servers?",
				a: "Never. ToolNami processes all PDF files entirely client-side within your own browser's sandboxed memory using advanced WebAssembly. Your documents, signatures, and confidential data never leave your computer or phone."
			},
			{
				q: "Will compression cause text or vector graphics to become blurry?",
				a: "No. Unlike tools that crudely flatten pages into low-resolution JPEG images, ToolNami performs lossless structural rebuilds—pruning redundant object streams, deduplicating fonts, and clearing bloated metadata while keeping selectable text razor-sharp."
			},
			{
				q: "What file size limitations apply?",
				a: "There is no arbitrary server cap. You can compress documents as large as your local device's memory allows, commonly handling PDFs up to 250MB seamlessly."
			},
			{
				q: "Which operating systems and browsers are supported?",
				a: "ToolNami runs natively across Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and mobile browsers on iOS and Android with zero installation."
			}
		],
		seoArticle: {
			heading: "Why Optimize and Compress PDF Documents Online?",
			paragraphs: [
				"In today's digital workflow, PDF files remain the universal standard for sharing business contracts, academic research, invoices, and resumes. However, bloated file sizes frequently create frustrating roadblocks. Email platforms like Gmail and Outlook routinely reject attachments larger than 25 megabytes, while government portals and university upload systems often enforce strict 2MB to 5MB file thresholds.",
				"ToolNami's PDF Compressor solves this challenge using smart internal document stream compression. By restructuring binary object trees, compressing embedded font descriptors, and safely purging unneeded revision history, file sizes can be reduced by up to 90% without sacrificing visual readability.",
				"Because our architecture is completely browser-based, privacy is unconditionally guaranteed. Legal advisors, healthcare professionals, accountants, and everyday users can safely optimize sensitive financial records, ID cards, and medical paperwork with complete peace of mind."
			]
		}
	},
	{
		slug: "pdf-merge",
		to: "/tools/pdf-merge",
		title: "PDF Merge",
		description: "Combine multiple PDF files into a single organized document in seconds.",
		image: _3d_pdf_merge_default,
		categoryLabel: "PDF Tools",
		keywords: [
			"merge pdf",
			"combine pdf",
			"join pdf files",
			"pdf joiner",
			"pdf binder"
		],
		badge: {
			label: "Popular",
			icon: "⭐",
			tone: "popular"
		},
		baseUses: 24750,
		relatedSlugs: [
			"pdf-compressor",
			"jpg-to-pdf",
			"image-compressor"
		],
		howToSteps: [
			"Select and upload two or more PDF files from your device.",
			"Drag and rearrange documents into your desired sequence.",
			"Click the Merge Files button to combine all pages.",
			"Wait momentarily while the single unified PDF is built.",
			"Download your merged document with page order preserved."
		],
		faqs: [
			{
				q: "Is there a limit on how many PDFs I can merge at once?",
				a: "You can merge dozens of PDF documents in a single operation. The only limit is your local machine's available RAM."
			},
			{
				q: "Can I reorder the pages or files before merging?",
				a: "Yes! Use the intuitive Move Up and Move Down controls in the queue to organize your documents exactly in the sequence you want them to appear."
			},
			{
				q: "Are the merged PDFs safe and private?",
				a: "All merging takes place inside your browser. No files are uploaded to cloud servers or stored in third-party databases."
			},
			{
				q: "Does merging PDFs preserve internal links and formatting?",
				a: "Yes, page vectors, links, fonts, and original layouts remain intact across all merged source documents."
			},
			{
				q: "Is registration or credit card info required?",
				a: "No account registration or payment details are needed. ToolNami is completely accessible to everyone without friction."
			}
		],
		seoArticle: {
			heading: "Streamline Document Management with Fast PDF Merging",
			paragraphs: [
				"Managing multiple disconnected PDF documents—such as multi-part proposals, monthly receipts, tax schedules, or thesis chapters—can quickly clutter your desk and email threads. A dedicated PDF combiner empowers you to unify scattered pages into a cohesive, presentation-ready portfolio.",
				"ToolNami's client-side PDF merger stitches distinct documents together with precision. Each page's dimension, orientation, embedded media, and vector pathways are preserved faithfully. You have granular control over the ordering of files prior to export, preventing misplaced appendices or scrambled chapters.",
				"Unlike traditional online converters that force you to upload proprietary company data or sensitive personal archives to remote servers, our zero-upload technology processes all files locally, delivering unmatched speed and complete data confidentiality."
			]
		}
	},
	{
		slug: "image-compressor",
		to: "/tools/image-compressor",
		title: "Image Compressor",
		description: "Compress images without noticeable quality loss — fast, lossy & lossless presets.",
		image: _3d_image_compressor_default,
		categoryLabel: "Image Tools",
		keywords: [
			"compress image",
			"reduce image size",
			"optimise jpg",
			"shrink png",
			"webp compressor"
		],
		badge: {
			label: "Hot",
			icon: "🔥",
			tone: "hot"
		},
		baseUses: 38910,
		relatedSlugs: [
			"jpg-to-pdf",
			"pdf-compressor",
			"qr-code-generator"
		],
		howToSteps: [
			"Upload a JPG, PNG, or WebP photo or graphic.",
			"Choose your desired compression preset (Balanced, Aggressive, or Maximum).",
			"Click Compress Image to execute multi-threaded browser optimization.",
			"Inspect the live side-by-side preview and verified file size savings.",
			"Download your optimized image ready for web, app, or social media publishing."
		],
		faqs: [
			{
				q: "Which image formats can I compress with ToolNami?",
				a: "We support standard JPEG (.jpg, .jpeg), PNG (.png), and modern WebP (.webp) formats seamlessly."
			},
			{
				q: "Will compression visibly blur or pixelate my photography?",
				a: "Our smart compression engine balances chroma subsampling and perceptual quantisation, stripping invisible metadata and high-frequency noise while keeping subject details crisp and clean."
			},
			{
				q: "How much disk space can I expect to save?",
				a: "Depending on the original camera resolution and compression level, users frequently observe reductions between 60% and 85% with virtually imperceptible visual difference."
			},
			{
				q: "Is my image uploaded anywhere during compression?",
				a: "No. The entire process runs in a background Web Worker directly on your device, ensuring maximum speed, offline support, and complete user privacy."
			},
			{
				q: "Can I compress multiple images consecutively?",
				a: "Yes, you can compress as many images as you need without cooling-off periods or daily quotas."
			}
		],
		seoArticle: {
			heading: "Boost Web Performance & SEO with Modern Image Compression",
			paragraphs: [
				"Unoptimized high-resolution images are the primary cause of sluggish page loading speeds across modern websites and online stores. Slow page speeds directly degrade user engagement, increase bounce rates, and harm organic rankings on Google search results (Core Web Vitals).",
				"ToolNami's browser-powered Image Compressor optimizes your visual assets through intelligent rate-distortion profiling. By targeting perceptual redundancy and eliminating unnecessary EXIF headers, camera geolocation tags, and color profiles, our engine delivers featherlight image files suitable for rapid web transmission.",
				"Whether you are a web developer preparing product galleries, a blogger optimizing hero photography, or a job seeker preparing email attachments, our image optimization workflow guarantees fast turnarounds without compromising visual fidelity."
			]
		}
	},
	{
		slug: "jpg-to-pdf",
		to: "/tools/jpg-to-pdf",
		title: "JPG to PDF",
		description: "Convert JPG and PNG images into crisp, professional PDF documents instantly.",
		image: _3d_jpg_to_pdf_default,
		categoryLabel: "Converters",
		keywords: [
			"jpg to pdf",
			"image to pdf",
			"photo to pdf",
			"jpeg converter",
			"pictures to pdf"
		],
		badge: {
			label: "New",
			icon: "✨",
			tone: "new"
		},
		baseUses: 18230,
		relatedSlugs: [
			"pdf-compressor",
			"pdf-merge",
			"image-compressor"
		],
		howToSteps: [
			"Select one or multiple JPG or PNG images from your device.",
			"Arrange the sequence of images to match your preferred page order.",
			"Click the Convert to PDF button to compile your image portfolio.",
			"Wait a moment while each picture is rendered onto its own clean PDF page.",
			"Download your newly generated PDF document ready to send."
		],
		faqs: [
			{
				q: "Can I convert multiple photos into one multi-page PDF?",
				a: "Yes! ToolNami allows you to upload multiple images at once, reorder them, and bundle them into a single coherent multi-page PDF file."
			},
			{
				q: "What image formats are supported by this converter?",
				a: "We accept JPEG (.jpg, .jpeg) and PNG (.png) files of all resolutions."
			},
			{
				q: "Will image resolution and sharpness be retained?",
				a: "Yes, the original pixel dimensions and aspect ratios are preserved so high-resolution scans, blueprints, and artwork remain crystal clear."
			},
			{
				q: "Do I need to install any software or printer drivers?",
				a: "No extra software, Adobe Acrobat licenses, or virtual printer drivers are needed. Everything runs directly inside your web browser."
			},
			{
				q: "Is there any watermark stamped onto the final PDF?",
				a: "Never. ToolNami produces clean, unwatermarked, professional PDF documents suitable for commercial and official use."
			}
		],
		seoArticle: {
			heading: "Effortless Image-to-PDF Conversion for Work and Study",
			paragraphs: [
				"Sending photos or smartphone scans of documents over email as standalone JPEG files frequently leads to messy attachments, erratic print scaling, and awkward page orientation. Converting images into standard PDF documents ensures consistent formatting across all operating systems and print devices.",
				"ToolNami's JPG to PDF converter automatically dimensions each document page to fit the embedded picture while maintaining native aspect ratios. It is ideal for compiling receipt scans for expense reports, assembling student homework submissions, or turning hand-drawn diagrams into shareable client documentation.",
				"With client-side compilation, your confidential identification cards, contracts, and personal photos are converted instantly with zero data transmission over the internet."
			]
		}
	},
	{
		slug: "qr-code-generator",
		to: "/tools/qr-code-generator",
		title: "QR Code Generator",
		description: "Create customizable, high-resolution QR codes instantly for URLs, WiFi, and text.",
		image: _3d_qr_code_generator_default,
		categoryLabel: "Generators",
		keywords: [
			"qr code generator",
			"create qr code",
			"url qr code",
			"free qr maker",
			"custom qr code"
		],
		badge: {
			label: "Featured",
			icon: "💎",
			tone: "featured"
		},
		baseUses: 12940,
		relatedSlugs: [
			"image-compressor",
			"pdf-compressor",
			"jpg-to-pdf"
		],
		howToSteps: [
			"Type or paste your destination link, text note, or WiFi credential.",
			"Select your preferred aesthetic color palette.",
			"Click Generate QR Code to compile the 2D matrix instantly.",
			"Scan the on-screen preview with your smartphone to verify.",
			"Download a high-resolution 1024×1024 PNG ready for digital or print use."
		],
		faqs: [
			{
				q: "Do the generated QR codes ever expire?",
				a: "No! ToolNami generates static, direct QR codes where the data is permanently encoded within the matrix. There is no intermediate redirection server that could expire or change."
			},
			{
				q: "Can I use these QR codes for commercial printing?",
				a: "Absolutely. Our generator outputs high-resolution 1024×1024 pixel PNG files with medium error-correction, ensuring reliable scans on restaurant menus, posters, stickers, and business cards."
			},
			{
				q: "What types of information can I encode into a QR code?",
				a: "You can encode website links (HTTPS URLs), social media handles, plain text messages, contact information, phone numbers, or Wi-Fi credentials."
			},
			{
				q: "Does this QR generator track or log user scans?",
				a: "No tracking or telemetry is attached. Because the code links directly to your target destination, your users enjoy complete privacy with zero intermediate redirect latency."
			},
			{
				q: "Is there any cost or limit on code generation?",
				a: "ToolNami provides unlimited free QR code generation with no registration or payment required."
			}
		],
		seoArticle: {
			heading: "Create Permanent, High-Resolution QR Codes in Seconds",
			paragraphs: [
				"Quick Response (QR) codes have become the indispensable bridge connecting physical print materials to interactive digital experiences. From restaurant menus and conference badges to packaging labels and real estate listings, QR codes provide instantaneous access to web content with a simple camera scan.",
				"ToolNami's QR Code Generator creates permanent, direct-encoded barcodes without dynamic redirect proxies. This means your QR codes will never break, stop working, or require monthly subscription renewals to keep links active.",
				"Featuring multiple aesthetic color styles, generous error-correction padding, and instant high-resolution PNG downloads, ToolNami makes creating branded QR codes seamless, free, and completely secure."
			]
		}
	}
];
function findLiveTool(slug) {
	return LIVE_TOOLS.find((t) => t.slug === slug) ?? LIVE_TOOLS[0];
}
function matchLiveTools(term) {
	const q = term.trim().toLowerCase();
	if (!q) return LIVE_TOOLS;
	return LIVE_TOOLS.filter((t) => [
		t.title,
		t.description,
		t.categoryLabel,
		...t.keywords
	].join(" ").toLowerCase().includes(q));
}
//#endregion
export { matchLiveTools as a, getDynamicUses as i, LiveToolCard as n, useToolUsage as o, findLiveTool as r, LIVE_TOOLS as t };
