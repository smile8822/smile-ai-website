export default function StatusPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Live System Status</h1>
      <p className="text-gray-400 mb-12">
        Real-time operational overview of SMILE AI GROUP infrastructure.
      </p>

      {/* STATUS CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Central AI</p>
          <h2 className="text-xl font-semibold">KAIO</h2>
          <p className="text-green-400 mt-2">Operating</p>
        </div>

        <div className="border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Autonomous Agents</p>
          <h2 className="text-xl font-semibold">Live Execution</h2>
          <p className="text-green-400 mt-2">Running</p>
        </div>

        <div className="border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Trading Infrastructure</p>
          <h2 className="text-xl font-semibold">Risk-Controlled</h2>
          <p className="text-green-400 mt-2">Active</p>
        </div>
      </div>

      {/* PUBLIC LOGS */}
      <h2 className="text-2xl font-semibold mb-4">Public Logs</h2>

      <div className="space-y-4 mb-10">
        <div className="border border-gray-800 rounded-lg p-4 text-gray-300">
          [SYSTEM] KAIO verification cycle completed — OK
        </div>
        <div className="border border-gray-800 rounded-lg p-4 text-gray-300">
          [AGENT] Autonomous execution loop validated
        </div>
        <div className="border border-gray-800 rounded-lg p-4 text-gray-300">
          [RISK] No anomaly detected in active systems
        </div>
      </div>

      <p className="text-gray-500 text-sm">
        * Partial logs only. Full logs remain internal by design.
      </p>

      {/* PRINCIPLES */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Immutable Operating Principles
        </h2>
        <ul className="space-y-3 text-gray-400">
          <li>• No promise-based execution</li>
          <li>• Verification before expansion</li>
          <li>• Immutable rules after deployment</li>
          <li>• Transparency by default</li>
        </ul>
      </div>
    </section>
  );
}
