"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useIsTouchable } from "@/hooks/use-is-touchable";
import { useTheme } from "next-themes";

interface GlobeInstance {
  destroy: () => void;
  update: (config: Record<string, unknown>) => void;
}

export function Globe({ isContactPage = false }: { isContactPage?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const animationIdRef = useRef<number | undefined>(undefined);
  const isMobile = useIsTouchable(1024);
  const theme = useTheme();
  const isDarkTheme = theme?.resolvedTheme === "dark";

  const markers = [
    {
      location: [37.78, -122.44] as [number, number],
      color: [1, 0, 0] as [number, number, number],
      id: "san-francisco",
      label: "San Francisco",
    },
    {
      location: [51.51, -0.13] as [number, number],
      color: [1, 0, 0] as [number, number, number],
      id: "london",
      label: "London",
    },
    {
      location: [35.68, 139.65] as [number, number],
      color: [1, 0, 0] as [number, number, number],
      id: "tokyo",
      label: "Tokyo",
    },
    {
      location: [38.9072, -77.0369] as [number, number],
      color: [1, 0, 0] as [number, number, number],
      id: "washington-dc",
      label: "Washington, D.C.",
    },
    {
      location: [42.6977, 23.3219] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "sofia",
      label: "Sofia",
    },
    {
      location: [25.2048, 55.2708] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "dubai",
      label: "Dubai",
    },
    {
      location: [1.3521, 103.8198] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "singapore",
      label: "Singapore",
    },
    {
      location: [-33.8688, 151.2093] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "sydney",
      label: "Sydney",
    },
    // Africa
    {
      location: [30.0444, 31.2357] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "cairo",
      label: "Cairo",
    },
    {
      location: [-33.9249, 18.4241] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "cape-town",
      label: "Cape Town",
    },

    // South America
    {
      location: [-23.5505, -46.6333] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "sao-paulo",
      label: "São Paulo",
    },
    {
      location: [-34.6037, -58.3816] as [number, number],
      size: 0.03,
      color: [1, 0, 0] as [number, number, number],
      id: "buenos-aires",
      label: "Buenos Aires",
    },
  ];

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

    const globe = createGlobe(canvas, {
      width: isMobile ? 300 : 1000,
      height: isMobile ? 300 : 1000,
      devicePixelRatio: 2,
      phi: 0,
      theta: 0.3,
      arcColor: [0.0, 0.85, 1.0],
      arcWidth: 0.5,
      mapBrightness: isContactPage ? 2 : 12,
      arcs: [
        { from: [37.78, -122.44], to: [35.68, 139.65] }, // San Francisco → Tokyo
        { from: [38.9072, -77.0369], to: [51.51, -0.13] }, // Washington → London
        { from: [30.0444, 31.2357], to: [42.6977, 23.3219] }, // Paris → Sofia
        { from: [25.2048, 55.2708], to: [1.3521, 103.8198] }, // Dubai → Singapore
        { from: [-33.8688, 151.2093], to: [-33.9249, 18.4241] }, // Sydney → Cape Town
        { from: [30.0444, 31.2357], to: [-23.5505, -46.6333] }, // Cairo → São Paulo
      ],
      arcHeight: 0.3,
      baseColor: [0.9, 0.9, 0.9] as [number, number, number],
      markerColor: [0.0, 0.85, 1.0] as [number, number, number],
      glowColor: [0.15, 0.65, 1.0] as [number, number, number],
      markers: markers.map((m) => ({
        location: m.location,
        size: 0.05,
        id: m.id,
        label: m.label,
      })),
      dark: isDarkTheme ? 1 : 0,
      diffuse: 2.5,
      mapSamples: 40000,
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
  }, [isDarkTheme, isMobile, markers, isContactPage]);

  return (
    <div
      className={`relative flex items-center justify-center opacity-${isContactPage ? 50 : 100}`}
    >
      {markers.map((m) => (
        <div
          key={m.id}
          className="marker-label z-5"
          style={{
            positionAnchor: `--cobe-${m.id}`,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
          }}
        >
          {m.label}
        </div>
      ))}
      <canvas
        ref={canvasRef}
        style={{
          width: isMobile ? "400px" : "600px",
          height: isMobile ? "400px" : "600px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
