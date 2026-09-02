import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import HeroSection from "@/page-components/hero-section";
import ProjectsLanding from "@/page-components/projects-landing";
import Team from "@/page-components/team";
import TechnologiesLanding from "@/page-components/technologies-landing";
import FAQSection from "@/page-components/faq-section";
import AISection from "@/page-components/ai-section";
import WorkingProcess from "@/page-components/working-process";
type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isBg = locale === "bg";

  return createMetadata(locale as Locale, {
    title: isBg
      ? "Web Services Bulgaria | Дигитални решения"
      : "Web Services Bulgaria | Digital Solutions",
    description: isBg
      ? "Имате идея за бизнес? Ние я превръщаме в работещ уеб сайт, SaaS продукт или вътрешна система, която ви спестява време и носи клиенти. От първата среща до стартирането - партнираме си с вас на всяка стъпка."
      : "Have a business idea? We turn it into a working website, SaaS product, or internal system that saves you time and brings in customers. From the first call to launch, we partner with you every step of the way.",
    path: "",
  });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <main className="bg-background">
      <HeroSection />
      <Team />
      <WorkingProcess />
      <AISection />
      <ProjectsLanding />
      <TechnologiesLanding />
      <FAQSection />
    </main>
  );
}
