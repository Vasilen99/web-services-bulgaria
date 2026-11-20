import { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactUsSection from "@/page-components/contact-us";
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
      bg: "Свържете се с нас | Web Services Bulgaria",
      en: "Contact Us | Web Services Bulgaria",
    },
    description: {
      bg: "Свържете се с Web Services Bulgaria. Попълнете формата или се обадете за повече информация относно нашите услуги и решения за вашия бизнес.",
      en: "Get in touch with Web Services Bulgaria. Fill out the contact form or call us for more information about our services and solutions for your business.",
    },
    keywords: {
      bg: [
        "контакт",
        "свържете се",
        "поддръжка",
        "информация",
        "web services",
        "консултация",
        "връзка",
      ],
      en: [
        "contact",
        "contact us",
        "support",
        "information",
        "web services",
        "consultation",
        "get in touch",
      ],
    },
    pathname: "/contact-us",
    imageAlt: {
      bg: "Web Services Bulgaria - Контактна информация",
      en: "Web Services Bulgaria - Contact Information",
    },
  });
}

const Page = async ({ params }: Props) => {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <ContactUsSection />;
};

export default Page;
