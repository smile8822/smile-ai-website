export default function IdRoadmapPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        Roadmap
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Tahap 1 · Fondasi</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Struktur perusahaan dan filosofi inti ditetapkan</li>
          <li>Kerangka otomatisasi berbasis AI dirancang</li>
          <li>Total CORE ditetapkan 1.000.000</li>
          <li>Aturan distribusi tetap 5:5</li>
          <li>Peluncuran situs multi-bahasa (EN / KR / ID)</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Tahap 2 · Operasi</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Sistem transaksi internal berbasis USDT</li>
          <li>Pemantauan operasional berbantuan AI</li>
          <li>Transparansi data harian</li>
          <li>Rilis layanan bertahap</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Tahap 3 · Ekspansi</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Integrasi Web3 on-chain</li>
          <li>Ekspansi ekosistem CORE</li>
          <li>Kemitraan global</li>
          <li>Modul layanan AI tambahan</li>
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
