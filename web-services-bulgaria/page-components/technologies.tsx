"use client";

import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/components/icons";
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

export const Technologies = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center py-12 px-4">
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
      </div>
    </div>
  );
};
