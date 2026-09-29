/**
 * Production Client Error Reporting for AI Studio & ToolNami
 */

export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `HTTP Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[ToolNami Runtime]", {
    message,
    stack,
    route: window.location.pathname,
    ...context,
  });
}

// Backward-compatible alias to keep existing imports intact without third-party platform bindings
export const reportLovableError = reportAppError;
