"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import type { Locale } from "@/i18n/config";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (translations: { bg: string; en: string } | undefined) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLocale = "bg",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  // Initialize locale from pathname on client side
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return initialLocale || "bg";
    }
    const pathLocale = window.location.pathname.split("/")[1];
    if (pathLocale === "bg" || pathLocale === "en") {
      return pathLocale as Locale;
    }
    return initialLocale || "bg";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    // Navigation happens via LanguageSwitcher component
  };

  // Translation helper function
  const t = (translations: { bg: string; en: string } | undefined) => {
    if (!translations) return "";
    return translations[locale] || translations.bg;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
