import { notFound } from "next/navigation";
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

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params;
  const partner = PARTNERS_DATA[slug as keyof typeof PARTNERS_DATA];

  if (!partner) {
    notFound();
  }

  return <ProjectsPage partner={partner} />;
}
