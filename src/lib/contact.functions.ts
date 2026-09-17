import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

const NOTIFY_EMAILS = ["aniketbhalerao065@gmail.com", "support.neoluxetrust@gmail.com"];

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(5000),
});

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendNotificationEmail(data: z.infer<typeof contactSchema>) {
  const resendApiKey = process.env["RESEND_API_KEY"];
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured");
    return { emailed: false as const };
  }

  // onboarding@resend.dev works on Resend's free tier without a verified domain,
  // but free-tier sending only delivers to the Resend account owner's email.
  // Send one email per recipient so a blocked recipient never blocks the others.
  const results = await Promise.all(
    NOTIFY_EMAILS.map(async (to) => {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
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
          `,
        }),
      });
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Resend request to ${to} failed [${response.status}]: ${errorBody}`);
        return false;
      }
      return true;
    }),
  );
  return { emailed: results.some(Boolean) };
}

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabaseUrl = process.env["SUPABASE_URL"];
    const supabaseKey = process.env["SUPABASE_PUBLISHABLE_KEY"];

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
        auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      });

      const { error } = await supabase.from("contact_messages").insert(data);
      if (error) {
        console.error(`Contact insert failed: ${error.message}`);
      }
    } else {
      console.warn("Supabase not configured, skipping database storage for contact message.");
    }

    // Message is safely handled; email is best-effort so a mail hiccup never loses a submission.
    const { emailed } = await sendNotificationEmail(data);
    return { ok: true as const, emailed };
  });
