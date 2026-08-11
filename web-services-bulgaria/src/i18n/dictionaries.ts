import type { Locale } from "./config";
import bg from "./bg.json";
import en from "./en.json";

const dictionaries: Record<Locale, typeof bg> = {
  bg,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = typeof bg;
