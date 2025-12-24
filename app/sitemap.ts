import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://YOUR-DOMAIN/en" },
    { url: "https://YOUR-DOMAIN/kr" },
  ];
}
