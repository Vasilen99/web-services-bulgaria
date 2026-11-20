import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["bg", "en"] as const,

  // Used when no locale matches
  defaultLocale: "bg",

  // hreflang is emitted via page metadata and the sitemap. The middleware's
  // `Link` header pointed x-default at unprefixed (redirecting) URLs and
  // contradicted those signals.
  alternateLinks: false,
});
