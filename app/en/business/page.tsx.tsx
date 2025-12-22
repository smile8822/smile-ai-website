import Link from "next/link";

export default function BusinessPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Core Businesses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/en/business/agents"
          className="border border-gray-800 rounded-lg p-6 hover:border-green-400"
        >
          <span className="text-xs text-green-400">LIVE</span>
          <h2 className="text-xl font-semibold mt-2">Autonomous AI Agents</h2>
          <p className="text-sm text-gray-400 mt-2">
            Fully autonomous agents operating under Central AI KAIO.
          </p>
        </Link>

        <Link
          href="/en/business/trading"
          className="border border-gray-800 rounded-lg p-6 hover:border-green-400"
        >
          <span className="text-xs text-green-400">ACTIVE</span>
          <h2 className="text-xl font-semibold mt-2">
            AI Trading Infrastructure
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Execution-based trading with real-time risk control.
          </p>
        </Link>

        <Link
          href="/en/business/os"
          className="border border-gray-800 rounded-lg p-6 hover:border-green-400"
        >
          <span className="text-xs text-yellow-400">IN PROGRESS</span>
          <h2 className="text-xl font-semibold mt-2">
            AI Operating Systems
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Infrastructure to deploy and scale AI globally.
          </p>
        </Link>
      </div>
    </section>
  );
}
