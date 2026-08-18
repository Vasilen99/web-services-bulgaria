"use client";

import { GlassCard as OriginalGlassCard } from "react-glass-ui";
import React, { useEffect, useState } from "react";

type GlassCardProps = React.ComponentProps<typeof OriginalGlassCard>;

/**
 * Wrapper component for GlassCard that prevents hydration mismatches
 * caused by the library generating random UUIDs for SVG elements.
 *
 * This component only renders on the client side after hydration,
 * preventing server/client mismatch of SVG IDs and styles.
 */
export function GlassCardWrapper(props: GlassCardProps) {
  // Use a state with callback function to trigger re-render once after mount
  const [isMounted, setIsMounted] = useState(() => {
    // Return false initially (will be false on server and first client render)
    return false;
  });

  useEffect(() => {
    // Use startTransition or setTimeout to defer state update
    // This ensures it doesn't happen during render phase
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // During SSR and initial hydration, render a placeholder to maintain layout
  if (!isMounted) {
    return (
      <div
        className={props.className}
        style={{
          borderRadius: props.borderRadius,
        }}
      >
        {props.children}
      </div>
    );
  }

  // After hydration, render the actual GlassCard with all effects
  return <OriginalGlassCard {...props} />;
}
