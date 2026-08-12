import MainTechnologies from "@/page-components/main-technologies";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { technologiesMainLink } from "@/utility/links";
import { locales, type Locale } from "@/i18n/config";
type Props = {
  params: Promise<{
    locale: Locale;
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
      ? "Web Services Bulgaria | Технологии"
      : "Web Services Bulgaria | Technologies",
    description: isBulgarian
      ? "Разгледайте технологиите, които използваме за модерни уеб решения – React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Stripe, Lucide и други."
      : "Explore the technologies we use to build modern web solutions – React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Stripe, Lucide and more",
    path: technologiesMainLink,
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${technologiesMainLink}`,
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <MainTechnologies />;
}
