export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>
        Business Structure
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
        SMILE AI GROUP is not a service-selling company.
        <br />
        We build an AI-operated corporate infrastructure.
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>① Autonomous Operations</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>KAIO oversees decision-making and execution</li>
          <li>Agent-based real-time operations</li>
          <li>Human intervention limited to approval and audit</li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>② Profit & Distribution</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>CORE-based ownership proof</li>
          <li>Net profit distributed 5:5 (Company / Participants)</li>
          <li>USDT + SP mixed dividend structure</li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>③ Immutable Rules</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>Constitution-based fixed structure</li>
          <li>No arbitrary policy changes</li>
          <li>All records 공개 via logs and on-chain proofs</li>
        </ul>
      </section>
    </main>
  );
}
