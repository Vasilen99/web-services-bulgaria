"use client";

import { useEffect, useState } from "react";

export function useIsTouchable(maxResolution: number = 768): boolean {
  const [isTouchable, setIsTouchable] = useState(false);

  useEffect(() => {
    const checkTouchable = () => {
      // Check if screen width is below max resolution
      const isBelowMaxResolution = window.innerWidth <= maxResolution;

      // Device is touchable if it is below max resolution
      setIsTouchable(isBelowMaxResolution);
    };

    checkTouchable();

    // Listen for window resize to update on orientation change
    window.addEventListener("resize", checkTouchable);

    return () => {
      window.removeEventListener("resize", checkTouchable);
    };
  }, [maxResolution]);

  return isTouchable;
}
