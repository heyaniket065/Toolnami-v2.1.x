import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as LoaderCircle, z as Lock } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-D4HdLqJ5.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as supabase } from "./client-B7rskZ94.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-a3nKnX7T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/reset-password.tsx?tsr-split=component";
function ResetPasswordPage() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const field = "h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";
	const submit = async (e) => {
		e.preventDefault();
		setError(null);
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}
		if (password !== confirm) {
			setError("Passwords don't match");
			return;
		}
		setBusy(true);
		const { error: err } = await supabase.auth.updateUser({ password });
		setBusy(false);
		if (err) {
			setError(err.message);
			return;
		}
		toast.success("Password updated.");
		navigate({
			to: "/dashboard",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto w-full max-w-md px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-6 text-2xl font-bold tracking-tight",
					children: "Set a new password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Open this page from the reset link in your email, then choose a new password."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: submit,
					className: "mt-6 space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								placeholder: "New password",
								"aria-label": "New password",
								autoComplete: "new-password",
								className: field
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "password",
								value: confirm,
								onChange: (e) => setConfirm(e.target.value),
								placeholder: "Confirm new password",
								"aria-label": "Confirm new password",
								autoComplete: "new-password",
								className: field
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this),
						error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							role: "alert",
							className: "text-sm font-medium text-destructive",
							children: error
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 20
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: busy,
							className: "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60",
							children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 21
							}, this) : null, "Update password"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 10
	}, this);
}
//#endregion
export { ResetPasswordPage as component };
