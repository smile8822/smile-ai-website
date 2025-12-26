export default function StatusPage({ params }: { params: { locale: string } }) {
  const isEn = params.locale === "en";

  return (
    <main style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1>System Status</h1>
      <p style={{ color: "#6b7280", marginTop: 12 }}>
        {isEn
          ? "Shows current KAIO operating status."
          : "KAIO 시스템의 현재 운영 상태를 표시합니다."}
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>Trading Engine</h2>
        <p>🟢 LIVE</p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Risk Control</h2>
        <p>🟢 LIVE</p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Settlement</h2>
        <p>🟡 CHECKING</p>
      </section>
    </main>
  );
}
