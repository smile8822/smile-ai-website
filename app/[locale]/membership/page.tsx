export default function MembershipPage() {
  return (
    <main style={{ padding: "80px", maxWidth: "960px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px" }}>Membership</h1>

      <p style={{ marginTop: "16px", fontSize: "18px", opacity: 0.8 }}>
        멤버십은 CORE 보유량을 기준으로 자동 결정됩니다.
      </p>

      <section style={{ marginTop: "48px" }}>
        <h2>🏷 Membership Levels</h2>
        <ul style={{ marginTop: "16px", lineHeight: 1.8 }}>
          <li>Starter: CORE 보유</li>
          <li>Partner: 중간 CORE 보유</li>
          <li>Core Member: 상위 CORE 보유</li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2>🎁 Benefits</h2>
        <ul style={{ marginTop: "16px", lineHeight: 1.8 }}>
          <li>AI 운영 수익 배당 참여</li>
          <li>우선 정보 공개</li>
          <li>서비스 수수료 우대</li>
          <li>신규 프로젝트 접근 권한</li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2>⚖ Transparency</h2>
        <p style={{ marginTop: "12px", opacity: 0.75 }}>
          모든 멤버십 기준과 혜택은 사전 공개되며 임의 변경이 불가능합니다.
        </p>
      </section>
    </main>
  );
}
