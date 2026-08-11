import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://web-services-bulgaria.com";

const pages = ["", "/about", "/services", "/portfolio", "/contact", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => [
    {
      url: `${baseUrl}/bg${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    },
  ]);
}
