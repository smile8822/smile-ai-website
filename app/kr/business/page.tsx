export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>
        사업 구조
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
        SMILE AI GROUP은 “사람이 운영하는 회사”가 아니라  
        <b> AI가 스스로 운영되는 기업 구조</b>를 설계합니다.
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>① 자동 운영 구조</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>KAIO 총괄 AI가 전체 운영 판단 관리</li>
          <li>에이전트 기반 실시간 실행·검증</li>
          <li>사람 개입은 승인·감사 단계로 제한</li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>② 수익 & 배당 구조</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>CORE 지분 증명 기반 멤버십</li>
          <li>순수익 5:5 (회사 / 참여자)</li>
          <li>배당은 USDT + SP 혼합 지급</li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>③ 변경 불가 원칙</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>헌법 기반 고정 구조</li>
          <li>임의 정책 변경 불가</li>
          <li>모든 기록은 로그·온체인 공개</li>
        </ul>
      </section>

      <footer style={{ marginTop: 64, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 14, color: "#777" }}>
          실험이 아닌, 실제 운영을 전제로 설계된 구조입니다.
        </p>
      </footer>
    </main>
  );
}
