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
    pathname: "/team",
    imageAlt: {
      bg: "Web Services Bulgaria - Екипът",
      en: "Web Services Bulgaria - The Team",
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
