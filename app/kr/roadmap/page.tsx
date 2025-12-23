export default function KrRoadmapPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        로드맵
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>1단계 · 기반 구축</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>회사 구조 및 핵심 철학 확립</li>
          <li>AI 기반 자동화 프레임워크 설계</li>
          <li>CORE 총 발행량 1,000,000 고정</li>
          <li>5:5 분배 규칙 확정</li>
          <li>다국어 홈페이지 오픈 (EN / KR / ID)</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>2단계 · 운영</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>USDT 기반 내부 거래 구조 운영</li>
          <li>AI 보조 운영 모니터링</li>
          <li>일일 데이터 투명 공개</li>
          <li>서비스 단계적 공개</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>3단계 · 확장</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Web3 온체인 시스템 연동</li>
          <li>CORE 활용 생태계 확장</li>
          <li>글로벌 파트너 참여</li>
          <li>추가 AI 서비스 모듈 확장</li>
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
