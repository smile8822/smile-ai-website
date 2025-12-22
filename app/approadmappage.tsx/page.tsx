export default function RoadmapPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Execution Roadmap</h1>
      <p className="text-gray-400 mb-12">
        This is not a plan. This is a controlled execution track.
      </p>

      <div className="space-y-6">
        <div className="p-6 bg-[#121821] border-l-4 border-green-500 rounded">
          <h2 className="text-xl font-semibold mb-2">
            Phase 1 — Live & Verified
          </h2>
          <p className="text-green-400 mb-2">ACTIVE</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Central AI KAIO operating</li>
            <li>Agents executing live</li>
            <li>Automatic deployment & verification</li>
          </ul>
        </div>

        <div className="p-6 bg-[#121821] border-l-4 border-gray-600 rounded opacity-70">
          <h2 className="text-xl font-semibold mb-2">
            Phase 2 — Scale & Distribution
          </h2>
          <p className="text-gray-400">LOCKED</p>
        </div>

        <div className="p-6 bg-[#121821] border-l-4 border-dashed border-gray-600 rounded opacity-50">
          <h2 className="text-xl font-semibold mb-2">
            Phase 3 — Ecosystem & Assetization
          </h2>
          <p className="text-gray-400">RESERVED</p>
        </div>
      </div>
    </section>
  );
}
