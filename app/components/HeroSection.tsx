// app/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-10 shadow-sm">
            <div className="text-sm text-slate-500 mb-3">
              SMILE AI GROUP · Launch Ready
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              AI는 자동으로,
              <br />
              사람은 가치에 집중한다
            </h1>

            <p className="text-slate-600 leading-relaxed mb-8">
              투명성(공개), 자동화(반복), 검증(증명)을 기반으로 하는 AI 운영 시스템.
              <br />
              완전 리워드·투명 생태계를 하나의 흐름으로 연결합니다.
              <br />
              모든 운영 판단은 총괄 AI <b>KAIO</b>가 관리합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
