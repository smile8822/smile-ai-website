import { businessCards as businessCardsKo } from "@/data/ko/businessCards";
import { businessCards as businessCardsEn } from "@/data/en/businessCards";

export type BusinessStatus = "LIVE" | "OPEN" | "PLANNED";

export type BusinessCardData = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  status: BusinessStatus;
  overview: string;
  tech: string[];
  detailStatus: string;
};

export function getBusinessCards(locale: string) {
  return locale === "en" ? businessCardsEn : businessCardsKo;
}
