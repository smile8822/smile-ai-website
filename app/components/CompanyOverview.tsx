import Container from "./Container";

export default function CompanyOverview() {
  return (
    <section className="py-28 bg-slate-50">
      <Container>
        <div className="max-w-3xl space-y-8">
          <h2 className="text-4xl font-bold">
            An organization operated by AI.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            SMILE AI GROUP is not a service provider.
            It is an AI-operated organization where execution,
            verification, and repetition are system-managed.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Humans do not make operational decisions.
            They define values, constraints, and goals.
            Everything else is executed, verified,
            and logged by KAIO.
          </p>
        </div>
      </Container>
    </section>
  );
}
