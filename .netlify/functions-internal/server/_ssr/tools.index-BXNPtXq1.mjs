import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as SearchX, G as LayoutGrid, S as Search, bt as ChevronLeft, i as X, n as Zap, yt as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as toolsPageQuery, n as categoriesQuery } from "./tools-data-sBnd-p4v.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./tools.index-qrvD8oCo.mjs";
import { a as matchLiveTools, n as LiveToolCard } from "./phase1-tools-BWufFB2w.mjs";
import { n as ToolCard, r as ToolCardSkeleton, t as CategoryIcon } from "./tool-card-DRuKiA3y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.index-BXNPtXq1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToolsPage() {
	const { q, category, page } = Route.useSearch();
	const navigate = useNavigate({ from: "/tools" });
	const [term, setTerm] = (0, import_react.useState)(q ?? "");
	(0, import_react.useEffect)(() => {
		setTerm(q ?? "");
	}, [q]);
	const { data: categories = [] } = useQuery(categoriesQuery);
	const activeCategory = categories.find((c) => c.slug === category);
	const { data, isPending, isError } = useQuery(toolsPageQuery({
		search: q ?? "",
		categoryId: activeCategory?.id ?? null,
		page
	}));
	const liveTools = matchLiveTools(q ?? "");
	const showLive = !category && page === 1 && liveTools.length > 0;
	const total = data?.total ?? 0;
	const totalPages = Math.max(1, Math.ceil(total / 12));
	const setSearch = (next) => {
		navigate({
			search: (prev) => ({
				...prev,
				page: 1,
				...next
			}),
			resetScroll: false
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "surface-hero border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-3.5" }), " Tool directory"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-3xl font-bold sm:text-5xl",
							children: "Every ToolNami tool in one place"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg",
							children: "Search by name, or narrow things down by category. New tools land here every week."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setSearch({ q: term.trim() || void 0 });
							},
							role: "search",
							"aria-label": "Directory tool search",
							className: "mt-8 flex max-w-2xl items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft focus-within:border-primary/40 focus-within:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "directory-search-input",
									className: "sr-only",
									children: "Search tools by name or description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "ml-2 size-5 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "directory-search-input",
									value: term,
									onChange: (e) => setTerm(e.target.value),
									placeholder: "Search tools…",
									className: "h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:text-base"
								}),
								term ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setTerm("");
										setSearch({ q: void 0 });
									},
									"aria-label": "Clear search",
									className: "inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									"aria-label": "Submit search",
									className: "inline-flex h-11 shrink-0 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95",
									children: "Search"
								})
							]
						})
					})]
				})
			}),
			showLive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3" }), " Ready to use"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-bold sm:text-3xl",
							children: "Live ToolNami tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-md text-sm text-muted-foreground sm:text-base",
							children: "Built-in tools that run instantly in your browser."
						})
					] })
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: liveTools.map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * 60, 240),
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveToolCard, { tool })
					}, tool.slug))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "group",
						"aria-label": "Filter tools by category",
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearch({ category: void 0 }),
							"aria-pressed": !category,
							className: `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${!category ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
							children: "All tools"
						}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSearch({ category: c.slug }),
							"aria-pressed": category === c.slug,
							className: `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${category === c.slug ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
								name: c.icon,
								className: "size-4"
							}), c.name]
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						"aria-live": "polite",
						children: isPending ? "Loading tools…" : `${total} tool${total === 1 ? "" : "s"}${q ? ` for “${q}”` : ""}${activeCategory ? ` in ${activeCategory.name}` : ""}`
					}),
					isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-2xl border border-destructive/30 bg-destructive/5 p-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "We couldn't load the tools"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Please check your connection and refresh the page."
						})]
					}) : isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCardSkeleton, {}, i))
					}) : total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-2xl border border-border bg-card p-12 text-center shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-lg font-semibold",
								children: "No tools matched your search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
								children: "Try a different keyword or clear the filters to browse the full directory."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setTerm("");
									navigate({ search: { page: 1 } });
								},
								className: "mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95",
								children: "Reset filters"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: data.tools.map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: Math.min(i * 60, 240),
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, {
								tool,
								category: categories.find((c) => c.id === tool.category_id)
							})
						}, tool.id))
					}),
					totalPages > 1 && !isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, {
						page,
						totalPages
					}) : null
				]
			})
		]
	});
}
function pageNumbers(page, totalPages) {
	const list = [.../* @__PURE__ */ new Set([
		1,
		totalPages,
		page,
		page - 1,
		page + 1
	])].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
	const out = [];
	list.forEach((p, i) => {
		if (i > 0 && p - list[i - 1] > 1) out.push("gap");
		out.push(p);
	});
	return out;
}
function Pagination({ page, totalPages }) {
	const base = "inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-xl border px-3 text-sm font-medium transition-all";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "mt-12 flex flex-wrap items-center justify-center gap-2",
		"aria-label": "Pagination",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tools",
				search: (prev) => ({
					...prev,
					page: Math.max(1, page - 1)
				}),
				resetScroll: false,
				disabled: page === 1,
				"aria-disabled": page === 1,
				className: `${base} border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-40`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Previous"]
			}),
			pageNumbers(page, totalPages).map((p, i) => p === "gap" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-1 text-sm text-muted-foreground",
				children: "…"
			}, `gap-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tools",
				search: (prev) => ({
					...prev,
					page: p
				}),
				resetScroll: false,
				"aria-current": p === page ? "page" : void 0,
				className: `${base} ${p === page ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
				children: p
			}, p)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tools",
				search: (prev) => ({
					...prev,
					page: Math.min(totalPages, page + 1)
				}),
				resetScroll: false,
				disabled: page === totalPages,
				"aria-disabled": page === totalPages,
				className: `${base} border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-40`,
				children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
			})
		]
	});
}
//#endregion
export { ToolsPage as component };
