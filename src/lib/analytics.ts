/**
 * Facebook Pixel & Analytics Integration with Consent-Aware Triggers
 * ToolNami (toolnami.ai.studio)
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const FB_PIXEL_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_FB_PIXEL_ID) || "1182479233306852";

let pixelInitialized = false;

/**
 * Checks whether user has accepted analytics/tracking consent
 */
export function hasTrackingConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const consent = localStorage.getItem("toolnami-cookie-consent");
    // If not explicitly rejected, defaults to privacy-preserving basic analytics
    return consent !== "denied";
  } catch {
    return true;
  }
}

/**
 * Initialize Facebook Pixel cleanly without render-blocking scripts
 */
export function initFacebookPixel(): void {
  if (typeof window === "undefined" || pixelInitialized) return;
  if (!hasTrackingConsent()) return;

  try {
    /* eslint-disable */
    if (!window.fbq) {
      const n: any = (window.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      const t = document.createElement("script");
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      const s = document.getElementsByTagName("script")[0];
      s?.parentNode?.insertBefore(t, s);
    }
    /* eslint-enable */

    window.fbq?.("init", FB_PIXEL_ID);
    window.fbq?.("track", "PageView");
    pixelInitialized = true;
  } catch (err) {
    console.warn("Analytics init warning:", err);
  }
}

/**
 * Track standard events safely
 */
export function trackFbEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !hasTrackingConsent()) return;
  try {
    if (window.fbq) {
      window.fbq("track", eventName, params);
    }
  } catch (err) {
    console.debug("Analytics track error:", err);
  }
}

/**
 * Track custom tool usage events
 */
export function trackFbCustomEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !hasTrackingConsent()) return;
  try {
    if (window.fbq) {
      window.fbq("trackCustom", eventName, params);
    }
  } catch (err) {
    console.debug("Analytics trackCustom error:", err);
  }
}
