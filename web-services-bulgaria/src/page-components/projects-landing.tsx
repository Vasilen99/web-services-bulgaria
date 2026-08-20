"use client";

import { useLocale, useTranslations } from "next-intl";
import { CustomCarousel } from "@/app/components/custom-carousel";
import { HeadingSection } from "@/app/components/heading-section";
import { PARTNERS_DATA } from "@/lib/partners-data";
import { projectsLink } from "@/utility/links";

export default function ProjectsLanding() {
  const t = useTranslations();
  const locale = useLocale();

  // Map partners data for carousel with translations
  const PARTNERS_LIST = [
    {
      keyFirstName: "partners.bft.name",
      image: PARTNERS_DATA.bft.logo,
      bioKey: "partners.bft.shortDescription",
      socialLinks: {},
      slug: "bft",
    },
    {
      keyFirstName: "partners.servify.name",
      image: PARTNERS_DATA.servify.logo,
      bioKey: "partners.servify.shortDescription",
      socialLinks: {},
      slug: "servify",
    },
    {
      keyFirstName: "partners.mmbuilding.name",
      image: PARTNERS_DATA.mmbuilding.logo,
      bioKey: "partners.mmbuilding.shortDescription",
      socialLinks: {},
      slug: "mmbuilding",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-primary-foreground py-12 lg:px-12 px-4 overflow-hidden"
    >
      <HeadingSection
        title={t("partnersHeading")}
        subtitle={t("partnersSubheading")}
        textColor="primary"
        type="landing"
      />

      <div className="max-w-7xl mx-auto mt-24">
        <CustomCarousel
          members={PARTNERS_LIST}
          imageContainerClassName="object-contain object-center"
          isClickable={true}
          basePath={`/${locale}${projectsLink}`}
        />
      </div>
    </section>
  );
}
