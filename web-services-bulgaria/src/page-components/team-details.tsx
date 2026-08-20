"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ACHIEVEMENTS } from "@/utility/constants";
import TimelineAchievement from "@/app/components/timeline-achievements";
import { TEAM_MEMBERS } from "@/utility/constants";
import { ContactCtaBottom } from "@/app/components/contact-cta-bottom";
import { CustomCarousel } from "@/app/components/custom-carousel";
import { HeadingSection } from "@/app/components/heading-section";
import { innerPageMainSectionStyles } from "@/utility/constants";

export default function TeamDetailsPage() {
  const t = useTranslations();

  return (
    <main className="px-4 bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={innerPageMainSectionStyles}
      >
        <HeadingSection
          title={t("teamPageHeading")}
          subtitle={t("teamPageSubheading")}
          type="inner"
        />
      </motion.div>
      {/* Team Members Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Team Members Carousel */}
          <CustomCarousel
            members={TEAM_MEMBERS}
            imageContainerClassName="object-cover object-center object-center"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* Timeline Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t("timelineHeading")}
            </h2>
            <p className="text-lg text-foreground/60">
              {t("timelineDescription")}
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="space-y-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <TimelineAchievement
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCtaBottom />
    </main>
  );
}
