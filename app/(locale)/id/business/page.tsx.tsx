export default function BusinessID() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Bisnis Inti</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">LIVE</p>
          <h2 className="font-semibold mb-2">Agen AI Otonom</h2>
          <p className="text-gray-400 text-sm">
            Agen AI yang beroperasi, memverifikasi, dan beriterasi secara otonom
            di bawah kontrol Central AI KAIO.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">ACTIVE</p>
          <h2 className="font-semibold mb-2">Infrastruktur Trading AI</h2>
          <p className="text-gray-400 text-sm">
            Infrastruktur trading berbasis eksekusi dengan kontrol risiko
            real-time dan log transparan.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-yellow-400 text-sm mb-2">IN PROGRESS</p>
          <h2 className="font-semibold mb-2">Sistem Operasi AI</h2>
          <p className="text-gray-400 text-sm">
            Infrastruktur untuk menerapkan, memantau, dan menskalakan entitas AI
            otonom secara global.
          </p>
        </div>
      </div>
    </section>
  );
}
