export default function StatusKR() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">라이브 시스템 상태</h1>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Central AI</p>
          <p className="text-lg font-semibold">KAIO</p>
          <p className="text-green-400 text-sm">Operating</p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Autonomous Agents</p>
          <p className="text-lg font-semibold">Live Execution</p>
          <p className="text-green-400 text-sm">Running</p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-gray-400 text-sm">Trading Infrastructure</p>
          <p className="text-lg font-semibold">Risk-Controlled</p>
          <p className="text-green-400 text-sm">Active</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-400">
        <p>[SYSTEM] KAIO 검증 사이클 완료 — OK</p>
        <p>[AGENT] 자율 실행 루프 검증됨</p>
        <p>[RISK] 활성 시스템 이상 없음</p>
      </div>
    </section>
  );
}
