export default function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  const isKr = params.locale === "kr";

  return (
    <main style={{ padding: "40px" }}>
      <h1>SMILE AI GROUP</h1>
      <p>{isKr ? "한국어 페이지" : "English Page"}</p>
    </main>
  );
}
