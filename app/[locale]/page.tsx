import type { Metadata } from "next";
import BusinessCard from "@/components/BusinessCards";
import { getBusinessCards } from "@/data/businessCards";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const base = "https://your-domain.com";
  const { locale } = params;

  return {
    title: "SMILE AI GROUP",
    description:
      locale === "en"
        ? "Autonomous AI trading & transparent operation platform."
        : "AI 자동 트레이딩과 투명한 운영 구조를 제공하는 플랫폼",
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        ko: `${base}/ko`,
        en: `${base}/en`,
      },
    },
  };
}

export default function LocaleHome({
  params,
}: {
  params: { locale: string };
}) {
  const cards = getBusinessCards(params.locale);

  return (
    <main style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <h1>Business</h1>

      <section
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {cards.map((card) => (
          <BusinessCard
            key={card.slug}
            title={card.title}
            desc={card.desc}
            status={card.status}
            href={`/${params.locale}/business/${card.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
