import Container from "./Container";

const AREAS = [
  {
    title: "KAIO Core System",
    status: "Live",
    description:
      "The central AI that manages structure, verification, and automated decision-making across all systems.",
  },
  {
    title: "AI Trading Operations",
    status: "Live",
    description:
      "Automated trading systems operated and verified by KAIO using transparent logic and real-time data.",
  },
  {
    title: "AI Platform & Tools",
    status: "Coming Soon",
    description:
      "User-facing tools and platforms built on top of KAIO’s operating infrastructure.",
  },
  {
    title: "Data & Verification Network",
    status: "Planned",
    description:
      "An open verification layer for logs, results, and operational integrity.",
  },
];

export default function BusinessAreas() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Business Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {AREAS.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <span className="text-sm rounded-full px-3 py-1 bg-slate-100">
                  {area.status}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
