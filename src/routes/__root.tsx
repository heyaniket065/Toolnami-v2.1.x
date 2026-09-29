import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { AiAssistant } from "@/components/ai-assistant";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/hooks/use-auth";
import { initFacebookPixel, trackFbEvent } from "@/lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A client processing issue occurred. You can reload the view or return to the directory.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "ToolNami — Fast, Free Online Productivity & Developer Tools" },
      {
        name: "description",
        content:
          "ToolNami (toolnami.ai.studio) is a privacy-first collection of 80+ free browser tools for PDF processing, image compression, formatting, calculating, and coding without downloads.",
      },
      { name: "author", content: "Aniket Bhalerao — LuminaLM Innovations" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { property: "og:site_name", content: "ToolNami" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/" },
      {
        property: "og:title",
        content: "ToolNami — Fast, Free Online Productivity & Developer Tools",
      },
      {
        property: "og:description",
        content:
          "High-performance client-side productivity utilities: PDF rotator, image compressor, converters, formatters, and calculators by LuminaLM.",
      },
      { property: "og:image", content: "https://toolnami.com/logo-512.png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "ToolNami Anime Emblem Badge Logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aniketbhalerao" },
      { name: "twitter:creator", content: "@aniketbhalerao" },
      {
        name: "twitter:title",
        content: "ToolNami — Fast, Free Online Productivity & Developer Tools",
      },
      {
        name: "twitter:description",
        content:
          "High-performance client-side productivity utilities: PDF rotator, image compressor, converters, formatters, and calculators.",
      },
      { name: "twitter:image", content: "https://toolnami.com/logo-512.png" },
      { name: "theme-color", content: "#00d4ff" },
    ],
    links: [
      { rel: "canonical", href: "https://toolnami.com/" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `(function(){try{var t=localStorage.getItem('toolnami-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=t;}catch(e){}})();`;

const schemaOrgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://toolnami.com/#website",
      url: "https://toolnami.com",
      name: "ToolNami",
      alternateName: ["ToolNami AI Studio", "ToolNami by LuminaLM"],
      description:
        "Fast, free, and privacy-first online tools for PDF processing, image compression, formatting, calculating, and coding.",
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://toolnami.com/tools?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
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
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "18.5204",
        longitude: "73.8567",
      },
      sameAs: [
        "https://youtube.com/@luminalM065",
        "https://www.instagram.com/hey_anik_et_065",
        "https://www.linkedin.com/in/aniket-bhalerao-007",
        "https://x.com/aniketbhalerao",
        "https://www.facebook.com/share/19cdfcUFpw/",
        "https://github.com/heyaniket065",
      ],
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
          "https://www.linkedin.com/in/aniket-bhalerao-007",
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        telephone: "+91-9876543210",
        email: "support.neoluxetrust@gmail.com",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://toolnami.com/#app",
      name: "ToolNami Online Tools Suite",
      url: "https://toolnami.com",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any (Modern Web Browser)",
      description:
        "High-performance client-side productivity utilities: PDF tools, image compressor, code formatters, and financial calculators.",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaOrgJsonLd }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    initFacebookPixel();
    trackFbEvent("PageView", { path: location.pathname });
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <AiAssistant />
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </QueryClientProvider>
  );
}
