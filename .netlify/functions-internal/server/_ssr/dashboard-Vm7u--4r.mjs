import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./reveal-Cu0-STBn.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as LogOut, F as Monitor, P as Moon, U as LoaderCircle, X as History, Z as Heart, a as Wrench, f as Trash2, p as Sun, s as UserRound, st as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useAuth } from "./use-auth-L4eD_EXa.mjs";
import { n as applyTheme } from "./theme-toggle-DCejl7Dg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Vm7u--4r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEMES = [
	{
		value: "light",
		label: "Light",
		Icon: Sun
	},
	{
		value: "dark",
		label: "Dark",
		Icon: Moon
	},
	{
		value: "system",
		label: "System",
		Icon: Monitor
	}
];
function DashboardPage() {
	const { user, profile, favorites, history, toggleFavorite, updateProfileName, updateThemePreference, signOut } = useAuth();
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [savingName, setSavingName] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("system");
	(0, import_react.useEffect)(() => {
		setDisplayName(profile?.display_name ?? user?.displayName ?? "");
		setTheme(profile?.theme_preference ?? "system");
	}, [profile, user]);
	const saveName = async (e) => {
		e.preventDefault();
		if (!user) return;
		setSavingName(true);
		try {
			await updateProfileName(displayName);
		} catch {
			toast.error("Could not update profile name.");
		} finally {
			setSavingName(false);
		}
	};
	const chooseTheme = async (value) => {
		setTheme(value);
		const resolved = value === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : value;
		applyTheme(resolved);
		if (value === "system") localStorage.removeItem("toolnami-theme");
		else localStorage.setItem("toolnami-theme", value);
		try {
			await updateThemePreference(value);
		} catch {}
	};
	const field = "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";
	const card = "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8";
	const name = profile?.display_name || user?.displayName || user?.email?.split("@")[0] || "Member";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-soft text-xl font-bold text-primary border border-primary/20 shadow-sm",
						children: profile?.avatar_url || user?.photoURL ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile?.avatar_url || user?.photoURL || "",
							alt: name,
							className: "size-full object-cover",
							referrerPolicy: "no-referrer"
						}) : name.slice(0, 1).toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "truncate text-3xl font-bold tracking-tight",
							children: ["Hi, ", name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-sm text-muted-foreground flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user?.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
								children: "Connected via Firebase"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void signOut(),
						className: "ml-auto inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold transition-all hover:border-destructive/40 hover:text-destructive active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Log out"]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "settings",
						className: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-[18px] text-primary" }), " Profile details"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Your display name is saved securely in your Firestore profile."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: saveName,
								className: "mt-5 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5",
									children: "Display Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: displayName,
									onChange: (e) => setDisplayName(e.target.value),
									placeholder: "Your Name",
									className: field
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: savingName,
									className: "inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
									children: [savingName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Save changes"]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "theme",
						className: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-[18px] text-primary" }), " Theme preferences"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Choose how ToolNami looks. Synced to your Firebase account."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-3 gap-2",
								children: THEMES.map(({ value, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void chooseTheme(value),
									"aria-pressed": theme === value,
									className: `flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-semibold transition-all active:scale-95 ${theme === value ? "border-primary/50 bg-primary-soft text-primary" : "border-border bg-background text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), label]
								}, value))
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "favorites",
						className: card,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-[18px] text-rose-500 fill-rose-500" }), " Saved favorites"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Quick access to tools you use frequently, persisted in Firestore."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground",
								children: [favorites.length, " saved"]
							})]
						}), favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "No favorites saved yet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Browse through any tool and click \"Favorite\" to bookmark it here."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tools",
									search: { page: 1 },
									className: "mt-4 inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95",
									children: "Explore tools"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
							children: favorites.map((fav) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/40 hover:shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: `/tools/${fav.toolSlug}`,
									className: "min-w-0 flex-1 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-8 rounded-lg bg-primary-soft flex items-center justify-center text-primary shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold group-hover:text-primary transition-colors",
											children: fav.toolTitle
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Open tool →"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void toggleFavorite(fav.toolSlug, fav.toolTitle),
									"aria-label": "Remove favorite",
									className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}, fav.id))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "history",
						className: card,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-[18px] text-primary" }), " Tool execution history"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Recent activities processed on your account in this session and past sessions."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground",
								children: [history.length, " logged"]
							})]
						}), history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "No recent executions recorded"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Whenever you run PDF, Image, or AI generator tools, records will appear here."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2.5",
							children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: item.toolTitle
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground",
											children: [
												new Date(item.runAt).toLocaleDateString(),
												" at",
												" ",
												new Date(item.runAt).toLocaleTimeString([], {
													hour: "2-digit",
													minute: "2-digit"
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: item.summary
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: `/tools/${item.toolSlug}`,
									className: "text-xs font-semibold text-primary hover:underline shrink-0 flex items-center gap-1",
									children: ["Run again ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
								})]
							}, item.id))
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
