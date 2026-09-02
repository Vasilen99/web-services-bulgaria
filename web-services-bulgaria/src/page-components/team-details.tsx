"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ACHIEVEMENTS, PARTNERS_DATA } from "@/utility/constants";
import TimelineAchievement from "@/app/components/timeline-achievements";
import { TEAM_MEMBERS } from "@/utility/constants";
import { ContactCtaBottom } from "@/app/components/contact-cta-bottom";
import { CustomCarousel } from "@/app/components/custom-carousel";
import { HeadingSection } from "@/app/components/heading-section";
import { innerPageMainSectionStyles } from "@/utility/constants";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "@/utility/icons";
import Image from "next/image";
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
        <div className="max-w-6xl mx-auto lg:px-4">
          {/* Team Members Carousel */}
          <CustomCarousel
            members={TEAM_MEMBERS}
            imageContainerClassName="object-cover object-center object-center"
            isOverlayVisible={false}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
      <div className="w-full flex flex-col gap-3 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl flex flex-col w-fit justify-center mx-auto py-12 gap-3 text-center"
        >
          <h3 className="text-4xl font-bold text-foreground">
            {t("partnersHeading")}
          </h3>
          <p className="text-lg text-foreground/60">
            {t("partnersSubheading")}
          </p>
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-16 justify-center items-stretch flex-wrap">
          {PARTNERS_DATA.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 lg:w-56 items-center text-center h-full"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
                <Image
                  width={160}
                  height={160}
                  src={partner.image}
                  alt={`${t(partner.keyFirstName)} ${t(partner.keyLastName)}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 grow">
                <span className="text-lg font-bold">
                  {t(partner.keyFirstName)} {t(partner.keyLastName)}
                </span>
                <span className="text-base">{t(partner.titleKey)}</span>
                <span className="text-sm text-foreground/60">
                  {t(partner.bioKey)}
                </span>
              </div>
              {partner.socials[0] && (
                <div className="flex gap-3 mt-auto h-full">
                  {partner.socials[0].linkedin && (
                    <a
                      href={partner.socials[0].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                  )}
                  {partner.socials[0].facebook && (
                    <a
                      href={partner.socials[0].facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <FacebookIcon size={20} />
                    </a>
                  )}
                  {partner.socials[0].instagram && (
                    <a
                      href={partner.socials[0].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* Timeline Section */}
      <section className="py-12 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center w-full"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t("timelineHeading")}
            </h2>
            <p className="text-lg text-foreground/60 text-center mx-auto">
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
