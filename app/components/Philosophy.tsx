import Container from "./Container";

export default function Philosophy() {
  return (
    <section>
      <Container>
        <h2 className="text-3xl font-semibold mb-8">
          Operating Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg text-slate-700">
          <div>• AI executes all operational actions</div>
          <div>• All outcomes are verified</div>
          <div>• Every action is logged and auditable</div>
          <div>• No discretionary human intervention</div>
          <div>• Transparency is mandatory</div>
          <div>• Results without logs do not exist</div>
        </div>
      </Container>
    </section>
  );
}
