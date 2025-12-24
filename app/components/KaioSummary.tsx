import { Container } from "./Container";

type Props = {
  messages: {
    title: string;
    description: string;
  };
};

export default function KaioSummary({ messages }: Props) {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            {messages.title}
          </h2>

          <p className="text-slate-600 leading-relaxed whitespace-pre-line">
            {messages.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
