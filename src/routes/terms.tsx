import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ToolNami" },
      {
        name: "description",
        content:
          "The terms that apply when you use ToolNami's online tools, including acceptable use, availability and liability.",
      },
      { property: "og:title", content: "Terms & Conditions — ToolNami" },
      {
        property: "og:description",
        content: "The rules for using ToolNami's free online tools platform.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      pageName="terms"
      fallbackTitle="Terms & Conditions"
      fallbackBody={`By using ToolNami you agree to these terms.

# Use of the platform
ToolNami's tools are provided for lawful personal and professional use. You may not abuse, overload or attempt to disrupt the service.

# Availability
Tools are offered as-is. We work hard to keep everything online and accurate, but we cannot guarantee uninterrupted availability or error-free results.

# Your content
You keep all rights to the files and text you process with our tools. You are responsible for having the right to use that content.

# Limitation of liability
ToolNami is not liable for any loss arising from the use of the tools. Always keep your own backup of important files.

# Contact
Questions about these terms? Email support.neoluxetrust@gmail.com.`}
    />
  ),
});
