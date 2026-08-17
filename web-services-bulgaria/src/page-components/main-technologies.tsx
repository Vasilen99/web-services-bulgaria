"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import {
  Tilt,
  TiltContent,
} from "@/components/animate-ui/primitives/effects/tilt";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { technologiesMainLink } from "@/utility/links";
import { useRouter } from "next/navigation";
import { ContactCtaBottom } from "@/components/contact-cta-bottom";
import { HeadingSection } from "@/components/heading-section";
import { TECHNOLOGIES } from "@/utility/constants";

export default function MainTechnologies() {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {/* Header Section */}
      <HeadingSection
        title={locale === "bg" ? "Технологии" : "Technologies"}
        subtitle={
          locale === "bg"
            ? "Открийте технологиите, които използваме, за да създадем вашия уебсайт. Всяка инструмент е избрана внимателно за вашия успех."
            : "Discover the technologies we use to create your website. Each tool is carefully chosen for your success."
        }
        textColor="primary"
        type="inner"
      />

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto pt-12 px-4 lg:px-8 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {TECHNOLOGIES.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div key={i} className="flex flex-col gap-3 items-center">
                <Tilt key={tech.slug} asChild maxTilt={10} perspective={800}>
                  <motion.div variants={itemVariants} className="group h-full">
                    <TiltContent asChild>
                      <div className="relative h-full rounded-xl border border-primary/20 bg-linear-to-br from-card to-card/50 p-8 hover:border-primary/40 transition-colors duration-300 overflow-hidden flex flex-col">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-primary/5 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Icon and Title */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                              <IconComponent className="w-8 h-8 fill-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">
                              {tech.name}
                            </h2>
                          </div>

                          {/* Main Description - User Friendly */}
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {tech.description[locale as "bg" | "en"]}
                          </p>

                          {/* Divider */}
                          <div className="h-px bg-linear-to-r from-primary/20 via-primary/20 to-transparent mb-6" />

                          {/* Key Benefits */}
                          <div className="mb-8 grow">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                              {locale === "bg"
                                ? "Какво означава това за вас"
                                : "What this means for you"}
                            </h3>
                            <ul className="space-y-3">
                              {tech.benefits[locale as "bg" | "en"].map(
                                (benefit: string, idx: number) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm"
                                  >
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">
                                      {benefit}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TiltContent>
                  </motion.div>
                </Tilt>
                <div
                  className="pt-4 border-t border-primary/10"
                  style={{ transformStyle: "flat" }}
                >
                  <LiquidButton
                    onClick={() =>
                      router.push(
                        `/${locale}/${technologiesMainLink}/${tech.slug}`,
                      )
                    }
                  >
                    {t("learnMore")} {tech.name}
                  </LiquidButton>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <ContactCtaBottom />
    </div>
  );
}
