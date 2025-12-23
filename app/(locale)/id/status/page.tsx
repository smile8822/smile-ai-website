export default function IdStatusPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
        Status Sistem
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Ringkasan Operasi</h2>
        <p style={{ lineHeight: 1.8, marginTop: 8 }}>
          Sistem SMILE AI GROUP saat ini beroperasi secara stabil.
          Layanan inti dipantau secara berkelanjutan dengan bantuan AI.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Status Saat Ini</h2>
        <ul style={{ lineHeight: 2, marginTop: 8 }}>
          <li>Situs web & rute multi-bahasa: <strong>Aktif</strong></li>
          <li>Aturan & pasokan CORE: <strong>Aktif</strong></li>
          <li>Prinsip distribusi 5:5: <strong>Aktif</strong></li>
          <li>Pemantauan & pencatatan internal: <strong>Berjalan</strong></li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600 }}>Transparansi</h2>
        <p style={{ lineHeight: 1.8 }}>
          Semua perubahan operasional mengikuti aturan yang telah ditetapkan.
          Tidak ada perubahan sepihak. Pembaruan dilakukan setelah proses
          verifikasi.
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
