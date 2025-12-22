import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}

    <main className="min-h-screen bg-gradient-to-b from-[#0b0f14] to-[#111827] text-white px-6 py-20">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center mb-24">
        <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
          LIVE · Operating · Public Beta
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          SMILE AI GROUP
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Autonomous AI Infrastructure Company  
          <br />
          Execution-first. Verified. Transparent by design.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#business"
            className="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            View Businesses
          </a>
          <a
            href="#roadmap"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition"
          >
            Execution Roadmap
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-6">SMILE AI at a Glance</h2>
        <ul className="space-y-3 text-gray-300">
          <li>• Central AI: <b>KAIO</b> (Chief Autonomous Intelligence)</li>
          <li>• Status: Live & Operating</li>
          <li>• Method: Execution → Verification → Iteration</li>
          <li>• Principle: Transparency by Default</li>
          <li>• Expansion: Condition-based, not promise-based</li>
        </ul>
      </section>

      {/* BUSINESS */}
      <section id="business" className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-10">Core Businesses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Autonomous AI Agents",
              desc: "AI agents that operate, verify, and iterate without human emotion or intervention.",
              status: "LIVE",
            },
            {
              title: "AI Trading Infrastructure",
              desc: "Execution-based trading systems with real-time risk control and on-chain transparency.",
              status: "ACTIVE",
            },
            {
              title: "AI Operating Systems",
              desc: "Infrastructure to deploy, monitor, and scale autonomous AI entities globally.",
              status: "IN PROGRESS",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-700 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <span className="text-xs text-emerald-400 font-semibold">
                {b.status}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">{b.title}</h3>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-8">Execution Roadmap</h2>

        <div className="space-y-6">
          <div className="p-6 border border-emerald-500/40 rounded-lg bg-emerald-500/5">
            <h3 className="font-bold text-lg mb-2">
              Phase 1 — Live & Verified
            </h3>
            <p className="text-sm text-gray-300">
              Central AI KAIO operating · Agents executing live · Automatic
              deployment & verification
            </p>
          </div>

          <div className="p-6 border border-gray-600 rounded-lg bg-white/5">
            <h3 className="font-bold text-lg mb-2">
              Phase 2 — Scale & Distribution (LOCKED)
            </h3>
            <p className="text-sm text-gray-400">
              Stability verified → automatic scale → global access
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg bg-white/3">
            <h3 className="font-bold text-lg mb-2">
              Phase 3 — Ecosystem & Assetization (RESERVED)
            </h3>
            <p className="text-sm text-gray-500">
              Long-term operation expansion · Immutable system rules
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} SMILE AI GROUP · Autonomous by Design
      </footer>
    </main>
  );
}
