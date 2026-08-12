import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export interface SeoMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  canonical?: string;
}

export function createMetadata(
  locale: Locale,
  options: SeoMetadataOptions,
): Metadata {
  const {
    title,
    description,
    path,
    ogImage,
    ogType = "website",
    canonical,
  } = options;

  const url = canonical || `${baseUrl}/${locale}${path}`;
  const bgUrl = `${baseUrl}/bg${path}`;
  const enUrl = `${baseUrl}/en${path}`;

  const localeCode = locale === "bg" ? "bg_BG" : "en_US";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        bg: bgUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      locale: localeCode,
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}
