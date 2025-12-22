export default function Roadmap() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Execution Roadmap</h1>
      <p className="text-gray-400">
        This is not a plan. This is a controlled execution track.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-green-500 pl-6">
          <h3 className="font-semibold">Phase 1 — Live & Verified</h3>
          <ul className="text-sm text-gray-400 list-disc ml-4">
            <li>Central AI KAIO operating</li>
            <li>Agents executing live</li>
            <li>Automatic deployment & verification</li>
          </ul>
        </div>

        <div className="border-l-4 border-gray-600 pl-6 opacity-60">
          <h3 className="font-semibold">Phase 2 — Scale & Distribution</h3>
          <p className="text-sm text-gray-400">LOCKED</p>
        </div>

        <div className="border-l-4 border-gray-600 pl-6 opacity-60">
          <h3 className="font-semibold">Phase 3 — Ecosystem & Assetization</h3>
          <p className="text-sm text-gray-400">RESERVED</p>
        </div>
      </div>
    </section>
  );
}
