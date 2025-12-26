import { businessCards } from "@/data/ko/businessCards";
import BusinessCard from "@/components/BusinessCard";

export default function KoHomePage() {
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
        {businessCards.map((card) => (
          <BusinessCard
            key={card.slug}
            title={card.title}
            desc={card.desc}
            status={card.status}
            href={`/ko/business/${card.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
