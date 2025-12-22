export default function BusinessKR() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">핵심 사업</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">LIVE</p>
          <h2 className="font-semibold mb-2">자율 AI 에이전트</h2>
          <p className="text-gray-400 text-sm">
            KAIO 통제 하에 자율적으로 실행·검증·반복되는 AI 에이전트
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">ACTIVE</p>
          <h2 className="font-semibold mb-2">AI 트레이딩 인프라</h2>
          <p className="text-gray-400 text-sm">
            실시간 리스크 제어와 로그 기반 투명 거래 시스템
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded">
          <p className="text-yellow-400 text-sm mb-2">IN PROGRESS</p>
          <h2 className="font-semibold mb-2">AI 운영 시스템</h2>
          <p className="text-gray-400 text-sm">
            글로벌 AI 배포·모니터링·확장 운영 인프라
          </p>
        </div>
      </div>
    </section>
  );
}
