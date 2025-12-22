import Link from "next/link";

export default function BusinessPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Core Businesses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/business/agents">
          <div className="p-6 border border-gray-700 rounded-lg hover:border-green-400 transition cursor-pointer">
            <p className="text-green-400 text-sm mb-2">LIVE</p>
            <h2 className="text-xl font-semibold mb-3">
              Autonomous AI Agents
            </h2>
            <p className="text-gray-400">
              AI agents that operate, verify, and iterate autonomously under
              Central AI KAIO control.
            </p>
          </div>
        </Link>

        <Link href="/business/trading">
          <div className="p-6 border border-gray-700 rounded-lg hover:border-green-400 transition cursor-pointer">
            <p className="text-green-400 text-sm mb-2">ACTIVE</p>
            <h2 className="text-xl font-semibold mb-3">
              AI Trading Infrastructure
            </h2>
            <p className="text-gray-400">
              Execution-based trading infrastructure with real-time risk
              control and transparent logs.
            </p>
          </div>
        </Link>

        <Link href="/business/os">
          <div className="p-6 border border-gray-700 rounded-lg hover:border-green-400 transition cursor-pointer">
            <p className="text-yellow-400 text-sm mb-2">IN PROGRESS</p>
            <h2 className="text-xl font-semibold mb-3">
              AI Operating Systems
            </h2>
            <p className="text-gray-400">
              Infrastructure to deploy, monitor, and scale autonomous AI
              entities globally.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
