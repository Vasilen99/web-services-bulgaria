"use client";
import { useRef } from "react";
import { motion } from "motion/react";

// Placeholder image URLs — replace with real portfolio screenshots
const IMAGES_ROW_1 = [
  "https://framerusercontent.com/images/nJZnpLZ1GFdKtfTPEUGBu5p0lvQ.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/pu8rVjgLuVSKomh74sM00yyIQ2g.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/I3gaJBUTN2lcYZvC2hW9RoWwlk.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/hXTBkhrkvKvYt2GulDEVOiYJ5eE.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/RQzl2e1ORufmZBUbrn1cmMBgvk.webp?scale-down-to=1024",
];

const IMAGES_ROW_2 = [
  "https://framerusercontent.com/images/ogcXzRBV2qZoozCIdFjui8aP0.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/z26PsKzhsPpX5nuBriUFLj7uru4.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/nlUQNpZ1v7CeqNGnmowXOB0s.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/yAbtqKuXPjpnkJ1buG7A9WP20.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/b6yGxodlA42VWihLGYW3vRjsIdw.webp?scale-down-to=1024",
];

function MarqueeRow({
  images,
  direction = "left",
}: {
  images: string[];
  direction?: "left" | "right";
}) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shrink-0"
            style={{ width: 280, height: 180 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Website preview"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeGallery() {
  return (
    <section id="gallery" className="bg-primary py-24 overflow-hidden">
      <div className="px-6 lg:px-12 mb-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-t border-primary-content/10 pt-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-content">
              Награждавани уебсайтове
            </h2>
            <p className="text-primary-content/50 text-base max-w-sm leading-relaxed">
              Създаваме уебсайтове, които издигат вашия бранд и привличат повече
              клиенти.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <MarqueeRow images={IMAGES_ROW_1} direction="left" />
        <MarqueeRow images={IMAGES_ROW_2} direction="right" />
      </div>
    </section>
  );
}
