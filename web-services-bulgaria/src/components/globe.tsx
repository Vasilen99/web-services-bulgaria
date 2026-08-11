"use client";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useIsTouchable } from "@/hooks/use-is-touchable";

const getGlobeConfig = (isDark: boolean) => {
  if (isDark) {
    return {
      dark: 0,
      diffuse: 2.5,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [1, 1, 1] as [number, number, number],
      markerColor: [0.2, 0.4, 1] as [number, number, number],
      glowColor: [0.9, 0.9, 1] as [number, number, number],
    };
  } else {
    return {
      dark: 1,
      diffuse: 2.5,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [0.9, 0.9, 0.9] as [number, number, number],
      markerColor: [0.1, 0.8, 2] as [number, number, number],
      glowColor: [0.7, 0.7, 0.7] as [number, number, number],
    };
  }
};

export function Globe() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const animationIdRef = useRef<number | undefined>(undefined);
  const isMobile = useIsTouchable(1024);
  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkTheme(isDark);
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize and update globe based on theme
  useEffect(() => {
    if (!canvasRef.current) return;

    // Destroy previous globe if it exists
    if (globeRef.current) {
      globeRef.current.destroy();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    }

    const canvas = canvasRef.current;
    let phi = 0;
    const config = getGlobeConfig(isDarkTheme);

    const globe = createGlobe(canvas, {
      width: isMobile ? 300 : 1000,
      height: isMobile ? 300 : 1000,
      devicePixelRatio: 2,
      phi: 0,
      theta: 0.3,

      ...config,
    });

    globeRef.current = globe;

    const animate = () => {
      phi += 0.003; // Adjust rotation speed as needed
      globe.update({ phi });
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isDarkTheme]);

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: isMobile ? "300px" : "500px",
          height: isMobile ? "300px" : "500px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
