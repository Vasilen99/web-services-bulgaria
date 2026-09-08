import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PARTNERS_DATA } from "@/lib/partners-data";
import ProjectsPage from "@/page-components/projects";
import en from "../../../../../messages/en.json";
import bg from "../../../../../messages/bg.json";
import { generatePageMetadata } from "@/utility/metadata/helpers";
import { projectsLink } from "@/utility/links";
import { JsonLdScript, breadcrumbSchema } from "@/components/seo/json-ld";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return generatePageMetadata({
    locale,
    pathname: `${projectsLink}/${slug}`,
    title: project.id,
    description: `${project.id} – ${project.technologies.join(", ")}`,
    image: project.carouselImages[0]?.src ?? project.logo,
    pageType: "Project",
  });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const partner = getProject(slug);

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

  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema(locale, [
          { name: "Home", path: "" },
          { name: "Projects", path: projectsLink },
          { name: partner.id, path: `${projectsLink}/${slug}` },
        ])}
      />
      <ProjectsPage partner={enrichedPartner} />
    </>
  );
}
