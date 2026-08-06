"use client";

import { easeOut, motion } from "motion/react";
import * as React from "react";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import Image from "next/image";
import Link from "next/link";
export interface FlipCardData {
  name: string;
  title?: string;
  image: string;
  bio: string;
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
        className="absolute inset-0 backface-hidden rounded-4xl flex flex-col bg-[#EDE8DD] overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
      >
        {/* Name and Title header */}
        <div className="w-full px-6 pt-6 pb-4 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-[#5A5A5A] text-start">
            {data.name}
          </h2>
          {data.title && (
            <p className="text-xs text-end uppercase tracking-widest text-[#A0A0A0] font-semibold">
              {data.title}
            </p>
          )}
        </div>

        {/* Image container */}
        <div className="relative flex-1 w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* BACK: Bio + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-4xl p-6 flex flex-col justify-between items-center bg-white"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <div className="flex flex-col items-center justify-center flex-1">
          <p className="text-sm text-slate-700 text-center leading-relaxed">
            {data.bio}
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          {data.socialLinks?.linkedin && (
            <Link
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-slate-600 hover:text-slate-900"
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
              className="hover:scale-110 transition-transform text-slate-600 hover:text-slate-900"
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
              className="hover:scale-110 transition-transform text-slate-600 hover:text-slate-900"
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
