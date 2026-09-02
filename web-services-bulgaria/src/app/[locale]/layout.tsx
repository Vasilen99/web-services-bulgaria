import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import "../../../globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scroll-to-top";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const isBulgarian = locale === "bg";

  return createMetadata(locale as Locale, {
    title: isBulgarian
      ? "Web Services Bulgaria | Дигитални решения"
      : "Web Services Bulgaria | Digital Solutions",
    description: isBulgarian
      ? "Имате идея за бизнес? Ние я превръщаме в работещ уеб сайт, SaaS продукт или вътрешна система, която ви спестява време и носи клиенти. От първата среща до стартирането - партнираме си с вас на всяка стъпка."
      : "Have a business idea? We turn it into a working website, SaaS product, or internal system that saves you time and brings in customers. From the first call to launch, we partner with you every step of the way.",
    path: "",
  });
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Tell next-intl what locale is being used in this request
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </NextIntlClientProvider>
    </>
  );
}
