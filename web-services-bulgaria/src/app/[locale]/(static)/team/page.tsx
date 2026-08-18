import { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamDetailsPage from "@/page-components/team-details";
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
      bg: "Запознайте се с екипа | Web Services Bulgaria",
      en: "Meet the Team | Web Services Bulgaria",
    },
    description: {
      bg: "Един талантлив екип на професионалисти, посветени на създаването на най-добрите дигитални решения за вашия бизнес. Запознайте се с нашите експерти.",
      en: "A talented team of professionals dedicated to creating the best digital solutions for your business. Meet our experts and learn about our journey.",
    },
    keywords: {
      bg: [
        "екип",
        "хора",
        "професионалисти",
        "разработчици",
        "дизайнери",
        "web services",
        "България",
        "компания",
      ],
      en: [
        "team",
        "people",
        "professionals",
        "developers",
        "designers",
        "web services",
        "Bulgaria",
        "company",
      ],
    },
    category: { bg: "За нас", en: "About" },
    pathname: "/team",
    imageAlt: {
      bg: "Web Services Bulgaria - Екипът",
      en: "Web Services Bulgaria - The Team",
    },
    articleSection: { bg: "Хора", en: "People" },
    articleTags: {
      bg: "екип, хора, компания, професионалисти, web services",
      en: "team, people, company, professionals, web services",
    },
    aiPurpose: {
      bg: "Представя екипа на Web Services Bulgaria, техния опит, експертиза и историята им. Демонстрира способностите и достиженията на компанията.",
      en: "Introduces the Web Services Bulgaria team, their experience, expertise, and company history. Showcases the company's capabilities and achievements.",
    },
    aiAudience: {
      bg: "Потенциални клиенти, който искат да познаят хората зад Web Services Bulgaria",
      en: "Potential clients who want to learn about the people behind Web Services Bulgaria",
    },
    aiContentType: { bg: "екипен_профил", en: "team_profile" },
    aiEntityType: { bg: "екип", en: "team" },
    aiPageType: "company",
    schemaPageType: "AboutPage",
    additionalMetadata: {
      "ai:page_function": "company_introduction",
      "ai:user_action": "learn_about_team",
    },
  });
}

const Page = async ({ params }: Props) => {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <TeamDetailsPage />;
};

export default Page;
