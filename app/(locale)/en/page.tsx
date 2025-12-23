export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <header style={{ marginBottom: 56 }}>
        <h1 style={{ fontSize: 44, fontWeight: 800 }}>SMILE AI GROUP</h1>
        <p style={{ fontSize: 20, color: "#555", marginTop: 12 }}>
          An AI-driven transparent co-growth infrastructure.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700 }}>What We Are Building</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          SMILE AI GROUP designs a company that operates continuously through AI.
          <br />
          Decisions, execution, and verification are automated and openly logged.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700 }}>Core Principles</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>✔ AI-led autonomous operations</li>
          <li>✔ Fixed CORE ownership & 5:5 profit distribution</li>
          <li>✔ Verifiable logs and on-chain direction</li>
          <li>✔ Rules that cannot be arbitrarily changed</li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700 }}>Current Status</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>▶ Live operations started</li>
          <li>▶ Platform stabilization in progress</li>
          <li>▶ Public release expanding step by step</li>
        </ul>
      </section>

      <footer style={{ marginTop: 72, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          © SMILE AI GROUP. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
