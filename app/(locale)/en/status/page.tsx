export default function EnStatusPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        System Status
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Operational Overview</h2>
        <p style={{ lineHeight: 1.8, marginTop: 8 }}>
          SMILE AI GROUP systems are currently operating in a stable state.
          Core services are monitored continuously with AI-assisted checks.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Current Status</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Website & multi-language routing: <strong>Active</strong></li>
          <li>CORE rule set & supply lock: <strong>Active</strong></li>
          <li>5:5 distribution principle: <strong>Active</strong></li>
          <li>Internal monitoring & logging: <strong>Active</strong></li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Transparency</h2>
        <p style={{ lineHeight: 1.8 }}>
          All operational changes follow predefined rules. Arbitrary
          modifications are not permitted. Updates are published in stages
          after verification.
        </p>
      </section>

      <footer style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          © SMILE AI GROUP. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
