"use client";

import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type LenisContextType = Lenis | null;
const LenisContext = createContext<LenisContextType>(null);

export function useLenis() {
  return useContext(LenisContext);
}

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with recommended settings
    const lenisInstance = new Lenis({
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
    lenisInstance.on("scroll", () => {
      // You can emit custom events or sync with other animations here
      // console.log('Lenis scroll event:', e);
    });

    // Set state in a microtask to avoid cascading renders
    Promise.resolve().then(() => setLenis(lenisInstance));

    // Cleanup function to destroy Lenis instance on unmount
    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
