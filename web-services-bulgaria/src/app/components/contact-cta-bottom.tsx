"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { contactUsLinks } from "@/utility/links";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { useRouter } from "next/navigation";
export const ContactCtaBottom = () => {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="mt-12 lg:mt-24 pt-8 lg:pt-16 border-t border-primary-content/5 max-w-7xl mx-auto my-auto w-full pb-12 lg:pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:gap-12 gap-4 items-center">
        <motion.div className="flex flex-col gap-3 items-center" variants={itemVariants}>
          <motion.h3
            className="text-3xl font-bold lg:text-start text-center text-primary"
            variants={itemVariants}
          >
            {t("contactHeadline")}
          </motion.h3>
          <motion.p
            className="text-primary-content/70 text-base lg:text-start text-center leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            {t("contactDescription")}
          </motion.p>
        </motion.div>
        <motion.div
          className="flex items-center lg:justify-start justify-center m-auto"
          variants={itemVariants}
        >
          <LiquidButton
            onClick={() => router.push(`/${locale}/${contactUsLinks}`)}
            variant={"foreground"}
            size={"lg"}
            className="w-full sm:w-[200px] h-[50px] items-center gap-2 px-6 py-3 text-primary-foreground"
          >
            {t("letsTalk")}{" "}
            <ArrowRight size={16} className="stroke-primary-foreground" />
          </LiquidButton>
        </motion.div>
      </div>
    </motion.div>
  );
};
