"use client";

import { useLocale, useTranslations } from "next-intl";
import { HeadingSection } from "@/app/components/heading-section";
import { ArrowRight } from "lucide-react";
import { AIFeatureItem } from "@/app/components/ai-feature-item";
import type { AIFeature } from "@/app/components/ai-feature-item";
import { aiWorkflowsLink } from "@/utility/links";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { useRouter } from "next/navigation";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
const AI_FEATURES: AIFeature[] = [
  {
    id: "research",
    titleKey: "aiFeatureResearch",
    descriptionKey: "aiFeatureResearchDesc",
    animationPath: "/animations/AI-animation.lottie",
  },
  {
    id: "automation",
    titleKey: "aiFeatureAutomation",
    descriptionKey: "aiFeatureAutomationDesc",
    animationPath: "/animations/AI-logo-Foriday.lottie",
  },
  {
    id: "delivery",
    titleKey: "aiFeatureDelivery",
    descriptionKey: "aiFeatureDeliveryDesc",
    animationPath: "/animations/tech-startup.lottie",
  },
];

export default function AISection() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  return (
    <section id="ai" className="relative h-full bg-primary">
      <HexagonBackground
        hexagonSize={110}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />
      <div className="relative py-12 lg:px-12 px-4 pointer-events-none">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-16 lg:mb-20 pointer-events-auto">
          <HeadingSection
            className="border-none!"
            title={t("aiHeading")}
            subtitle={t("aiSubheading")}
            textColor="primary-foreground"
            type="landing"
          />
        </div>

        {/* AI Features Grid - All in one unified section */}
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="space-y-8 lg:space-y-10 mb-20 lg:mb-24">
            {AI_FEATURES.map((feature, index) => (
              <AIFeatureItem
                key={feature.id}
                feature={feature}
                isReverse={index % 2 === 1}
                // rowIndex={index}
              />
            ))}
          </div>
        </div>

        {/* CTA to AI Workflows Page */}
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="relative rounded-2xl border border-primary-foreground/20 bg-linear-to-r from-primary-foreground/10 via-primary-foreground/5 to-primary-foreground/10 p-8 lg:p-12 overflow-hidden">
            {/* Subtle animated background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-foreground/5 via-transparent to-primary-foreground/5 opacity-50" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                  {t("aiWorkflowTitle")}
                </h3>
                <p className="text-primary-foreground/70 text-base leading-relaxed max-w-2xl">
                  {t("aiWorkflowDescription")}
                </p>
              </div>

              <LiquidButton
                onClick={() => router.push(`/${locale}/${aiWorkflowsLink}`)}
                className="w-50 lg:h-15 h-10"
              >
                <span>{t("exploreWorkflows")}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
