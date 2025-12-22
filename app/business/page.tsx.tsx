export default function Business() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Core Businesses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-800 p-6 rounded">
          <span className="text-green-400 text-xs">LIVE</span>
          <h3 className="mt-2 font-semibold">Autonomous AI Agents</h3>
          <p className="text-sm text-gray-400">
            Agents that operate, verify, and iterate autonomously under Central AI KAIO.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded">
          <span className="text-green-400 text-xs">ACTIVE</span>
          <h3 className="mt-2 font-semibold">AI Trading Infrastructure</h3>
          <p className="text-sm text-gray-400">
            Execution-based trading with real-time risk control and transparent logs.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded">
          <span className="text-yellow-400 text-xs">IN PROGRESS</span>
          <h3 className="mt-2 font-semibold">AI Operating Systems</h3>
          <p className="text-sm text-gray-400">
            Infrastructure to deploy, monitor, and scale autonomous AI globally.
          </p>
        </div>
      </div>
    </section>
  );
}
