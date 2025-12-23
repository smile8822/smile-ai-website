export default function EnRoadmapPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        Roadmap
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Phase 1 · Foundation</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Company structure and core philosophy established</li>
          <li>AI-driven automation framework designed</li>
          <li>CORE supply fixed at 1,000,000</li>
          <li>5:5 distribution rule defined</li>
          <li>Multi-language website launched (EN / KR / ID)</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Phase 2 · Operation</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Internal USDT-based transaction system</li>
          <li>AI-assisted operational monitoring</li>
          <li>Daily data transparency and reporting</li>
          <li>Gradual public service release</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Phase 3 · Expansion</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Web3 on-chain integration</li>
          <li>CORE utility and ecosystem expansion</li>
          <li>Global partner onboarding</li>
          <li>Additional AI service modules</li>
        </ul>
      </section>

      <footer style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          © SMILE AI GROUP. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
