import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as LogOut, E as RotateCcw, J as Instagram, K as LayoutDashboard, L as Menu, M as Phone, R as MapPin, S as Search, St as Check, Tt as Bot, U as LoaderCircle, W as Linkedin, Z as Heart, _ as Sparkles, b as Settings, ht as Circle, i as X, it as Facebook, n as Zap, r as Youtube, s as UserRound, u as Twitter, x as Send, xt as ChevronDown, y as ShieldCheck, yt as ChevronRight, z as Mail } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-CaCwB8Wz.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as auth, r as useAuth, t as AuthProvider } from "./use-auth-L4eD_EXa.mjs";
import { t as Route$15 } from "./auth-CijrTF7M.mjs";
import { t as ThemeToggle } from "./theme-toggle-DCejl7Dg.mjs";
import { t as FormattedMarkdown } from "./formatted-markdown-H6RU-c3b.mjs";
import { n as getToolBySlug } from "./ssr.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as supabase } from "./client-CX2Xukze.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$16 } from "./tools.index-qrvD8oCo.mjs";
import { n as toolJsonLd } from "./tool-shell-C1AsPVP0.mjs";
import { t as Route$17 } from "./tools._slug-DDHa8k7d.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.image-compressor-D-Xi8IvM.mjs";
import { n as TOOL_DATA$1, t as TITLE$1 } from "./tools.jpg-to-pdf-CufX1VWc.mjs";
import { n as TOOL_DATA$2, t as TITLE$2 } from "./tools.pdf-compressor-DTWPPpAH.mjs";
import { n as TOOL_DATA$3, t as TITLE$3 } from "./tools.pdf-merge-CBrye_FD.mjs";
import { n as TOOL_DATA$4, t as TITLE$4 } from "./tools.qr-code-generator-De14gQb5.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DFOKUQSa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-tTZ24hgg.css";
/**
* Production Client Error Reporting for AI Studio & ToolNami
*/
function reportAppError(error, context = {}) {
	if (typeof window === "undefined") return;
	const message = error instanceof Response ? `HTTP Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	console.error("[ToolNami Runtime]", {
		message,
		stack,
		route: window.location.pathname,
		...context
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var SUGGESTIONS = [
	"PDF Merger",
	"Image Compressor",
	"JSON Formatter",
	"Password Generator"
];
function SearchDialog() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const go = (q) => {
		setOpen(false);
		setValue("");
		navigate({
			to: "/tools",
			search: {
				q: q || void 0,
				page: 1
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setOpen(true),
		"aria-label": "Search tools",
		className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-[18px]" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "rounded-2xl sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-lg",
				children: "Search ToolNami"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					go(value);
				},
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-xl border border-input bg-background px-3 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value,
						onChange: (e) => setValue(e.target.value),
						placeholder: "Search for a tool, e.g. compress image",
						className: "h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(s),
						className: "rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary",
						children: s
					}, s))
				})]
			})]
		})
	})] });
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function initials(name) {
	return name.split(/[\s._-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
function UserMenu() {
	const { user, profile, loading, signOut } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "size-10 shrink-0 animate-pulse rounded-full bg-muted",
		"aria-hidden": true
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/auth",
		search: { mode: "login" },
		className: "inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary active:scale-95 sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: "Sign in"
		})]
	});
	const name = profile?.display_name || user.email?.split("@")[0] || "Member";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		"aria-label": "Account menu",
		className: "inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-primary-soft text-sm font-bold text-primary transition-all hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95",
		children: profile?.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: profile.avatar_url,
			alt: name,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: initials(name) || "T" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-60 rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
				className: "flex flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-sm font-semibold",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-xs font-normal text-muted-foreground",
					children: user.email
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-4" }), " Dashboard"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					hash: "favorites",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), " Saved favorites"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					hash: "settings",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), " Account settings"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: () => void signOut(),
				className: "cursor-pointer gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Log out"]
			})
		]
	})] });
}
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Tools",
		to: "/tools"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-soft" : "border-b border-transparent bg-background/60 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Main",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-primary bg-primary-soft" },
						className: "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:bg-primary-soft/70",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-110 active:scale-95 lg:inline-flex",
							children: "Explore Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-[18px]" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-80 border-b" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: item.to === "/" },
					activeProps: { className: "text-primary bg-primary-soft" },
					className: "rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tools",
					search: { page: 1 },
					onClick: () => setOpen(false),
					className: "mt-2 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground",
					children: "Explore Tools"
				})]
			})
		})]
	});
}
var VERIFIED_SOCIALS = [
	{
		label: "YouTube (@luminalM065)",
		href: "https://youtube.com/@luminalM065",
		Icon: Youtube,
		color: "hover:text-red-500 hover:border-red-500/40"
	},
	{
		label: "Instagram (@hey_anik_et_065)",
		href: "https://www.instagram.com/hey_anik_et_065",
		Icon: Instagram,
		color: "hover:text-pink-500 hover:border-pink-500/40"
	},
	{
		label: "LinkedIn (/in/aniket-bhalerao-007)",
		href: "https://www.linkedin.com/in/aniket-bhalerao-007",
		Icon: Linkedin,
		color: "hover:text-sky-500 hover:border-sky-500/40"
	},
	{
		label: "X / Twitter (@aniketbhalerao)",
		href: "https://x.com/aniketbhalerao",
		Icon: Twitter,
		color: "hover:text-foreground hover:border-foreground/40"
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/19cdfcUFpw/",
		Icon: Facebook,
		color: "hover:text-blue-500 hover:border-blue-500/40"
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const subscribe = async (e) => {
		e.preventDefault();
		const value = email.trim();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			toast.error("Please enter a valid email address.");
			return;
		}
		setLoading(true);
		const { error } = await supabase.from("newsletter_subscribers").insert({ email: value });
		setLoading(false);
		if (error) {
			toast.error("We couldn't sign you up. Please try again.");
			return;
		}
		setEmail("");
		toast.success("You're on the list. Thanks for subscribing!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-card/75 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "ToolNami is a high-performance web utility platform engineered by LuminaLM. Free, browser-first tools for converting, compressing, calculating, and coding without software installations or telemetry tracking."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: subscribe,
							className: "mt-6 flex max-w-sm gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@email.com",
								"aria-label": "Email address for updates",
								className: "h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-105 active:scale-95 disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Subscribe"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2.5",
							children: [VERIFIED_SOCIALS.map(({ label, href, Icon, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noreferrer noopener",
								"aria-label": label,
								title: label,
								className: `inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 shadow-xs ${color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:support.neoluxetrust@gmail.com",
								"aria-label": "Email support",
								title: "support.neoluxetrust@gmail.com",
								className: "inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide uppercase text-foreground",
					children: "Platform & Tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition-colors hover:text-primary",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "transition-colors hover:text-primary",
							children: "All 80+ Tools Directory"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: {
								category: "pdf",
								page: 1
							},
							className: "transition-colors hover:text-primary",
							children: "PDF Utilities"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: {
								category: "image",
								page: 1
							},
							className: "transition-colors hover:text-primary",
							children: "Image Compressors"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools",
							search: {
								category: "developer",
								page: 1
							},
							className: "transition-colors hover:text-primary",
							children: "Developer & QR Code"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "transition-colors hover:text-primary",
							children: "About LuminaLM"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "transition-colors hover:text-primary",
							children: "Contact & Support"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide uppercase text-foreground",
					children: "Official Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs leading-relaxed",
								children: "LuminaLM Innovations / Neoluxe Trust Hub, Pune, Maharashtra 411001, India"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919876543210",
								className: "text-xs transition-colors hover:text-primary",
								children: "+91 98765 43210"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:support.neoluxetrust@gmail.com",
								className: "text-xs break-all transition-colors hover:text-primary",
								children: "support.neoluxetrust@gmail.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-2 border-t border-border/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "text-xs transition-colors hover:text-primary",
								children: "Privacy Policy & Security"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-xs transition-colors hover:text-primary",
							children: "Terms of Service"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/llms.txt",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline",
							children: "/llms.txt (AI Manifest)"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ToolNami. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Architected by Aniket Bhalerao ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: "LuminaLM"
					}),
					" — Think Better. Build Better."
				] })]
			})
		})]
	});
}
var INITIAL_MESSAGES = [{
	id: "welcome-1",
	role: "assistant",
	content: "Hello! I am your **ToolNami On-Site Expert**. I have full context of all **80 free tools**, privacy safeguards, supported formats, and navigation.\n\nHow can I help you today?",
	timestamp: "Just now",
	suggestedTools: [{
		slug: "pdf-compressor",
		title: "PDF Compressor",
		to: "/tools/pdf-compressor",
		summary: "Reduce PDF file size by up to 90% while keeping high visual clarity.",
		image: "/assets/tools/3d-pdf-compressor.png",
		categoryLabel: "PDF Tools"
	}, {
		slug: "password-generator",
		title: "Password Generator",
		to: "/tools/password-generator",
		summary: "Generate ultra-secure, cryptographically random passwords.",
		image: "/assets/tools/password-generator.png",
		categoryLabel: "Developer Tools"
	}]
}];
var QUICK_PROMPTS = [
	"How do I compress a PDF?",
	"Generate a strong password",
	"Which tool removes backgrounds?",
	"Is my document data private?",
	"Show developer tools",
	"Calculate my loan EMI"
];
function AiAssistant() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isMinimized, setIsMinimized] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)(INITIAL_MESSAGES);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const messagesEndRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		if (isOpen && !isMinimized) {
			scrollToBottom();
			inputRef.current?.focus();
		}
	}, [
		isOpen,
		isMinimized,
		messages
	]);
	const handleSend = async (textToSend) => {
		const text = (textToSend || inputValue).trim();
		if (!text || isLoading) return;
		const userMessage = {
			id: `user-${Date.now()}`,
			role: "user",
			content: text,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsLoading(true);
		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: [...messages, userMessage].map((m) => ({
					role: m.role,
					content: m.content
				})) })
			});
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			const assistantMessage = {
				id: `assistant-${Date.now()}`,
				role: "assistant",
				content: data.reply || "I am here to help you navigate ToolNami's 80 tools.",
				timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				}),
				suggestedTools: data.suggestedTools || []
			};
			setMessages((prev) => [...prev, assistantMessage]);
		} catch {
			const fallbackTools = findClientFallbackTools(text);
			const assistantMessage = {
				id: `assistant-${Date.now()}`,
				role: "assistant",
				content: "ToolNami provides 80 dedicated browser tools for PDF, Image, Text, and Code. All operations run 100% locally on your machine with zero server uploads.",
				timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				}),
				suggestedTools: fallbackTools
			};
			setMessages((prev) => [...prev, assistantMessage]);
		} finally {
			setIsLoading(false);
		}
	};
	const handleReset = () => {
		setMessages(INITIAL_MESSAGES);
	};
	function findClientFallbackTools(query) {
		const q = query.toLowerCase();
		return [
			"pdf-compressor",
			"pdf-merge",
			"image-compressor",
			"password-generator",
			"qr-code-generator"
		].map((s) => getToolBySlug(s)).filter((t) => !!t).filter((t) => t.title.toLowerCase().includes(q) || t.slug.includes(q) || q.length < 5).slice(0, 2).map((t) => ({
			slug: t.slug,
			title: t.title,
			to: t.to,
			summary: t.summary,
			image: t.image,
			categoryLabel: t.categoryLabel
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 right-6 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => {
				setIsOpen(true);
				setIsMinimized(false);
			},
			id: "ai-assistant-launcher",
			className: "group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-card/95 hover:bg-card text-foreground backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95",
			"aria-label": "Open ToolNami AI Assistant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 -z-10 animate-pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -top-1 -right-1 flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left hidden sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-bold text-foreground flex items-center gap-1.5 leading-tight",
						children: ["ToolNami AI", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold",
							children: "80 Tools"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground font-medium",
						children: "Ask assistant & guides"
					})]
				})
			]
		})
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "ai-assistant-modal",
		className: `fixed z-50 transition-all duration-300 ${isMinimized ? "bottom-6 right-6 w-72 rounded-2xl bg-card/95 border border-border shadow-2xl p-3" : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl shadow-black/20 dark:shadow-black/60 flex flex-col overflow-hidden text-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3.5 bg-muted/60 dark:bg-muted/30 border-b border-border select-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-bold text-foreground flex items-center gap-1.5",
					children: ["ToolNami Assistant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] text-muted-foreground flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3 h-3 text-emerald-500" }), "80 Tools • 100% Client-Side Safe"]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleReset,
						title: "Restart Chat",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Reset Conversation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsMinimized(!isMinimized),
						title: isMinimized ? "Expand" : "Minimize",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Minimize",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 transform transition-transform ${isMinimized ? "rotate-180" : ""}` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsOpen(false),
						title: "Close",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Close Assistant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})
				]
			})]
		}), !isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border",
				children: [
					messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm text-sm ${message.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted/70 text-foreground border border-border rounded-tl-sm"}`,
							children: [message.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormattedMarkdown, {
								content: message.content,
								onLinkClick: () => setIsOpen(false),
								className: "text-foreground text-sm leading-relaxed"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed",
								children: message.content
							}), message.suggestedTools && message.suggestedTools.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 pt-3 border-t border-border space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3 text-amber-500" }), "Recommended Tools"]
								}), message.suggestedTools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: tool.to,
									onClick: () => setIsOpen(false),
									className: "group block p-2 rounded-xl bg-card hover:bg-muted/80 border border-border transition-all text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-8 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: tool.image,
												alt: tool.title,
												className: "w-full h-full object-contain block",
												referrerPolicy: "no-referrer"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: tool.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-primary font-mono ml-1 font-bold",
													children: "Open →"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground truncate",
												children: tool.summary
											})]
										})]
									})
								}, tool.slug))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground mt-1 px-1",
							children: message.timestamp
						})]
					}, message.id)),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-muted-foreground text-xs px-2 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-primary animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Consulting ToolNami directory..." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2 bg-muted/30 border-t border-border overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5",
				children: QUICK_PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleSend(prompt),
					disabled: isLoading,
					className: "text-xs px-2.5 py-1 rounded-full bg-muted/80 hover:bg-muted text-foreground border border-border transition-colors flex-shrink-0 active:scale-95 disabled:opacity-50 font-medium",
					children: prompt
				}, prompt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					handleSend();
				},
				className: "p-3 bg-muted/40 border-t border-border flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "text",
					value: inputValue,
					onChange: (e) => setInputValue(e.target.value),
					placeholder: "Ask about any tool, format, or privacy...",
					disabled: isLoading,
					className: "flex-1 bg-card text-foreground placeholder-muted-foreground text-sm px-3.5 py-2.5 rounded-xl border border-border focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: !inputValue.trim() || isLoading,
					className: "p-2.5 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-medium transition-colors shadow-md disabled:shadow-none",
					"aria-label": "Send Message",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
				})]
			})
		] })]
	})] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var FB_PIXEL_ID = "1182479233306852";
