export default function RoadmapKR() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">실행 로드맵</h1>
      <p className="text-gray-400 mb-10">
        이것은 계획이 아니라, 통제된 실행 흐름입니다.
      </p>

      <div className="space-y-6">
        <div className="p-6 border-l-4 border-green-400 bg-black/20">
          <h2 className="font-semibold mb-2">Phase 1 — Live & Verified</h2>
          <ul className="text-gray-400 text-sm list-disc ml-4">
            <li>KAIO 실운영</li>
            <li>에이전트 실시간 실행</li>
            <li>자동 배포 및 검증</li>
          </ul>
        </div>

        <div className="p-6 border border-gray-800 rounded opacity-70">
          <h2 className="font-semibold mb-2">Phase 2 — Scale & Distribution</h2>
          <p className="text-gray-400 text-sm">LOCKED</p>
        </div>

        <div className="p-6 border border-gray-800 rounded opacity-50">
          <h2 className="font-semibold mb-2">Phase 3 — Ecosystem & Assetization</h2>
          <p className="text-gray-400 text-sm">RESERVED</p>
        </div>
      </div>
    </section>
  );
}
