export default function IDHome() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">
        SMILE AI GROUP
      </h1>

      <p className="text-lg text-gray-300 mb-10">
        Perusahaan Infrastruktur AI Otonom
      </p>

      <p className="text-gray-400 mb-8 leading-relaxed">
        SMILE AI GROUP adalah perusahaan infrastruktur AI
        yang benar-benar beroperasi secara langsung oleh
        Central AI <b>KAIO</b>.<br />
        Kami tidak menjanjikan masa depan — kami
        menampilkan sistem yang sedang berjalan.
      </p>

      <ul className="space-y-2 text-gray-300 mb-12">
        <li>• Central AI KAIO beroperasi real-time</li>
        <li>• Agen AI otonom berjalan langsung</li>
        <li>• Deployment dan verifikasi otomatis</li>
        <li>• Ekspansi berbasis kondisi, bukan janji</li>
      </ul>

      <div className="flex gap-4">
        <a
          href="/id/business"
          className="px-5 py-3 bg-green-500 text-black rounded hover:bg-green-400"
        >
          Lihat Bisnis
        </a>
        <a
          href="/id/roadmap"
          className="px-5 py-3 border border-gray-600 rounded hover:border-green-400"
        >
          Roadmap
        </a>
      </div>
    </section>
  );
}
