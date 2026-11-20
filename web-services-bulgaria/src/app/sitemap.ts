import type { MetadataRoute } from "next";
import { TECHNOLOGIES_DATA } from "@/utility/constants";
import { PARTNERS_DATA } from "@/lib/partners-data";
import {
  SITE_URL,
  LOCALES,
  buildLanguageAlternates,
} from "@/utility/metadata";
import {
  contactUsLinks,
  technologiesMainLink,
  projectsLink,
  faqLink,
  aiWorkflowsLink,
  teamLink,
} from "@/utility/links";

const staticPages = ["", teamLink, technologiesMainLink, aiWorkflowsLink, faqLink, contactUsLinks];
const techPages = Object.keys(TECHNOLOGIES_DATA).map((slug) => `${technologiesMainLink}/${slug}`);
const projectPages = Object.keys(PARTNERS_DATA).map((slug) => `${projectsLink}/${slug}`);

// No lastModified / changeFrequency / priority: Google ignores the latter two,
// and a build-time date would signal changes that never happened.
export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...techPages, ...projectPages].flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${page}`,
      alternates: { languages: buildLanguageAlternates(page) },
    })),
  );
}
