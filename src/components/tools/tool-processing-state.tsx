import { CheckCircle2, Download, AlertCircle, RotateCcw, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export interface ToolProcessingStateProps {
  isProcessing: boolean;
  processingMessage?: string;
  isSuccess: boolean;
  successTitle?: string;
  successSubtitle?: string;
  onDownload?: () => void;
  downloadLabel?: string;
  error?: string | null;
  onRetry?: () => void;
  onReset?: () => void;
  customSuccessContent?: React.ReactNode;
}

export function ToolProcessingState({
  isProcessing,
  processingMessage = "Processing your file…",
  isSuccess,
  successTitle = "Task Completed Successfully",
  successSubtitle,
  onDownload,
  downloadLabel = "Download Result",
  error,
  onRetry,
  onReset,
  customSuccessContent,
}: ToolProcessingStateProps) {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isProcessing) {
      setProgress(18);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 92) return prev;
          const inc = Math.floor(Math.random() * 12) + 6;
          return Math.min(prev + inc, 92);
        });
      }, 250);
    } else if (isSuccess) {
      setProgress(100);
    } else {
      setProgress(0);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isProcessing, isSuccess]);

  if (isProcessing) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/50 p-6 text-center shadow-soft animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-card text-primary shadow-soft">
          <Loader2 className="size-7 animate-spin text-primary" />
        </div>
        <h4 className="mt-4 text-base font-semibold text-foreground">{processingMessage}</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Processing safely in your browser. Almost ready…
        </p>
        <div className="mx-auto mt-4 max-w-sm space-y-1.5">
          <Progress value={progress} className="h-2.5 bg-primary/15" />
          <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6 text-left shadow-soft animate-in fade-in duration-200">
        <div className="flex items-start gap-3.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-destructive/20 text-destructive">
            <AlertCircle className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-destructive">
              Unable to complete processing
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{error}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {onRetry ? (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-95"
                >
                  <RotateCcw className="size-3.5" /> Try Again
                </button>
              ) : null}
              {onReset ? (
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/40 active:scale-95"
                >
                  Choose Different File
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-left shadow-soft animate-in fade-in zoom-in-95 duration-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-500">
              <CheckCircle2 className="size-6" />
            </span>
            <div>
              <h4 className="text-base font-semibold text-foreground">{successTitle}</h4>
              {successSubtitle ? (
                <p className="mt-0.5 text-xs text-muted-foreground">{successSubtitle}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onDownload ? (
              <button
                type="button"
                onClick={onDownload}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:scale-95"
              >
                <Download className="size-4" />
                {downloadLabel}
              </button>
            ) : null}
            {onReset ? (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary active:scale-95"
              >
                <RotateCcw className="size-3.5" /> Start Over
              </button>
            ) : null}
          </div>
        </div>

        {customSuccessContent ? (
          <div className="mt-4 pt-3 border-t border-border/50">{customSuccessContent}</div>
        ) : null}
      </div>
    );
  }

  return null;
}
