import Link from "next/link";

export default function AgentsBusinessPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-green-400 mb-2">LIVE</div>
          <h1 className="text-4xl font-bold">Autonomous AI Agents</h1>
          <p className="text-gray-400 mt-3">
            Agents that execute autonomously under KAIO control — designed for verification-first operation.
          </p>
        </div>
        <Link href="/business" className="text-sm text-gray-300 hover:text-emerald-300 transition">
          ← Back to Business
        </Link>
      </div>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">What this business delivers</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Autonomous execution loops with verification gates</li>
            <li>Condition-based rollout (Shadow → Test → Approved)</li>
            <li>Immutable operating rules enforced by system design</li>
            <li>Public-facing transparency layer for trust</li>
          </ul>
        </div>

        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">KAIO control model</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Central AI KAIO monitors all agents</li>
            <li>Every decision must be backed by logs and verifiable signals</li>
            <li>Expansion only after stability + validation</li>
            <li>No promise-based execution</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 p-6 bg-[#121821] border border-gray-800 rounded-2xl">
        <h2 className="text-xl font-bold mb-2">Public proof signals</h2>
        <p className="text-gray-400 text-sm">
          This business is validated by live operation signals shown on the Status page.
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
