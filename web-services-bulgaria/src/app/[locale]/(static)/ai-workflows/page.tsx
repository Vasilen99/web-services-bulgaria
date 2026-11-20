import { Metadata } from "next";
import { notFound } from "next/navigation";
import AIWorkflowsPage from "@/page-components/ai-details";
import { generatePageMetadata } from "@/utility/metadata";
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
      bg: "AI Workflows - Интелигентна автоматизация | Web Services Bulgaria",
      en: "AI Workflows - Intelligent Automation | Web Services Bulgaria",
    },
    description: {
      bg: "Изследвайте AI-управлявани работни процеси и научете как интелигентната автоматизация може да трансформира вашия бизнес. Открийте интеграции с OpenAI и Anthropic.",
      en: "Explore AI-powered workflows and learn how intelligent automation can transform your business. Discover OpenAI and Anthropic integrations.",
    },
    keywords: {
      bg: [
        "AI workflows",
        "интелигентна автоматизация",
        "OpenAI",
        "Anthropic",
        "машинно обучение",
        "бизнес автоматизация",
        "AI решения",
        "автоматизация процеси",
      ],
      en: [
        "AI workflows",
        "intelligent automation",
        "OpenAI",
        "Anthropic",
        "machine learning",
        "business automation",
        "AI solutions",
        "automation processes",
      ],
    },
    pathname: "/ai-workflows",
    imageAlt: {
      bg: "Web Services Bulgaria - AI Workflows и Интелигентна Автоматизация",
      en: "Web Services Bulgaria - AI Workflows and Intelligent Automation",
    },
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <AIWorkflowsPage />;
}
