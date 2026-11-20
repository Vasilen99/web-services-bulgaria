import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PARTNERS_DATA } from "@/lib/partners-data";
import ProjectsPage from "@/page-components/projects";
import en from "../../../../../messages/en.json";
import bg from "../../../../../messages/bg.json";
import { generatePageMetadata } from "@/utility/metadata/helpers";
import { projectsLink } from "@/utility/links";
import {
  JsonLdScript,
  breadcrumbSchema,
  breadcrumbLabel,
} from "@/components/seo/json-ld";

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

type PartnerSlug = keyof typeof PARTNERS_DATA;

function getProject(slug: string) {
  return (PARTNERS_DATA as Record<string, (typeof PARTNERS_DATA)[PartnerSlug]>)[slug];
}

function getProjectMessages(locale: string, slug: string) {
  const localeMessages = messages[locale as "bg" | "en"] || messages.en;
  return localeMessages.partners[slug as keyof typeof localeMessages.partners];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  const projectMessages = getProjectMessages(locale, slug);
  if (!project || !projectMessages) return {};

  return generatePageMetadata({
    locale,
    pathname: `${projectsLink}/${slug}`,
    title: `${projectMessages.name} – ${projectMessages.shortDescription} | Web Services Bulgaria`,
    description: projectMessages.metaDescription,
    image: project.carouselImages[0]?.src ?? project.logo,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const partner = getProject(slug);

  if (!partner) {
    notFound();
  }

  const partnersData = getProjectMessages(locale, slug);

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

  // No `/projects` index page exists, so the trail is Home › project.
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema(locale, [
          { name: breadcrumbLabel("home", locale), path: "" },
          { name: partnersData.name, path: `${projectsLink}/${slug}` },
        ])}
      />
      <ProjectsPage partner={enrichedPartner} />
    </>
  );
}
