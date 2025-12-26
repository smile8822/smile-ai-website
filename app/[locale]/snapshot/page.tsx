export default function SnapshotPage() {
  return (
    <main style={{ padding: "120px 80px", maxWidth: "1100px" }}>
      {/* TITLE */}
      <section style={{ marginBottom: "80px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 800 }}>
          AI Trading Snapshot
        </h1>
        <p style={{ marginTop: "16px", fontSize: "20px", opacity: 0.8 }}>
          KAIO 기반 실거래 자동 운영 현황
        </p>
      </section>

      {/* OVERVIEW */}
      <Section
        title="운영 개요"
        content={
          <>
            <p>
              SMILE AI GROUP의 AI 트레이딩은
              <b>실제 거래 계정</b>을 기반으로 운영됩니다.
            </p>
            <p>
              모든 거래는 KAIO에 의해 자동 실행되며,
              사전 검증된 로직만이 실계정에 적용됩니다.
            </p>
          </>
        }
      />

      {/* OPERATING RULES */}
      <Section
        title="운영 원칙"
        content={
          <ul>
            <li>거래 대상: BTC / ETH / BNB / SOL / XRP</li>
            <li>운영 방식: 1분봉 기반 자동 단타</li>
            <li>레버리지: x20</li>
            <li>계정 구조: 멀티 계정 동일 증거금</li>
            <li>손실 제한: 누적 손실 -50 USDT 컷</li>
            <li>일일 정산: 1일 1회</li>
          </ul>
        }
      />

      {/* VERIFICATION */}
      <Section
        title="검증 구조"
        content={
          <ul>
            <li>모든 거래 기록 로그 저장</li>
            <li>실시간 수익·손실 기록</li>
            <li>월간 GLOBAL SNAPSHOT 공개</li>
            <li>이상 발생 시 즉시 공개</li>
            <li>Shadow → Test → 승인 Rollout 구조</li>
          </ul>
        }
      />

      {/* DISTRIBUTION */}
      <Section
        title="수익 분배"
        content={
          <ul>
            <li>수익 귀속: 회사 계정 일괄 회수</li>
            <li>손실 책임: 증거금 한도 내 제한</li>
            <li>순수익 분배: 회사 50% / CORE 보유자 50%</li>
            <li>배당 지급: USDT + SP 혼합</li>
          </ul>
        }
      />

      {/* NOTICE */}
      <Section
        title="중요 고지"
        content={
          <ul>
            <li>트레이딩은 손실 가능성이 존재합니다</li>
            <li>수익·성과는 보장되지 않습니다</li>
            <li>시장 상황에 따라 성과는 변동됩니다</li>
            <li>모든 정보는 참고용이며 투자 조언이 아닙니다</li>
          </ul>
        }
      />
    </main>
  );
}

/* ---------- UI HELPER ---------- */

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "64px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>{title}</h2>
      <div style={{ lineHeight: 1.7, fontSize: "16px" }}>{content}</div>
    </section>
  );
}
