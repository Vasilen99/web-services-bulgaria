"use client";
import Link from "next/link";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";
import { Globe } from "@/components/globe";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full h-auto max-h-700 overflow-hidden pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <StarsBackground starColor="var(--primary)" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-foreground via-primary-foreground/50 to-primary-foreground/20" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col py-6">
        <div className="flex lg:flex-row flex-col w-full items-center lg:justify-around justify-center">
          <div className="flex flex-col w-full lg:w-fit lg:my-auto lg:mx-0 mx-auto my-0 lg:items-start gap-3 px-4">
            {/* Big Headline — centered over bottom */}
            <div className="h-fit flex flex-col gap-3 justify-center lg:justify-start lg:items-start w-full lg:mt-0 mt-6">
              <h1 className="text-primary lg:text-start text-center max-w-3xl">
                {t(translations.heroHeadline)}
              </h1>
              <FlipButton variant="link">
                <FlipButtonFront>
                  <Link
                    className="text-primary text-sm transition-colors"
                    href="#about"
                  >
                    {t(translations.about)}
                  </Link>
                </FlipButtonFront>
                <FlipButtonBack>
                  <Link className="text-primary text-sm" href="#about">
                    {t(translations.about)}
                  </Link>
                </FlipButtonBack>
              </FlipButton>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col w-full lg:w-[55%] lg:items-center items-center">
              {/* Top: Availability + CTA */}
              <div className="flex items-center gap-4 lg:justify-start justify-center w-full">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-content animate-pulse" />
                  <span className="text-xs text-primary-content/60 uppercase tracking-widest font-medium">
                    {t(translations.available)}
                  </span>
                </div>
                <LiquidButton variant={"ghost"}>
                  {t(translations.letsTalk)}
                </LiquidButton>
              </div>

              {/* Bottom: Tagline + Description */}
              <div className="space-y-2 mt-3 w-full flex flex-col lg:items-start lg:text-start text-center">
                <p className="text-primary text-sm font-medium">
                  {t(translations.webDesignDev)}
                </p>
                <p className="text-primary text-base max-w-sm leading-relaxed">
                  {t(translations.heroDescription)}
                </p>
              </div>
            </div>
          </div>
          <Globe />
        </div>
      </div>
    </section>
  );
}
