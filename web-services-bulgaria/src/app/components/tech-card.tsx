"use client";

import { motion } from "motion/react";
import React from "react";
import { useIsTouchable } from "@/hooks/use-is-touchable";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
interface TechCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  descriptionKey: string;
  slug: string; // URL slug for the technology page
}

export const TechCard: React.FC<TechCardProps> = ({
  icon: IconComponent,
  name,
  descriptionKey,
  slug,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTapped, setIsTapped] = React.useState(false);
  const isTouchable = useIsTouchable();
  const t = useTranslations();
  const locale = useLocale();
  const description = t(descriptionKey);
  const commonClassName = "w-8 h-8 fill-primary-foreground";

  // Desktop: show on hover
  // Mobile: show only after tap
  const shouldShowButton = !isTouchable ? isHovered : isTapped;
  const shouldShowDescription = !isTouchable ? isHovered : isTapped;

  const handleCardClick = () => {
    if (isTouchable) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="relative h-full overflow-hidden rounded-xl border border-primary-foreground/20 bg-linear-to-br from-primary-foreground/5 to-primary-foreground/10 cursor-pointer group"
      whileHover={{ borderColor: "var(--primary-foreground)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary-foreground/10 via-transparent to-primary-foreground/5 opacity-0"
        animate={
          isHovered
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{ duration: 0.4 }}
      />

      {/* Floating gradient orb background */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-primary-foreground/20 to-primary-foreground/0 rounded-full blur-3xl"
        animate={
          isHovered
            ? {
                scale: 1.2,
                opacity: 0.6,
              }
            : {
                scale: 1,
                opacity: 0.3,
              }
        }
        transition={{ duration: 0.4 }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-2 justify-between h-full p-6">
        <div className="flex items-start justify-between">
          {/* Icon container with floating animation */}
          <motion.div
            className="rounded-full w-12 h-12 flex items-center justify-center"
            animate={
              isHovered
                ? {
                    y: -8,
                    scale: 1.1,
                  }
                : {
                    y: 0,
                    scale: 1,
                  }
            }
            transition={{
              type: "tween",
              duration: 0.4,
              stiffness: 100,
              damping: 20,
            }}
          >
            <IconComponent className={commonClassName} />
          </motion.div>
          {/* Learn More Button - Only show when button should be visible */}
          <motion.div
            className="absolute top-6 right-6"
            initial={{ opacity: 0, x: 30 }}
            animate={
              shouldShowButton ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ pointerEvents: shouldShowButton ? "auto" : "none" }}
          >
            <Link
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-300 inline-block"
              href={`/${locale}/technologies/${slug}`}
            >
              {t("learnMore")}
            </Link>
          </motion.div>
        </div>
        {/* Title */}
        <span className="text-primary-foreground font-bold text-lg">
          {name}
        </span>

        {/* Description with fade-in effect */}
        <motion.p
          className="text-sm text-background/70 leading-relaxed"
          initial={{ opacity: 0.7, filter: "blur(2px)" }}
          animate={
            shouldShowDescription
              ? {
                  opacity: 1,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0.7,
                  filter: "blur(2px)",
                }
          }
          transition={{ duration: 0.4 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Subtle shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary-foreground to-transparent opacity-0"
        animate={
          isHovered
            ? {
                opacity: [0, 0.1, 0],
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
};
