"use client";

import { useTranslations } from "next-intl";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/utility/icons";
import { TechCard } from "@/components/tech-card";
import { HeadingSection } from "@/components/heading-section";
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
      />

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6">
        {ICONS_CONFIG.map((config) => {
          const IconComponent = config.icon;
          return (
            <TechCard
              key={config.name}
              icon={IconComponent}
              name={config.name}
              descriptionKey={config.descriptionKey}
              slug={config.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
