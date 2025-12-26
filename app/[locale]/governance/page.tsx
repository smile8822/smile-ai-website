import Container from "../../components/Container";

export default function GovernancePage() {
  return (
    <main className="py-28 bg-white">
      <Container>
        <div className="max-w-4xl space-y-16">

          {/* Header */}
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold">
              Governance & Operating Principles
            </h1>
            <p className="text-slate-600 text-lg">
              This document defines the non-negotiable operating rules of
              SMILE AI GROUP. These principles cannot be overridden by
              individuals, management, or temporary decisions.
            </p>
          </section>

          {/* Principle 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. AI-First Governance</h2>
            <p className="text-slate-600 leading-relaxed">
              All operational decisions are executed by KAIO, the group’s
              central operating AI. Humans do not directly control execution.
              They define values, constraints, and objectives only.
            </p>
          </section>

          {/* Principle 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. No Discretionary Authority</h2>
            <p className="text-slate-600 leading-relaxed">
              No individual — including founders or executives — has
              discretionary authority to override system decisions.
              Exceptions must be system-defined, logged, and publicly verifiable.
            </p>
          </section>

          {/* Principle 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Transparency by Default</h2>
            <p className="text-slate-600 leading-relaxed">
              All meaningful operations are logged. Logs are designed to be
              externally verifiable. If an action cannot be verified, it is
              treated as non-existent.
            </p>
          </section>

          {/* Principle 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Repeatability Over Promise</h2>
            <p className="text-slate-600 leading-relaxed">
              SMILE AI GROUP does not rely on forecasts, guarantees, or promises.
              Only repeatable, historically verified results are considered valid.
            </p>
          </section>

          {/* Principle 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Immutable Core Rules</h2>
            <p className="text-slate-600 leading-relaxed">
              Core operating rules, distribution logic, and governance structure
              cannot be modified without a formally logged system-level update.
              Silent changes are structurally impossible.
            </p>
          </section>

          {/* Footer */}
          <section className="pt-12 border-t text-sm text-slate-500">
            © {new Date().getFullYear()} SMILE AI GROUP.  
            This governance document is part of the public operating record.
          </section>

        </div>
      </Container>
    </main>
  );
}
