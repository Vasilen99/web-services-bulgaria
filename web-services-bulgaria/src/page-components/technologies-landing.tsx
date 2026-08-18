"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/utility/icons";
import { TechCard } from "@/app/components/tech-card";
import { HeadingSection } from "@/app/components/heading-section";
const ICONS_CONFIG = [
  {
    icon: NextIcon,
    name: "Next.js",
    descriptionKey: "nextDescription",
    slug: "nextjs",
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
    descriptionKey: "typescriptDescription",
    slug: "typescript",
  },
  {
    icon: Tailwind,
    name: "Tailwind CSS",
    descriptionKey: "tailwindDescription",
    slug: "tailwind",
  },
  {
    icon: ReactIcon,
    name: "React",
    descriptionKey: "reactDescription",
    slug: "react",
  },
  {
    icon: ShadcnIcon,
    name: "Shadcn UI",
    descriptionKey: "shadcnDescription",
    slug: "shadcn",
  },
  {
    icon: ZustandIcon,
    name: "Zustand",
    descriptionKey: "zustandDescription",
    slug: "zustand",
  },
];

export default function Technologies() {
  const t = useTranslations();

  return (
    <section id="technologies" className="py-12 lg:px-12 px-4 bg-foreground">
      <HeadingSection
        title={t("technologies")}
        subtitle={t("technologiesSubtitle")}
        textColor="primary-foreground"
        type="landing"
      />

      <div className="grid lg:grid-cols-[repeat(3,420px)] grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6 items-center justify-center">
        {ICONS_CONFIG.map((config, index) => {
          const IconComponent = config.icon;
          return (
            <motion.div
              key={config.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TechCard
                icon={IconComponent}
                name={config.name}
                descriptionKey={config.descriptionKey}
                slug={config.slug}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
