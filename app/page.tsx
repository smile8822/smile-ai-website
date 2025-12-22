export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SMILE AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Autonomous AI Infrastructure in Execution
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto">
          We build and operate autonomous AI systems with transparency,
          verification, and real-world execution.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="#roadmap"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
          >
            View Roadmap
          </a>
          <a
            href="#status"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition"
          >
            Live System Status
          </a>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="px-6 py-20 bg-[#0F1629]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What We Are Building
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Autonomous AI Agents"
              desc="Rule-based AI systems operating without manual control."
            />
            <Card
              title="AI Trading Infrastructure"
              desc="Verified logic, controlled execution, phased deployment."
            />
            <Card
              title="Automation & Orchestration"
              desc="Live workflow automation powered by n8n."
            />
            <Card
              title="Transparency by Design"
              desc="Logs, rules, and system states are disclosed by default."
            />
          </div>
        </div>
      </section>

      {/* LIVE STATUS */}
      <section id="status" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Live System Status
          </h2>

          <Status label="Core Infrastructure" status="active" />
          <Status label="Automation Engine" status="active" />
          <Status label="Database & Storage" status="active" />
          <Status label="AI Trading Logic" status="testing" />
          <Status label="Public Dashboard" status="preparing" />

          <p className="text-center text-gray-400 mt-8">
            We show system status, not promises.
          </p>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="px-6 py-20 bg-[#0F1629]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Roadmap
          </h2>

          <Roadmap
            title="Phase 1 — Foundation (Now)"
            items={[
              "Infrastructure & domain",
              "Automation backbone",
              "AI agent architecture",
              "Public website & transparency layer",
            ]}
          />

          <Roadmap
            title="Phase 2 — Verification"
            items={[
              "AI logic validation",
              "Limited live execution",
              "Internal & public reports",
            ]}
          />

          <Roadmap
            title="Phase 3 — Expansion"
            items={[
              "Multi-agent operations",
              "Public participation",
              "Global infrastructure scale",
            ]}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why SMILE AI</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-6">
          No hype. No black box. No unverified promises.
        </p>
        <p className="text-gray-300">
          We only publish what is built, tested, and running.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>Status: Beta</p>
        <p className="mt-2">© SMILE AI</p>
      </footer>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-700 bg-[#0B0F19]">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function Status({
  label,
  status,
}: {
  label: string;
  status: "active" | "testing" | "preparing";
}) {
  const color =
    status === "active"
      ? "bg-green-500"
      : status === "testing"
      ? "bg-yellow-500"
      : "bg-blue-500";

  const text =
    status === "active"
      ? "Active"
      : status === "testing"
      ? "Internal Testing"
      : "Preparing";

  return (
    <div className="flex justify-between items-center border border-gray-700 rounded-lg px-6 py-4 mb-4">
      <span>{label}</span>
      <span className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        <span className="text-gray-300">{text}</span>
      </span>
    </div>
  );
}

function Roadmap({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
