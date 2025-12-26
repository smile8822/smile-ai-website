export type BusinessCardData = {
  slug: string;
  title: string;
  desc: string;
  status: string;
  overview?: string;
  tech?: string[];
  detailStatus?: string;
};

export const businessCards: BusinessCardData[] = [
  {
    slug: "membership",
    title: "Membership",
    desc: "CORE 기반 멤버십 구조",
    status: "OPEN",
    overview: "CORE를 기반으로 한 멤버십 시스템",
    tech: ["XRP Ledger", "Smart Distribution"],
    detailStatus: "LIVE",
  },
];
