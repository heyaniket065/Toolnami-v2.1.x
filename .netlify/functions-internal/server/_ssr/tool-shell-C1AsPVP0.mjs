import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Z as Heart, _ as Sparkles, d as TrendingUp, gt as CircleQuestionMark, q as Layers, xt as ChevronDown, y as ShieldCheck, yt as ChevronRight } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./use-auth-L4eD_EXa.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as LiveToolCard, r as findLiveTool } from "./phase1-tools-BWufFB2w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tool-shell-C1AsPVP0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function toolJsonLd(opts) {
	return JSON.stringify([{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: `${opts.name} — ToolNami`,
		applicationCategory: "UtilitiesApplication",
		operatingSystem: "Any (browser-based)",
		url: opts.url,
		description: opts.description,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD"
		},
		publisher: {
			"@type": "Organization",
			name: "ToolNami"
		}
	}, {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: opts.faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	}]);
}
function ToolShell({ title, tagline, categoryLabel, thumbnail, badge, dynamicUses, toolSlug, relatedSlugs, children, about, steps, benefits, faqs, seo }) {
	const badgeToneStyles = badge ? {
		trending: "bg-sky-500/15 text-sky-400 border-sky-500/30",
		popular: "bg-amber-500/15 text-amber-300 border-amber-500/30",
		hot: "bg-rose-500/15 text-rose-400 border-rose-500/30",
		new: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
		featured: "bg-purple-500/15 text-purple-300 border-purple-500/30",
		fast: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
		top: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
		recommended: "bg-blue-500/15 text-blue-300 border-blue-500/30"
	}[badge.tone] : null;
	const { isFavorite, toggleFavorite } = useAuth();
	const favorited = toolSlug ? isFavorite(toolSlug) : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "surface-hero border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Breadcrumb",
							className: "flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "transition-colors hover:text-primary",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tools",
									search: { page: 1 },
									className: "transition-colors hover:text-primary",
									children: "Tools"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-center justify-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-accent" }),
										" ",
										categoryLabel
									]
								}),
								badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold shadow-soft ${badgeToneStyles}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: badge.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: badge.label })]
								}) : null,
								dynamicUses ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									suppressHydrationWarning: true,
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											suppressHydrationWarning: true,
											children: dynamicUses
										})
									]
								}) : null,
								toolSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void toggleFavorite(toolSlug, title),
									className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-soft transition-all active:scale-95 cursor-pointer ${favorited ? "border-rose-500/40 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25" : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-border/80"}`,
									title: favorited ? "Remove from favorites" : "Save to favorites",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `size-3.5 ${favorited ? "fill-rose-500 text-rose-500" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: favorited ? "Saved" : "Save" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-3xl font-bold sm:text-5xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg",
							children: tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " Runs entirely in your browser — your files never leave your device"]
						})
					] })
				})
			}),
			thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-3xl bg-transparent shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: thumbnail,
						alt: `${title} Official Banner`,
						referrerPolicy: "no-referrer",
						width: 1200,
						height: 750,
						className: "aspect-[16/10] w-full h-full object-cover block rounded-3xl"
					})
				}) })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8",
					children
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "About this tool"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: about
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold sm:text-3xl",
							children: "How to use it"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-3",
							children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-muted-foreground sm:text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xs font-bold text-primary",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pt-0.5",
									children: s
								})]
							}, s))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-bold sm:text-3xl",
					children: [
						"Why use ",
						title,
						"?"
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * 70, 240),
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: b.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: b.body
							})]
						})
					}, b.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-2xl font-bold sm:text-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-6 text-primary" }), " Frequently asked questions"]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-6",
							children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: f.q,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-left text-sm font-semibold sm:text-base",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: f.a
								})]
							}, f.q))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold sm:text-2xl",
						children: seo.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground",
						children: seo.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 40)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tools",
						search: { page: 1 },
						className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95",
						children: "Browse more tools"
					})
				] })
			}),
			relatedSlugs && relatedSlugs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-card/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5" }), " More Utilities"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-bold sm:text-3xl",
							children: "Related Tools You Might Need"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "text-sm font-medium text-primary hover:underline",
							children: "View all tools →"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: relatedSlugs.map((slug, i) => {
							const tool = findLiveTool(slug);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveToolCard, { tool })
							}, slug);
						})
					})]
				})
			}) : null
		]
	});
}
//#endregion
export { toolJsonLd as n, ToolShell as t };
