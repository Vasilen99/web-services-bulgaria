import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TECHNOLOGIES_DATA } from "@/utility/constants";
import SingleTechnology from "@/page-components/singletechnology";
import { JsonLdScript, breadcrumbSchema } from "@/components/seo/json-ld";
import { generatePageMetadata } from "@/utility/metadata/helpers";
import { technologiesMainLink } from "@/utility/links";

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

  return generatePageMetadata({
    locale,
    pathname: `${technologiesMainLink}/${slug}`,
    title: techName,
    description: techDesc || `Learn more about ${techName}`,
    pageType: "Technology",
  });
}

async function Page({ params }: Props) {
  const { slug } = await params;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    notFound();
  }

  const { locale } = await params;

  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema(locale, [
          { name: "Home", path: "" },
          { name: "Technologies", path: technologiesMainLink },
          { name: tech.name, path: `${technologiesMainLink}/${slug}` },
        ])}
      />
      <SingleTechnology slug={slug} />
    </>
  );
}

export default Page;
