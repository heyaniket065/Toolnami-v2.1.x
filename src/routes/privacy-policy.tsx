import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ToolNami" },
      {
        name: "description",
        content:
          "ToolNami Privacy Policy: Learn how we handle your data, our client-side privacy-first architecture, cookies, and Google AdSense compliance.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/privacy-policy" },
      { property: "og:title", content: "Privacy Policy — ToolNami" },
      {
        property: "og:description",
        content: "Read how ToolNami collects, uses, and protects your information.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      { name: "twitter:title", content: "Privacy Policy — ToolNami" },
      {
        name: "twitter:description",
        content: "Read how ToolNami collects, uses, and protects your information.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
    ],
    links: [{ rel: "canonical", href: "https://toolnami.com/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      pageName="privacy"
      fallbackTitle="Privacy Policy"
      fallbackBody={`Last updated: September 2026

At ToolNami (accessible from our web application), the privacy of our visitors is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by ToolNami and how it is used.

## 1. Privacy-First Philosophy & Client-Side Processing
ToolNami is built from the ground up with a privacy-first architecture:
* **Zero-Upload Processing:** Wherever technically feasible, documents, images, and texts processed using our tools (such as PDF rotation, image compression, formatting, conversions, and calculators) are processed entirely inside your local web browser using client-side JavaScript, WebAssembly, and HTML5 Canvas.
* **No Server Retention:** Your private documents and files are never stored, viewed, analyzed, or retained on our backend servers.
* **No Selling of Personal Data:** We do not sell, rent, or trade your personal information to any third parties under any circumstances.

## 2. Information We Collect
We collect only the minimal information necessary to deliver our services:
* **Contact Information:** When you voluntarily submit a message through our Contact page, we collect your name, email address, and message content to respond to your inquiry.
* **Newsletter Subscriptions:** If you subscribe to our newsletter, we securely store your email address to provide product updates. You can unsubscribe at any time.
* **Log Files:** Like standard web services, ToolNami may log non-personally identifiable technical information (such as browser user-agent, operating system, referring pages, timestamps, and page request counts) to monitor platform health and prevent abusive activity.

## 3. Cookies and Advertising Partners (Google AdSense)
ToolNami may partner with third-party advertising networks, including **Google AdSense**, to display relevant advertisements to support the free availability of our tools.
* **Google and Third-Party Cookies:** Google, as a third-party vendor, uses cookies (including the DoubleClick DART cookie) to serve ads on ToolNami based on a user's prior visits to this website and other websites on the Internet.
* **Personalized Advertising:** Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites across the web.
* **Opting Out of Personalized Ads:** Users may opt out of personalized advertising by visiting [Google Ads Settings](https://adssettings.google.com/) or by visiting [AboutAds.info](https://www.aboutads.info/choices/).
* **Third-Party Vendors:** Third-party ad servers or ad networks use technology in their advertisements and links that appear on ToolNami, which are sent directly to your browser. They automatically receive your IP address when this occurs. ToolNami has no access to or control over these cookies used by third-party advertisers.

## 4. Essential Storage & Preferences
We use local storage only for essential user preferences, such as:
* Remembering your Light/Dark theme preference.
* Storing recent tool usage count to provide quick recommendations.
* Saving temporary tool settings locally in your browser.

## 5. GDPR & CCPA Compliance
If you are a resident of the European Economic Area (EEA) or California (CCPA), you are entitled to certain rights regarding your personal data:
* **The Right to Access:** You may request details of the personal data we hold about you.
* **The Right to Rectification:** You may request correction of any inaccurate personal data.
* **The Right to Erasure:** You may request that we erase your personal data (such as contact messages or newsletter emails).
* **The Right to Object/Opt-Out:** You have the right to object to our processing or opt out of non-essential cookies.
To exercise any of these rights, please contact us at **support.neoluxetrust@gmail.com**.

## 6. Children's Privacy (COPPA)
Protecting the privacy of children is important to us. ToolNami does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that ToolNami has in its database the personally identifiable information of a child under the age of 13, please contact us immediately and we will promptly remove such information from our records.

## 7. Consent
By using ToolNami, you hereby consent to our Privacy Policy and agree to its terms.

## 8. Contact Us
If you have any questions or require more information about our Privacy Policy, please contact us:
* **Email:** support.neoluxetrust@gmail.com
* **Founder:** Aniket Bhalerao (LuminaLM)
* **Website:** ToolNami`}
    />
  ),
});
