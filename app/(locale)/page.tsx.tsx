export default function Home() {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-bold">
        Autonomous AI Infrastructure Company
      </h1>

      <p className="text-gray-400 max-w-3xl">
        SMILE AI GROUP builds and operates autonomous AI systems under a
        verifiable, immutable execution framework controlled by Central AI KAIO.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold mb-2">Central AI KAIO</h3>
          <p className="text-sm text-gray-400">
            Non-human supervisory AI that verifies, approves, and governs execution.
          </p>
        </li>

        <li className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold mb-2">Autonomous Agents</h3>
          <p className="text-sm text-gray-400">
            Self-operating agents executing under strict risk and audit rules.
          </p>
        </li>

        <li className="border border-gray-800 p-6 rounded">
          <h3 className="font-semibold mb-2">Public Transparency</h3>
          <p className="text-sm text-gray-400">
            Logs, execution status, and principles are partially 공개.
          </p>
        </li>
      </ul>
    </section>
  );
}
