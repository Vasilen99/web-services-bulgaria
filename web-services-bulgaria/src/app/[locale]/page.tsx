import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import HeroSection from "@/page-components/hero-section";
import PartnersGallery from "@/page-components/partners-gallery";
import Team from "@/page-components/team";
import TechnologiesLanding from "@/page-components/technologies-landing";
import FAQSection from "@/page-components/faq-section";
import AISection from "@/page-components/ai-section";
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
      ? "Създаваме модерни дигитални решения - уеб платформи, SaaS продукти, CRM и ERP системи от идея до стартиране."
      : "We create modern digital solutions - web platforms, SaaS products, CRM & ERP systems from idea to launch.",
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
      <TechnologiesLanding />
      <AISection />
      <PartnersGallery />
      <Team />
      <FAQSection />
      {/* <Services />
      <SelectedWork />
      <Process />
      <Testimonials /> */}
    </main>
  );
}
