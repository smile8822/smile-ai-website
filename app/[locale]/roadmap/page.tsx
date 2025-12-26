import { getRoadmap, type RoadmapItem } from "@/data/roadmap";

export default function RoadmapPage({ params }: { params: { locale: string } }) {
  const items = getRoadmap(params.locale);

  return (
    <main style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1>Roadmap</h1>

      {items.map((item: RoadmapItem) => (
        <section key={item.slug} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>
          <ul>
            {item.steps.map((step: string, idx: number) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
