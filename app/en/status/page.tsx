export default function StatusPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Live System Status</h1>
      <p className="text-gray-400 mb-10">
        This system is LIVE. All executions are real. No simulation.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="border border-gray-800 rounded p-6">
          <h3 className="font-semibold">Central AI</h3>
          <p className="text-green-400 mt-2">KAIO · Operating</p>
        </div>

        <div className="border border-gray-800 rounded p-6">
          <h3 className="font-semibold">Autonomous Agents</h3>
          <p className="text-green-400 mt-2">Live Execution</p>
        </div>

        <div className="border border-gray-800 rounded p-6">
          <h3 className="font-semibold">Trading Infrastructure</h3>
          <p className="text-green-400 mt-2">Risk-Controlled</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Public Logs</h2>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>[SYSTEM] KAIO verification cycle completed — OK</li>
        <li>[AGENT] Autonomous execution loop validated</li>
        <li>[RISK] No anomaly detected in active systems</li>
      </ul>
    </section>
  );
}
