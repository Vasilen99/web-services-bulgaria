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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use startTransition to defer state update outside of render
    if (typeof window !== "undefined") {
      React.startTransition(() => {
        setIsMounted(true);
      });
    }
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
