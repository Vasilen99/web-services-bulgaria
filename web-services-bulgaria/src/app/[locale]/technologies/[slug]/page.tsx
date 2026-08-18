import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TECHNOLOGIES_DATA } from "@/utility/constants";
import SingleTechnology from "@/page-components/singletechnology";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(TECHNOLOGIES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    return {
      title: "Technology Not Found",
    };
  }

  const lang = locale as "bg" | "en";
  const techName =
    typeof tech.name === "string"
      ? tech.name
      : tech.name?.[lang] || tech.name?.["en"];
  const techDesc =
    typeof tech.description === "string"
      ? tech.description
      : tech.description?.[lang] || tech.description?.["en"];

  return {
    title: techName,
    description: techDesc || `Learn more about ${techName}`,
    openGraph: {
      title: techName,
      description: techDesc || `Learn more about ${techName}`,
      type: "website",
    },
  };
}

async function Page({ params }: Props) {
  const { slug } = await params;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    notFound();
  }

  return <SingleTechnology slug={slug} />;
}

export default Page;
