import { useQuery } from "@tanstack/react-query";
import { FileText, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { FormattedMarkdown } from "@/components/ui/formatted-markdown";
import { pageContentQuery } from "@/lib/tools-data";

export function LegalPage({
  pageName,
  fallbackTitle,
  fallbackBody,
}: {
  pageName: string;
  fallbackTitle: string;
  fallbackBody: string;
}) {
  const { data, isPending } = useQuery(pageContentQuery(pageName));
  const title = fallbackTitle || data?.title || "Legal Document";
  // Always prioritize the full authoritative legal text in fallbackBody if it is more complete
  const content =
    fallbackBody && fallbackBody.length > (data?.content?.length ?? 0)
      ? fallbackBody
      : (data?.content ?? fallbackBody);

  return (
    <div className="page-enter">
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="size-3.5" /> Official Legal Notice
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated September 24, 2026 · Compliant with Google AdSense &amp; Global Privacy
            Standards
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
            {isPending && !content ? (
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} className={i % 4 === 3 ? "h-4 w-2/3" : "h-4 w-full"} />
                ))}
              </div>
            ) : (
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <FormattedMarkdown content={content} />
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
