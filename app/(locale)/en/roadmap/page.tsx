export default function RoadmapPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Roadmap</h1>
      <p style={{ opacity: 0.8, marginBottom: "32px" }}>
        This roadmap reflects actual progress and operational phases.
        It is a live record, not a promise.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        <RoadmapCard
          phase="Phase 1"
          title="Core Architecture"
          status="Completed"
          color="#22c55e"
          items={[
            "AI system design",
            "Core platform structure",
            "Initial automation setup",
          ]}
        />

        <RoadmapCard
          phase="Phase 2"
          title="Platform Structure"
          status="In Progress"
          color="#eab308"
          items={[
            "Website public release",
            "Business structure definition",
            "Status & transparency pages",
          ]}
        />

        <RoadmapCard
          phase="Phase 3"
          title="Operational Expansion"
          status="Planned"
          color="#94a3b8"
          items={[
            "Public onboarding",
            "Multi-language expansion",
            "Service module integration",
          ]}
        />
      </div>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Roadmap updated continuously based on real operations.
      </p>
    </main>
  );
}

function RoadmapCard({
  phase,
  title,
  status,
  color,
  items,
}: {
  phase: string;
  title: string;
  status: string;
  color: string;
  items: string[];
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderLeft: `6px solid ${color}`,
        borderRadius: "10px",
        padding: "20px",
        background: "#ffffff",
      }}
    >
      <div style={{ marginBottom: "8px", opacity: 0.7 }}>{phase}</div>
      <h3 style={{ marginBottom: "4px" }}>{title}</h3>
      <strong style={{ color }}>{status}</strong>

      <ul style={{ marginTop: "12px", paddingLeft: "18px", opacity: 0.9 }}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
