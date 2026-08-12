"use client";

import { PartnerCard } from "@/components/partner-card";
import { ServifyFullLogo } from "@/utility/icons";
import { PARTNERS_DATA } from "@/lib/partners-data";

// Map partners data for cards
const PARTNERS_LIST = [
  {
    name: PARTNERS_DATA.bft.name,
    shortDescription: PARTNERS_DATA.bft.shortDescription,
    logo: PARTNERS_DATA.bft.logo,
    slug: "bft",
    type: "image" as const,
  },
  {
    name: PARTNERS_DATA.servify.name,
    shortDescription: PARTNERS_DATA.servify.shortDescription,
    logoComponent: ServifyFullLogo,
    slug: "servify",
    type: "component" as const,
  },
  {
    name: PARTNERS_DATA.mmbuilding.name,
    shortDescription: PARTNERS_DATA.mmbuilding.shortDescription,
    logo: PARTNERS_DATA.mmbuilding.logo,
    slug: "mmbuilding",
    type: "image" as const,
  },
];

export default function PartnersGallery() {
  return (
    <section id="gallery" className="bg-primary py-12 overflow-hidden">
      <div className="px-6 lg:px-12 mb-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-t border-primary-content/10 pt-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Избрани проекти
            </h2>
            <p className="text-primary-foreground text-base max-w-sm leading-relaxed">
              Създаваме уебсайтове, които издигат вашия бранд и привличат повече
              клиенти.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Grid: Horizontal on lg+, Vertical on smaller screens */}
      <div className="px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {PARTNERS_LIST.map((partner) => (
              <PartnerCard
                key={partner.slug}
                name={partner.name}
                shortDescription={partner.shortDescription}
                logo={partner.logo}
                logoComponent={partner.logoComponent}
                slug={partner.slug}
                type={partner.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
