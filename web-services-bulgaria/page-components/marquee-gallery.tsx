"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ServifyFullLogo } from "@/components/icons/servify";
// Logos from /public/logos
const IMAGES_ROW_1 = [
  {
    site: "https://bft-results.vercel.app/",
    logo: "/logos/logo-bfs.png",
    alt: "BFT Logo",
    type: "image" as const,
  },
  {
    site: "https://servify.bg/",
    component: ServifyFullLogo,
    alt: "Servify Logo",
    type: "component" as const,
  },
  {
    site: "https://mmbuilding.bg/",
    logo: "/logos/mmbuilding-logo.png",
    alt: "MM Building Logo",
    type: "image" as const,
  },
];

function MarqueeRow({
  images,
  direction = "left",
}: {
  images: Array<
    | { site: string; logo: string; alt: string; type: "image" }
    | {
        site: string;
        component: React.ComponentType;
        alt: string;
        type: "component";
      }
  >;
  direction?: "left" | "right";
}) {
  // Quadruple for seamless infinite loop (4x multiplication for smoother cycling)
  const multiplied = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{ x: direction === "left" ? ["0%", "-75%"] : ["-75%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {multiplied.map((item, i) => (
          <Link
            key={i}
            href={item.site}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-xl shrink-0 flex items-center justify-center"
            style={{ width: 250, height: 200 }}
          >
            {item.type === "image" ? (
              <Image
                src={item.logo}
                alt={item.alt}
                width={200}
                height={200}
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : (
              <div className="cursor-pointer hover:opacity-80 transition-opacity h-full w-full flex items-center justify-center">
                <item.component />
              </div>
            )}
          </Link>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Награждавани уебсайтове
            </h2>
            <p className="text-primary-foreground text-base max-w-sm leading-relaxed">
              Създаваме уебсайтове, които издигат вашия бранд и привличат повече
              клиенти.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <MarqueeRow images={IMAGES_ROW_1} direction="left" />
      </div>
    </section>
  );
}
