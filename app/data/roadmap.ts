import { roadmap as roadmapKo } from "@/data/ko/roadmap";
import { roadmap as roadmapEn } from "@/data/en/roadmap";

export type RoadmapItem = {
  slug: string;
  title: string;
  steps: string[];
};

export function getRoadmap(locale: string) {
  return locale === "en" ? roadmapEn : roadmapKo;
}
