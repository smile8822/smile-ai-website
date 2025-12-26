import type { MetadataRoute } from "next";
import { getBusinessCards } from "@/data/businessCards";
import { getRoadmap } from "@/data/roadmap";

const BASE_URL = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["ko", "en"] as const;

  const staticPages = ["", "/roadmap", "/status"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // 메인 / 고정 페이지
    for (const path of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            ko: `${BASE_URL}/ko${path}`,
            en: `${BASE_URL}/en${path}`,
          },
        },
      });
    }

    // Business 상세
    const cards = getBusinessCards(locale);
    for (const card of cards) {
      entries.push({
        url: `${BASE_URL}/${locale}/business/${card.slug}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            ko: `${BASE_URL}/ko/business/${card.slug}`,
            en: `${BASE_URL}/en/business/${card.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
