import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./reveal-DfkjJJ69.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as History, N as Moon, P as Monitor, R as LogOut, V as LoaderCircle, Y as Heart, a as Wrench, f as Trash2, it as ExternalLink, p as Sun, s as UserRound } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useAuth } from "./use-auth-ko7F23Oo.mjs";
import { n as applyTheme } from "./theme-toggle-BzdRzgQm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DhR_af_m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/dashboard.tsx?tsr-split=component";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-soft text-xl font-bold text-primary border border-primary/20 shadow-sm",
						children: profile?.avatar_url || user?.photoURL ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: profile?.avatar_url || user?.photoURL || "",
							alt: name,
							className: "size-full object-cover",
							referrerPolicy: "no-referrer"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 54
						}, this) : name.slice(0, 1).toUpperCase()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "truncate text-3xl font-bold tracking-tight",
							children: ["Hi, ", name]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "truncate text-sm text-muted-foreground flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: user?.email }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
								children: "Connected via Firebase"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => void signOut(),
						className: "ml-auto inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold transition-all hover:border-destructive/40 hover:text-destructive active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this), " Log out"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 40,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "settings",
						className: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { className: "size-[18px] text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 15
								}, this), " Profile details"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Your display name is saved securely in your Firestore profile."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit: saveName,
								className: "mt-5 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5",
									children: "Display Name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: displayName,
									onChange: (e) => setDisplayName(e.target.value),
									placeholder: "Your Name",
									className: field
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									disabled: savingName,
									className: "inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95 disabled:opacity-60",
									children: [savingName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 31
									}, this) : null, "Save changes"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "theme",
						className: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-[18px] text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 15
								}, this), " Theme preferences"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Choose how ToolNami looks. Synced to your Firebase account."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-5 grid grid-cols-3 gap-2",
								children: THEMES.map(({ value, label, Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => void chooseTheme(value),
									"aria-pressed": theme === value,
									className: `flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-semibold transition-all active:scale-95 ${theme === value ? "border-primary/50 bg-primary-soft text-primary" : "border-border bg-background text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 19
									}, this), label]
								}, value, true, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "favorites",
						className: card,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "size-[18px] text-rose-500 fill-rose-500" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 19
								}, this), " Saved favorites"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Quick access to tools you use frequently, persisted in Firestore."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground",
								children: [favorites.length, " saved"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this), favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-medium",
									children: "No favorites saved yet"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Browse through any tool and click \"Favorite\" to bookmark it here."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 154,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/tools",
									search: { page: 1 },
									className: "mt-4 inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95",
									children: "Explore tools"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 39
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
							children: favorites.map((fav) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/40 hover:shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: `/tools/${fav.toolSlug}`,
									className: "min-w-0 flex-1 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "size-8 rounded-lg bg-primary-soft flex items-center justify-center text-primary shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrench, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 166,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "truncate text-sm font-semibold group-hover:text-primary transition-colors",
											children: fav.toolTitle
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 169,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Open tool →"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 172,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 168,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => void toggleFavorite(fav.toolSlug, fav.toolTitle),
									"aria-label": "Remove favorite",
									className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 176,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 175,
									columnNumber: 21
								}, this)]
							}, fav.id, true, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 39
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "history",
						className: card,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(History, { className: "size-[18px] text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 191,
									columnNumber: 19
								}, this), " Tool execution history"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Recent activities processed on your account in this session and past sessions."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground",
								children: [history.length, " logged"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 188,
							columnNumber: 13
						}, this), history.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 rounded-2xl border border-dashed border-border p-8 text-center bg-muted/20",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm font-medium",
								children: "No recent executions recorded"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Whenever you run PDF, Image, or AI generator tools, records will appear here."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 37
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 space-y-2.5",
							children: history.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-foreground",
											children: item.toolTitle
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
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
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 212,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: item.summary
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: `/tools/${item.toolSlug}`,
									className: "text-xs font-semibold text-primary hover:underline shrink-0 flex items-center gap-1",
									children: ["Run again ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 223,
										columnNumber: 33
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 222,
									columnNumber: 21
								}, this)]
							}, item.id, true, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 38
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 10
	}, this);
}
//#endregion
export { DashboardPage as component };
