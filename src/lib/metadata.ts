import type { Metadata } from "next";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

/** Consistent per-page metadata with canonical URL + OpenGraph + Twitter. */
export function pageMetadata({
  title,
  description = site.description,
  path = "/",
  noIndex = false,
  type = "website",
}: PageMetaInput = {}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;

  return {
    title: title ?? undefined,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
