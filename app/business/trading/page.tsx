import Link from "next/link";

export default function TradingBusinessPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-green-400 mb-2">ACTIVE</div>
          <h1 className="text-4xl font-bold">AI Trading Infrastructure</h1>
          <p className="text-gray-400 mt-3">
            Execution-first trading infrastructure with real-time risk control and transparent verification.
          </p>
        </div>
        <Link href="/business" className="text-sm text-gray-300 hover:text-emerald-300 transition">
          ← Back to Business
        </Link>
      </div>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Core capabilities</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Real-time execution pipeline</li>
            <li>Risk-controlled operation with strict cut rules</li>
            <li>Verification logs as default output</li>
            <li>Scalable multi-agent deployment readiness</li>
          </ul>
        </div>

        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Transparency design</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Public indicators (partial) + internal full logs</li>
            <li>Condition-based expansion only</li>
            <li>Daily settlement logic aligned with operating rules</li>
            <li>“Verified before scale” principle enforced</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 p-6 bg-[#121821] border border-gray-800 rounded-2xl">
        <h2 className="text-xl font-bold mb-2">Public proof signals</h2>
        <p className="text-gray-400 text-sm">
          Operational status + risk signals are exposed on the Status page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/status"
            className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-200 text-sm hover:bg-emerald-500/15 transition"
          >
            View Live Status →
          </Link>
          <Link
            href="/roadmap"
            className="px-4 py-2 rounded-xl bg-white/5 border border-gray-700 text-gray-200 text-sm hover:bg-white/10 transition"
          >
            View Execution Roadmap →
          </Link>
        </div>
      </section>
    </main>
  );
}
