export default function Status() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Live System Status</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold">Central AI</h3>
          <p className="text-green-400">KAIO — Operating</p>
        </div>

        <div className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold">Autonomous Agents</h3>
          <p className="text-green-400">Live Execution</p>
        </div>

        <div className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold">Trading Infrastructure</h3>
          <p className="text-green-400">Risk-Controlled</p>
        </div>
      </div>

      <div className="border border-gray-800 p-6 rounded">
        <h3 className="font-semibold mb-3">Public Logs</h3>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>[SYSTEM] KAIO verification cycle completed — OK</li>
          <li>[AGENT] Autonomous execution loop validated</li>
          <li>[RISK] No anomaly detected</li>
        </ul>
      </div>
    </section>
  );
}
