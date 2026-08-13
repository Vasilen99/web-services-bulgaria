"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";

import { TECHNOLOGIES_DATA } from "@/utility/constants";

export default function TechnologyPage() {
  const params = useParams();
  const locale = useLocale() as "bg" | "en";
  const slug = params?.slug as string;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          {locale === "bg" ? "Технология не намерена" : "Technology Not Found"}
        </h1>
        <p className="text-xl mb-8">
          {locale === "bg"
            ? "Технологията, която търсите, не съществува."
            : "The technology you're looking for doesn't exist."}
        </p>
        <Link
          href={`/${locale}/technologies`}
          className="text-primary hover:underline text-lg"
        >
          {locale === "bg"
            ? "← Назад към технологиите"
            : "← Back to Technologies"}
        </Link>
      </div>
    );
  }

  const Icon = tech.icon;

  return (
    <div className="min-h-screen bg-background mt-28 py-12">
      {/* Header with Back Link */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href={`/${locale}/technologies`}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            ← {locale === "bg" ? "Назад" : "Back"}
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title & Icon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-start gap-8"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Защо го избрахме" : "Why We Chose It"}
            </h2>
            <ul className="space-y-3">
              {tech.whyWeChose[locale].map((reason: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
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
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Second Row: Benefits & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Benefits */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Ключови предимства" : "Key Benefits"}
            </h2>
            <ul className="space-y-3">
              {tech.benefits[locale].map((benefit: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
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
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 justify-center items-center py-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {locale === "bg"
              ? `Готови ли сте да изградите с ${tech.name}?`
              : `Ready to build with ${tech.name}?`}
          </h3>
          <p className="text-foreground/60 text-center">
            {locale === "bg"
              ? "Нека обсъдим как тази технология може да помогне на вашия проект."
              : "Let's discuss how this technology can power your project."}
          </p>
          <Link href={`/${locale}/contact-us`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-300"
            >
              {locale === "bg" ? "Свържете се" : "Get In Touch"}
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
