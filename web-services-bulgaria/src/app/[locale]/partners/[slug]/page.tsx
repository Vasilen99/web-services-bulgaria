"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { PARTNERS_DATA } from "@/lib/partners-data";
import { PartnerCarousel } from "@/components/partner-carousel";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/utility/icons";

// Map technology keys to their display components
const TECH_ICONS: Record<string, React.ComponentType<any>> = {
  nextjs: NextIcon,
  react: ReactIcon,
  typescript: TypescriptIcon,
  tailwind: Tailwind,
  shadcn: ShadcnIcon,
  zustand: ZustandIcon,
};

const TECH_NAMES: Record<string, string> = {
  nextjs: "Next.js",
  react: "React",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  shadcn: "Shadcn UI",
  zustand: "Zustand",
};

export default function PartnerPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const partner = PARTNERS_DATA[slug as keyof typeof PARTNERS_DATA];

  if (!partner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Partner Not Found</h1>
        <p className="text-xl mb-8">
          The partner page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-primary hover:underline text-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background mt-28 py-12">
      {/* Header with Back Link */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title & Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-start gap-8"
        >
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={96}
                height={96}
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3 text-foreground">
              {partner.name}
            </h1>
            <p className="text-lg text-foreground/70">
              {partner.shortDescription}
            </p>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-3 inline-block"
            >
              Visit Website →
            </a>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
            Gallery
          </h2>
          <PartnerCarousel
            images={partner.carouselImages}
            partnerName={partner.name}
          />
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Overview
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {partner.description}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mt-4">
              {partner.longDescription}
            </p>
          </motion.section>

          {/* Right Column: What It Does */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              What It Does
            </h2>
            <ul className="space-y-3">
              {partner.whatItDoes.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ·
                  </span>
                  <span className="text-sm text-foreground/75">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-8">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partner.technologies.map((tech, idx) => {
              const Icon = TECH_ICONS[tech];
              const techName = TECH_NAMES[tech];

              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors"
                >
                  {Icon && (
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Icon className="w-8 h-8 fill-primary" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-center">
                    {techName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Timeline & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Project Timeline
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60">Started</p>
                <p className="text-lg font-semibold text-foreground">
                  {partner.timeline.started}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Completed</p>
                <p className="text-lg font-semibold text-foreground">
                  {partner.timeline.completed}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Description</p>
                <p className="text-sm text-foreground/75">
                  {partner.timeline.description}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {partner.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-sm text-foreground/75">
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-3 justify-center items-center py-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Ready to build something similar?
          </h3>
          <p className="text-foreground/60 text-center">
            Let&apos;s discuss how we can create amazing solutions for your
            project.
          </p>
          <div className="flex gap-4 mt-4">
            <a href={partner.website} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 border border-primary/30"
              >
                View Project
              </motion.button>
            </a>
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
