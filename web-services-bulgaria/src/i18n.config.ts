export const locales = ["bg", "en"] as const;
export const defaultLocale: (typeof locales)[number] = "bg";

export type Locale = (typeof locales)[number];
