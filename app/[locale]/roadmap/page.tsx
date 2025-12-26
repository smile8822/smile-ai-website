import { notFound } from "next/navigation";

import { roadmap as koRoadmap } from "@/data/ko/roadmap";
import { roadmap as enRoadmap } from "@/data/en/roadmap";

export type RoadmapItem = {
  slug: string;
  title: string;
  description?: string;
  items?: string[];
};

type Props = {
  params: {
    locale: "ko" | "en";
  };
};

export default function RoadmapPage({ params }: Props) {
  // ✅ locale에 따라 무조건 배열 선택
  const roadmap: RoadmapItem[] =
    params.locale === "en" ? enRoadmap : koRoadmap;

  // 🔒 혹시라도 비어 있으면 차단
  if (!Array.isArray(roadmap)) {
    return notFound();
  }

  return (
    <main style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1>Roadmap</h1>

      {roadmap.map((item: RoadmapItem) => (
        <section key={item.slug} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>

          {item.description && <p>{item.description}</p>}

          {item.items && (
            <ul>
              {item.items.map((text: string, i: number) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
