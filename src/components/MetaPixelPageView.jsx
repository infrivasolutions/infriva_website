"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRender = useRef(true);

  const queryString = searchParams.toString();

  useEffect(() => {
    // Initial PageView is already fired by the Meta Pixel script.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, queryString]);

  return null;
}
