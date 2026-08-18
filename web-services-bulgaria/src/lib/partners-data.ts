// Partners data structure for the gallery inner pages
// Text content is managed in i18n files (src/i18n/en.json and src/i18n/bg.json)
// under the "partners" namespace
export const PARTNERS_DATA = {
  bft: {
    id: "bft",
    website: "https://bft-results.vercel.app/",
    logo: "/logos/logo-bfs.png",
    technologies: ["nextjs", "react", "typescript", "tailwind", "zustand"],
    carouselImages: [
      {
        src: "/projects/bft-1.png",
        alt: "BFT Image 1",
      },
      {
        src: "/projects/bft-2.png",
        alt: "BFT Image 2",
      },
      {
        src: "/projects/bft-3.png",
        alt: "BFT Image 3",
      },
    ],
    timeline: {
      started: "2023",
      completed: "2024",
    },
  },
  servify: {
    id: "servify",
    website: "https://servify.bg/",
    logo: "/logos/servify-logo.svg",
    technologies: ["nextjs", "react", "typescript", "tailwind", "shadcn"],
    carouselImages: [
      {
        src: "/projects/servify-1.png",
        alt: "Servify Image 1",
      },
      {
        src: "/projects/servify-2.png",
        alt: "Servify Image 2",
      },
      {
        src: "/projects/servify-3.png",
        alt: "Servify Image 3",
      },
      {
        src: "/projects/servify-4.png",
        alt: "Servify Image 4",
      },
    ],
    timeline: {
      started: "2023",
      completed: "2024",
    },
  },
  mmbuilding: {
    id: "mmBuilding",
    website: "https://mmbuilding.bg/",
    logo: "/logos/mmbuilding-logo.png",
    technologies: ["nextjs", "react", "typescript", "tailwind", "shadcn"],
    carouselImages: [
      {
        src: "/projects/mmbuilding-1.png",
        alt: "MM Building Image 1",
      },
      {
        src: "/projects/mmbuilding-2.png",
        alt: "MM Building Image 2",
      },
      {
        src: "/projects/mmbuilding-3.png",
        alt: "MM Building Image 3",
      },
    ],
    timeline: {
      started: "2023",
      completed: "2024",
    },
  },
};

export type PartnerId = keyof typeof PARTNERS_DATA;
export type PartnerData = (typeof PARTNERS_DATA)[PartnerId];
