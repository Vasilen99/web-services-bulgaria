"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type HexagonBackgroundProps = React.ComponentProps<"div"> & {
  hexagonProps?: React.ComponentProps<"div">;
  hexagonSize?: number; // value greater than 50
  hexagonMargin?: number;
};

function HexagonBackground({
  className,
  children,
  hexagonProps,
  hexagonSize = 100,
  hexagonMargin = 3,
  ...props
}: HexagonBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.2;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const subscribe = React.useCallback((callback: () => void) => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);

  const windowSize = React.useSyncExternalStore(
    subscribe,
    () => `${window.innerWidth}x${window.innerHeight}`,
    () => "0x0",
  );

  const gridDimensions = React.useMemo(() => {
    const [width, height] = windowSize.split("x").map(Number);
    return {
      rows: Math.ceil(height / rowSpacing),
      columns: width ? Math.ceil(width / hexagonWidth) + 1 : 0,
    };
  }, [windowSize, rowSpacing, hexagonWidth]);

  return (
    <div
      data-slot="hexagon-background"
      className={cn(
        "relative size-full overflow-hidden bg-primary-foreground/10",
        className,
      )}
      {...props}
    >
      <style>{`:root { --hexagon-margin: ${hexagonMargin}px; }`}</style>
      <div className="absolute top-0 -left-0 size-full overflow-hidden">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - 10,
            }}
            className="inline-flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => (
                <div
                  key={`hexagon-${rowIndex}-${colIndex}`}
                  style={{
                    width: hexagonWidth,
                    height: hexagonHeight,
                    marginLeft: hexagonMargin,
                  }}
                  className="group"
                >
                  <div
                    {...hexagonProps}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      ...hexagonProps?.style,
                    }}
                    className={cn(
                      "relative",
                      "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-foreground/50 before:opacity-20 before:transition-opacity before:duration-25",
                      "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] after:bg-primary-foreground/5 after:transition-all after:duration-25",
                      "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "group-hover:before:opacity-70 group-hover:after:bg-primary-foreground/15",
                      hexagonProps?.className,
                    )}
                  />
                </div>
              ),
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { HexagonBackground, type HexagonBackgroundProps };
