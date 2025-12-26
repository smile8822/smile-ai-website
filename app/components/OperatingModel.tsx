import Container from "./Container";

export default function OperatingModel() {
  return (
    <section className="py-32">
      <Container>
        <h2 className="mb-6 text-3xl font-bold">
          How We Operate
        </h2>

        <ul className="space-y-4 text-lg text-slate-700">
          <li>• AI가 실행한다</li>
          <li>• 결과는 검증된다</li>
          <li>• 모든 기록은 공개된다</li>
          <li>• 사람은 기준만 정의한다</li>
        </ul>
      </Container>
    </section>
  );
}
