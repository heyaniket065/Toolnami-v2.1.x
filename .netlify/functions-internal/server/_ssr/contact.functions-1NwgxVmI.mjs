import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-1NwgxVmI.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var NOTIFY_EMAILS = ["aniketbhalerao065@gmail.com", "support.neoluxetrust@gmail.com"];
var contactSchema = objectType({
	name: stringType().trim().min(2).max(100),
	email: stringType().trim().email().max(255),
	message: stringType().trim().min(10).max(5e3)
});
function escapeHtml(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
async function sendNotificationEmail(data) {
	const resendApiKey = process.env["RESEND_API_KEY"];
	if (!resendApiKey) {
		console.error("RESEND_API_KEY is not configured");
		return { emailed: false };
	}
	return { emailed: (await Promise.all(NOTIFY_EMAILS.map(async (to) => {
		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${resendApiKey}`
			},
			body: JSON.stringify({
				from: "ToolNami Contact <onboarding@resend.dev>",
				to: [to],
				reply_to: data.email,
				subject: `New ToolNami contact message from ${data.name}`,
				html: `
            <h2>New contact message</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
          `
			})
		});
		if (!response.ok) {
			const errorBody = await response.text();
			console.error(`Resend request to ${to} failed [${response.status}]: ${errorBody}`);
			return false;
		}
		return true;
	}))).some(Boolean) };
}
var submitContactMessage_createServerFn_handler = createServerRpc({
	id: "6791d96029119711fff64366333434540863937081e92a2093993c6c31f4287b",
	name: "submitContactMessage",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContactMessage.__executeServer(opts));
var submitContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(submitContactMessage_createServerFn_handler, async ({ data }) => {
	const supabaseUrl = process.env["SUPABASE_URL"];
	const supabaseKey = process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (supabaseUrl && supabaseKey) {
		const { error } = await createClient(supabaseUrl, supabaseKey, { auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		} }).from("contact_messages").insert(data);
		if (error) console.error(`Contact insert failed: ${error.message}`);
	} else console.warn("Supabase not configured, skipping database storage for contact message.");
	const { emailed } = await sendNotificationEmail(data);
	return {
		ok: true,
		emailed
	};
});
//#endregion
export { submitContactMessage_createServerFn_handler };
