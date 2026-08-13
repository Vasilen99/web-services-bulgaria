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
    category: { bg: "Технология", en: "Technology" },
    pathname: "/ai-workflows",
    imageAlt: {
      bg: "Web Services Bulgaria - AI Workflows и Интелигентна Автоматизация",
      en: "Web Services Bulgaria - AI Workflows and Intelligent Automation",
    },
    articleSection: { bg: "Технология и AI", en: "Technology and AI" },
    articleTags: {
      bg: "AI, workflows, автоматизация, OpenAI, Anthropic, машинно обучение",
      en: "AI, workflows, automation, OpenAI, Anthropic, machine learning",
    },
    aiPurpose: {
      bg: "Представя AI-управлявани работни процеси и интелигентни решения за автоматизация на бизнес процеси. Демонстрира интеграции с водещи AI платформи.",
      en: "Presents AI-powered workflows and intelligent solutions for business process automation. Demonstrates integrations with leading AI platforms.",
    },
    aiAudience: {
      bg: "Бизнеси и организации, които искат да автоматизират своите процеси чрез AI технологии",
      en: "Businesses and organizations looking to automate their processes through AI technologies",
    },
    aiContentType: { bg: "ai_решения_демонстрация", en: "ai_solutions_demo" },
    aiEntityType: { bg: "технологично_решение", en: "technology_solution" },
    aiPageType: "product_showcase",
    schemaPageType: "WebPage",
    additionalMetadata: {
      "ai:page_function": "technology_showcase",
      "ai:user_action": "explore_features",
      "tech:ai_integration": "openai,anthropic",
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
