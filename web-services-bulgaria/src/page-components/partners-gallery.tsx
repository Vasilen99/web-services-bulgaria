"use client";

import { PartnerCard } from "@/components/partner-card";
import { ServifyFullLogo } from "@/utility/icons";
import { PARTNERS_DATA } from "@/lib/partners-data";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
              <Link key={partner.slug} href={`/projects/${partner.slug}`} className="group block">
                <PartnerCard
                  name={partner.name}
                  shortDescription={partner.shortDescription}
                  logo={partner.logo}
                  logoComponent={partner.logoComponent}
                  slug={partner.slug}
                  type={partner.type}
                />
              </Link>
            ))}

            {/* Marketing CTA Card */}
            <Link href="#contact" className="group block">
              <div className="relative rounded-2xl border-2 border-dashed border-primary-foreground/30 hover:border-primary-foreground/60 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 p-8 h-full min-h-64 flex flex-col items-center justify-center text-center gap-6 overflow-hidden cursor-pointer">
                {/* Subtle animated glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-foreground/5 via-transparent to-primary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                    <Sparkles className="size-6 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300">
                      Тук може да е вашият софтуер
                    </h3>
                    <p className="text-primary-foreground/40 group-hover:text-primary-foreground/70 text-sm max-w-xs leading-relaxed transition-colors duration-300">
                      Имате идея? Нека я превърнем в реалност
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary-foreground/50 group-hover:text-primary-foreground font-medium text-sm transition-all duration-300 group-hover:gap-3">
                    <span>Свържете се с нас</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
