"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { PartnerCard } from "@/app/components/partner-card";
import { ServifyFullLogo } from "@/utility/icons";
import { PARTNERS_DATA } from "@/lib/partners-data";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeadingSection } from "@/app/components/heading-section";
import { contactUsLinks, projectsLink } from "@/utility/links";

export default function PartnersGallery() {
  const t = useTranslations();
  const locale = useLocale();

  // Map partners data for cards with translations
  const PARTNERS_LIST = [
    {
      name: t("partners.bft.name"),
      shortDescription: t("partners.bft.shortDescription"),
      logo: PARTNERS_DATA.bft.logo,
      slug: "bft",
      type: "image" as const,
      product: "Platform",
    },
    {
      name: t("partners.servify.name"),
      shortDescription: t("partners.servify.shortDescription"),
      logoComponent: ServifyFullLogo,
      slug: "servify",
      type: "component" as const,
      logoClassName: "text-primary",
      product: "SaaS",
    },
    {
      name: t("partners.mmbuilding.name"),
      shortDescription: t("partners.mmbuilding.shortDescription"),
      logo: PARTNERS_DATA.mmbuilding.logo,
      slug: "mmbuilding",
      type: "image" as const,
      product: "Landing page",
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
      {/* Responsive Grid: Horizontal on lg+, Vertical on smaller screens */}
      <div className="px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[614px_614px] gap-8 lg:gap-12">
            {PARTNERS_LIST.map((partner) => (
              <Link
                key={partner.slug}
                href={`/${locale}${projectsLink}/${partner.slug}`}
                className="group block h-57"
              >
                <PartnerCard
                  name={partner.name}
                  shortDescription={partner.shortDescription}
                  logo={partner.logo}
                  logoComponent={partner.logoComponent}
                  slug={partner.slug}
                  type={partner.type}
                  className={partner.logoClassName}
                  product={partner.product}
                />
              </Link>
            ))}

            {/* Marketing CTA Card */}
            <Link
              href={`${locale}${contactUsLinks}`}
              className="group block max-h-57 h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative rounded-2xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-primary/5 hover:bg-primary/10 transition-all duration-300 p-4 h-full flex flex-col items-center justify-center text-center gap-6 overflow-hidden cursor-pointer"
              >
                {/* Subtle animated glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="size-6 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="lg:text-2xl text-lg font-bold text-primary/60 group-hover:text-primary transition-colors duration-300">
                      {t("ctaProjectHeader")}
                    </h3>
                    <p className="text-primary/40 group-hover:text-primary/70 text-sm max-w-xs leading-relaxed transition-colors duration-300">
                      {t("ctaProjectDescription")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary/50 group-hover:text-primary font-medium text-sm transition-all duration-300 group-hover:gap-3">
                    <span>{t("contactUs")}</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
