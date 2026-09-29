import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { A as redirect, _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as RotateCcw, I as Menu, K as Instagram, L as Mail, R as LogOut, S as Search, V as LoaderCircle, W as LayoutDashboard, Y as Heart, _ as Sparkles, _t as ChevronDown, b as Settings, bt as Bot, dt as Circle, ht as ChevronRight, i as X, n as Zap, r as Youtube, s as UserRound, tt as Facebook, vt as Check, x as Send, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-D4HdLqJ5.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as auth, r as useAuth, t as AuthProvider } from "./use-auth-ko7F23Oo.mjs";
import { t as Route$15 } from "./auth-E729X0Rw.mjs";
import { t as ThemeToggle } from "./theme-toggle-BzdRzgQm.mjs";
import { t as FormattedMarkdown } from "./formatted-markdown-CGoaiuO6.mjs";
import { n as getToolBySlug } from "./ssr.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as supabase } from "./client-B7rskZ94.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$16 } from "./tools.index-GCO8ty5X.mjs";
import { n as toolJsonLd } from "./tool-shell-p6lLR4m3.mjs";
import { t as Route$17 } from "./tools._slug-BylpTKrd.mjs";
import { n as TOOL_DATA, t as TITLE } from "./tools.image-compressor-BCl27V9B.mjs";
import { n as TOOL_DATA$1, t as TITLE$1 } from "./tools.jpg-to-pdf-KyNpCpzd.mjs";
import { n as TOOL_DATA$2, t as TITLE$2 } from "./tools.pdf-compressor-DGhsjLdB.mjs";
import { n as TOOL_DATA$3, t as TITLE$3 } from "./tools.pdf-merge-BPAU04Jp.mjs";
import { n as TOOL_DATA$4, t as TITLE$4 } from "./tools.qr-code-generator-DHOvP_Ds.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cq-g_f3T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-DwiumTtJ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName$8 = "/app/applet/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$8,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$8,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName$7 = "/app/applet/src/components/site/search-dialog.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		onClick: () => setOpen(true),
		"aria-label": "Search tools",
		className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-[18px]" }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 28,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 22,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "rounded-2xl sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
				className: "text-lg",
				children: "Search ToolNami"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 34,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 33,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					go(value);
				},
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 rounded-xl border border-input bg-background px-3 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 44,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						autoFocus: true,
						value,
						onChange: (e) => setValue(e.target.value),
						placeholder: "Search for a tool, e.g. compress image",
						className: "h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 45,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 43,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => go(s),
						className: "rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary",
						children: s
					}, s, false, {
						fileName: _jsxFileName$7,
						lineNumber: 55,
						columnNumber: 17
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 53,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 36,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 32,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 31,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/ui/dropdown-menu.tsx";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 37,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 46,
	columnNumber: 3
}, void 0));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 62,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 82,
	columnNumber: 3
}, void 0));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 108,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 107,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 106,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 98,
	columnNumber: 3
}, void 0));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 130,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 129,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 128,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 120,
	columnNumber: 3
}, void 0));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 144,
	columnNumber: 3
}, void 0));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 156,
	columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 166,
		columnNumber: 5
	}, void 0);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _jsxFileName$5 = "/app/applet/src/components/site/user-menu.tsx";
