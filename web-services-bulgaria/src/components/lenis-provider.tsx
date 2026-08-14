"use client";

import React, { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Initialize Lenis with recommended settings
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      overscroll: true,
      infinite: false,
      autoResize: true,
      respectReducedMotion: true,
      // Prevent smooth scrolling on specific elements (e.g., modals, dropdowns)
      prevent: (node) => {
        // Add any selectors you want to exclude from smooth scrolling
        if (node.classList?.contains("no-smooth-scroll")) {
          return true;
        }
        return false;
      },
    });

    // Optional: Listen to scroll events for debugging or custom behaviors
    lenis.on("scroll", () => {
      // You can emit custom events or sync with other animations here
      // console.log('Lenis scroll event:', e);
    });

    // Cleanup function to destroy Lenis instance on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
