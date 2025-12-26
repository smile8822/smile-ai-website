// app/data/roadmap.ts

export type RoadmapItem = {
  slug: string;
  title: string;
  steps: string[];
};

export const roadmap: RoadmapItem[] = [
  {
    slug: "kaio-trading",
    title: "KAIO Trading Engine Roadmap",
    steps: [
      "Live trading stabilization",
      "Risk control enhancement",
      "Multi-exchange expansion",
      "Global account scaling",
    ],
  },
  {
    slug: "membership",
    title: "Membership Roadmap",
    steps: [
      "CORE tier definition",
      "Benefit policy finalization",
      "On-chain reward distribution",
    ],
  },
];
