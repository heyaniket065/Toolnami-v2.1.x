import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./reveal-DfkjJJ69.mjs";
import { Ct as ArrowUpRight, F as MessageSquare, H as Linkedin, K as Instagram, L as Mail, V as LoaderCircle, X as Globe, Z as Github, _ as Sparkles, it as ExternalLink, mt as CircleAlert, pt as CircleCheck, r as Youtube, tt as Facebook, u as Twitter, x as Send, xt as BadgeCheck } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bz_9BdDo.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CZMXDOuF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(2).max(100),
	email: stringType().trim().email().max(255),
	message: stringType().trim().min(10).max(5e3)
});
var submitContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("6791d96029119711fff64366333434540863937081e92a2093993c6c31f4287b"));
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100, "Name is too long"),
	email: stringType().trim().email("Enter a valid email address").max(255, "Email is too long"),
	message: stringType().trim().min(10, "Please write at least 10 characters").max(5e3, "Message is too long")
});
var SOCIAL_LINKS = [
	{
		name: "YouTube",
		handle: "@luminalm065",
		url: "https://youtube.com/@luminalm065",
		icon: Youtube,
		color: "hover:text-red-500"
	},
	{
		name: "Instagram",
		handle: "@hey_aniket_065",
		url: "https://www.instagram.com/hey_aniket_065",
		icon: Instagram,
		color: "hover:text-pink-500"
	},
	{
		name: "X (Twitter)",
		handle: "@Instgram136",
		url: "https://x.com/Instgram136",
		icon: Twitter,
		color: "hover:text-sky-500"
	},
	{
		name: "LinkedIn",
		handle: "Aniket Bhalerao",
		url: "https://www.linkedin.com/in/aniket-bhalerao-o07?utm_source=share_via&utm_content=profile&utm_medium=member_android",
		icon: Linkedin,
		color: "hover:text-blue-600"
	},
	{
		name: "GitHub",
		handle: "heyaniket065",
		url: "https://github.com/heyaniket065?tab=repositories",
		icon: Github,
		color: "hover:text-foreground"
	},
	{
		name: "Facebook",
		handle: "Aniket Bhalerao",
		url: "https://www.facebook.com/share/19cdfcUFpw/",
		icon: Facebook,
		color: "hover:text-blue-500"
	}
];
var ECOSYSTEM_LINKS = [
	{
		id: "site-1",
		num: "1",
		title: "Aniket Bhalerao",
		subtitle: "Official Google Site",
		url: "https://sites.google.com/view/aniketbhalerao",
		description: "Official personal portal, biography, and professional directory.",
		badge: "Personal"
	},
	{
		id: "site-2",
		num: "2",
		title: "Neoluxe Trust",
		subtitle: "neoluxetrast.lovable.app",
		url: "https://neoluxetrast.lovable.app",
		description: "Digital trust, foundation services, and ecosystem standards.",
		badge: "Enterprise"
	},
	{
		id: "site-3",
		num: "3",
		title: "Neoluxe",
		subtitle: "neoluxe.lovable.app",
		url: "https://neoluxe.lovable.app",
		description: "Modern digital luxury and curated web experience platform.",
		badge: "Platform"
	},
	{
		id: "site-4",
		num: "4",
		title: "Aniket Bhalerao Portfolio",
		subtitle: "aniketbhalerao.lovable.app",
		url: "https://aniketbhalerao.lovable.app",
		description: "Interactive showcase of software projects and creative works.",
		badge: "Portfolio"
	},
	{
		id: "site-5",
		num: "5",
		title: "ToolNami (AI Studio)",
		subtitle: "toolnami.ai.studio",
		url: "https://toolnami.ai.studio",
		description: "Next-generation cloud deployment on Google AI Studio.",
		badge: "Cloud AI"
	},
	{
		id: "site-6",
		num: "6",
		title: "ToolNami (Lovable)",
		subtitle: "toolnami.lovable.app",
		url: "https://toolnami.lovable.app",
		description: "Production web utility suite with 75+ free browser tools.",
		badge: "Live App"
	},
	{
		id: "site-7",
		num: "7",
		title: "Figma Design Workspace",
		subtitle: "cone-spore-23450341.figma.site",
		url: "https://cone-spore-23450341.figma.site/",
		description: "Official interactive Figma design system and UI prototype.",
		badge: "Design"
	},
	{
		id: "site-8",
		num: "8",
		title: "Hey Aniket Portal",
		subtitle: "heyaniket065.lovable.app",
		url: "https://heyaniket065.lovable.app",
		description: "Creator hub, quick links, updates, and community hub.",
		badge: "Hub"
	}
];
var TAGLINES = [
	"Think Better. Build Better.",
	"Stories, Strategy & Growth",
	"Learn. Create. Improve.",
	"Focus. Plan. Execute."
];
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const field = "h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30";
	const submit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			setStatus("idle");
			return;
		}
		setErrors({});
		setStatus("sending");
		try {
			await submitContactMessage({ data: parsed.data });
		} catch {
			setStatus("error");
			return;
		}
		setStatus("sent");
		setForm({
			name: "",
			email: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface-hero border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquare, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 17
								}, this), " Contact & Ecosystem"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 17
								}, this), " LuminaLM Official"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-5 text-3xl font-bold sm:text-5xl",
							children: "Let's talk & connect"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg",
							children: "Have feedback, tool suggestions, or collaboration inquiries? Get in touch directly with the creator or explore our interconnected network of digital products."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: submit,
						noValidate: true,
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-xl font-bold",
								children: "Send a direct message"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "We review every submission and typically respond within 1–2 business days."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 15
							}, this),
							status === "sent" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-success" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-semibold",
									children: "Message sent successfully"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Thanks for reaching out! We will be in touch with you shortly."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 190,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 36
							}, this) : null,
							status === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "mt-0.5 size-5 shrink-0 text-destructive" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-semibold",
									children: "Something went wrong"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Your message couldn't be dispatched. You can also email us directly at the addresses on the right."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 200,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 37
							}, this) : null,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										htmlFor: "name",
										className: "text-sm font-medium",
										children: ["Name ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-destructive",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 210,
											columnNumber: 26
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 209,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										id: "name",
										required: true,
										"aria-required": "true",
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										placeholder: "Your name",
										"aria-invalid": !!errors.name,
										"aria-describedby": errors.name ? "name-error" : void 0,
										className: `${field} mt-2 ${errors.name ? "border-destructive" : "border-input focus:border-primary/50"}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 212,
										columnNumber: 19
									}, this),
									errors.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										id: "name-error",
										role: "alert",
										className: "mt-1.5 text-xs text-destructive",
										children: errors.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 216,
										columnNumber: 34
									}, this) : null
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										htmlFor: "email",
										className: "text-sm font-medium",
										children: ["Email ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-destructive",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 222,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 221,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										id: "email",
										type: "email",
										required: true,
										"aria-required": "true",
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										}),
										placeholder: "you@email.com",
										"aria-invalid": !!errors.email,
										"aria-describedby": errors.email ? "email-error" : void 0,
										className: `${field} mt-2 ${errors.email ? "border-destructive" : "border-input focus:border-primary/50"}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 19
									}, this),
									errors.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										id: "email-error",
										role: "alert",
										className: "mt-1.5 text-xs text-destructive",
										children: errors.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 228,
										columnNumber: 35
									}, this) : null
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										htmlFor: "message",
										className: "text-sm font-medium",
										children: ["Message ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-destructive",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 236,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 235,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
										id: "message",
										rows: 6,
										required: true,
										"aria-required": "true",
										value: form.message,
										onChange: (e) => setForm({
											...form,
											message: e.target.value
										}),
										placeholder: "How can we help? Share your ideas, tool requests, or feedback...",
										"aria-invalid": !!errors.message,
										"aria-describedby": errors.message ? "message-error" : void 0,
										className: `mt-2 w-full rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 ${errors.message ? "border-destructive" : "border-input focus:border-primary/50"}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 238,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-1.5 flex items-center justify-between",
										children: [errors.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											id: "message-error",
											role: "alert",
											className: "text-xs text-destructive",
											children: errors.message
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 243,
											columnNumber: 37
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 245,
											columnNumber: 28
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground",
											children: [form.message.length, "/5000"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 246,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 242,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 234,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift hover:brightness-110 active:scale-[0.98] disabled:opacity-60 sm:w-auto",
								children: [status === "sending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 251,
									columnNumber: 41
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 251,
									columnNumber: 87
								}, this), status === "sending" ? "Sending…" : "Send message"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BadgeCheck, { className: "size-4 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 17
								}, this), " Brand Philosophy & Motto"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 258,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-2 text-lg font-bold",
								children: "LuminaLM Taglines"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 261,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Guiding principles behind our creations and engineering process:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 262,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2",
								children: TAGLINES.map((tagline, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3 rounded-xl border border-border/70 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
										children: i + 1
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 267,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tagline }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 270,
										columnNumber: 21
									}, this)]
								}, i, true, {
									fileName: _jsxFileName,
									lineNumber: 266,
									columnNumber: 47
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 265,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 257,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 11
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-primary",
											children: "Creator & Founder"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 284,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
											className: "mt-3 text-2xl font-bold",
											children: "ANIKET BHALERAO"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 287,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-0.5 text-sm font-semibold text-primary",
											children: "LuminaLM"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 288,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 283,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-soft",
										children: "AB"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 290,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 border-t border-border pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Official Contact Emails"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 296,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "mt-3 space-y-2.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: "mailto:aniketbhalerao065@gmail.com",
											className: "group flex items-center justify-between rounded-xl border border-border/60 bg-background/60 p-3 transition-colors hover:border-primary hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2.5 truncate",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4 shrink-0 text-primary" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 303,
													columnNumber: 25
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "truncate text-xs font-medium sm:text-sm",
													children: "aniketbhalerao065@gmail.com"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 304,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 302,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 308,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 301,
											columnNumber: 21
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 300,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: "mailto:support.neoluxetrust@gmail.com",
											className: "group flex items-center justify-between rounded-xl border border-border/60 bg-background/60 p-3 transition-colors hover:border-primary hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2.5 truncate",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4 shrink-0 text-primary" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 314,
													columnNumber: 25
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "truncate text-xs font-medium sm:text-sm",
													children: "support.neoluxetrust@gmail.com"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 315,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 313,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 319,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 312,
											columnNumber: 21
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 311,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 295,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 281,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-sm font-bold",
										children: "Social & Developer Channels"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 328,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Follow and connect with Aniket Bhalerao across platforms:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 329,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-4 grid grid-cols-2 gap-2.5",
										children: SOCIAL_LINKS.map((item) => {
											const Icon = item.icon;
											return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
												href: item.url,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 p-3 text-xs font-medium text-foreground transition-all hover:border-border hover:bg-card hover:shadow-soft",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: `size-4 shrink-0 text-muted-foreground ${item.color}` }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 337,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "truncate",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "truncate font-semibold",
														children: item.name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 339,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "truncate text-[10px] text-muted-foreground",
														children: item.handle
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 340,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 338,
													columnNumber: 23
												}, this)]
											}, item.name, true, {
												fileName: _jsxFileName,
												lineNumber: 336,
												columnNumber: 24
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 333,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-sm font-semibold",
									children: "Response Guarantee"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 349,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
									children: "We review every message personally within 1–2 working days. No automated bot gatekeeping."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 350,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 348,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 279,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 278,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-muted/20 py-16",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 366,
									columnNumber: 19
								}, this), " Official Network"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 365,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-3 text-2xl font-bold sm:text-3xl",
								children: "Ecosystem & Project Links"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 368,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base",
								children: "Explore the live websites, design canvases, and portfolio hubs created by Aniket Bhalerao and LuminaLM."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 369,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 364,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 363,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: ECOSYSTEM_LINKS.map((link, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
							delay: Math.min(idx * 50, 350),
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: link.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary",
											children: link.num
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 382,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent",
											children: link.badge
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 385,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 381,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary",
										children: link.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 390,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-0.5 truncate text-xs font-medium text-muted-foreground",
										children: link.subtitle
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 393,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground",
										children: link.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 396,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 380,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-4 flex items-center gap-1 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Visit Platform" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 402,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 403,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 401,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 379,
								columnNumber: 17
							}, this)
						}, link.id, false, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 49
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 377,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 361,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 360,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactPage as component };
