"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { pixelPageView, pixelWebinarView, pixelApplyClick } from "@/lib/meta-pixel";

const REGISTERED_FLAG = "pams_registered_at";

export function WatchPageEvents() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    pixelPageView();
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
