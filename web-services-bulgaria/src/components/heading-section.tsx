"use client";

import { motion } from "motion/react";

export const HeadingSection = ({
  title,
  subtitle,
  textColor,
  type,
}: {
  title: string;
  subtitle?: string;
  textColor?: "primary" | "primary-foreground";
  type?: "landing" | "inner";
}) => {
  if (type === "landing") {
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
  } else if (type === "inner") {
    return (
      <motion.div
        className="pb-6 mt-36 border-b border-primary/10 flex flex-col items-center justify-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className={`text-4xl lg:text-5xl font-semibold text-${textColor || "primary"} mb-4 tracking-tight text-center`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-${textColor || "primary"} text-lg leading-relaxed max-w-3xl text-center`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  } else {
    return (
      <div className="relative py-12 mt-23 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text">
              {title}
            </h1>
            <p className="text-lg text-secondary-content max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
