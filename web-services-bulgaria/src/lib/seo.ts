/**
 * @deprecated Use `generatePageMetadata` from "@/utility/metadata/helpers".
 * Kept as a thin wrapper so existing imports keep working.
 * Supports both `createMetadata(options)` and `createMetadata(locale, options)`.
 */
import type { Metadata } from "next";
import { generatePageMetadata, type PageMetadataOptions } from "@/utility/metadata/helpers";

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/utility/metadata/constants";

type OptionsWithoutLocale = Omit<PageMetadataOptions, "locale" | "pathname"> & {
  pathname?: string;
  path?: string;
};

export function createMetadata(options: PageMetadataOptions): Metadata;
export function createMetadata(locale: string, options: OptionsWithoutLocale): Metadata;
export function createMetadata(
  localeOrOptions: string | PageMetadataOptions,
  maybeOptions?: OptionsWithoutLocale,
): Metadata {
  if (typeof localeOrOptions === "string") {
    const { path, pathname, ...rest } = maybeOptions ?? ({} as OptionsWithoutLocale);
    return generatePageMetadata({
      ...rest,
      locale: localeOrOptions,
      pathname: pathname ?? path ?? "",
    } as PageMetadataOptions);
  }
  return generatePageMetadata(localeOrOptions);
}
