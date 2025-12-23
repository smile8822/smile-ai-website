export default function StatusPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>System Status</h1>
      <p style={{ opacity: 0.8, marginBottom: "32px" }}>
        This page shows the real-time operational status of SMILE AI GROUP.
      </p>

      <section style={{ display: "grid", gap: "16px" }}>
        <StatusCard
          title="Platform Core"
          status="Running"
          description="Core AI and system architecture is live and operating."
          color="#22c55e"
        />

        <StatusCard
          title="Website"
          status="Iterating"
          description="Website is live and continuously improving."
          color="#eab308"
        />

        <StatusCard
          title="AI Agents"
          status="Live Testing"
          description="AI agents are operating in controlled live environments."
          color="#22c55e"
        />

        <StatusCard
          title="Transparency Logs"
          status="Preparing"
          description="Operational logs will be 공개 to ensure full transparency."
          color="#eab308"
        />
      </section>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}

function StatusCard({
  title,
  status,
  description,
  color,
}: {
  title: string;
  status: string;
  description: string;
  color: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderLeft: `6px solid ${color}`,
        borderRadius: "8px",
        padding: "16px 20px",
        background: "#ffffff",
      }}
    >
      <h3 style={{ marginBottom: "4px" }}>{title}</h3>
      <strong style={{ color }}>{status}</strong>
      <p style={{ marginTop: "8px", opacity: 0.8 }}>{description}</p>
    </div>
  );
}
