import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as ArrowLeft, L as Mail, V as LoaderCircle, _ as Sparkles, s as UserRound, y as ShieldCheck, z as Lock } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-D4HdLqJ5.mjs";
import { r as useAuth } from "./use-auth-ko7F23Oo.mjs";
import { t as Route } from "./auth-E729X0Rw.mjs";
import { n as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-B9FWlccg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
var emailSchema = stringType().trim().email("Enter a valid email address").max(255);
var passwordSchema = stringType().min(8, "Password must be at least 8 characters").max(72);
function getFirebaseError(err) {
	if (err && typeof err === "object") return err;
	return { message: String(err) };
}
function GoogleIcon() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[18px]",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#4285F4",
				d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8Z"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#34A853",
				d: "M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.1-4 1.1a7 7 0 0 1-6.6-4.8H1.4v3.1A11.9 11.9 0 0 0 12 24Z"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#FBBC05",
				d: "M5.4 14.4a7.1 7.1 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#EA4335",
				d: "M12 4.7c1.8 0 3.4.6 4.6 1.8l3.5-3.5A11.9 11.9 0 0 0 1.4 6.5l4 3.1A7 7 0 0 1 12 4.7Z"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
function AuthPage() {
	const { mode } = Route.useSearch();
	const navigate = useNavigate();
	const { user, loading: authLoading, signInWithGoogle, signInWithEmail, signUpWithEmail, sendPasswordReset } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [sentReset, setSentReset] = (0, import_react.useState)(false);
	const [checkInbox, setCheckInbox] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!authLoading && user) navigate({
			to: "/dashboard",
			replace: true
		});
	}, [
		authLoading,
		user,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		setError(null);
		setSentReset(false);
		setCheckInbox(false);
	}, [mode]);
	const field = "h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";
	const googleSignIn = async () => {
		setBusy("google");
		setError(null);
		try {
			await signInWithGoogle();
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			const fbErr = getFirebaseError(err);
			if (fbErr.code !== "auth/popup-closed-by-user") setError(fbErr.message || "Google Sign-In failed. Please try again.");
		} finally {
			setBusy(null);
		}
	};
	const submit = async (e) => {
		e.preventDefault();
		setError(null);
		const parsedEmail = emailSchema.safeParse(email);
		if (!parsedEmail.success) {
			setError(parsedEmail.error.issues[0]?.message ?? "Enter a valid email address");
			return;
		}
		if (mode === "forgot") {
			setBusy("email");
			try {
				await sendPasswordReset(parsedEmail.data);
				setSentReset(true);
			} catch (err) {
				const fbErr = getFirebaseError(err);
				setError(fbErr.message || "Failed to send reset link.");
			} finally {
				setBusy(null);
			}
			return;
		}
		const parsedPassword = passwordSchema.safeParse(password);
		if (!parsedPassword.success) {
			setError(parsedPassword.error.issues[0]?.message ?? "Invalid password");
			return;
		}
		setBusy("email");
		if (mode === "signup") {
			try {
				await signUpWithEmail(parsedEmail.data, parsedPassword.data, name);
				navigate({
					to: "/dashboard",
					replace: true
				});
			} catch (err) {
				const fbErr = getFirebaseError(err);
				setError(fbErr.message || "Sign up failed.");
			} finally {
				setBusy(null);
			}
			return;
		}
		try {
			await signInWithEmail(parsedEmail.data, parsedPassword.data);
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			const fbErr = getFirebaseError(err);
			setError(fbErr.message || "Invalid email or password.");
		} finally {
			setBusy(null);
		}
	};
	const title = mode === "signup" ? "Create your account" : mode === "forgot" ? "Reset your password" : "Welcome back";
	const subtitle = mode === "signup" ? "Save favorites, sync preferences and unlock what's next." : mode === "forgot" ? "We'll email you a secure link to set a new password." : "Sign in to pick up where you left off.";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "pointer-events-none absolute inset-0 bg-grid-dots opacity-60",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 140,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hidden flex-col justify-center lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-6 text-4xl font-bold tracking-tight",
						children: ["Your tools, ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "your way."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 25
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 max-w-md text-base leading-relaxed text-muted-foreground",
						children: "A free ToolNami account keeps your favorite tools and preferences in sync. You can always keep browsing as a guest — every tool stays open to everyone."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-8 space-y-4",
						children: [
							{
								Icon: Sparkles,
								text: "Save favorite tools for instant access"
							},
							{
								Icon: ShieldCheck,
								text: "Private by design — we never sell your data"
							},
							{
								Icon: UserRound,
								text: "One profile across every device"
							}
						].map(({ Icon, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex size-9 items-center justify-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-[18px]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 17
							}, this), text]
						}, text, true, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 142,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8",
				children: [
					mode === "forgot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/auth",
						search: { mode: "login" },
						className: "mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 15
						}, this), " Back to login"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 32
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-6 grid grid-cols-2 gap-1 rounded-2xl border border-border bg-muted/50 p-1",
						children: ["login", "signup"].map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/auth",
							search: { mode: m },
							replace: true,
							className: `rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${mode === m ? "bg-card text-primary shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: m === "login" ? "Login" : "Sign Up"
						}, m, false, {
							fileName: _jsxFileName,
							lineNumber: 179,
							columnNumber: 56
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-bold tracking-tight",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: subtitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 11
					}, this),
					checkInbox ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 rounded-2xl border border-primary/30 bg-primary-soft/60 p-5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-semibold text-foreground",
							children: "Check your email to confirm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-muted-foreground",
							children: [
								"We sent a confirmation link to ",
								email,
								". Click it to activate your account, then come back and log in."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 191,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 25
					}, this) : sentReset ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 rounded-2xl border border-primary/30 bg-primary-soft/60 p-5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-semibold text-foreground",
							children: "Reset link sent"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-muted-foreground",
							children: [
								"If an account exists for ",
								email,
								", a password reset link is on its way."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 34
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						mode !== "forgot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => void googleSignIn(),
							disabled: busy !== null,
							className: "mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-sm font-semibold transition-all hover:border-primary/40 active:scale-[0.98] disabled:opacity-60",
							children: [busy === "google" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 42
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 88
							}, this), "Continue with Google"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 21
								}, this),
								"or use your email",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 21
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 36
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: submit,
							className: "space-y-4",
							noValidate: true,
							children: [
								mode === "signup" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { className: "absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 215,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Your name",
										"aria-label": "Your name",
										autoComplete: "name",
										className: field
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 216,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 38
								}, this) : null,
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "you@email.com",
										"aria-label": "Email address",
										autoComplete: "email",
										className: field
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 221,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 219,
									columnNumber: 17
								}, this),
								mode !== "forgot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "Password",
										"aria-label": "Password",
										autoComplete: mode === "signup" ? "new-password" : "current-password",
										className: field
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 38
								}, this) : null,
								error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									role: "alert",
									className: "text-sm font-medium text-destructive",
									children: error
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 229,
									columnNumber: 26
								}, this) : null,
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									disabled: busy !== null,
									className: "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60",
									children: [busy === "email" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 234,
										columnNumber: 39
									}, this) : null, mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Log in"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 15
						}, this),
						mode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/auth",
							search: { mode: "forgot" },
							className: "mt-4 block text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
							children: "Forgot your password?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 239,
							columnNumber: 35
						}, this) : null
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 22
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/tools",
						search: { page: 1 },
						className: "mt-6 block text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: "Continue as guest"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 173,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 139,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
