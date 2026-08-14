"use client";

import { easeOut, motion } from "motion/react";
import * as React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
import Image from "next/image";
import Link from "next/link";
import { GlassCardWrapper as GlassCard } from "@/components/glass-card-wrapper";
import { useTranslations } from "next-intl";
export interface FlipCardData {
  keyFirstName: string;
  keyLastName: string;
  title?: string;
  image: string;
  bioKey: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const t = useTranslations();
  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className="relative max-w-100 w-full h-80 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Name/Title on top, Image below */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-4xl flex flex-col"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
      >
        {/* Name and Title header - positioned absolutely over image */}
        <div
          className="w-full flex items-center justify-between overflow-hidden"
          style={{
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <GlassCard
            blur={3}
            distortion={0}
            borderSize={0}
            borderOpacity={0.1}
            backgroundOpacity={0.1}
            innerLightSpread={3}
            innerLightBlur={20}
            innerLightOpacity={0.4}
            outerLightSpread={4}
            outerLightBlur={10}
            outerLightOpacity={0.9}
            chromaticAberration={22.3}
            onHoverScale={0.85}
            saturation={46}
            brightness={1}
            backgroundColor="var(--primary-foreground)"
            innerLightColor="var(--primary-foreground)"
            className="w-full flex! flex-1"
          >
            <div className="flex items-center justify-between gap-14 px-2 py-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-primary-foreground text-start">
                  {t(`${data.keyFirstName}`)}
                </h4>
                <h4 className="text-primary-foreground text-start">
                  {t(`${data.keyLastName}`)}
                </h4>
              </div>

              {data.title && (
                <p className="text-xs text-end uppercase text-primary-foreground font-bold w-20">
                  {data.title}
                </p>
              )}
            </div>
          </GlassCard>
        </div>
        {/* Image container */}
        <div className="relative bottom-2 flex-1 w-full rounded-b-4xl overflow-hidden">
          <Image
            src={data.image}
            alt={`${t(data.keyFirstName)} ${t(data.keyLastName)}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 400px"
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* BACK: Bio + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-4xl p-6 flex flex-col justify-between items-center backdrop-blur-xs bg-primary-foreground/5 border border-primary-foreground/15 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/1 before:to-transparent before:pointer-events-none before:rounded-4xl"
        initial={{ rotateY: 90 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <div className="flex flex-col items-center justify-center flex-1 relative z-10">
          <p className="text-sm text-primary-foreground text-center leading-relaxed">
            {t(data.bioKey)}
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 pt-4 relative z-10">
          {data.socialLinks?.linkedin && (
            <Link
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </Link>
          )}
          {data.socialLinks?.facebook && (
            <a
              href={data.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
          )}
          {data.socialLinks?.instagram && (
            <a
              href={data.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
