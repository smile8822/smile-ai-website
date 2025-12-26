// app/ko/business/[slug]/not-found.tsx

export default function NotFound() {
  return (
    <main style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p style={{ marginTop: "16px", color: "#6b7280" }}>
        존재하지 않는 비즈니스 페이지입니다.
      </p>

      <a
        href="/ko"
        style={{
          display: "inline-block",
          marginTop: "32px",
          color: "#2563eb",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        ← 메인으로 돌아가기
      </a>
    </main>
  );
}
