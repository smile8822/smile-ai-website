export type BusinessCard = {
  slug: string;
  title: string;
  desc: string;
  status: "LIVE" | "OPEN" | "PLANNED";
  overview: string;
  tech: string[];
  detailStatus: string;
};

export const businessCards: BusinessCard[] = [
  {
    slug: "membership",
    title: "Membership",
    desc: "CORE 보유 기반 멤버십 구조",
    status: "OPEN",
    overview: "CORE 보유량에 따라 멤버십 등급과 혜택이 결정됩니다.",
    tech: ["XRP Ledger", "On-chain Proof"],
    detailStatus: "OPEN",
  },
];
