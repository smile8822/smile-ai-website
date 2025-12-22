export default function StatusID() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Status Sistem Live</h1>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Central AI</p>
          <p className="text-lg font-semibold">KAIO</p>
          <p className="text-green-400 text-sm">Operating</p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Agen Otonom</p>
          <p className="text-lg font-semibold">Eksekusi Live</p>
          <p className="text-green-400 text-sm">Running</p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Infrastruktur Trading</p>
          <p className="text-lg font-semibold">Risk-Controlled</p>
          <p className="text-green-400 text-sm">Active</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-400">
        <p>[SYSTEM] Siklus verifikasi KAIO selesai — OK</p>
        <p>[AGENT] Loop eksekusi otonom tervalidasi</p>
        <p>[RISK] Tidak ada anomali terdeteksi pada sistem aktif</p>
      </div>
    </section>
  );
}
