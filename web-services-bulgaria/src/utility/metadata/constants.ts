// Common metadata constants for Web Services Bulgaria
export const SITE_NAME = "Web Services Bulgaria";
export const SITE_URL = "https://www.webservicesbulgaria.com";
export const SITE_LOCALE = "bg_BG";
export const SITE_COUNTRY = "България";
export const GEO_REGION = "BG";

// Social media
export const TWITTER_HANDLE = "@webservicesbg";

// Common images
export const DEFAULT_OG_IMAGE = {
  url: "https://www.web-services-bulgaria.com/og-image.png",
  width: 1200,
  height: 630,
};

// Common author info
export const DEFAULT_AUTHORS = [{ name: "Web Services Bulgaria" }];
export const CREATOR = "Web Services Bulgaria";
export const PUBLISHER = "Web Services Bulgaria";
export const APPLICATION_NAME = "Web Services Bulgaria";

// Common robots configuration
export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  "max-image-preview": "large" as const,
  "max-snippet": -1,
  "max-video-preview": -1,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

// Common geographic/locale metadata
export const COMMON_GEO_METADATA = {
  "og:country-name": SITE_COUNTRY,
  "og:locale:alternate": SITE_LOCALE,
  "geo.region": GEO_REGION,
  "geo.placename": SITE_COUNTRY,
  "ai:language": "Bulgarian",
  "ai:market": "Bulgaria",
  "schema:inLanguage": SITE_LOCALE,
};
