import Container from "../../components/Container";

export default function AboutPage() {
  return (
    <main>
      <section className="py-28 bg-white">
        <Container>
          <div className="max-w-4xl space-y-20">

            {/* TITLE */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold">
                About SMILE AI GROUP
              </h1>
              <p className="text-slate-600 leading-relaxed">
                SMILE AI GROUP is an AI-first organization built around
                a single operating principle:
                <br />
                <strong>
                  AI manages systems. Humans focus on value.
                </strong>
              </p>
            </div>

            {/* PRINCIPLE */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Core Principle
              </h2>

              <p className="text-slate-700 leading-relaxed">
                We do not build products.
                <br />
                We build operating systems.
              </p>

              <p className="text-slate-700 leading-relaxed">
                SMILE AI GROUP is not a service company and not a
                decision-by-human organization.
                <br />
                All execution, verification, and repetition are
                performed by systems.
              </p>
            </div>

            {/* HOW IT OPERATES */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">
                How the Organization Operates
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold">
                    1. Decision
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mt-1">
                    Decisions are made strictly based on data,
                    predefined rules, logs, and indicators.
                    Emotional, discretionary, or subjective judgment
                    is structurally excluded.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    2. Execution
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mt-1">
                    Systems execute operations automatically.
                    Human intervention is restricted to defining
                    goals, constraints, and boundaries.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    3. Verification
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mt-1">
                    Every action is logged, auditable, and repeatable.
                    Results must be verifiable — or they are considered
                    non-existent.
                  </p>
                </div>

              </div>
            </div>

            {/* GOVERNANCE */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Governance by KAIO
              </h2>

              <p className="text-slate-700 leading-relaxed">
                KAIO is the central operating AI of SMILE AI GROUP.
                <br />
                It governs execution, monitors outcomes, verifies
                results, and maintains structural consistency
                across all systems.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Humans do not override KAIO decisions.
                <br />
                Structural integrity is preserved through automation,
                transparency, and repetition.
              </p>
            </div>

            {/* DISCLAIMER */}
            <div className="border-t pt-8 text-xs text-slate-500 leading-relaxed">
              This page defines the operating structure and principles
              of SMILE AI GROUP.
              <br />
              No financial guarantees, investment solicitations,
              or performance promises are made.
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
