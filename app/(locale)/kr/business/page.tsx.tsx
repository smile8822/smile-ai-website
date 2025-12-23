export default function KrBusinessPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>
          SMILE AI GROUP
        </h1>
        <p style={{ fontSize: 18, color: "#555" }}>
          AI 기반 동반성장 플랫폼
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
          우리가 하는 일
        </h2>
        <p style={{ lineHeight: 1.8 }}>
          SMILE AI GROUP은 자동화·투명성·공정 분배를 핵심 가치로 하는
          AI 기반 Web3 지향 플랫폼을 구축합니다.
          회사의 시스템은 24시간 365일 지속적으로 운영되며,
          회사와 참여자가 함께 성장하는 구조를 목표로 합니다.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
          핵심 사업 영역
        </h2>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <strong>AI 자동화:</strong> AI 에이전트를 통한 내부 시스템의
            지속적·자동 운영
          </li>
          <li>
            <strong>디지털 자산 운영:</strong> USDT 기반 내부 거래 구조의
            투명한 관리
          </li>
          <li>
            <strong>Web3 인프라:</strong> 온체인·탈중앙화 방향의
            장기적 시스템 설계
          </li>
          <li>
            <strong>동반성장 모델:</strong> 회사와 참여자 간 5:5 고정
            분배 원칙
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
          CORE 시스템
        </h2>
        <p style={{ lineHeight: 1.8 }}>
          CORE는 SMILE AI GROUP 생태계 내 지분증명 단위입니다.
          총 발행량은 1,000,000 CORE로 고정되어 있으며,
          각 CORE는 회사 성장과 연동된 참여 단위를 의미합니다.
        </p>
        <p style={{ lineHeight: 1.8, marginTop: 12 }}>
          배분과 보상은 사전에 정의된 규칙에 따라 투명하게 기록되며,
          임의 변경은 허용되지 않습니다.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
          우리의 원칙
        </h2>
        <p style={{ lineHeight: 1.8 }}>
          AI는 끊임없이 일하고, 사람은 선택과 검증, 그리고 삶에
          집중할 수 있어야 합니다.
          우리는 공개·공정·신뢰를 기반으로 한 장기적 기업을 지향합니다.
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
