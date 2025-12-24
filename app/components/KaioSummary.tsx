// app/components/KaioSummary.tsx

export default function KaioSummary() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            KAIO는 사람이 아닌 구조를 관리합니다
          </h2>

          <p className="text-slate-600 leading-relaxed">
            KAIO는 감정·추측·약속이 아닌
            <br />
            온체인 데이터, 로그, 지표만을 기준으로 판단합니다.
            <br />
            모든 결과는 공개되고, 검증되며, 반복됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
