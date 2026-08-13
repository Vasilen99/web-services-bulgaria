import { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
  DEFAULT_AUTHORS,
  CREATOR,
  PUBLISHER,
  APPLICATION_NAME,
  DEFAULT_ROBOTS,
  COMMON_GEO_METADATA,
} from "./constants";

export type SlugKeys = string;
export type LocaleType = "bg" | "en";

/**
 * Bilingual metadata configuration supporting both Bulgarian and English
 */
export interface BilingualString {
  bg: string;
  en: string;
}

export interface BilingualStringArray {
  bg: string[];
  en: string[];
}

export interface MetadataConfig {
  title: string | BilingualString;
  description: string | BilingualString;
  keywords?: string[] | BilingualStringArray;
  category?: string | BilingualString;
  pathname: string;
  imageAlt?: string | BilingualString;
  canonicalUrl?: string;
  locale?: LocaleType;
  // AI/GEO specific fields
  articleSection?: string | BilingualString;
  articleTags?: string | BilingualString;
  alternates?: {
    canonical?: string;
  };
  aiPurpose?: string | BilingualString;
  aiAudience?: string | BilingualString;
  aiContentType?: string | BilingualString;
  aiEntityType?: string | BilingualString;
  aiPageType?: string;
  schemaPageType?: string;
  // Additional custom metadata
  additionalMetadata?: Record<string, string>;
}

/**
 * Extract the appropriate language string based on locale
 */
function getLocaleString(
  value: string | BilingualString,
  locale: LocaleType = "bg",
): string {
  if (typeof value === "string") {
    return value;
  }
  return value[locale] || value.bg;
}

/**
 * Extract the appropriate language array based on locale
 */
function getLocaleStringArray(
  value: string[] | BilingualStringArray,
  locale: LocaleType = "bg",
): string[] {
  if (Array.isArray(value) && typeof value[0] === "string") {
    return value as string[];
  }
  const arr = value as BilingualStringArray;
  return arr[locale] || arr.bg;
}

/**
 * Generate comprehensive metadata for a page with SEO and GEO optimization
 * Supports both single language and bilingual (bg/en) configurations
 */
export function generatePageMetadata(config: MetadataConfig): Metadata {
  const locale = config.locale || "bg";

  const title = getLocaleString(config.title, locale);
  const description = getLocaleString(config.description, locale);
  const keywords = config.keywords
    ? getLocaleStringArray(config.keywords, locale)
    : undefined;
  const category = config.category
    ? getLocaleString(config.category, locale)
    : undefined;
  const imageAlt = config.imageAlt
    ? getLocaleString(config.imageAlt, locale)
    : `${SITE_NAME} - ${title}`;
  const articleSection = config.articleSection
    ? getLocaleString(config.articleSection, locale)
    : "";
  const articleTags = config.articleTags
    ? getLocaleString(config.articleTags, locale)
    : "";
  const aiPurpose = config.aiPurpose
    ? getLocaleString(config.aiPurpose, locale)
    : "";
  const aiAudience = config.aiAudience
    ? getLocaleString(config.aiAudience, locale)
    : "";
  const aiContentType = config.aiContentType
    ? getLocaleString(config.aiContentType, locale)
    : "";
  const aiEntityType = config.aiEntityType
    ? getLocaleString(config.aiEntityType, locale)
    : "";

  const canonicalUrl = config.canonicalUrl || `${SITE_URL}${config.pathname}`;

  return {
    title,
    description,
    keywords,
    authors: DEFAULT_AUTHORS,
    creator: CREATOR,
    publisher: PUBLISHER,
    applicationName: APPLICATION_NAME,
    category,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: locale === "bg" ? "bg_BG" : "en_US",
      type: "website",
      images: [
        {
          ...DEFAULT_OG_IMAGE,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
    robots: DEFAULT_ROBOTS,
    other: {
      // Article metadata
      "article:section": articleSection,
      "article:tag": articleTags,
      // Common GEO metadata
      ...COMMON_GEO_METADATA,
      // AI-friendly context signals
      "ai:purpose": aiPurpose,
      "ai:audience": aiAudience,
      "ai:content_type": aiContentType,
      "ai:entity_type": aiEntityType,
      "ai:page_type": config.aiPageType || "",
      "schema:pageType": config.schemaPageType || "WebPage",
      // Additional custom metadata
      ...(config.additionalMetadata || {}),
    },
  };
}
