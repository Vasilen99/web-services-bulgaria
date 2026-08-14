"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { contactUsLinks } from "@/utility/links";

export const ContactCtaBottom = () => {
  const locale = useLocale();
  const t = useTranslations();

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
      className="mt-24 pt-16 border-t border-primary-content/5 max-w-7xl mx-auto my-auto w-full pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div className="flex flex-col gap-3" variants={itemVariants}>
          <motion.h3
            className="text-3xl font-bold lg:text-start text-center text-primary mb-4"
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
          className="flex items-center mx-auto lg:justify-end"
          variants={itemVariants}
        >
          <Link
            href={`/${locale}/${contactUsLinks}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {t("letsTalk")}{" "}
            <ArrowRight size={16} className="stroke-primary-foreground" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
