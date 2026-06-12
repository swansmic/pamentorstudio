"use client";

import { useEffect, useRef } from "react";
import { pixelPageView } from "@/lib/meta-pixel";

export function MasterclassPageView() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    pixelPageView();
  }, []);

  return null;
}
