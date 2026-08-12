import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";

import { locales, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isBulgarian = locale === "bg";

  return createMetadata(locale as Locale, {
    title: isBulgarian
      ? "Web Services Bulgaria | Дигитални решения"
      : "Web Services Bulgaria | Digital Solutions",
    description: isBulgarian
      ? "Създаваме модерни дигитални решения - уеб платформи, SaaS продукти, CRM и ERP системи от идея до стартиране."
      : "We create modern digital solutions - web platforms, SaaS products, CRM & ERP systems from idea to launch.",
    path: "",
  });
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn("h-full", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen max-w-480 m-auto! flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        <LanguageProvider initialLocale={locale as Locale}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
