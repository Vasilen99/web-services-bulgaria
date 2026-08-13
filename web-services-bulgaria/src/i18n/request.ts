import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import type { Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // The locale is set by setRequestLocale() in the layout
  // It might still be a Promise, so we await it
  let locale: Locale = routing.defaultLocale;

  try {
    const resolved = await requestLocale;
    if (resolved && routing.locales.includes(resolved as Locale)) {
      locale = resolved as Locale;
    }
  } catch {
    // If requestLocale fails to resolve, use default
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
