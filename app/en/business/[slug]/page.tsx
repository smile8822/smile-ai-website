// app/ko/business/[slug]/page.tsx

import { notFound } from "next/navigation";
import { businessCards } from "@/data/businessCards";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return businessCards.map((item) => ({
    slug: item.slug,
  }));
}

export default function BusinessDetailPage({ params }: Props) {
  const card = businessCards.find(
    (item) => item.slug === params.slug
  );

  if (!card) {
    return notFound();
  }

  return (
    <main style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#2563eb",
        }}
      >
        {card.status}
      </span>

      <h1 style={{ marginTop: "12px" }}>{card.title}</h1>

      <p style={{ marginTop: "16px", lineHeight: 1.7 }}>
        {card.desc}
      </p>

      <hr style={{ margin: "48px 0" }} />

      <section>
        <h2>Overview</h2>
        <p>{card.overview}</p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Technology</h2>
        <ul>
          {card.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Status</h2>
        <p>{card.detailStatus}</p>
      </section>
    </main>
  );
}
