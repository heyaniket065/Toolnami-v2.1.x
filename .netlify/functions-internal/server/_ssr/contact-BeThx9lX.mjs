import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { $ as Github, Et as BadgeCheck, I as MessageSquare, J as Instagram, M as Phone, Q as Globe, R as MapPin, U as LoaderCircle, W as Linkedin, _ as Sparkles, _t as CircleCheck, it as Facebook, r as Youtube, st as ExternalLink, u as Twitter, vt as CircleAlert, wt as Building2, x as Send, z as Mail } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bz_9BdDo.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BeThx9lX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100, "Name is too long"),
	email: stringType().trim().email("Enter a valid email address").max(255, "Email is too long"),
	message: stringType().trim().min(10, "Please write at least 10 characters").max(5e3, "Message is too long")
});
var SOCIAL_LINKS = [
	{
		name: "YouTube",
		handle: "@luminalM065",
		url: "https://youtube.com/@luminalM065",
		icon: Youtube,
		color: "hover:text-red-500"
	},
	{
		name: "Instagram",
		handle: "@hey_anik_et_065",
		url: "https://www.instagram.com/hey_anik_et_065",
		icon: Instagram,
		color: "hover:text-pink-500"
	},
	{
		name: "LinkedIn",
		handle: "Aniket Bhalerao",
		url: "https://www.linkedin.com/in/aniket-bhalerao-007",
		icon: Linkedin,
		color: "hover:text-sky-600"
	},
	{
		name: "X (Twitter)",
		handle: "@aniketbhalerao",
		url: "https://x.com/aniketbhalerao",
		icon: Twitter,
		color: "hover:text-sky-500"
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
		title: "Aniket Bhalerao Portal",
		subtitle: "Official Google Site",
		url: "https://sites.google.com/view/aniketbhalerao",
		description: "Official executive portal, biography, and professional directory.",
		badge: "Personal"
	},
	{
		id: "site-2",
		num: "2",
		title: "ToolNami Cloud AI",
		subtitle: "toolnami.ai.studio",
		url: "https://toolnami.ai.studio",
		description: "Cloud-native web utility deployment powered by Google AI Studio.",
		badge: "Cloud AI"
	},
	{
		id: "site-3",
		num: "3",
		title: "ToolNami Platform",
		subtitle: "toolnami.com",
		url: "https://toolnami.com",
		description: "Production web utility suite hosting 80+ fast, client-side tools.",
		badge: "Live Suite"
	},
	{
		id: "site-4",
		num: "4",
		title: "Figma Design Workspace",
		subtitle: "cone-spore-23450341.figma.site",
		url: "https://cone-spore-23450341.figma.site/",
		description: "Official interactive Figma design system and vector UI prototypes.",
		badge: "Design"
	},
	{
		id: "site-5",
		num: "5",
		title: "LuminaLM Research",
		subtitle: "youtube.com/@luminalM065",
		url: "https://youtube.com/@luminalM065",
		description: "Tech demonstrations, architectural walkthroughs, and tutorials.",
		badge: "Media"
	},
	{
		id: "site-6",
		num: "6",
		title: "GitHub Repositories",
		subtitle: "github.com/heyaniket065",
		url: "https://github.com/heyaniket065",
		description: "Open-source repositories, developer tools, and script libraries.",
		badge: "Code"
	}
];
var TAGLINES = [
	"Think Better. Build Better.",
	"Privacy by Architecture, Speed by Default.",
	"Zero Install. Zero Telemetry. Pure Utility.",
	"Learn. Create. Improve. Repeat."
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "surface-hero border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5" }), " Official Contact & Support"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " LuminaLM Innovations"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-3xl font-bold sm:text-5xl",
							children: "Get in touch with ToolNami"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Have feedback, tool suggestions, bug reports, or collaboration proposals? Reach out directly to founder Aniket Bhalerao or our technical support desk. We operate from Pune, Maharashtra, India and serve a global community of developers, creators, and students."
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						noValidate: true,
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "Send an official inquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "We review every submission carefully and respond within 24–48 business hours."
							}),
							status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-success-foreground",
									children: "Message dispatched successfully"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Thank you for contacting ToolNami. A response will be delivered to your email."
								})] })]
							}) : null,
							status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Message delivery failed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										"Please verify your internet connection or email us directly at",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:support.neoluxetrust@gmail.com",
											className: "underline text-primary",
											children: "support.neoluxetrust@gmail.com"
										}),
										"."
									]
								})] })]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "contact-name",
										className: "text-xs font-semibold text-foreground",
										children: ["Your Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-name",
										type: "text",
										value: form.name,
										onChange: (e) => setForm((f) => ({
											...f,
											name: e.target.value
										})),
										placeholder: "e.g. Alex Morgan",
										className: `mt-1.5 ${field} ${errors.name ? "border-destructive focus:ring-destructive/20" : "border-input"}`
									}),
									errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.name
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "contact-email",
										className: "text-xs font-semibold text-foreground",
										children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-email",
										type: "email",
										value: form.email,
										onChange: (e) => setForm((f) => ({
											...f,
											email: e.target.value
										})),
										placeholder: "you@domain.com",
										className: `mt-1.5 ${field} ${errors.email ? "border-destructive focus:ring-destructive/20" : "border-input"}`
									}),
									errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.email
									}) : null
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "contact-message",
										className: "text-xs font-semibold text-foreground",
										children: ["Your Message or Feature Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "contact-message",
										rows: 5,
										value: form.message,
										onChange: (e) => setForm((f) => ({
											...f,
											message: e.target.value
										})),
										placeholder: "Describe your inquiry, bug description, or requested tool utility...",
										className: `mt-1.5 w-full rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 ${errors.message ? "border-destructive focus:ring-destructive/20" : "border-input"}`
									}),
									errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.message
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift hover:brightness-110 active:scale-[0.98] disabled:opacity-60 sm:w-auto",
								children: [status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), status === "sending" ? "Dispatching Message…" : "Send Message"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-4 text-primary" }), " Engineering Standards"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-bold",
								children: "LuminaLM Architectural Guarantees"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Principles enforced across every tool in the ToolNami collection:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2",
								children: TAGLINES.map((tagline, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-xl border border-border/70 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
										children: i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tagline })]
								}, i))
							})
						]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }), " Official Business Information"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-lg font-bold",
										children: "LuminaLM Innovations"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-muted-foreground",
										children: "Registered operations and development office for ToolNami:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 space-y-3.5 border-t border-border pt-4 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-foreground",
													children: "Office Location"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: [
														"LuminaLM Innovations / Neoluxe Trust Hub",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"Pune, Maharashtra 411001, India"
													]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-foreground",
													children: "Phone Support"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+919876543210",
													className: "text-xs text-muted-foreground hover:text-primary transition-colors",
													children: "+91 98765 43210"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-foreground",
													children: "Primary Support Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "mailto:support.neoluxetrust@gmail.com",
													className: "text-xs text-muted-foreground hover:text-primary transition-colors break-all",
													children: "support.neoluxetrust@gmail.com"
												})] })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-primary",
											children: "Creator & Founder"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 text-2xl font-bold",
											children: "ANIKET BHALERAO"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-sm font-semibold text-primary",
											children: "LuminaLM Innovations"
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-soft",
										children: "AB"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-border pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: "Full-stack software architect specializing in high-throughput browser runtimes, privacy-first utilities, and modern web application platforms."
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold",
										children: "Verified Social & Developer Profiles"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Connect across verified technical channels:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid grid-cols-2 gap-2.5",
										children: SOCIAL_LINKS.map((item) => {
											const Icon = item.icon;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: item.url,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 p-3 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card hover:shadow-soft",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4 shrink-0 text-muted-foreground ${item.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "truncate",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate font-semibold",
														children: item.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-[10px] text-muted-foreground",
														children: item.handle
													})]
												})]
											}, item.name);
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold",
									children: "Response Guarantee & SLA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
									children: "All communications sent via this form or direct email are processed by our core engineering team within 24 hours during standard business days (Monday–Friday, IST)."
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-muted/20 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), " Official Ecosystem"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold sm:text-3xl",
								children: "LuminaLM Network & Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base",
								children: "Explore verified applications, code repositories, and interactive design prototypes maintained by Aniket Bhalerao."
							})
						] })
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: ECOSYSTEM_LINKS.map((link, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: Math.min(idx * 50, 350),
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary",
											children: link.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary",
											children: link.badge
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary",
										children: link.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 truncate text-xs font-medium text-muted-foreground",
										children: link.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground",
										children: link.description
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-1 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Link" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})]
							})
						}, link.id))
					})]
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
