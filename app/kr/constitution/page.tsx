export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800 }}>회사 헌법 · 운영 원칙</h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 12, lineHeight: 1.7 }}>
          SMILE AI GROUP은 “사람의 말”이 아닌 “고정된 규칙”으로 운영되는 구조를 지향합니다.
          이 페이지는 회사의 불변 원칙을 공개하는 공식 문서입니다.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>1) 절대 원칙</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>✔ 투명 공개: 핵심 정보는 숨기지 않고 공개</li>
          <li>✔ 사실 기반: 온체인 데이터·로그·지표 중심</li>
          <li>✔ 공정성: 누구도 편법/특혜 없이 동일 규칙 적용</li>
          <li>✔ 연속 운영: 24/7/365 회사가 존재하는 한 지속</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>2) 5:5 동반성장 구조</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          회사 수익은 회사와 참여자가 함께 성장할 수 있도록
          <b> 5:5 구조</b>를 기반으로 운영됩니다.
          <br />
          참여자 몫은 <b>USDT 50% + SP 50%</b>로 지급되는 구조를 채택합니다.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>3) CORE 지분증명 (고정 공급)</h2>
        <ul style={{ lineHeight: 2, marginTop: 12 }}>
          <li>✔ 총 발행량: 1,000,000 CORE (변동 불가)</li>
          <li>✔ 판매 물량: 500,000 CORE</li>
          <li>✔ 기준가: 1 CORE = 100 USDT (USDT 입금 기준)</li>
          <li>✔ 추가 발행 불가 · 임의 변경 불가</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>4) SP 생태계 연결</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          SP는 단순 포인트가 아니라 회사가 제공하는 모든 서비스에서 사용되며,
          사용될수록 생태계가 성장하도록 설계됩니다.
          <br />
          참여자는 SP를 사용해 혜택을 받고, 그 활동이 다시 회사의 성장과 배당으로 연결되는
          <b> 순환 구조</b>를 형성합니다.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>5) 임의 변경 금지</h2>
        <p style={{ lineHeight: 1.9, marginTop: 12 }}>
          CORE, 배당, 가격 정책, 멤버십, 정산, 운영 구조 등
          본 페이지에 명시된 원칙은 대표를 포함해 누구도 임의로 변경할 수 없습니다.
          <br />
          변경은 오직 헌법 개정 절차를 통해서만 가능합니다.
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
