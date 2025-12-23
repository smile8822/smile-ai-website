export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800 }}>Constitution · Operating Principles</h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 12, lineHeight: 1.7 }}>
          SMILE AI GROUP aims to operate through fixed rules — not promises.
          This page publicly declares our immutable principles.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>1) Core Principles</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>✔ Transparency: core information is公开</li>
          <li>✔ Fact-based: on-chain data, logs, and metrics</li>
          <li>✔ Fairness: same rules for everyone</li>
          <li>✔ Continuous operation: 24/7/365</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>2) 5:5 Co-Growth Rule</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          The system follows a <b>5:5 distribution</b> for co-growth.
          Participant distribution is designed as <b>50% USDT + 50% SP</b>.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>3) CORE Ownership Proof (Fixed Supply)</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>✔ Total supply: 1,000,000 CORE (fixed)</li>
          <li>✔ Sale allocation: 500,000 CORE</li>
          <li>✔ Reference: 1 CORE = 100 USDT</li>
          <li>✔ No additional issuance</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>4) SP Ecosystem Loop</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          SP is designed as an ecosystem utility point used across services.
          Usage strengthens the ecosystem and connects back to growth and dividends
          as a circular structure.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>5) No Arbitrary Changes</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          CORE, distribution, pricing policies, membership, settlement, and operating rules
          cannot be changed arbitrarily — including by the founder.
          Changes require a formal constitutional amendment process.
        </p>
      </section>

      <footer style={{ marginTop: 64, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          © SMILE AI GROUP · Constitution Page
        </p>
      </footer>
    </main>
  );
}
