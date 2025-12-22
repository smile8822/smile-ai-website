import Link from "next/link";

export default function BusinessPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Core Businesses</h1>
        <p className="text-gray-400 mt-3">
          SMILE AI GROUP is built on execution-first infrastructure — agents, trading,
          and operating systems verified in production.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 1) Agents */}
        <Link href="/business/agents" className="group">
          <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl hover:border-emerald-400 transition">
            <div className="text-xs font-semibold text-green-400 mb-2">LIVE</div>
            <h2 className="text-xl font-bold mb-2">Autonomous AI Agents</h2>
            <p className="text-gray-400 text-sm">
              Agents that execute, verify, and iterate autonomously under Central AI KAIO control.
            </p>
            <div className="mt-4 text-sm text-gray-300 group-hover:text-emerald-300 transition">
              Open details →
            </div>
          </div>
        </Link>

        {/* 2) Trading */}
        <Link href="/business/trading" className="group">
          <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl hover:border-emerald-400 transition">
            <div className="text-xs font-semibold text-green-400 mb-2">ACTIVE</div>
            <h2 className="text-xl font-bold mb-2">AI Trading Infrastructure</h2>
            <p className="text-gray-400 text-sm">
              Execution-based trading infrastructure with real-time risk control and transparent logs.
            </p>
            <div className="mt-4 text-sm text-gray-300 group-hover:text-emerald-300 transition">
              Open details →
            </div>
          </div>
        </Link>

        {/* 3) OS */}
        <Link href="/business/os" className="group">
          <div className="p-6 bg-[#121821] border border-gray-800 rounded-2xl hover:border-emerald-400 transition">
            <div className="text-xs font-semibold text-yellow-400 mb-2">IN PROGRESS</div>
            <h2 className="text-xl font-bold mb-2">AI Operating Systems</h2>
            <p className="text-gray-400 text-sm">
              Infrastructure to deploy, monitor, and scale autonomous AI entities globally.
            </p>
            <div className="mt-4 text-sm text-gray-300 group-hover:text-emerald-300 transition">
              Open details →
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        Each business page is structured for public explanation + live verification signals.
      </div>
    </main>
  );
}
