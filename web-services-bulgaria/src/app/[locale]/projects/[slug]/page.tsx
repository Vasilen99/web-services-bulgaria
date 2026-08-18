import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PARTNERS_DATA } from "@/lib/partners-data";
import ProjectsPage from "@/page-components/projects";
import en from "../../../../../messages/en.json";
import bg from "../../../../../messages/bg.json";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const messages = {
  en,
  bg,
};

export async function generateStaticParams() {
  return Object.keys(PARTNERS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const partner = PARTNERS_DATA[slug as keyof typeof PARTNERS_DATA];

  if (!partner) {
    return {
      title: "Project Not Found",
    };
  }

  const lang = locale as "bg" | "en";
  const localeMessages = messages[lang] || messages.en;
  const partnersData =
    localeMessages.partners[slug as keyof typeof localeMessages.partners];

  if (!partnersData) {
    return notFound();
  }

  const projectName = partnersData.name;
  const projectDesc = partnersData.description;

  return {
    title: projectName,
    description: projectDesc || `Learn more about ${projectName}`,
    openGraph: {
      title: projectName,
      description: projectDesc || `Learn more about ${projectName}`,
      type: "website",
    },
  };
}

async function Page({ params }: Props) {
  const { slug, locale } = await params;
  const partner = PARTNERS_DATA[slug as keyof typeof PARTNERS_DATA];

  if (!partner) {
    notFound();
  }

  const lang = locale as "bg" | "en";
  const localeMessages = messages[lang] || messages.en;
  const partnersData =
    localeMessages.partners[slug as keyof typeof localeMessages.partners];

  if (!partnersData) {
    notFound();
  }

  // Merge the static data with the translated content
  const enrichedPartner = {
    ...partner,
    name: partnersData.name,
    shortDescription: partnersData.shortDescription,
    description: partnersData.description,
    longDescription: partnersData.longDescription,
    whatItDoes: partnersData.whatItDoes,
    achievements: partnersData.achievements,
    timeline: {
      ...partner.timeline,
      description: partnersData.timeline.description,
    },
  };

  return <ProjectsPage partner={enrichedPartner} />;
}

export default Page;
