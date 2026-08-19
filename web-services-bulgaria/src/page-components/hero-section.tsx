"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Globe } from "@/app/components/globe";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { redirect } from "next/navigation";
import { contactUsLinks } from "@/utility/links";
export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-24 lg:h-screen h-full"
    >
      <div className="absolute inset-0 w-full h-full">
        <StarsBackground starColor="var(--primary)" />
      </div>

      <div className="relative flex flex-col py-6">
        <div className="flex lg:flex-row flex-col w-full items-center lg:justify-around justify-center lg:gap-0 gap-4">
          <motion.div
            className="flex flex-col w-full lg:w-fit lg:my-auto lg:mx-0 mx-auto my-0 lg:items-start gap-3 px-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Big Headline — centered over bottom */}
            <motion.h1
              className="text-primary lg:text-start text-center max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("heroHeadline")}
            </motion.h1>

            <div className="flex flex-col w-full lg:w-[55%] lg:items-start items-center">
              <motion.div
                className="space-y-2 mt-3 w-full flex flex-col lg:items-start lg:text-start text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-primary text-sm font-medium">
                  {t("webDesignDev")}
                </p>
                <p className="text-primary text-base max-w-sm leading-relaxed">
                  {t("heroDescription")}
                </p>
              </motion.div>
              <motion.div
                className="lg:mt-15 mt-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <LiquidButton
                  variant={"foreground"}
                  className="w-full"
                  size={"lg"}
                  onClick={() => redirect(`/${locale}/${contactUsLinks}`)}
                >
                  {t("letsTalk")}
                </LiquidButton>
              </motion.div>
            </div>
          </motion.div>
          <Globe />
        </div>
      </div>
    </section>
  );
}
