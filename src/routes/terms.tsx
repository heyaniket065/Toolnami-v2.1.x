import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ToolNami" },
      {
        name: "description",
        content:
          "ToolNami Terms & Conditions: Understand acceptable use, intellectual property, service availability, and limitations of liability.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/terms" },
      { property: "og:title", content: "Terms & Conditions — ToolNami" },
      {
        property: "og:description",
        content: "The official rules and terms for using ToolNami's free online tools platform.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      { name: "twitter:title", content: "Terms & Conditions — ToolNami" },
      {
        name: "twitter:description",
        content: "The official rules and terms for using ToolNami's free online tools platform.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/terms" }],
  }),
  component: () => (
    <LegalPage
      pageName="terms"
      fallbackTitle="Terms & Conditions"
      fallbackBody={`Last updated: September 2026

Welcome to ToolNami! These Terms and Conditions outline the rules and regulations for the use of ToolNami's Website and Tools.

## 1. Acceptance of Terms
By accessing or using ToolNami, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our platform.

## 2. Description of Service
ToolNami provides a comprehensive suite of free, web-based digital utilities—including PDF manipulators, image converters and optimizers, text formatters, financial and mathematical calculators, SEO tools, and developer utilities. All tools are provided on a "free-to-use" basis without mandatory subscription.

## 3. Acceptable Use
You agree to use ToolNami only for lawful purposes. You must not:
* Use the services to process illegal, obscene, defamatory, harmful, or copyright-infringing materials.
* Attempt to reverse engineer, disrupt, overload, or attack our servers, services, or APIs (e.g., via automated scripts, botnets, or DDoS).
* Exploit any security vulnerability or bypass rate limiting mechanisms.

## 4. User Content & Intellectual Property
* **Your Files & Content:** You retain full ownership and intellectual property rights to all files, text, images, or documents you process through ToolNami. Because our tools process files locally in your browser wherever possible, we do not claim any ownership, license, or right over your data.
* **ToolNami IP:** The design, branding, logo, code, graphics, and arrangement of ToolNami are the exclusive intellectual property of Aniket Bhalerao (LuminaLM) and are protected by applicable copyright, trademark, and intellectual property laws.

## 5. Third-Party Advertisements & Links
ToolNami may contain advertisements served by third-party ad networks (such as Google AdSense) and links to external third-party websites. ToolNami is not responsible for the content, privacy policies, or practices of any third-party websites or services.

## 6. Disclaimer of Warranties
ToolNami and all its tools are provided on an **"AS IS"** and **"AS AVAILABLE"** basis without warranties of any kind, whether express or implied. While we strive for 100% precision and reliability across all tools and calculators, we do not warrant that:
* The tools will operate completely error-free or uninterrupted.
* Results of calculations or conversions will always meet specific legal, regulatory, or tax requirements. Users are advised to verify critical financial, legal, or cryptographic computations independently.

## 7. Limitation of Liability
In no event shall ToolNami, its creator Aniket Bhalerao, or its affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use our tools, including loss of data, profits, or business interruption. You are solely responsible for keeping backups of your original documents and files.

## 8. Modifications to Terms
We reserve the right to revise or update these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website following any changes constitutes acceptance of the new terms.

## 9. Contact Us
For any questions, concerns, or legal inquiries regarding these Terms:
* **Email:** support.neoluxetrust@gmail.com
* **Platform:** ToolNami by LuminaLM`}
    />
  ),
});
