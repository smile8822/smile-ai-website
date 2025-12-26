import Container from "./Container";

type Props = {
  messages?: {
    title?: string;
    description?: string;
  };
};

const FALLBACK = {
  title: "KAIO manages structure, not people",
  description:
    "KAIO makes decisions based on on-chain data, logs, and indicators. All results are public, verified, and repeatable.",
};

export default function KaioSummary({ messages }: Props) {
  const data = {
    title: messages?.title ?? FALLBACK.title,
    description: messages?.description ?? FALLBACK.description,
  };

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
