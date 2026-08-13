/**
 * Utility for testing hydration consistency
 *
 * Usage in development:
 * import { testHydrationConsistency } from '@/lib/hydration-test'
 *
 * In your component:
 * useEffect(() => {
 *   const issues = testHydrationConsistency();
 *   if (issues.length > 0) {
 *     console.warn('Hydration issues detected:', issues);
 *   }
 * }, []);
 */

interface HydrationIssue {
  element: Element;
  issue: string;
}

/**
 * Detects elements with mismatched attributes between server and client
 * Look for elements with data-testid or specific classes that might have
 * randomly generated content
 */
export function testHydrationConsistency(): HydrationIssue[] {
  const issues: HydrationIssue[] = [];

  if (typeof window === "undefined") {
    return issues;
  }

  // Test 1: Check for multiple clipPath IDs with different values
  const clipPaths = document.querySelectorAll("[clip-path]");
  const clipPathMap = new Map<string, Set<string>>();

  clipPaths.forEach((el) => {
    const clipPath = el.getAttribute("clip-path");
    if (clipPath) {
      if (!clipPathMap.has("clipPath")) {
        clipPathMap.set("clipPath", new Set());
      }
      clipPathMap.get("clipPath")!.add(clipPath);
    }
  });

  clipPathMap.forEach((values, key) => {
    if (values.size > 5) {
      issues.push({
        element: document.body,
        issue: `Excessive variation in ${key} values. Possible hydration mismatch.`,
      });
    }
  });

  // Test 2: Check for GlassCard placeholders that haven't been replaced
  const unhydratedGlassCards = document.querySelectorAll(
    'div[class*="glass-ui"][style*="borderRadius"]',
  );

  // Should be minimal if hydration worked correctly
  if (unhydratedGlassCards.length > 0) {
    console.info(
      `Found ${unhydratedGlassCards.length} GlassCard elements (expected if recently mounted)`,
    );
  }

  return issues;
}

/**
 * Compare star positions to ensure they're deterministic
 */
export function testStarLayerConsistency(): boolean {
  const starLayers = document.querySelectorAll('[data-slot="star-layer"]');

  if (starLayers.length === 0) {
    return true; // No star layers found, can't test
  }

  const boxShadows = new Set<string>();

  starLayers.forEach((layer) => {
    const divs = layer.querySelectorAll(".absolute");
    divs.forEach((div) => {
      const style = window.getComputedStyle(div);
      const boxShadow = style.boxShadow;
      boxShadows.add(boxShadow);
    });
  });

  // Should be minimal variation in box-shadow values
  // Most variations come from motion animation, not hydration issues
  return boxShadows.size <= 10;
}
