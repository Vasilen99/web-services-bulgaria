"use client";

import { useTranslations } from "next-intl";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { useTheme } from "next-themes";
import type React from "react";

interface ThemeToggleProps extends React.ComponentProps<"button"> {
  showAsText?: boolean;
}

function ThemeToggle({ showAsText = false, ...props }: ThemeToggleProps) {
  // Always call hooks in the same order
  const theme = useTheme();
  const t = useTranslations();

  const resolvedTheme = theme?.resolvedTheme;
  const isDark = resolvedTheme === "dark";

  return (
    <ThemeTogglerButton
      variant="ghost"
      aria-label={`${isDark ? t("switchToLight") : t("switchToDark")}`}
      className={`cursor-pointer gap-2 rounded-lg ${showAsText ? "justify-start" : ""}`}
      modes={["light", "dark"]}
      direction="ltr"
      {...props}
    >
      {showAsText ? (
        <span className="text-sm transition-colors duration-300">
          {isDark ? t("lightTheme") : t("darkTheme")}
        </span>
      ) : null}
    </ThemeTogglerButton>
  );
}

export default ThemeToggle;
