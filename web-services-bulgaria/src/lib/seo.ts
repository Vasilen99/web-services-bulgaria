import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.webservicesbg.com";
const defaultOgImage = `${baseUrl}/logos/logo_white_background.svg`;

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
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
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
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage || defaultOgImage],
    },
  };
}
