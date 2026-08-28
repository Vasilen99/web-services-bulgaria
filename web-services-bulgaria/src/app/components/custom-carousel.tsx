"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
const MAX_VISIBILITY = 3;

type TeamMember = {
  keyFirstName: string;
  keyLastName?: string;
  titleKey?: string;
  image: string;
  bioKey: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  slug?: string;
};

type TeamCarouselProps = {
  members: TeamMember[];
  imageContainerClassName?: string;
  isClickable?: boolean;
  basePath?: string;
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

type CardContentProps = {
  member: TeamMember;
  imageContainerClassName?: string;
  t: (key: string) => string;
};

function CardContent({ member, imageContainerClassName, t }: CardContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full h-full rounded-xl overflow-hidden bg-linear-to-b from-foreground/5 to-foreground/10 border border-foreground/20 flex flex-col shadow-lg transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative w-full h-50 overflow-hidden bg-foreground/5 shrink-0">
        <Image
          src={member.image}
          alt={`${t(member.keyFirstName)} ${member.keyLastName ? t(member.keyLastName) : ""}`}
          fill
          className={`${imageContainerClassName || ""} group-hover:scale-105 transition-transform duration-500`}
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent opacity-80" />
      </div>

      {/* Content container */}
      <div className="relative px-4 pt-3 pb-4 flex flex-col grow bg-primary-foreground/80">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="text-base font-bold text-foreground">
            {t(member.keyFirstName)}{" "}
            {member.keyLastName ? t(member.keyLastName) : ""}
          </h3>
          {member.titleKey && (
            <p className="text-xs font-medium text-primary mb-1">
              {t(member.titleKey)}
            </p>
          )}
        </div>

        <p className="text-xs text-primary/80 leading-relaxed mb-3 grow">
          {t(member.bioKey)}
        </p>

        {/* Social links */}
        {!member.socialLinks?.linkedin &&
        !member.socialLinks?.facebook &&
        !member.socialLinks?.instagram ? (
          <span className="flex items-center gap-2">
            <p className="text-sm text-primary font-medium">
              {t("learnMoreAbout")} {t(member.keyFirstName)}
            </p>
            <ArrowRight className="size-4 stroke-primary" />
          </span>
        ) : (
          <div className="flex gap-2 justify-center">
            {member.socialLinks?.linkedin && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary/80 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <SocialLinkIcon type="linkedin" />
                </Link>
              </motion.div>
            )}
            {member.socialLinks?.facebook && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary/80 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <SocialLinkIcon type="facebook" />
                </Link>
              </motion.div>
            )}
            {member.socialLinks?.instagram && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={member.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary/80 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <SocialLinkIcon type="instagram" />
                </Link>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function CustomCarousel({
  members,
  imageContainerClassName,
  isClickable = false,
  basePath = "",
}: TeamCarouselProps) {
  const t = useTranslations();
  const [active, setActive] = React.useState(Math.floor(members.length / 2));
  const [isHovering, setIsHovering] = React.useState(false);
  const autoplayIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isHovering) {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      return;
    }

    autoplayIntervalRef.current = setInterval(() => {
      setActive((prev) => (prev < members.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isHovering, members.length]);

  const handlePrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : members.length - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev < members.length - 1 ? prev + 1 : 0));
  };

  // Shortest circular distance between active and index
  const getCircularDiff = (index: number) => {
    let diff = active - index;
    const half = members.length / 2;
    if (diff > half) diff -= members.length;
    if (diff < -half) diff += members.length;
    return diff;
  };

  return (
    <div className="w-full px-4">
      {/* Main Carousel Container */}
      <div
        className="team-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="team-nav-button team-nav-left"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-4 stroke-primary" />
        </button>

        {/* Carousel Viewport */}
        <div className="team-carousel-viewport">
          {members.map((member, index) => {
            const diff = getCircularDiff(index);
            const offset = diff / 3;
            const absOffset = Math.abs(diff) / 3;
            const direction = Math.sign(diff);
            const isVisible = Math.abs(diff) < MAX_VISIBILITY;
            const isActive = active === index;

            return (
              <div
                key={`${member.keyFirstName}-${member.keyLastName}`}
                className="team-card-container"
                style={
                  {
                    "--offset": offset,
                    "--abs-offset": absOffset,
                    "--direction": direction,
                    "--pointer-events": isActive ? "auto" : "none",
                    "--display": isVisible ? "block" : "none",
                  } as React.CSSProperties
                }
              >
                {isClickable && member.slug ? (
                  <Link
                    href={`${basePath}/${member.slug}`}
                    className="block h-full"
                  >
                    <CardContent
                      member={member}
                      imageContainerClassName={imageContainerClassName}
                      t={t}
                    />
                  </Link>
                ) : (
                  <CardContent
                    member={member}
                    imageContainerClassName={imageContainerClassName}
                    t={t}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="team-nav-button team-nav-right"
          aria-label="Next slide"
        >
          <ChevronRight className="size-4 stroke-primary" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 justify-center lg:mt-12 mt-24 flex-wrap px-4">
        {members.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            initial={{ scale: 0.8 }}
            animate={{
              scale: index === active ? 1.2 : 0.8,
              opacity: index === active ? 1 : 0.5,
            }}
            whileHover={{ scale: 1 }}
            className="h-2 rounded-full bg-foreground/30 hover:bg-foreground/60 transition-all duration-300 cursor-pointer"
            style={{ width: index === active ? "28px" : "8px" }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
