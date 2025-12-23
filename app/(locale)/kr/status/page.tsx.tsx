export default function KrStatusPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        시스템 상태
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>운영 개요</h2>
        <p style={{ lineHeight: 1.8, marginTop: 8 }}>
          SMILE AI GROUP의 시스템은 현재 안정적으로 운영되고 있습니다.
          핵심 서비스는 AI 보조 모니터링을 통해 지속적으로 점검됩니다.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>현재 상태</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>홈페이지 및 다국어 라우팅: <strong>정상</strong></li>
          <li>CORE 규칙 및 총량 고정: <strong>적용 중</strong></li>
          <li>5:5 분배 원칙: <strong>적용 중</strong></li>
          <li>내부 모니터링 및 로그: <strong>운영 중</strong></li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>투명성 원칙</h2>
        <p style={{ lineHeight: 1.8 }}>
          모든 운영 변경은 사전에 정의된 규칙에 따라 진행됩니다.
          임의 수정은 허용되지 않으며, 검증 후 단계적으로 공개됩니다.
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
