export default function EnMainPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 40, fontWeight: 700 }}>SMILE AI GROUP</h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 8 }}>
          AI-driven Co-Growth Platform
        </p>
      </header>

      <nav style={{ marginBottom: 40 }}>
        <ul style={{ display: "flex", gap: 24, listStyle: "none", padding: 0 }}>
          <li><a href="/en/business">Business</a></li>
          <li><a href="/en/roadmap">Roadmap</a></li>
          <li><a href="/en/status">Status</a></li>
        </ul>
      </nav>

      <section style={{ lineHeight: 1.8 }}>
        <p>
          SMILE AI GROUP is building an AI-driven, transparent and fair platform
          where technology works continuously and people focus on life,
          verification and trust.
        </p>
      </section>
    </main>
  );
}
