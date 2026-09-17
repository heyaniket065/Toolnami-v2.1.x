import { useQuery } from "@tanstack/react-query";
import { FileText } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Skeleton } from "@/components/ui/skeleton";
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
  const title = data?.title ?? fallbackTitle;
  const content = data?.content ?? fallbackBody;
  const updated = data?.updated_at ? new Date(data.updated_at) : null;

  return (
    <div className="page-enter">
      <section className="surface-hero border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
            <FileText className="size-3.5" /> Legal
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{title}</h1>
          {updated ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated {updated.toLocaleDateString(undefined, { dateStyle: "long" })}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
            {isPending ? (
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} className={i % 4 === 3 ? "h-4 w-2/3" : "h-4 w-full"} />
                ))}
              </div>
            ) : (
              <div className="space-y-5">
                {content
                  .split(/\n{2,}/)
                  .filter(Boolean)
                  .map((block, i) => {
                    const heading = /^#{1,3}\s/.test(block);
                    return heading ? (
                      <h2 key={i} className="pt-2 text-lg font-semibold sm:text-xl">
                        {block.replace(/^#{1,3}\s/, "")}
                      </h2>
                    ) : (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        {block}
                      </p>
                    );
                  })}
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
