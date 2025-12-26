import koRoadmap from "@/data/ko/roadmap";
import type { RoadmapItem } from "@/data/ko/roadmap";

export default function RoadmapPage() {
  const roadmap: RoadmapItem[] = koRoadmap;

  return (
    <main style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1>Roadmap</h1>

      {roadmap.map((item) => (
        <section key={item.slug} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>

          {item.description && <p>{item.description}</p>}

          {item.items && (
            <ul>
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
