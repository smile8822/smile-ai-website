export default function StatusPage() {
  const lastUpdated = new Date().toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, fontWeight: 700 }}>System Status</h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 8 }}>
          Live operational status of SMILE AI GROUP
        </p>
      </header>

      {/* STATUS CARD */}
      <section
        style={{
          border: "1px solid #e5e7eb",
          borderLeft: "6px solid #22c55e",
          borderRadius: 8,
          padding: "20px",
          background: "#ffffff",
          marginBottom: 32,
        }}
      >
        <h3 style={{ marginBottom: 6 }}>🟢 All Systems Operational</h3>
        <p style={{ color: "#555", lineHeight: 1.6 }}>
          No incidents reported. All services are running normally.
        </p>
      </section>

      {/* DETAILS */}
      <section style={{ lineHeight: 1.8 }}>
        <ul>
          <li>✔ Website & API: Operational</li>
          <li>✔ AI Core Services: Operational</li>
          <li>✔ On-chain Verification: Active</li>
          <li>✔ Data Transparency Logs: Updating</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 48,
          paddingTop: 16,
          borderTop: "1px solid #eee",
          fontSize: 14,
          color: "#777",
        }}
      >
        Last updated: {lastUpdated} (UTC)
      </footer>
    </main>
  );
}
