import Container from "./Container";

export default function CompanyManifesto() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-4xl font-extrabold">
            We do not build products.
            <br />
            We build operating systems.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            SMILE AI GROUP is not a service company.
            <br />
            It is an AI-operated organization where execution, verification,
            and repetition are managed by systems — not people.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Humans do not make operational decisions.
            <br />
            They define values, constraints, and goals.
            <br />
            Everything else is executed, verified, and logged by KAIO.
          </p>
        </div>
      </Container>
    </section>
  );
}
