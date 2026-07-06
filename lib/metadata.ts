import type { Metadata } from "next";

const BRAND = "PA Mentor Studio";
const BASE_URL = "https://pamentorstudio.com";
const OG_IMAGE = "/api/og";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogTitle = `${title} | ${BRAND}`;

  const base: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      siteName: BRAND,
      locale: "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };

  if (noIndex) {
    base.robots = { index: false, follow: false };
  }

  return base;
}

export function createBlogMetadata({
  title,
  description,
  slug,
  date,
  tags = [],
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags?: string[];
}): Metadata {
  const url = `${BASE_URL}/blog/${slug}`;
  const ogTitle = `${title} | ${BRAND}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "article",
      publishedTime: date,
      siteName: BRAND,
      locale: "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogTitle }],
      authors: [BRAND],
      section: "PA School Admissions",
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
