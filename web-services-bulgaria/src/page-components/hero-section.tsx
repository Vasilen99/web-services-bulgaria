"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "@/components/globe";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { redirect } from "next/navigation";
export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-24 h-screen"
    >
      <div className="absolute inset-0 w-full h-full">
        <StarsBackground starColor="var(--primary)" />
      </div>

      <div className="relative flex flex-col py-6">
        <div className="flex lg:flex-row flex-col w-full items-center lg:justify-around justify-center">
          <div className="flex flex-col w-full lg:w-fit lg:my-auto lg:mx-0 mx-auto my-0 lg:items-start gap-3 px-4">
            {/* Big Headline — centered over bottom */}
            <h1 className="text-primary lg:text-start text-center max-w-4xl">
              {t("heroHeadline")}
            </h1>

            <div className="flex flex-col w-full lg:w-[55%] lg:items-center items-center">
              <div className="space-y-2 mt-3 w-full flex flex-col lg:items-start lg:text-start text-center">
                <p className="text-primary text-sm font-medium">
                  {t("webDesignDev")}
                </p>
                <p className="text-primary text-base max-w-sm leading-relaxed">
                  {t("heroDescription")}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-15 lg:justify-start justify-center w-full">
                <LiquidButton
                  size={"lg"}
                  variant={"ghost"}
                  onClick={() => redirect(`/${locale}/contact-us`)}
                >
                  {t("letsTalk")}
                </LiquidButton>
              </div>
            </div>
          </div>
          <Globe />
        </div>
      </div>
    </section>
  );
}
