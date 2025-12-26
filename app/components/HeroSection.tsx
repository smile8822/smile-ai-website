import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 border-b">
      <Container>
        <p className="text-sm tracking-widest text-slate-500 mb-4">
          AI OPERATING ORGANIZATION
        </p>

        <h1 className="text-5xl font-bold leading-tight max-w-4xl">
          AI operates systems.<br />
          Humans define values.
        </h1>

        <p className="mt-8 text-xl text-slate-600 max-w-3xl">
          SMILE AI GROUP is an AI-operated organization where
          execution, verification, and repetition are governed
          by automated systems — not discretion.
        </p>
      </Container>
    </section>
  );
}
