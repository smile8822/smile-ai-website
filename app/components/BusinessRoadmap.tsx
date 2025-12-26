import Link from "next/link";
import Container from "./Container";

const BUSINESSES = [
  {
    slug: "kaio",
    title: "KAIO Core System",
    status: "LIVE",
    description:
      "Central AI system governing execution, verification, and operational logic.",
  },
  {
    slug: "trading",
    title: "AI Trading Operations",
    status: "LIVE",
    description:
      "Automated trading operations executed and verified by KAIO.",
  },
  {
    slug: "platform",
    title: "AI Platform & Tools",
    status: "COMING SOON",
    description:
      "User-facing platforms built on KAIO operating infrastructure.",
  },
  {
    slug: "verification",
    title: "Data & Verification Network",
    status: "PLANNED",
    description:
      "Public verification layer for logs, results, and integrity.",
  },
];

export default function BusinessRoadmap() {
  return (
    <section className="bg-slate-50">
      <Container>
        <h2 className="text-3xl font-semibold mb-10">
          Business Roadmap
        </h2>

        <div className="space-y-10">
          {BUSINESSES.map((b) => (
            <div key={b.slug} className="border-b pb-6">
              <div className="text-sm text-slate-500 mb-1">
                {b.status}
              </div>

              <Link
                href={`/business/${b.slug}`}
                className="text-2xl font-semibold underline text-blue-700"
              >
                {b.title}
              </Link>

              <p className="mt-3 text-slate-600 max-w-3xl">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
