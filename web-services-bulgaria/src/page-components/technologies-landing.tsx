"use client";

import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/utility/icons";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/language-context";
import { TechCard } from "@/components/tech-card";
const ICONS_CONFIG = [
  {
    icon: NextIcon,
    name: "Next.js",
    description: translations.nextDescription,
    slug: "nextjs",
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
    description: translations.typescriptDescription,
    slug: "typescript",
  },
  {
    icon: Tailwind,
    name: "Tailwind CSS",
    description: translations.tailwindDescription,
    slug: "tailwind",
  },
  {
    icon: ReactIcon,
    name: "React",
    description: translations.reactDescription,
    slug: "react",
  },
  {
    icon: ShadcnIcon,
    name: "Shadcn UI",
    description: translations.shadcnDescription,
    slug: "shadcn",
  },
  {
    icon: ZustandIcon,
    name: "Zustand",
    description: translations.zustandDescription,
    slug: "zustand",
  },
];

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="py-12 px-4 bg-foreground">
      <h2 className="text-primary-foreground text-center mb-14">{t(translations.technologies)}</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6">
        {ICONS_CONFIG.map((config) => {
          const IconComponent = config.icon;
          return (
            <TechCard
              key={config.name}
              icon={IconComponent}
              name={config.name}
              description={t(config.description)}
              slug={config.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
