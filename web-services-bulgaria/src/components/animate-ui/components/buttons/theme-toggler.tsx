"use client";

import * as React from "react";
import { useTheme } from "next-themes";
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
  iconColor: string = "text-primary",
) => {
  const theme = modes.includes("system") ? effective : resolved;
  return theme === "system" ? (
    <Sun className={iconColor} />
  ) : theme === "dark" ? (
    <Moon className={iconColor} />
  ) : (
    <Sun className={iconColor} />
  );
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
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
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
