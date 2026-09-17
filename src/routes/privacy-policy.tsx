import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ToolNami" },
      {
        name: "description",
        content:
          "How ToolNami handles your data: minimal collection, browser-side processing where possible, and no selling of personal information.",
      },
      { property: "og:title", content: "Privacy Policy — ToolNami" },
      {
        property: "og:description",
        content: "Read how ToolNami collects, uses and protects your information.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      pageName="privacy"
      fallbackTitle="Privacy Policy"
      fallbackBody={`We keep data collection to the absolute minimum required to run ToolNami.

# Information we collect
When you send a message through the contact form we store your name, email address and message so we can reply. If you subscribe to our newsletter we store your email address only.

# Files and tool usage
Wherever technically possible, files you use with our tools are processed in your browser and are never uploaded to our servers.

# Cookies and analytics
We use only essential storage, such as remembering your light or dark theme preference.

# Your choices
You can ask us to delete your contact message or unsubscribe from the newsletter at any time by emailing support.neoluxetrust@gmail.com.

# Changes
If this policy changes we will update this page and the date shown above.`}
    />
  ),
});
