"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { TEAM_MEMBERS } from "@/utility/constants";
import Image from "next/image";
import { motion } from "motion/react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
type TeamMemberCardProps = {
  member: (typeof TEAM_MEMBERS)[0];
  index: number;
};

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

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
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
