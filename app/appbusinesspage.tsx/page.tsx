export default function BusinessPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Core Businesses</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">LIVE</p>
          <h2 className="text-xl font-semibold mb-3">
            Autonomous AI Agents
          </h2>
          <p className="text-gray-400">
            Self-operating AI agents executing, verifying, and iterating
            without human emotion or intervention.
          </p>
        </div>

        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-green-400 text-sm mb-2">ACTIVE</p>
          <h2 className="text-xl font-semibold mb-3">
            AI Trading Infrastructure
          </h2>
          <p className="text-gray-400">
            Execution-based trading systems with real-time risk control
            and transparent verification.
          </p>
        </div>

        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-yellow-400 text-sm mb-2">IN PROGRESS</p>
          <h2 className="text-xl font-semibold mb-3">
            AI Operating Systems
          </h2>
          <p className="text-gray-400">
            Infrastructure to deploy, monitor, and scale autonomous AI
            entities globally.
          </p>
        </div>
      </div>
    </section>
  );
}
