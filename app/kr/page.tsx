export default function KRHome() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">
        SMILE AI GROUP
      </h1>

      <p className="text-lg text-gray-300 mb-10">
        실행 중인 자율 AI 인프라 기업
      </p>

      <p className="text-gray-400 mb-8 leading-relaxed">
        SMILE AI GROUP은 중앙 AI <b>KAIO</b>가 실제 시스템을 운영하는
        실행 중심 AI 인프라 회사입니다.<br />
        우리는 계획을 말하지 않고, 운영 상태를 공개합니다.
      </p>

      <ul className="space-y-2 text-gray-300 mb-12">
        <li>• 중앙 AI KAIO 실시간 운영</li>
        <li>• 자율 AI 에이전트 실전 실행</li>
        <li>• 자동 배포 · 검증 · 반복 구조</li>
        <li>• 약속 없는 확장, 검증 후 공개</li>
      </ul>

      <div className="flex gap-4">
        <a
          href="/kr/business"
          className="px-5 py-3 bg-green-500 text-black rounded hover:bg-green-400"
        >
          사업 보기
        </a>
        <a
          href="/kr/roadmap"
          className="px-5 py-3 border border-gray-600 rounded hover:border-green-400"
        >
          로드맵
        </a>
      </div>
    </section>
  );
}
