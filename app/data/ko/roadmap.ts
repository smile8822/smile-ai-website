export type RoadmapItem = {
  slug: string;
  title: string;
  description?: string;
  items?: string[];
};

const roadmap: RoadmapItem[] = [
  {
    slug: "foundation",
    title: "Foundation",
    description: "Initial system and architecture setup",
    items: ["Architecture", "Core logic", "Infrastructure"],
  },
  {
    slug: "expansion",
    title: "Expansion",
    description: "Feature expansion and automation",
    items: ["AI Agents", "Automation", "Scaling"],
  },
];

export default roadmap;
