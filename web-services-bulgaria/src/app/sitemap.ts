import type { MetadataRoute } from "next";
import { TECHNOLOGIES_DATA } from "@/utility/constants";
import { PARTNERS_DATA } from "@/lib/partners-data";
import { SITE_URL } from "@/utility/metadata/constants";
import {
  contactUsLinks,
  technologiesMainLink,
  projectsLink,
  faqLink,
  aiWorkflowsLink,
  teamLink,
} from "@/utility/links";

const LOCALES = ["bg", "en"] as const;

const staticPages = ["", teamLink, technologiesMainLink, aiWorkflowsLink, faqLink, contactUsLinks];
const techPages = Object.keys(TECHNOLOGIES_DATA).map((slug) => `${technologiesMainLink}/${slug}`);
const projectPages = Object.keys(PARTNERS_DATA).map((slug) => `${projectsLink}/${slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticPages, ...techPages, ...projectPages].flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          bg: `${SITE_URL}/bg${page}`,
          en: `${SITE_URL}/en${page}`,
          "x-default": `${SITE_URL}/en${page}`,
        },
      },
    })),
  );
}
