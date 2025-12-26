import { notFound } from "next/navigation";
import { businessCards as koCards } from "@/data/ko/businessCards";
import { businessCards as enCards } from "@/data/en/businessCards";
import type { BusinessCardData } from "@/data/ko/businessCards";

type Props = {
  params: {
    locale: "ko" | "en";
    slug: string;
  };
};

export default function BusinessDetailPage({ params }: Props) {
  const cards: BusinessCardData[] =
    params.locale === "en" ? enCards : koCards;

  const card = cards.find((c) => c.slug === params.slug);

  if (!card) return notFound();

  return (
    <main style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1>{card.title}</h1>
      <p>{card.overview}</p>

      <h2 style={{ marginTop: 40 }}>Technology</h2>
      <ul>
        {card.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: 40 }}>Status</h2>
      <p>{card.detailStatus}</p>
    </main>
  );
}
