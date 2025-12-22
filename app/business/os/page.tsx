import Link from "next/link";

export default function OSBusinessPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-yellow-400 mb-2">IN PROGRESS</div>
          <h1 className="text-4xl font-bold">AI Operating Systems</h1>
          <p className="text-gray-400 mt-3">
            Infrastructure to deploy, monitor, and scale autonomous AI entities globally — built for stability first.
          </p>
        </div>
        <Link href="/business" className="text-sm text-gray-300 hover:text-emerald-300 transition">
          ← Back to Business
        </Link>
      </div>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">System direction</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Deployment & monitoring framework for autonomous agents</li>
            <li>Verification + rollback gates</li>
            <li>Global scale readiness once stability is proven</li>
            <li>Immutable principles enforced at the OS layer</li>
          </ul>
        </div>

        <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Why this matters</h2>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Agents become “real systems” only when OS is stable</li>
            <li>Monitoring is the proof layer</li>
            <li>Scaling without proof is prohibited</li>
            <li>Designed for long-term continuous operation</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 p-6 bg-[#121821] border border-gray-800 rounded-2xl">
        <h2 className="text-xl font-bold mb-2">Next verification step</h2>
        <p className="text-gray-400 text-sm">
          This area moves from “In Progress” to “Active” only when stability + monitoring signals are verified.
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