function initials(name) {
	return name.split(/[\s._-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
function UserMenu() {
	const { user, profile, loading, signOut } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "size-10 shrink-0 animate-pulse rounded-full bg-muted",
		"aria-hidden": true
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 27,
		columnNumber: 12
	}, this);
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/auth",
		search: { mode: "login" },
		className: "inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary active:scale-95 sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { className: "size-[18px]" }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 37,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "hidden sm:inline",
			children: "Sign in"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 38,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 32,
		columnNumber: 7
	}, this);
	const name = profile?.display_name || user.email?.split("@")[0] || "Member";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
		"aria-label": "Account menu",
		className: "inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-primary-soft text-sm font-bold text-primary transition-all hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95",
		children: profile?.avatar_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: profile.avatar_url,
			alt: name,
			className: "size-full object-cover"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 52,
			columnNumber: 11
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: initials(name) || "T" }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 54,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 47,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
		align: "end",
		className: "w-60 rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
				className: "flex flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate text-sm font-semibold",
					children: name
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 59,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate text-xs font-normal text-muted-foreground",
					children: user.email
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 60,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 58,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 62,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/dashboard",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutDashboard, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 65,
						columnNumber: 13
					}, this), " Dashboard"]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 64,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 63,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/dashboard",
					hash: "favorites",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 70,
						columnNumber: 13
					}, this), " Saved favorites"]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 69,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 68,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/dashboard",
					hash: "settings",
					className: "cursor-pointer gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 75,
						columnNumber: 13
					}, this), " Account settings"]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 73,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 78,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				onClick: () => void signOut(),
				className: "cursor-pointer gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 80,
					columnNumber: 11
				}, this), " Log out"]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 79,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 57,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/site/header.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-soft" : "border-b border-transparent bg-background/60 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Main",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-primary bg-primary-soft" },
						className: "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:bg-primary-soft/70",
						children: item.label
					}, item.to, false, {
						fileName: _jsxFileName$4,
						lineNumber: 48,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchDialog, {}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 62,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-110 active:scale-95 lg:inline-flex",
							children: "Explore Tools"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 63,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserMenu, {}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 70,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-[18px]" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 78,
								columnNumber: 21
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-[18px]" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 78,
								columnNumber: 53
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 71,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 60,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 43,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-80 border-b" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: item.to === "/" },
					activeProps: { className: "text-primary bg-primary-soft" },
					className: "rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary",
					children: item.label
				}, item.to, false, {
					fileName: _jsxFileName$4,
					lineNumber: 90,
					columnNumber: 13
				}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/tools",
					search: { page: 1 },
					onClick: () => setOpen(false),
					className: "mt-2 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground",
					children: "Explore Tools"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 101,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 88,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 83,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 36,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/site/footer.tsx";
