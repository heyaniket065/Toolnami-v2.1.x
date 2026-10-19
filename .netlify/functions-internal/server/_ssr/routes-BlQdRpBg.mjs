import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Search, _ as Sparkles, et as Gauge, kt as ArrowRight, o as Wallet, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as categoriesQuery, r as featuredToolsQuery } from "./tools-data-sBnd-p4v.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as LiveToolCard, t as LIVE_TOOLS } from "./phase1-tools-BWufFB2w.mjs";
import { n as ToolCard, r as ToolCardSkeleton, t as CategoryIcon } from "./tool-card-DRuKiA3y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BlQdRpBg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRUST = [
	{
		Icon: Gauge,
		title: "Instant results",
		body: "Tools open and run in your browser — no uploads to wait on, no processing queues."
	},
	{
		Icon: ShieldCheck,
		title: "Private by design",
		body: "We collect as little as possible and process your files locally wherever we can."
	},
	{
		Icon: Wallet,
		title: "Free to use",
		body: "The everyday essentials stay free — no signup wall before you can get work done."
	}
];
function Home() {
	const navigate = useNavigate();
	const [term, setTerm] = (0, import_react.useState)("");
	const { data: categories = [] } = useQuery(categoriesQuery);
	const { data: featured, isPending } = useQuery(featuredToolsQuery);
	const search = (e) => {
		e.preventDefault();
		navigate({
			to: "/tools",
			search: {
				q: term.trim() || void 0,
				page: 1
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "surface-hero relative overflow-hidden border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-accent" }), " A rising wave of useful tools"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-bold sm:text-6xl",
								children: [
									"Every small online task,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-brand",
										children: "solved in seconds"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 140,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "ToolNami collects the tools you keep googling — PDF, image, text, SEO and developer utilities — into one fast, clean and free platform."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: search,
								role: "search",
								"aria-label": "Sitewide tool search",
								className: "mx-auto mt-9 flex w-full max-w-xl items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft transition-all focus-within:border-primary/40 focus-within:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "home-search-input",
										className: "sr-only",
										children: "Search tools"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "ml-2 size-5 shrink-0 text-muted-foreground",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "home-search-input",
										value: term,
										onChange: (e) => setTerm(e.target.value),
										placeholder: "What do you need to do today?",
										className: "h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:text-base"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										"aria-label": "Submit search query",
										className: "inline-flex h-11 shrink-0 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 sm:px-5",
										children: "Search"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 260,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/tools",
									search: { page: 1 },
									className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95 sm:w-auto",
									children: ["Explore Tools ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "inline-flex w-full items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-all hover:border-primary/40 hover:text-primary active:scale-95 sm:w-auto",
									children: "Why ToolNami?"
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), " Ready to use"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-bold sm:text-3xl",
							children: "Popular Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-md text-sm text-muted-foreground sm:text-base",
							children: "Our built-in tools run instantly in your browser — nothing to install, nothing uploaded."
						})
					] })
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: LIVE_TOOLS.map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * 70, 280),
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveToolCard, { tool })
					}, tool.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Popular right now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm text-muted-foreground sm:text-base",
						children: "A handful of favourites to get you started."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tools",
						search: { page: 1 },
						className: "group inline-flex items-center gap-2 text-sm font-semibold text-primary",
						children: ["View all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: isPending ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCardSkeleton, {}, i)) : (featured ?? []).map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * 70, 280),
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, {
							tool,
							category: categories.find((c) => c.id === tool.category_id)
						})
					}, tool.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Browse by category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm text-muted-foreground sm:text-base",
						children: "Pick a shelf and see everything on it."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: Math.min(i * 50, 250),
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/tools",
								search: {
									category: c.slug,
									page: 1
								},
								className: "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
											name: c.icon,
											className: "size-5"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-base font-semibold",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 line-clamp-2 text-sm text-muted-foreground",
										children: c.description
									})
								]
							})
						}, c.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-lg text-2xl font-bold sm:text-3xl",
					children: "Built to be the tools tab you actually keep open"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-3",
					children: TRUST.map(({ Icon, title, body }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-2xl border border-border bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: body
								})
							]
						})
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-hero relative overflow-hidden rounded-3xl border border-border p-8 text-center shadow-soft sm:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto max-w-xl text-2xl font-bold sm:text-4xl",
							children: "The whole toolbox is one tap away"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base",
							children: "Search the full directory, filter by category, and find the exact tool you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95",
							children: ["Explore All Tools ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}) })
			})
		]
	});
}
//#endregion
export { Home as component };
