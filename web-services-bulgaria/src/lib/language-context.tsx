"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Locale } from "@/i18n/config";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (translations: { bg: string; en: string }) => string;
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
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get current locale from pathname
    const pathLocale = window.location.pathname.split("/")[1];
    if (pathLocale === "bg" || pathLocale === "en") {
      setLocaleState(pathLocale as Locale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    // Navigation happens via LanguageSwitcher component
  };

  // Translation helper function
  const t = (translations: { bg: string; en: string }) => {
    return translations[locale] || translations.bg;
  };

  if (!mounted) {
    // Return with default language during SSR
    return (
      <LanguageContext.Provider
        value={{
          locale: initialLocale,
          setLocale: () => {},
          t: (translations) => translations[initialLocale] || translations.bg,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

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
