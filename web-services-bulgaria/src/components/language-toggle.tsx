"use client";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/config";
import { localeNames } from "@/i18n/config";

interface LanguageToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LanguageToggle({
  className = "",
  showLabel = false,
  size = "md",
}: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const nextLocale: Locale = currentLocale === "bg" ? "en" : "bg";
  const [, startTransition] = useTransition();

  const toggleLanguage = () => {
    // Wrap navigation in startTransition to ensure proper re-rendering
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  // Size variants
  const sizeClasses = {
    sm: "size-8 text-xs",
    md: "size-10 text-xs",
    lg: "size-12 text-sm",
  };

  const tooltipText =
    currentLocale === "bg" ? "Switch to English" : "Превключи на български";

  return (
    <Button
      onClick={toggleLanguage}
      className={`
        relative bg-primary-foreground/5 hover:bg-primary-foreground/20 
        rounded-lg flex items-center justify-center border border-primary 
        p-0 overflow-hidden transition-all duration-300 backdrop-blur-md
        ${sizeClasses[size]} ${className}
      `}
      title={tooltipText}
      aria-label={tooltipText}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          {/* Language abbreviation badge */}
          <span className="font-bold text-primary">
            {currentLocale.toUpperCase()}
          </span>

          {/* Optional label showing full language name */}
          {showLabel && (
            <span className="text-primary text-xs ml-1 hidden sm:inline">
              {localeNames[currentLocale]}
            </span>
          )}
        </div>
      </div>

      {/* Accessibility: Hidden text for screen readers */}
      <span className="sr-only">
        {localeNames[currentLocale]}.
        {currentLocale === "bg"
          ? "Click to switch to English"
          : "Кликнете, за да превключите на български"}
      </span>
    </Button>
  );
}
