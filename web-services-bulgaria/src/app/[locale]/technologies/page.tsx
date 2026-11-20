import { Metadata } from "next";
import { notFound } from "next/navigation";
import MainTechnologies from "@/page-components/main-technologies";
import { generatePageMetadata } from "@/utility/metadata";
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

  return generatePageMetadata({
    locale: locale as Locale,
    title: {
      bg: "Технологии | Web Services Bulgaria",
      en: "Technologies | Web Services Bulgaria",
    },
    description: {
      bg: "Разгледайте технологиите, които използваме за модерни уеб решения – React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Stripe, Lucide и още.",
      en: "Explore the technologies we use to build modern web solutions – React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Stripe, Lucide and more.",
    },
    keywords: {
      bg: [
        "технологии",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "уеб разработка",
        "фронтенд",
        "бекенд",
        "full-stack",
      ],
      en: [
        "technologies",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "web development",
        "frontend",
        "backend",
        "full-stack",
      ],
    },
    pathname: technologiesMainLink,
    imageAlt: {
      bg: "Web Services Bulgaria - Технологии за уеб разработка",
      en: "Web Services Bulgaria - Web Development Technologies",
    },
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <MainTechnologies />;
}
