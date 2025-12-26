// app/ko/roadmap/page.tsx

import { roadmap, type RoadmapItem } from "@/data/roadmap";

export default function RoadmapPage() {
  return (
    <main style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Roadmap</h1>

      {roadmap.map((item: RoadmapItem) => (
        <section key={item.slug} style={{ marginTop: "40px" }}>
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
