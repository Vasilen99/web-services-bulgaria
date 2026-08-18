import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PARTNERS_DATA } from "@/lib/partners-data";
import ProjectsPage from "@/page-components/projects";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
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
  const projectName =
    typeof partner.name === "string"
      ? partner.name
      : partner.name?.[lang] || partner.name?.["en"];
  const projectDesc =
    typeof partner.description === "string"
      ? partner.description
      : partner.description?.[lang] || partner.description?.["en"];

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
  const { slug } = await params;
  const partner = PARTNERS_DATA[slug as keyof typeof PARTNERS_DATA];

  if (!partner) {
    notFound();
  }

  return <ProjectsPage partner={partner} />;
}

export default Page;
