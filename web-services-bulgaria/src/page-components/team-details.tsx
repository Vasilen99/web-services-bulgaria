"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
import { ACHIEVEMENTS } from "@/utility/constants";
import TimelineAchievement from "@/components/timeline-achievements";
// Team member data - using the same team members from landing
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Василен Минков",
    title: "CEO & Founder",
    image: "/team/vasilen-snimka.png",
    bio: "Софтуерен инженер с над 5 години професионален опит в разработката на уеб базирани решения.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vasilen-minkov-9117011b0/",
      facebook: "https://www.facebook.com/vasilen.minkov.1",
      instagram: "https://www.instagram.com/vasilenminkovv/",
    },
  },
  {
    id: 2,
    name: "Галя Ненчева",
    title: "Graphic Designer",
    image: "/team/galq-snimka.png",
    bio: "С години опит в разработката на SaaS и B2B решения, фокусирана върху ясни, функционални дизайни.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/galyanencheva/",
      facebook: "https://www.facebook.com/galya.nencheva",
      instagram: "https://www.instagram.com/beeluvdpublishing/?hl=bg",
    },
  },
  {
    id: 3,
    name: "Мирослав Димитров",
    title: "Software Engineer",
    image: "/team/miroslav-snimka.jpg",
    bio: "Бекенд разработчик с дълъг опит в разработката на скалируеми и сигурни приложения.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/miroslav-dimitrov-534805263/",
      facebook: "https://www.facebook.com/png.insta",
      instagram: "https://www.instagram.com/21_mir0slav/",
    },
  },
  {
    id: 4,
    name: "Наталия Лазарова",
    title: "Marketing Specialist",
    image: "/team/nataliq-snimka.png",
    bio: "Проектен мениджър с специализация в управление на цифрови проекти и team coordination.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/elena-ivanova",
      facebook: "https://facebook.com/elena.ivanova",
      instagram: "https://instagram.com/elena_ivanova",
    },
  },
];

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg overflow-hidden bg-linear-to-b from-foreground/5 to-foreground/10 border border-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      {/* Image container */}
      <div className="relative h-80 w-full overflow-hidden bg-foreground/5">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent opacity-60" />
      </div>

      {/* Content container */}
      <div className="relative px-6 py-8 -mt-20 pt-24 pb-6">
        <h3 className="text-xl font-bold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-primary mb-4">{member.title}</p>
        <p className="text-sm text-foreground/70 leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-3">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <SocialLinkIcon type="linkedin" />
            </a>
          )}
          {member.socialLinks.facebook && (
            <a
              href={member.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <SocialLinkIcon type="facebook" />
            </a>
          )}
          {member.socialLinks.instagram && (
            <a
              href={member.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <SocialLinkIcon type="instagram" />
            </a>
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("teamPageHeading")}
          </h1>
          <p className="text-xl text-foreground/70 mb-4">
            {t("teamPageSubheading")}
          </p>
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
              <TeamMemberCard key={member.id} member={member} index={index} />
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to join us?
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              We&apos;re always looking for talented professionals who share our
              passion for digital excellence.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Get in touch
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
