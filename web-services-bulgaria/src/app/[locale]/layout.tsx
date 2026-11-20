import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import { SITE_URL, SITE_NAME } from "@/utility/metadata";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scroll-to-top";
import { ThemeProvider } from "@/app/components/theme-provider";
import { LenisProvider } from "@/app/components/lenis-provider";
import { NavigationScrollReset } from "@/app/components/scrollReset";
import {
  JsonLdScript,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/json-ld";
import bgMessages from "../../../messages/bg.json";
import enMessages from "../../../messages/en.json";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Only site-wide defaults live here. Every page sets its own title, description,
// canonical, hreflang, Open Graph and Twitter tags via generatePageMetadata, so
// nothing page-specific (e.g. the homepage canonical) can leak into other routes.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // CRITICAL: This MUST be called before any client components render
  // It ensures the i18n context is initialized with the correct locale
  setRequestLocale(locale);

  // Load messages for this locale using static imports
  const messageMap = {
    bg: bgMessages,
    en: enMessages,
  };
  const messages = messageMap[locale as Locale];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LenisProvider>
          <NavigationScrollReset />
          <ThemeProvider>
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
              <NextIntlClientProvider locale={locale} messages={messages}>
                <JsonLdScript
                  data={[organizationSchema(locale), websiteSchema(locale)]}
                />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <ScrollToTop />
              </NextIntlClientProvider>
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
