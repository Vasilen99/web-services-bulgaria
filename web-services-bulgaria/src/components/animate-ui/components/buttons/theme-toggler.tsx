"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import dynamic from "next/dynamic";
import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler";
import { buttonVariants } from "@/components/animate-ui/components/buttons/button";
import { cn } from "@/lib/utils";

const getIcon = (
  effective: ThemeSelection,
  resolved: Resolved,
  modes: ThemeSelection[],
) => {
  const theme = modes.includes("system") ? effective : resolved;
  return theme === "system" ? <Sun /> : theme === "dark" ? <Moon /> : <Sun />;
};

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps["onImmediateChange"];
    direction?: ThemeTogglerPrimitiveProps["direction"];
    children?: React.ReactNode;
  };

function useLocalStorageTheme(modes: ThemeSelection[] = ["light", "dark"]) {
  // Initialize theme from localStorage synchronously to avoid mismatch
  const [themeState, setThemeState] = React.useState<{
    theme: ThemeSelection;
    resolved: Resolved;
  }>(() => {
    // This initializer runs synchronously during render, before effects
    const savedTheme = localStorage.getItem("theme");
    let isDarkTheme = false;

    if (savedTheme && modes.includes(savedTheme as ThemeSelection)) {
      isDarkTheme = savedTheme === "dark";
    } else {
      // Check system preference
      isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return {
      theme:
        savedTheme && modes.includes(savedTheme as ThemeSelection)
          ? (savedTheme as ThemeSelection)
          : isDarkTheme
            ? "dark"
            : "light",
      resolved: isDarkTheme ? "dark" : "light",
    };
  });

  React.useEffect(() => {
    // Apply theme to DOM after mount
    const applyTheme = () => {
      document.documentElement.classList.toggle(
        "dark",
        themeState.resolved === "dark",
      );
    };

    // Use startTransition if available for non-urgent updates
    if ("startTransition" in React) {
      React.startTransition(applyTheme);
    } else {
      applyTheme();
    }

    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        const updatedTheme = e.newValue;
        if (updatedTheme && modes.includes(updatedTheme as ThemeSelection)) {
          const isDark = updatedTheme === "dark";
          setThemeState({
            theme: updatedTheme as ThemeSelection,
            resolved: isDark ? "dark" : "light",
          });
          document.documentElement.classList.toggle("dark", isDark);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [themeState.resolved, modes]);

  const setTheme = React.useCallback((newTheme: ThemeSelection) => {
    const resolved =
      newTheme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : newTheme;
    setThemeState({
      theme: newTheme,
      resolved,
    });
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  return {
    theme: themeState.theme,
    resolvedTheme: themeState.resolved,
    setTheme,
    mounted: true,
  };
}

function ThemeTogglerButtonInner({
  variant = "default",
  size = "default",
  modes = ["light", "dark"],
  direction = "ltr",
  onImmediateChange,
  onClick,
  className,
  children,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme, mounted } =
    useLocalStorageTheme(modes);

  if (!mounted) {
    return (
      <button
        disabled
        className={cn(buttonVariants({ variant, size, className }))}
      >
        <Sun className="size-5" />
      </button>
    );
  }

  return (
    <ThemeTogglerPrimitive
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => (
        <button
          data-slot="theme-toggler-button"
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={(e) => {
            onClick?.(e);
            toggleTheme(getNextTheme(effective, modes));
          }}
          {...props}
        >
          {getIcon(effective, resolved, modes)}
          {children}
        </button>
      )}
    </ThemeTogglerPrimitive>
  );
}

// Dynamic import with client-side only rendering
const ThemeTogglerButton = dynamic(
  () => Promise.resolve(ThemeTogglerButtonInner),
  {
    ssr: false,
    loading: () => (
      <div className="relative bg-primary-foreground/5 hover:bg-primary-foreground/20 rounded-lg flex border border-primary size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md">
        <Sun className="size-5 text-primary" />
      </div>
    ),
  },
);

export { ThemeTogglerButton, type ThemeTogglerButtonProps };
