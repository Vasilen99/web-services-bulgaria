// This is a template for updating page.tsx files to support multi-locale routing
// Copy this template and adapt it for each page

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
// Import your page components
// import MyPageComponent from "@/page-components/my-page";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isBg = locale === "bg";

  return createMetadata(locale as Locale, {
    title: isBg ? "Вашия BG Тиtъл" : "Your EN Title",
    description: isBg ? "Вашия BG描述 ..." : "Your EN Description...",
    path: "/your-page-path",
  });
}

export default async function YourPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <main>{/* Your page content here */}</main>;
}
