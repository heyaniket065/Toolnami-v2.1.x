import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WelcomeModal } from "@/components/site/welcome-modal";
import { AiAssistant } from "@/components/ai-assistant";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/hooks/use-auth";

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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ToolNami — Fast, Free Online Tools" },
      {
        name: "description",
        content:
          "ToolNami is a clean, fast platform of free online tools for everyday work — PDF, image, text, SEO and developer utilities.",
      },
      { name: "author", content: "Aniket Bhalerao — LuminaLM" },
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
      { property: "og:title", content: "ToolNami — Fast, Free Online Tools" },
      {
        property: "og:description",
        content: "One bright, uncluttered home for the everyday tools you keep searching for.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toolnami.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Instgram136" },
      { name: "twitter:creator", content: "@Instgram136" },
      { name: "twitter:title", content: "ToolNami — Fast, Free Online Tools" },
      {
        name: "twitter:description",
        content: "One bright, uncluttered home for the everyday tools you keep searching for.",
      },
      { name: "theme-color", content: "#2563eb" },
    ],
    links: [
      { rel: "canonical", href: "https://toolnami.com/" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
      description:
        "Fast, free online tools for everyday work — PDF, image, text, SEO and developer utilities.",
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
      "@type": "WebApplication",
      "@id": "https://toolnami.com/#app",
      name: "ToolNami Online Tools Suite",
      url: "https://toolnami.com",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any (browser-based)",
      description:
        "High-performance client-side productivity utilities: PDF rotator, compressor, converters, formatters, and calculators.",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@id": "https://toolnami.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://toolnami.com/#organization",
      name: "ToolNami by LuminaLM",
      url: "https://toolnami.com",
      founder: {
        "@type": "Person",
        name: "Aniket Bhalerao",
        jobTitle: "Creator & Founder of LuminaLM",
      },
      sameAs: [
        "https://youtube.com/@luminalm065",
        "https://www.instagram.com/hey_aniket_065",
        "https://x.com/Instgram136",
        "https://www.linkedin.com/in/aniket-bhalerao-o07",
        "https://github.com/heyaniket065",
        "https://www.facebook.com/share/19cdfcUFpw/",
      ],
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
        <WelcomeModal />
        <AiAssistant />
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </QueryClientProvider>
  );
}
