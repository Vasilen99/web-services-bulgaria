"use client";

import { motion } from "motion/react";

export const HeadingSection = ({
  title,
  subtitle,
  textColor,
}: {
  title: string;
  subtitle?: string;
  textColor?: "primary" | "primary-foreground";
}) => {
  return (
    <div className="px-6 lg:px-12 mb-14">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-t border-primary-content/10 pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${textColor || "primary-foreground"}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className={`text-${textColor || "primary-foreground"} text-base max-w-sm leading-relaxed`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
