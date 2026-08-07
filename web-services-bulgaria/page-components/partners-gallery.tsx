"use client";

import { ServifyFullLogo } from "@/components/icons/servify";
import { GalleryCard } from "@/components/gallery-card";

// Logos from /public/logos
const IMAGES_DATA = [
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
];

export default function PartnersGallery() {
  return (
    <section id="gallery" className="bg-primary py-12 overflow-hidden">
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

      <div className="space-y-3 flex lg:flex-row flex-col justify-center items-center gap-16">
        {IMAGES_DATA.map((item) => (
          <GalleryCard
            key={item.alt}
            type={item.type}
            logo={item.logo}
            alt={item.alt}
            component={item.component}
          />
        ))}
      </div>
    </section>
  );
}
