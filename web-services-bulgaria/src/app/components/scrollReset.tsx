"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "./lenis-provider";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Use Lenis's scrollTo method to reset to top
    // This ensures compatibility with Lenis smooth scrolling
    lenis.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [pathname, lenis]);

  return null;
}
