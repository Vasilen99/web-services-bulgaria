"use client";

import { useTranslations } from "next-intl";
import { HeadingSection } from "@/app/components/heading-section";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

interface ProcessStep {
  number: number;
  titleKey: string;
  animationPath: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    titleKey: "workingProcessStep1Title",
    animationPath: "/animations/strategy.lottie",
  },
  {
    number: 2,
    titleKey: "workingProcessStep2Title",
    animationPath: "/animations/design.lottie",
  },
  {
    number: 3,
    titleKey: "workingProcessStep3Title",
    animationPath: "/animations/development.lottie",
  },
  {
    number: 4,
    titleKey: "workingProcessStep4Title",
    animationPath: "/animations/testing.lottie",
  },
  {
    number: 5,
    titleKey: "workingProcessStep5Title",
    animationPath: "/animations/deployment.lottie",
  },
  {
    number: 6,
    titleKey: "workingProcessStep6Title",
    animationPath: "/animations/support.lottie",
  },
];

export default function WorkingProcess() {
  const t = useTranslations();
  const [visibleAnimations, setVisibleAnimations] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = entry.target.getAttribute("data-step-number");
            if (stepNumber) {
              setVisibleAnimations(
                (prev) => new Set([...prev, parseInt(stepNumber)]),
              );
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll("[data-step-number]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 px-4 lg:px-12 bg-background">
      <HeadingSection
        title={t("workingProcessHeading")}
        subtitle={t("workingProcessSubheading")}
        textColor="primary"
        type="landing"
      />

      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - 3 rows x 2 columns with connecting lines */}
        <div className="hidden lg:block relative">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="relative mb-20">
            {/* Horizontal connecting wavy line */}
            <svg
              className="absolute top-12 left-0 right-0 w-full h-20 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 80"
            >
              <path
                d="M 0 40 Q 250 20 500 40 T 1000 40"
                stroke="var(--color-foreground)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>

            <div className="relative grid grid-cols-3 gap-8">
              {PROCESS_STEPS.slice(0, 3).map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative"
                  data-step-number={step.number}
                >
                  {/* Step circle and content */}
                  <div className="flex flex-col items-center text-center">
                    {/* Animation */}
                    <div className="w-32 h-32 flex items-center justify-center mb-6 relative z-10">
                      {visibleAnimations.has(step.number) && (
                        <DotLottieReact
                          src={step.animationPath}
                          loop
                          autoplay
                        />
                      )}
                    </div>

                    {/* Step title */}
                    <h3 className="text-xl font-semibold text-primary">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: Steps 4, 5, 6 */}
          <div className="relative">
            {/* Horizontal connecting wavy line */}
            <svg
              className="absolute top-12 left-0 right-0 w-full h-20 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 80"
            >
              <path
                d="M 0 40 Q 250 20 500 40 T 1000 40"
                stroke="var(--color-foreground)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>

            <div className="relative grid grid-cols-3 gap-8">
              {PROCESS_STEPS.slice(3, 6).map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative"
                  data-step-number={step.number}
                >
                  {/* Step circle and content */}
                  <div className="flex flex-col items-center text-center">
                    {/* Animation */}
                    <div className="w-32 h-32 flex items-center justify-center mb-6 relative z-10">
                      {visibleAnimations.has(step.number) && (
                        <DotLottieReact
                          src={step.animationPath}
                          loop
                          autoplay
                        />
                      )}
                    </div>

                    {/* Step title */}
                    <h3 className="text-xl font-semibold text-primary">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical stack with vertical line */}
        <div className="lg:hidden">
          <div className="relative min-h-screen">
            {/* Vertical connecting wavy line in the center */}
            <svg
              className="absolute left-16 top-0 w-6 h-full pointer-events-none"
              style={{ transform: "translateX(-50%)" }}
              preserveAspectRatio="none"
              viewBox="0 0 20 2000"
            >
              <path
                d="M 10 0 Q 0 500 10 1000 T 10 2000"
                stroke="var(--color-foreground)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>

            <div className="space-y-26">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pl-44"
                  data-step-number={step.number}
                >
                  {/* Step animation */}
                  <div className="absolute left-0 w-28 h-28 lg:w-40 lg:h-40 flex items-center justify-center z-10">
                    {visibleAnimations.has(step.number) && (
                      <DotLottieReact
                        src={step.animationPath}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pt-2">
                    <h3 className="text-base font-semibold text-primary">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
