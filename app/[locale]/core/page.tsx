export default function CorePage() {
  return (
    <main style={{ padding: "80px", maxWidth: "960px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px" }}>CORE</h1>

      <p style={{ marginTop: "16px", fontSize: "18px", opacity: 0.8 }}>
        CORE는 SMILE AI GROUP의 지분 증명 수단입니다.
      </p>

      <section style={{ marginTop: "48px" }}>
        <h2>💠 CORE Structure</h2>
        <ul style={{ marginTop: "16px", lineHeight: 1.8 }}>
          <li>Total Supply: <strong>1,000,000 CORE</strong></li>
          <li>Sale Allocation: <strong>500,000 CORE</strong></li>
          <li>Price: <strong>100 USDT / CORE</strong></li>
          <li>Chain: <strong>XRP Ledger</strong></li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2>📈 Dividend Policy</h2>
        <p style={{ marginTop: "12px", opacity: 0.75 }}>
          순수익의 50%는 CORE 보유자에게 배당됩니다.<br />
          배당은 USDT 50% + SP 50%로 지급됩니다.
        </p>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2>🔒 Immutable Rules</h2>
        <p style={{ marginTop: "12px", opacity: 0.75 }}>
          CORE는 추가 발행이 불가능하며, 모든 규칙은 온체인 및 로그로 고정됩니다.
        </p>
      </section>
    </main>
  );
}