var pixelInitialized = false;
/**
* Checks whether user has accepted analytics/tracking consent
*/
function hasTrackingConsent() {
	if (typeof window === "undefined") return false;
	try {
		return localStorage.getItem("toolnami-cookie-consent") !== "denied";
	} catch {
		return true;
	}
}
/**
* Initialize Facebook Pixel cleanly without render-blocking scripts
*/
function initFacebookPixel() {
	if (typeof window === "undefined" || pixelInitialized) return;
	if (!hasTrackingConsent()) return;
	try {
		if (!window.fbq) {
			const n = window.fbq = function() {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!window._fbq) window._fbq = n;
			n.push = n;
			n.loaded = true;
			n.version = "2.0";
			n.queue = [];
			const t = document.createElement("script");
			t.async = true;
			t.src = "https://connect.facebook.net/en_US/fbevents.js";
			const s = document.getElementsByTagName("script")[0];
			s?.parentNode?.insertBefore(t, s);
		}
		window.fbq?.("init", FB_PIXEL_ID);
		window.fbq?.("track", "PageView");
		pixelInitialized = true;
	} catch (err) {
		console.warn("Analytics init warning:", err);
	}
}
/**
* Track standard events safely
*/
function trackFbEvent(eventName, params) {
	if (typeof window === "undefined" || !hasTrackingConsent()) return;
	try {
		if (window.fbq) window.fbq("track", eventName, params);
	} catch (err) {
		console.debug("Analytics track error:", err);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90",
						children: "Return to Home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportAppError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A client processing issue occurred. You can reload the view or return to the directory."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=5"
			},
			{ title: "ToolNami — Fast, Free Online Productivity & Developer Tools" },
			{
				name: "description",
				content: "ToolNami (toolnami.ai.studio) is a privacy-first collection of 80+ free browser tools for PDF processing, image compression, formatting, calculating, and coding without downloads."
			},
			{
				name: "author",
				content: "Aniket Bhalerao — LuminaLM Innovations"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/"
			},
			{
				property: "og:title",
				content: "ToolNami — Fast, Free Online Productivity & Developer Tools"
			},
			{
				property: "og:description",
				content: "High-performance client-side productivity utilities: PDF rotator, image compressor, converters, formatters, and calculators by LuminaLM."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				property: "og:image:width",
				content: "512"
			},
			{
				property: "og:image:height",
				content: "512"
			},
			{
				property: "og:image:alt",
				content: "ToolNami Anime Emblem Badge Logo"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "ToolNami — Fast, Free Online Productivity & Developer Tools"
			},
			{
				name: "twitter:description",
				content: "High-performance client-side productivity utilities: PDF rotator, image compressor, converters, formatters, and calculators."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "theme-color",
				content: "#00d4ff"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://toolnami.com/"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon-32.png",
				type: "image/png",
				sizes: "32x32"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
var themeScript = `(function(){try{var t=localStorage.getItem('toolnami-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=t;}catch(e){}})();`;
var schemaOrgJsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": "https://toolnami.com/#website",
			url: "https://toolnami.com",
			name: "ToolNami",
			alternateName: ["ToolNami AI Studio", "ToolNami by LuminaLM"],
			description: "Fast, free, and privacy-first online tools for PDF processing, image compression, formatting, calculating, and coding.",
			inLanguage: "en-US",
			potentialAction: {
				"@type": "SearchAction",
				target: {
					"@type": "EntryPoint",
					urlTemplate: "https://toolnami.com/tools?q={search_term_string}"
				},
				"query-input": "required name=search_term_string"
			}
		},
		{
			"@type": "LocalBusiness",
			"@id": "https://toolnami.com/#business",
			name: "ToolNami — LuminaLM Innovations",
			image: "https://toolnami.com/logo-512.png",
			url: "https://toolnami.com",
			telephone: "+91-9876543210",
			email: "support.neoluxetrust@gmail.com",
			priceRange: "Free",
			openingHours: "Mo-Su 00:00-24:00",
			address: {
				"@type": "PostalAddress",
				streetAddress: "LuminaLM Innovations, Neoluxe Trust Hub",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				postalCode: "411001",
				addressCountry: "IN"
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: "18.5204",
				longitude: "73.8567"
			},
			sameAs: [
				"https://youtube.com/@luminalM065",
				"https://www.instagram.com/hey_anik_et_065",
				"https://www.linkedin.com/in/aniket-bhalerao-007",
				"https://x.com/aniketbhalerao",
				"https://www.facebook.com/share/19cdfcUFpw/",
				"https://github.com/heyaniket065"
			]
		},
		{
			"@type": "Organization",
			"@id": "https://toolnami.com/#organization",
			name: "ToolNami by LuminaLM",
			url: "https://toolnami.com",
			logo: "https://toolnami.com/logo-512.png",
			founder: {
				"@type": "Person",
				name: "Aniket Bhalerao",
				jobTitle: "Creator & Founder of LuminaLM",
				sameAs: [
					"https://youtube.com/@luminalM065",
					"https://www.instagram.com/hey_anik_et_065",
					"https://www.linkedin.com/in/aniket-bhalerao-007"
				]
			},
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "Customer Support",
				telephone: "+91-9876543210",
				email: "support.neoluxetrust@gmail.com",
				availableLanguage: [
					"English",
					"Hindi",
					"Marathi"
				]
			}
		},
		{
			"@type": "WebApplication",
			"@id": "https://toolnami.com/#app",
			name: "ToolNami Online Tools Suite",
			url: "https://toolnami.com",
			applicationCategory: "UtilitiesApplication",
			operatingSystem: "Any (Modern Web Browser)",
			description: "High-performance client-side productivity utilities: PDF tools, image compressor, code formatters, and financial calculators.",
			browserRequirements: "Requires JavaScript. Requires HTML5.",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD"
			}
		}
	]
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeScript } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: schemaOrgJsonLd }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		initFacebookPixel();
		trackFbEvent("PageView", { path: location.pathname });
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main-content",
						tabIndex: -1,
						className: "flex-1 outline-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiAssistant, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true
			})
		] })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BlQdRpBg.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ToolNami — Fast, Free Online Tools for Everyday Work" },
			{
				name: "description",
				content: "ToolNami is a clean, fast platform of free online tools: merge PDFs, compress images, convert units, format code, and more — no installs, no clutter."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/"
			},
			{
				property: "og:title",
				content: "ToolNami — Fast, Free Online Tools for Everyday Work"
			},
			{
				property: "og:description",
				content: "One bright, uncluttered home for the everyday tools you keep searching for. 100% free, fast, and browser-based."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "ToolNami — Fast, Free Online Tools for Everyday Work"
			},
			{
				name: "twitter:description",
				content: "One bright, uncluttered home for the everyday tools you keep searching for. 100% free, fast, and browser-based."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./route-Di7iQBCH.mjs");
var Route$12 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		if (!auth.currentUser) await new Promise((resolve) => {
			const unsubscribe = auth.onAuthStateChanged((user) => {
				unsubscribe();
				resolve();
			});
			setTimeout(() => resolve(), 1500);
		});
		if (!auth.currentUser) throw redirect({
			to: "/auth",
			search: { mode: "login" }
		});
		return { user: auth.currentUser };
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-CqkmM_JA.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About ToolNami — High-Performance Browser Utilities by LuminaLM" },
			{
				name: "description",
				content: "Discover ToolNami: a high-performance, privacy-first web utility suite by Aniket Bhalerao and LuminaLM. Client-side PDF processing, image compression, formatting, and calculators with zero data logging."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/about"
			},
			{
				property: "og:title",
				content: "About ToolNami — High-Performance Browser Utilities"
			},
			{
				property: "og:description",
				content: "The architectural story, privacy guarantees, and engineering standards behind ToolNami by LuminaLM."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "About ToolNami — High-Performance Browser Utilities"
			},
			{
				name: "twitter:description",
				content: "The architectural story, privacy guarantees, and engineering standards behind ToolNami by LuminaLM."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: "About ToolNami",
				url: "https://toolnami.com/about",
				description: "Architectural history, privacy philosophy, engineering standards, and founder information for ToolNami by LuminaLM.",
				mainEntity: {
					"@type": "Organization",
					name: "LuminaLM Innovations",
					founder: {
						"@type": "Person",
						name: "Aniket Bhalerao"
					}
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-BeThx9lX.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact ToolNami — Support, Creator Office & Business Inquiries" },
			{
				name: "description",
				content: "Connect directly with Aniket Bhalerao (Creator of LuminaLM & ToolNami). Official support email support.neoluxetrust@gmail.com, headquarters in Pune, Maharashtra, and project network."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/contact"
			},
			{
				property: "og:title",
				content: "Contact ToolNami & LuminaLM — Aniket Bhalerao"
			},
			{
				property: "og:description",
				content: "Official contact channels, LuminaLM headquarters in Pune India, support email, and verified network."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "Contact ToolNami & LuminaLM — Aniket Bhalerao"
			},
			{
				name: "twitter:description",
				content: "Official business channels, LuminaLM headquarters, support email, and verified social profiles."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact ToolNami & LuminaLM",
				url: "https://toolnami.com/contact",
				description: "Official contact directory, support lines, headquarters address, and creator information for ToolNami.",
				mainEntity: {
					"@type": "LocalBusiness",
					name: "ToolNami — LuminaLM Innovations",
					telephone: "+91-9876543210",
					email: "support.neoluxetrust@gmail.com",
					address: {
						"@type": "PostalAddress",
						streetAddress: "LuminaLM Innovations, Neoluxe Trust Hub",
						addressLocality: "Pune",
						addressRegion: "Maharashtra",
						postalCode: "411001",
						addressCountry: "IN"
					}
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-policy-Bdk-gvC7.mjs");
var Route$9 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — ToolNami" },
			{
				name: "description",
				content: "ToolNami Privacy Policy: Learn how we handle your data, our client-side privacy-first architecture, cookies, and Google AdSense compliance."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/privacy-policy"
			},
			{
				property: "og:title",
				content: "Privacy Policy — ToolNami"
			},
			{
				property: "og:description",
				content: "Read how ToolNami collects, uses, and protects your information."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "Privacy Policy — ToolNami"
			},
			{
				name: "twitter:description",
				content: "Read how ToolNami collects, uses, and protects your information."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./reset-password-Cp1Jj41u.mjs");
var Route$8 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Set a New ToolNami Password" },
		{
			name: "description",
			content: "Choose a new password for your ToolNami account and get straight back to your tools."
		},
		{
			property: "og:title",
			content: "Set a New ToolNami Password"
		},
		{
			property: "og:description",
			content: "Choose a new password for your ToolNami account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./terms-uDObU-Uv.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms & Conditions — ToolNami" },
			{
				name: "description",
				content: "ToolNami Terms & Conditions: Understand acceptable use, intellectual property, service availability, and limitations of liability."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/terms"
			},
			{
				property: "og:title",
				content: "Terms & Conditions — ToolNami"
			},
			{
				property: "og:description",
				content: "The official rules and terms for using ToolNami's free online tools platform."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "Terms & Conditions — ToolNami"
			},
			{
				name: "twitter:description",
				content: "The official rules and terms for using ToolNami's free online tools platform."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./tools-C4Lwg4-D.mjs");
var Route$6 = createFileRoute("/tools")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard-Vm7u--4r.mjs");
var Route$5 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [
		{ title: "Your ToolNami Dashboard — Profile & Favorites" },
		{
			name: "description",
			content: "Manage your ToolNami profile, account settings, saved favorite tools and execution history in one place."
		},
		{
			property: "og:title",
			content: "Your ToolNami Dashboard"
		},
		{
			property: "og:description",
			content: "Profile, saved favorites and history for your ToolNami account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./tools.image-compressor-Bx4a-LD1.mjs");
var DESC$4 = TOOL_DATA.description;
var URL$4 = "https://toolnami.com/tools/image-compressor";
var FAQS$4 = TOOL_DATA.faqs;
var Route$4 = createFileRoute("/tools/image-compressor")({
	head: () => ({
		meta: [
			{ title: "Image Compressor — Reduce Image Size Free | ToolNami" },
			{
				name: "description",
				content: DESC$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Free Image Compressor — ToolNami"
			},
			{
				property: "og:description",
				content: DESC$4
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: toolJsonLd({
				name: TITLE,
				description: DESC$4,
				url: URL$4,
				faqs: FAQS$4
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./tools.jpg-to-pdf-DQuBMT8b.mjs");
var DESC$3 = TOOL_DATA$1.description;
var URL$3 = "https://toolnami.com/tools/jpg-to-pdf";
var FAQS$3 = TOOL_DATA$1.faqs;
var Route$3 = createFileRoute("/tools/jpg-to-pdf")({
	head: () => ({
		meta: [
			{ title: "JPG to PDF Converter — Free Online Tool | ToolNami" },
			{
				name: "description",
				content: DESC$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Free JPG to PDF Converter — ToolNami"
			},
			{
				property: "og:description",
				content: DESC$3
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: toolJsonLd({
				name: TITLE$1,
				description: DESC$3,
				url: URL$3,
				faqs: FAQS$3
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./tools.pdf-compressor-Bjr4UE73.mjs");
var DESC$2 = TOOL_DATA$2.description;
var URL$2 = "https://toolnami.com/tools/pdf-compressor";
var FAQS$2 = TOOL_DATA$2.faqs;
var Route$2 = createFileRoute("/tools/pdf-compressor")({
	head: () => ({
		meta: [
			{ title: "PDF Compressor — Reduce PDF File Size Free | ToolNami" },
			{
				name: "description",
				content: DESC$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Free PDF Compressor — ToolNami"
			},
			{
				property: "og:description",
				content: DESC$2
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: toolJsonLd({
				name: TITLE$2,
				description: DESC$2,
				url: URL$2,
				faqs: FAQS$2
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tools.pdf-merge-Cw7ETeMO.mjs");
var DESC$1 = TOOL_DATA$3.description;
var URL$1 = "https://toolnami.com/tools/pdf-merge";
var FAQS$1 = TOOL_DATA$3.faqs;
var Route$1 = createFileRoute("/tools/pdf-merge")({
	head: () => ({
		meta: [
			{ title: "PDF Merge — Combine PDF Files Online Free | ToolNami" },
			{
				name: "description",
				content: DESC$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Free PDF Merge — ToolNami"
			},
			{
				property: "og:description",
				content: DESC$1
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: toolJsonLd({
				name: TITLE$3,
				description: DESC$1,
				url: URL$1,
				faqs: FAQS$1
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./tools.qr-code-generator-Bduh8UxO.mjs");
var DESC = TOOL_DATA$4.description;
var URL = "https://toolnami.com/tools/qr-code-generator";
var FAQS = TOOL_DATA$4.faqs;
var Route = createFileRoute("/tools/qr-code-generator")({
	head: () => ({
		meta: [
			{ title: "QR Code Generator — Free Custom QR Codes | ToolNami" },
			{
				name: "description",
				content: DESC
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Free QR Code Generator — ToolNami"
			},
			{
				property: "og:description",
				content: DESC
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: toolJsonLd({
				name: TITLE$4,
				description: DESC,
				url: URL,
				faqs: FAQS
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AuthenticatedRouteRoute = Route$12.update({
	id: "/_authenticated",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var AuthRoute = Route$15.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var PrivacyPolicyRoute = Route$9.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$14
});
var ResetPasswordRoute = Route$8.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$14
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$14
});
var ToolsRoute = Route$6.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => Route$14
});
var AuthenticatedDashboardRoute = Route$5.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ToolsIndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => ToolsRoute
});
var ToolsSlugRoute = Route$17.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ToolsRoute
});
var ToolsImageCompressorRoute = Route$4.update({
	id: "/image-compressor",
	path: "/image-compressor",
	getParentRoute: () => ToolsRoute
});
var ToolsJpgToPdfRoute = Route$3.update({
	id: "/jpg-to-pdf",
	path: "/jpg-to-pdf",
	getParentRoute: () => ToolsRoute
});
var ToolsPdfCompressorRoute = Route$2.update({
	id: "/pdf-compressor",
	path: "/pdf-compressor",
	getParentRoute: () => ToolsRoute
});
var ToolsPdfMergeRoute = Route$1.update({
	id: "/pdf-merge",
	path: "/pdf-merge",
	getParentRoute: () => ToolsRoute
});
var ToolsQrCodeGeneratorRoute = Route.update({
	id: "/qr-code-generator",
	path: "/qr-code-generator",
	getParentRoute: () => ToolsRoute
});
var AuthenticatedRouteRouteChildren = { AuthenticatedDashboardRoute };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var ToolsRouteChildren = {
	ToolsSlugRoute,
	ToolsImageCompressorRoute,
	ToolsJpgToPdfRoute,
	ToolsPdfCompressorRoute,
	ToolsPdfMergeRoute,
	ToolsQrCodeGeneratorRoute,
	ToolsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	ContactRoute,
	PrivacyPolicyRoute,
	ResetPasswordRoute,
	TermsRoute,
	ToolsRoute: ToolsRoute._addFileChildren(ToolsRouteChildren)
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
