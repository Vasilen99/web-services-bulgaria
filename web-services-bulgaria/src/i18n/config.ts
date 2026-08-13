import { routing } from "./routing";

// Re-export locales and types from routing
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  bg: "Български",
  en: "English",
};
