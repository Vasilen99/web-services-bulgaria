import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQMain } from "../../../components/faq-main";
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
      bg: "Често задавани въпроси (FAQ) | Web Services Bulgaria",
      en: "Frequently Asked Questions (FAQ) | Web Services Bulgaria",
    },
    description: {
      bg: "Често задавани въпроси за Web Services Bulgaria. Намерете отговори на общи въпроси относно нашите услуги, поддръжка и още много.",
      en: "Frequently Asked Questions about Web Services Bulgaria. Find answers to common inquiries regarding our services, support, and more.",
    },
    keywords: {
      bg: [
        "FAQ",
        "често задавани въпроси",
        "поддръжка",
        "услуги",
        "web services",
        "помощ",
      ],
      en: [
        "FAQ",
        "frequently asked questions",
        "support",
        "services",
        "web services",
        "help",
      ],
    },
    category: { bg: "Поддръжка", en: "Support" },
    pathname: "/faq",
    imageAlt: {
      bg: "Web Services Bulgaria - Често задавани въпроси",
      en: "Web Services Bulgaria - Frequently Asked Questions",
    },
    articleSection: { bg: "Помощ и поддръжка", en: "Help and Support" },
    articleTags: {
      bg: "FAQ, помощ, поддръжка, въпроси, отговори",
      en: "FAQ, help, support, questions, answers",
    },
    aiPurpose: {
      bg: "Предоставя отговори на често задавани въпроси относно услугите и продуктите на Web Services Bulgaria. Помощна ресурс за клиенти.",
      en: "Provides answers to frequently asked questions about Web Services Bulgaria services and products. Customer support resource.",
    },
    aiAudience: {
      bg: "Потребители на услугите на Web Services Bulgaria",
      en: "Users of Web Services Bulgaria services",
    },
    aiContentType: { bg: "помощ_faq", en: "help_faq" },
    aiEntityType: { bg: "помощна_информация", en: "help_information" },
    aiPageType: "faq",
    schemaPageType: "FAQPage",
    additionalMetadata: {
      "ai:page_function": "help_support",
      "ai:user_action": "seek_help",
    },
  });
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <FAQMain />;
}
