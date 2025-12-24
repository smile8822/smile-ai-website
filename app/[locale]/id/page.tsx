export default function IdPage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>ID Page</h1>
      <p>Locale: {params.locale}</p>
    </main>
  );
}
