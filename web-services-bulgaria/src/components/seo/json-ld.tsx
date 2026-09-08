import { SITE_URL, SITE_NAME, LOGO_URL } from "@/utility/metadata/constants";

type JsonLd = Record<string, unknown>;

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_DESCRIPTION: Record<string, string> = {
  bg: "Имате идея за бизнес? Ние я превръщаме в работещ уеб сайт, SaaS продукт или вътрешна система, която ви спестява време и носи клиенти. От първата среща до стартирането - партнираме си с вас на всяка стъпка.",
  en: "Have a business idea? We turn it into a working website, SaaS product, or internal system that saves you time and brings in customers. From the first call to launch, we partner with you every step of the way.",
};

const ORG_LEGAL_NAME: Record<string, string> = {
  bg: "Уеб Сървисис България",
  en: "Web Services Bulgaria",
};

export const ORG_CONTACT = {
  email: "info@webservicesbg.com",
  telephone: "+359892203616",
  city: "Sofia",
  country: "BG",
} as const;

// TODO: add company social / directory profile URLs (LinkedIn page, GitHub org, Clutch, …) when available.
const ORG_SAME_AS: string[] = [];

const ORG_FOUNDER = {
  "@type": "Person",
  "@id": `${SITE_URL}/#vasilen-minkov`,
  name: "Vasilen Minkov",
  jobTitle: "Founder",
  url: `${SITE_URL}/en/team`,
  sameAs: ["https://www.linkedin.com/in/vasilen-minkov-9117011b0/"],
  worksFor: { "@id": `${SITE_URL}/#organization` },
};

const ORG_EMPLOYEES = [
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#miroslav-dimitrov`,
    name: "Miroslav Dimitrov",
    jobTitle: "Software Engineer",
    url: `${SITE_URL}/en/team`,
    sameAs: ["https://www.linkedin.com/in/miroslav-dimitrov-534805263/"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
];

const ORG_SERVICES: Record<string, string[]> = {
  en: [
    "Custom Web Development",
    "SaaS Product Development",
    "CRM System Development",
    "ERP System Development",
    "Landing Page Design & Development",
    "Mobile Application Development",
    "E-commerce Development",
    "AI Workflow Automation",
    "API Development & Integrations",
    "UI/UX Design",
    "Website Maintenance & Support",
    "Technical Consulting",
  ],
  bg: [
    "Разработка на уеб сайтове по поръчка",
    "Разработка на SaaS продукти",
    "Разработка на CRM системи",
    "Разработка на ERP системи",
    "Дизайн и разработка на лендинг страници",
    "Разработка на мобилни приложения",
    "Разработка на онлайн магазини",
    "Автоматизация с AI работни процеси",
    "Разработка на API и интеграции",
    "UI/UX дизайн",
    "Поддръжка на уеб сайтове",
    "Техническо консултиране",
  ],
};

const ORG_KNOWS_ABOUT = [
  "Web Development",
  "SaaS",
  "CRM",
  "ERP",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Mobile App Development",
  "AI Automation",
  "Cloud Infrastructure",
];

export function organizationSchema(locale: string = "en"): JsonLd {
  const lang = locale === "bg" ? "bg" : "en";
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME[lang],
    alternateName: "WS Bulgaria",
    description: ORG_DESCRIPTION[lang],
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_URL },
    image: LOGO_URL,
    foundingDate: "2024",
    founder: ORG_FOUNDER,
    employee: ORG_EMPLOYEES,
    vatID: "BG207880021",
    taxID: "207880021",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1, maxValue: 5 },
    email: ORG_CONTACT.email,
    telephone: ORG_CONTACT.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG_CONTACT.city,
      addressCountry: ORG_CONTACT.country,
    },
    areaServed: "Worldwide",
    knowsLanguage: ["en", "bg"],
    knowsAbout: ORG_KNOWS_ABOUT,
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: ORG_CONTACT.email,
        telephone: ORG_CONTACT.telephone,
        availableLanguage: ["English", "Bulgarian"],
        url: `${SITE_URL}/${lang}/contact-us`,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "bg" ? "Услуги" : "Services",
      itemListElement: ORG_SERVICES[lang].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE_URL}/#organization` } },
      })),
    },
    ...(ORG_SAME_AS.length ? { sameAs: ORG_SAME_AS } : {}),
  };
}

export function websiteSchema(locale: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

type LocalizedFaqItem = { questionBg: string; questionEn: string; answerBg: string; answerEn: string };
type LocalizedFaqCategory = { items: LocalizedFaqItem[] };

/** Builds FAQPage schema from the project's FAQ data (flat items or categories). */
export function faqSchemaFromData(
  locale: string,
  data: (LocalizedFaqItem | LocalizedFaqCategory)[],
): JsonLd {
  const items = data.flatMap((entry) => ("items" in entry ? entry.items : [entry]));
  const isBg = locale === "bg";
  return faqSchema(
    items.map((i) => ({
      question: isBg ? i.questionBg : i.questionEn,
      answer: isBg ? i.answerBg : i.answerEn,
    })),
  );
}

export function breadcrumbSchema(
  locale: string,
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path}`,
    })),
  };
}