var SOCIALS = [
	{
		label: "YouTube",
		href: "https://youtube.com/@luminalm065",
		Icon: Youtube
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/hey_aniket_065",
		Icon: Instagram
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/19cdfcUFpw/",
		Icon: Facebook
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "mt-24 border-t border-border bg-card/60",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 41,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "ToolNami is a fast, free and privacy-friendly home for everyday online tools — convert, compress, calculate and create without installing anything."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 42,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: subscribe,
							className: "mt-6 flex max-w-sm gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@email.com",
								"aria-label": "Email address",
								className: "h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 47,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "submit",
								disabled: loading,
								className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-95 disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 60,
									columnNumber: 26
								}, this) : null, "Subscribe"]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 55,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 46,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex gap-2",
							children: [SOCIALS.map(({ label, href, Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href,
								target: "_blank",
								rel: "noreferrer noopener",
								"aria-label": label,
								className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-[18px]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 74,
									columnNumber: 17
								}, this)
							}, label, false, {
								fileName: _jsxFileName$3,
								lineNumber: 66,
								columnNumber: 15
							}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "mailto:support.neoluxetrust@gmail.com",
								"aria-label": "Email support",
								className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-[18px]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 82,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 77,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 64,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-sm font-semibold",
					children: "Platform"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 88,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "transition-colors hover:text-primary",
							children: "Home"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 91,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 90,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/tools",
							search: { page: 1 },
							className: "transition-colors hover:text-primary",
							children: "Tools"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 96,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/about",
							className: "transition-colors hover:text-primary",
							children: "About"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 105,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 104,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "transition-colors hover:text-primary",
							children: "Contact"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 110,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 109,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 89,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 87,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-sm font-semibold",
					children: "Legal"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 118,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/privacy-policy",
							className: "transition-colors hover:text-primary",
							children: "Privacy Policy"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 121,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 120,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/terms",
							className: "transition-colors hover:text-primary",
							children: "Terms & Conditions"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 126,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 125,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "mailto:support.neoluxetrust@gmail.com",
							className: "transition-colors hover:text-primary",
							children: "support.neoluxetrust@gmail.com"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 131,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 130,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 119,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 117,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 39,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ToolNami. All rights reserved."
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 144,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"Built by Aniket Bhalerao ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-semibold text-foreground",
						children: "LuminaLM"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 147,
						columnNumber: 13
					}, this),
					" — Think Better. Build Better."
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 145,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 143,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 142,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/ai-assistant.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [!isOpen && /* @__PURE__ */ (void 0)("div", {
		className: "fixed bottom-6 right-6 z-50",
		children: /* @__PURE__ */ (void 0)("button", {
			onClick: () => {
				setIsOpen(true);
				setIsMinimized(false);
			},
			id: "ai-assistant-launcher",
			className: "group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-card/95 hover:bg-card text-foreground backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95",
			"aria-label": "Open ToolNami AI Assistant",
			children: [
				/* @__PURE__ */ (void 0)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 -z-10 animate-pulse" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 193,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-inner",
					children: [/* @__PURE__ */ (void 0)(Bot, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 196,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "absolute -top-1 -right-1 flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (void 0)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 198,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 199,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 197,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 195,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "text-left hidden sm:block",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "text-xs font-bold text-foreground flex items-center gap-1.5 leading-tight",
						children: ["ToolNami AI", /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold",
							children: "80 Tools"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 206,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 204,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "text-[11px] text-muted-foreground font-medium",
						children: "Ask assistant & guides"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 210,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 203,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 183,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 182,
		columnNumber: 9
	}, this), isOpen && /* @__PURE__ */ (void 0)("div", {
		id: "ai-assistant-modal",
		className: `fixed z-50 transition-all duration-300 ${isMinimized ? "bottom-6 right-6 w-72 rounded-2xl bg-card/95 border border-border shadow-2xl p-3" : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl shadow-black/20 dark:shadow-black/60 flex flex-col overflow-hidden text-foreground"}`,
		children: [/* @__PURE__ */ (void 0)("div", {
			className: "flex items-center justify-between px-4 py-3.5 bg-muted/60 dark:bg-muted/30 border-b border-border select-none",
			children: [/* @__PURE__ */ (void 0)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-sm",
					children: /* @__PURE__ */ (void 0)(Sparkles, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 232,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 231,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
					className: "text-sm font-bold text-foreground flex items-center gap-1.5",
					children: ["ToolNami Assistant", /* @__PURE__ */ (void 0)("span", { className: "inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 237,
						columnNumber: 19
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 235,
					columnNumber: 17
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "text-[11px] text-muted-foreground flex items-center gap-1",
					children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "w-3 h-3 text-emerald-500" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 240,
						columnNumber: 19
					}, this), "80 Tools • 100% Client-Side Safe"]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 239,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 234,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 230,
				columnNumber: 13
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (void 0)("button", {
						onClick: handleReset,
						title: "Restart Chat",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Reset Conversation",
						children: /* @__PURE__ */ (void 0)(RotateCcw, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 253,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 247,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("button", {
						onClick: () => setIsMinimized(!isMinimized),
						title: isMinimized ? "Expand" : "Minimize",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Minimize",
						children: /* @__PURE__ */ (void 0)(ChevronDown, { className: `w-4 h-4 transform transition-transform ${isMinimized ? "rotate-180" : ""}` }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 261,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 255,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("button", {
						onClick: () => setIsOpen(false),
						title: "Close",
						className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors",
						"aria-label": "Close Assistant",
						children: /* @__PURE__ */ (void 0)(X, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 271,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 265,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 246,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 229,
			columnNumber: 11
		}, this), !isMinimized && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
			/* @__PURE__ */ (void 0)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border",
				children: [
					messages.map((message) => /* @__PURE__ */ (void 0)("div", {
						className: `flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`,
						children: [/* @__PURE__ */ (void 0)("div", {
							className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm text-sm ${message.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted/70 text-foreground border border-border rounded-tl-sm"}`,
							children: [message.role === "assistant" ? /* @__PURE__ */ (void 0)(FormattedMarkdown, {
								content: message.content,
								onLinkClick: () => setIsOpen(false),
								className: "text-foreground text-sm leading-relaxed"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 293,
								columnNumber: 25
							}, this) : /* @__PURE__ */ (void 0)("p", {
								className: "leading-relaxed",
								children: message.content
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 299,
								columnNumber: 25
							}, this), message.suggestedTools && message.suggestedTools.length > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "mt-3 pt-3 border-t border-border space-y-2",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1",
									children: [/* @__PURE__ */ (void 0)(Zap, { className: "w-3 h-3 text-amber-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 306,
										columnNumber: 29
									}, this), "Recommended Tools"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 305,
									columnNumber: 27
								}, this), message.suggestedTools.map((tool) => /* @__PURE__ */ (void 0)(Link, {
									to: tool.to,
									onClick: () => setIsOpen(false),
									className: "group block p-2 rounded-xl bg-card hover:bg-muted/80 border border-border transition-all text-left",
									children: /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "w-12 h-8 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border",
											children: /* @__PURE__ */ (void 0)("img", {
												src: tool.image,
												alt: tool.title,
												className: "w-full h-full object-contain block",
												referrerPolicy: "no-referrer"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 318,
												columnNumber: 35
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 317,
											columnNumber: 33
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "truncate",
													children: tool.title
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 327,
													columnNumber: 37
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] text-primary font-mono ml-1 font-bold",
													children: "Open →"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 328,
													columnNumber: 37
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 326,
												columnNumber: 35
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "text-[11px] text-muted-foreground truncate",
												children: tool.summary
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 332,
												columnNumber: 35
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 325,
											columnNumber: 33
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 316,
										columnNumber: 31
									}, this)
								}, tool.slug, false, {
									fileName: _jsxFileName$2,
									lineNumber: 310,
									columnNumber: 29
								}, this))]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 304,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 285,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] text-muted-foreground mt-1 px-1",
							children: message.timestamp
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 342,
							columnNumber: 21
						}, this)]
					}, message.id, true, {
						fileName: _jsxFileName$2,
						lineNumber: 281,
						columnNumber: 19
					}, this)),
					isLoading && /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2 text-muted-foreground text-xs px-2 py-1",
						children: [/* @__PURE__ */ (void 0)("div", { className: "w-2 h-2 rounded-full bg-primary animate-ping" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 350,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Consulting ToolNami directory..." }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 351,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 349,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (void 0)("div", { ref: messagesEndRef }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 354,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 279,
				columnNumber: 15
			}, this),
			/* @__PURE__ */ (void 0)("div", {
				className: "px-3 py-2 bg-muted/30 border-t border-border overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5",
				children: QUICK_PROMPTS.map((prompt) => /* @__PURE__ */ (void 0)("button", {
					onClick: () => handleSend(prompt),
					disabled: isLoading,
					className: "text-xs px-2.5 py-1 rounded-full bg-muted/80 hover:bg-muted text-foreground border border-border transition-colors flex-shrink-0 active:scale-95 disabled:opacity-50 font-medium",
					children: prompt
				}, prompt, false, {
					fileName: _jsxFileName$2,
					lineNumber: 360,
					columnNumber: 19
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 358,
				columnNumber: 15
			}, this),
			/* @__PURE__ */ (void 0)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					handleSend();
				},
				className: "p-3 bg-muted/40 border-t border-border flex items-center gap-2",
				children: [/* @__PURE__ */ (void 0)("input", {
					ref: inputRef,
					type: "text",
					value: inputValue,
					onChange: (e) => setInputValue(e.target.value),
					placeholder: "Ask about any tool, format, or privacy...",
					disabled: isLoading,
					className: "flex-1 bg-card text-foreground placeholder-muted-foreground text-sm px-3.5 py-2.5 rounded-xl border border-border focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 379,
					columnNumber: 17
				}, this), /* @__PURE__ */ (void 0)("button", {
					type: "submit",
					disabled: !inputValue.trim() || isLoading,
					className: "p-2.5 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-medium transition-colors shadow-md disabled:shadow-none",
					"aria-label": "Send Message",
					children: /* @__PURE__ */ (void 0)(Send, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 394,
						columnNumber: 19
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 388,
					columnNumber: 17
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 372,
				columnNumber: 15
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 277,
			columnNumber: 13
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 220,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 179,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ToolNami — Fast, Free Online Tools" },
			{
				name: "description",
				content: "ToolNami is a clean, fast platform of free online tools for everyday work — PDF, image, text, SEO and developer utilities."
			},
			{
				name: "author",
				content: "Aniket Bhalerao — LuminaLM"
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
				property: "og:title",
				content: "ToolNami — Fast, Free Online Tools"
			},
			{
				property: "og:description",
				content: "One bright, uncluttered home for the everyday tools you keep searching for."
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
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
			},
			{
				name: "twitter:title",
				content: "ToolNami — Fast, Free Online Tools"
			},
			{
				name: "twitter:description",
				content: "One bright, uncluttered home for the everyday tools you keep searching for."
			},
			{
				name: "theme-color",
				content: "#2563eb"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://toolnami.com/"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
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
			description: "Fast, free online tools for everyday work — PDF, image, text, SEO and developer utilities.",
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
			"@type": "WebApplication",
			"@id": "https://toolnami.com/#app",
			name: "ToolNami Online Tools Suite",
			url: "https://toolnami.com",
			applicationCategory: "UtilitiesApplication",
			operatingSystem: "Any (browser-based)",
			description: "High-performance client-side productivity utilities: PDF rotator, compressor, converters, formatters, and calculators.",
			browserRequirements: "Requires JavaScript. Requires HTML5.",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD"
			},
			publisher: { "@id": "https://toolnami.com/#organization" }
		},
		{
			"@type": "Organization",
			"@id": "https://toolnami.com/#organization",
			name: "ToolNami by LuminaLM",
			url: "https://toolnami.com",
			founder: {
				"@type": "Person",
				name: "Aniket Bhalerao",
				jobTitle: "Creator & Founder of LuminaLM"
			},
			sameAs: [
				"https://youtube.com/@luminalm065",
				"https://www.instagram.com/hey_aniket_065",
				"https://x.com/Instgram136",
				"https://www.linkedin.com/in/aniket-bhalerao-o07",
				"https://github.com/heyaniket065",
				"https://www.facebook.com/share/19cdfcUFpw/"
			]
		}
	]
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 207,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { dangerouslySetInnerHTML: { __html: themeScript } }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: schemaOrgJsonLd }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 209,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 206,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 213,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 211,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 205,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring",
				children: "Skip to main content"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 232,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
						id: "main-content",
						tabIndex: -1,
						className: "flex-1 outline-none",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiAssistant, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 239,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, {
				position: "top-center",
				richColors: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 240,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 224,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 223,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$13 = () => import("./routes-DLa45kRj.mjs");
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
				content: "/assets/tools/3d-pdf-compressor.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
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
				content: "/assets/tools/3d-pdf-compressor.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./route-CRRSyPUS.mjs");
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
var $$splitComponentImporter$11 = () => import("./about-M2JwriWA.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About ToolNami — Simple Tools, Seriously Built" },
			{
				name: "description",
				content: "ToolNami is an independent online tools platform by Aniket Bhalerao (LuminaLM), built to make everyday digital tasks fast, free and privacy-friendly."
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
				content: "About ToolNami — Simple Tools, Seriously Built"
			},
			{
				property: "og:description",
				content: "The story and purpose behind ToolNami's growing library of free online tools."
			},
			{
				property: "og:image",
				content: "/assets/tools/3d-pdf-compressor.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
			},
			{
				name: "twitter:title",
				content: "About ToolNami — Simple Tools, Seriously Built"
			},
			{
				name: "twitter:description",
				content: "The story and purpose behind ToolNami's growing library of free online tools."
			},
			{
				name: "twitter:image",
				content: "/assets/tools/3d-pdf-compressor.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-CZMXDOuF.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact ToolNami — Aniket Bhalerao & LuminaLM" },
			{
				name: "description",
				content: "Connect with Aniket Bhalerao, Creator & Founder of LuminaLM. Send messages, explore official ecosystem links, or reach out for collaborations."
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
				content: "Official contact channels, LuminaLM brand details, and ecosystem links for Aniket Bhalerao."
			},
			{
				property: "og:image",
				content: "/assets/tools/3d-pdf-compressor.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
			},
			{
				name: "twitter:title",
				content: "Contact ToolNami & LuminaLM — Aniket Bhalerao"
			},
			{
				name: "twitter:description",
				content: "Official contact channels, LuminaLM brand details, and ecosystem links for Aniket Bhalerao."
			},
			{
				name: "twitter:image",
				content: "/assets/tools/3d-pdf-compressor.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-policy-C_9slZUn.mjs");
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
				content: "/assets/tools/3d-pdf-compressor.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
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
				content: "/assets/tools/3d-pdf-compressor.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./reset-password-a3nKnX7T.mjs");
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
var $$splitComponentImporter$7 = () => import("./terms-CGdUXxlX.mjs");
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
				content: "/assets/tools/3d-pdf-compressor.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Instgram136"
			},
			{
				name: "twitter:creator",
				content: "@Instgram136"
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
				content: "/assets/tools/3d-pdf-compressor.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./tools-CnVvpqkU.mjs");
var Route$6 = createFileRoute("/tools")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard-DhR_af_m.mjs");
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
var $$splitComponentImporter$4 = () => import("./tools.image-compressor-CH4v9CiS.mjs");
var DESC$4 = TOOL_DATA.description;
var URL$4 = "https://toolnami.lovable.app/tools/image-compressor";
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
var $$splitComponentImporter$3 = () => import("./tools.jpg-to-pdf-Dskt8oPB.mjs");
var DESC$3 = TOOL_DATA$1.description;
var URL$3 = "https://toolnami.lovable.app/tools/jpg-to-pdf";
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
var $$splitComponentImporter$2 = () => import("./tools.pdf-compressor-67PEyljb.mjs");
var DESC$2 = TOOL_DATA$2.description;
var URL$2 = "https://toolnami.lovable.app/tools/pdf-compressor";
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
var $$splitComponentImporter$1 = () => import("./tools.pdf-merge-D789A0qx.mjs");
var DESC$1 = TOOL_DATA$3.description;
var URL$1 = "https://toolnami.lovable.app/tools/pdf-merge";
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
var $$splitComponentImporter = () => import("./tools.qr-code-generator-CCNjauAX.mjs");
var DESC = TOOL_DATA$4.description;
var URL = "https://toolnami.lovable.app/tools/qr-code-generator";
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
