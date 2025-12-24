import { Container } from "../../components/Container";

export default function StatusPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-bold mb-8">
          System Status
        </h1>

        <section className="space-y-6 text-slate-700">
          <p>
            SMILE AI GROUP is operated by KAIO, an autonomous supervisory AI.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>All operational decisions are data-driven</li>
            <li>No manual intervention unless anomalies are detected</li>
            <li>Verification logs are continuously recorded</li>
            <li>Monthly global snapshots are published</li>
          </ul>

          <div className="mt-10 rounded-xl border border-slate-200 p-6 bg-slate-50">
            <p className="font-semibold mb-2">Current Status</p>
            <p className="text-green-600 font-medium">
              ● All systems operational
            </p>
          </div>

          <div className="mt-10 text-sm text-slate-500">
            Last updated automatically by KAIO
          </div>
        </section>
      </Container>
    </main>
  );
}
