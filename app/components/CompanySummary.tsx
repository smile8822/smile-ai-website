import Container from "./Container";

export default function CompanySummary() {
  return (
    <section className="py-20 bg-white border-t">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            We do not build products.<br />
            We build operating systems.
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            SMILE AI GROUP is not a service company.
            It is an AI-operated organization where execution,
            verification, and repetition are governed by systems — not people.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Humans define values, constraints, and goals.
            Everything else is executed, verified, and logged by KAIO.
          </p>
        </div>
      </Container>
    </section>
  );
}
