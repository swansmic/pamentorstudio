export {};

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[][];
      loaded: boolean;
      version: string;
      push: (...args: unknown[]) => void;
    };
    _fbq?: unknown;
  }
}

function safeFbq(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
}

export function pixelPageView(): void {
  safeFbq("track", "PageView");
}

export function pixelLead(): void {
  safeFbq("track", "Lead");
}

export function pixelWebinarView(): void {
  safeFbq("trackCustom", "WebinarView");
}

export function pixelApplyClick(): void {
  safeFbq("trackCustom", "ApplyClick");
}
