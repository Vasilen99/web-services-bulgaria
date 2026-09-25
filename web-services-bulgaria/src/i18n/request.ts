import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// This is called during rendering and should not throw dynamic rendering errors
// Instead, we now load messages directly in the layout where we have explicit locale
export default getRequestConfig(async () => {
  // We don't use requestLocale anymore since layout handles message loading explicitly
  // This function now just provides fallback config
  return {
    locale: routing.defaultLocale,
    messages: (await import(`../../messages/${routing.defaultLocale}.json`))
      .default,
  };
});
