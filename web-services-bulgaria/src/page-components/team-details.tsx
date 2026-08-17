"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
import { ACHIEVEMENTS } from "@/utility/constants";
import TimelineAchievement from "@/components/timeline-achievements";
import { TEAM_MEMBERS } from "@/utility/constants";
import { ContactCtaBottom } from "@/components/contact-cta-bottom";
import Link from "next/link";
interface TeamMemberCardProps {
  member: (typeof TEAM_MEMBERS)[0];
  index: number;
}

function SocialLinkIcon({
  type,
}: {
  type: "linkedin" | "facebook" | "instagram";
}) {
  if (type === "linkedin") {
    return <LinkedinIcon />;
  }
  if (type === "facebook") {
    return <FacebookIcon />;
  }
  if (type === "instagram") {
    return <InstagramIcon />;
  }
  return null;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg overflow-hidden bg-linear-to-b from-foreground/5 to-foreground/10 border border-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
    >
      {/* Image container */}
      <div className="relative h-80 w-full overflow-hidden bg-foreground/5">
        <Image
          src={member.image}
          alt={`${t(member.keyFirstName)} ${t(member.keyLastName)}`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent opacity-60" />
      </div>

      {/* Content container */}
      <div className="relative px-6 py-8 -mt-20 pt-24 pb-6 flex flex-col grow">
        <div className="flex flex-col mb-1">
          <h3 className="text-xl font-bold text-foreground">
            {t(member.keyFirstName)} {t(member.keyLastName)}
          </h3>
          <h3 className="text-xl font-bold text-foreground"></h3>
        </div>

        <p className="text-sm font-medium text-primary mb-4">{member.title}</p>
        <p className="text-sm text-primary leading-relaxed mb-6 grow">
          {t(member.bioKey)}
        </p>

        {/* Social links */}
        <div className="flex gap-3 justify-center">
          {member.socialLinks?.linkedin && (
            <Link
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <SocialLinkIcon type="linkedin" />
            </Link>
          )}
          {member.socialLinks?.facebook && (
            <Link
              href={member.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <SocialLinkIcon type="facebook" />
            </Link>
          )}
          {member.socialLinks?.instagram && (
            <Link
              href={member.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <SocialLinkIcon type="instagram" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamDetailsPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 mt-23 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            {t("teamPageHeading")}
          </h1>
          <p className="text-xl text-primary">{t("teamPageSubheading")}</p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard
                key={`${member.keyFirstName}-${member.keyLastName}`}
                member={member}
                index={index}
              />
            ))}
          </div>
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
