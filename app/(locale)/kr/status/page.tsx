export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700 }}>운영 현황</h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 8 }}>
          SMILE AI GROUP 실시간 운영 상태 요약
        </p>
      </header>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>현재 상태</h2>
        <ul style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>✅ 회사 구조: 공개·고정 운영</li>
          <li>✅ AI 운영 총괄: KAIO (상시 가동)</li>
          <li>✅ CORE 지분 구조: 확정·불변</li>
          <li>✅ 자동화 트레이딩: 실전 검증 단계</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>투명성 원칙</h2>
        <p style={{ lineHeight: 1.8 }}>
          모든 운영, 수익, 배당, 검증 데이터는 공개 로그와
          온체인 기록을 통해 누구나 확인할 수 있도록 유지됩니다.
        </p>
      </section>

      <footer style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          SMILE AI GROUP · Live Status Page
        </p>
      </footer>
    </main>
  );
}
