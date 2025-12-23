export default function Page() {
  const updated = new Date().toUTCString();
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>
        System Status
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>🟢 Operational</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>Platform core: Running</li>
          <li>AI agents: Active</li>
          <li>Verification & logs: Active</li>
        </ul>
      </section>

      <footer style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          Last updated: {updated} (UTC)
        </p>
      </footer>
    </main>
  );
}
