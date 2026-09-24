import { useState, useEffect, useMemo, useCallback } from "react";

interface UseToolUsageOptions {
  enableLiveGrowth?: boolean;
  minIntervalSec?: number;
  maxIntervalSec?: number;
}

/**
 * Deterministic hash to generate stable pseudo-random variations per tool.
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Calculates a deterministic baseline usage count with slight organic offset.
 * Strictly deterministic based solely on baseUses and slug, ensuring server and client
 * render identically during SSR and initial hydration.
 */
export function calculateRealisticUsage(baseUses: number, slug: string = "tool"): number {
  const hash = hashString(slug);
  // Organic jitter within -2% to +5% of baseUses
  const jitterPercent = ((hash % 70) - 20) / 1000;
  const jitter = Math.round(baseUses * jitterPercent);

  return Math.max(120, baseUses + jitter);
}

/**
 * Calculates time-of-day progression addition (safe to call on client after mount).
 */
export function calculateDayProgressDelta(slug: string = "tool"): number {
  const hash = hashString(slug);
  const now = new Date();
  const minutesToday = now.getHours() * 60 + now.getMinutes();
  const dayProgressFactor = minutesToday / 1440;
  return Math.floor(dayProgressFactor * (40 + (hash % 180)));
}

/**
 * Formats a count into a human-readable string like "18.2K Uses" or "1.4M Uses".
 */
export function formatUsageNumber(count: number, suffix: string = "Uses"): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M ${suffix}`;
  }
  if (count >= 10_000) {
    return `${(count / 1_000).toFixed(1)}K ${suffix}`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K ${suffix}`;
  }
  return `${count.toLocaleString()} ${suffix}`;
}

/**
 * Hook that generates realistic, slightly randomized usage numbers for each tool
 * that slowly tick upwards to feel live, active, and continuously growing.
 */
export function useToolUsage(
  baseUses: number,
  toolSlug: string = "general",
  options: UseToolUsageOptions = {},
) {
  const { enableLiveGrowth = true, minIntervalSec = 14, maxIntervalSec = 38 } = options;

  // Stable baseline calculation
  const initialCount = useMemo(
    () => calculateRealisticUsage(baseUses, toolSlug),
    [baseUses, toolSlug],
  );

  const [count, setCount] = useState<number>(initialCount);
  const [hasIncremented, setHasIncremented] = useState<boolean>(false);

  // Apply client-only day progress delta after mounting (avoids SSR hydration mismatch)
  useEffect(() => {
    const dayDelta = calculateDayProgressDelta(toolSlug);
    if (dayDelta > 0) {
      setCount((prev) => prev + dayDelta);
    }
  }, [toolSlug]);

  // Handle live active growth
  useEffect(() => {
    if (!enableLiveGrowth) return;

    let timer: NodeJS.Timeout;

    const scheduleNextTick = () => {
      // Slight randomization so all cards don't increment in lockstep
      const delayMs =
        (Math.floor(Math.random() * (maxIntervalSec - minIntervalSec + 1)) + minIntervalSec) * 1000;

      timer = setTimeout(() => {
        setCount((prev) => prev + (Math.random() > 0.4 ? 1 : 2));
        setHasIncremented(true);

        // Reset pulse effect after 1.5s
        setTimeout(() => setHasIncremented(false), 1500);

        scheduleNextTick();
      }, delayMs);
    };

    scheduleNextTick();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [enableLiveGrowth, minIntervalSec, maxIntervalSec]);

  // Method to record an immediate user action (e.g. user clicked run/convert)
  const recordUse = useCallback(() => {
    setCount((prev) => prev + 1);
    setHasIncremented(true);
    setTimeout(() => setHasIncremented(false), 1500);
  }, []);

  const formatted = useMemo(() => formatUsageNumber(count, "Uses"), [count]);

  return {
    count,
    formatted,
    hasIncremented,
    recordUse,
  };
}
