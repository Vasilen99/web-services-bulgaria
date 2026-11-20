"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { TECHNOLOGIES_DATA } from "@/utility/constants";
import { PARTNERS_DATA } from "@/lib/partners-data";
import { projectsLink } from "@/utility/links";
import { ContactCtaBottom } from "@/app/components/contact-cta-bottom";

type SingleTechnologyProps = {
  slug: string;
};

export default function SingleTechnology({ slug }: SingleTechnologyProps) {
  const locale = useLocale() as "bg" | "en";
  const t = useTranslations();
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    notFound();
  }

  const relatedProjects = Object.entries(PARTNERS_DATA)
    .filter(([, project]) => project.technologies.includes(slug))
    .map(([projectSlug]) => projectSlug);

  const Icon = tech.icon;

  return (
    <div className="bg-background mt-36 px-4">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Title & Icon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-start gap-8"
        >
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
              <Icon className="w-14 h-14 fill-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3 text-foreground">
              {tech.name}
            </h1>
            <p className="text-lg text-foreground/70">
              {tech.shortDescription[locale]}
            </p>
          </div>
        </motion.div>

        {/* Two Column Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Преглед" : "Overview"}
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {tech.description[locale]}
            </p>
          </motion.section>

          {/* Right Column: Why We Chose */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Защо го избрахме" : "Why We Chose It"}
            </h2>
            <ul className="space-y-3">
              {tech.whyWeChose[locale].map((reason: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ·
                  </span>
                  <span className="text-sm text-foreground/75">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Second Row: Benefits & Use Cases */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Benefits */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Ключови предимства" : "Key Benefits"}
            </h2>
            <ul className="space-y-3">
              {tech.benefits[locale].map((benefit: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-foreground/75">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Right Column: Use Cases */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg"
                ? "Типични случаи на употреба"
                : "Common Use Cases"}
            </h2>
            <ul className="space-y-3">
              {tech.useCases[locale].map((useCase: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    →
                  </span>
                  <span className="text-sm text-foreground/75">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Projects built with this technology */}
        {relatedProjects.length > 0 && (
          <>
            <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />
            <section className="mb-16">
              <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
                {t("projects")}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
                {relatedProjects.map((projectSlug) => (
                  <li key={projectSlug} className="flex mt-0">
                    <Link
                      href={`/${locale}${projectsLink}/${projectSlug}`}
                      className="flex flex-col gap-1 w-full p-4 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors"
                    >
                      <span className="text-base font-semibold text-foreground">
                        {t(`partners.${projectSlug}.name`)}
                      </span>
                      <span className="text-sm text-foreground/70">
                        {t(`partners.${projectSlug}.shortDescription`)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0" />

        {/* CTA Section */}
        <ContactCtaBottom />
      </div>
    </div>
  );
}
