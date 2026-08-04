"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { pixelWebinarView, pixelApplyClick } from "@/lib/meta-pixel";

const REGISTERED_FLAG = "pams_registered_at";

// In-app WebViews (Instagram, Facebook, TikTok, etc.) frequently fail to
// play self-hosted <video> elements even though the user's actual browser
// would have no trouble — hence the banner nudging them to back out.
const IN_APP_BROWSERS: { name: string; regex: RegExp }[] = [
  { name: "Instagram", regex: /Instagram/i },
  { name: "Facebook", regex: /FBAN|FBAV/i },
  { name: "TikTok", regex: /BytedanceWebview|TikTok/i },
  { name: "Snapchat", regex: /Snapchat/i },
  { name: "LinkedIn", regex: /LinkedInApp/i },
];

export function InAppBrowserBanner() {
  const [appName, setAppName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const match = IN_APP_BROWSERS.find((browser) => browser.regex.test(ua));
    if (match) setAppName(match.name);
  }, []);

  if (!appName) return null;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the instructions above still apply.
    }
  }

  return (
    <div
      role="alert"
      className="mb-6 rounded border border-accent/30 bg-accent/10 px-5 py-4 text-sm text-foreground"
    >
      <p className="font-semibold mb-1">Video not playing?</p>
      <p className="text-muted-foreground mb-3">
        You&rsquo;re viewing this inside the {appName} app, which can have
        trouble playing video. Tap the &bull;&bull;&bull; or share menu above
        and choose &ldquo;Open in Browser,&rdquo; or copy this link and paste
        it into Safari or Chrome.
      </p>
      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground text-xs font-semibold rounded hover:bg-accent/90 transition-colors"
      >
        {copied ? "Link Copied" : "Copy Link"}
      </button>
    </div>
  );
}

export function WatchPageEvents() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    pixelWebinarView();

    // Bonus: detect Registration → Watch conversion without backend infrastructure.
    // The flag is written by register-form.tsx on successful submission.
    try {
      const registeredAt = localStorage.getItem(REGISTERED_FLAG);
      if (registeredAt) {
        console.log("[PAMS] Watch page reached by registrant. Registered at:", registeredAt);
      }
    } catch {
      // localStorage may be unavailable (private browsing, iframe, etc.)
    }
  }, []);

  return null;
}

export function ApplyButton() {
  function handleClick() {
    // Fire before navigation — fbq queues the event if the CDN script
    // hasn't fully loaded yet, so it is never lost.
    pixelApplyClick();
  }

  return (
    <Link
      href="/apply"
      onClick={handleClick}
      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
    >
      Apply for Mentorship
    </Link>
  );
}
