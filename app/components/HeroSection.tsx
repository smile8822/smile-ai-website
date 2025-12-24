import { Container } from "./Container";

type Props = {
  messages: {
    badge: string;
    title: string;
    description: string;
    cta: string;
  };
};

export default function HeroSection({ messages }: Props) {
  return (
    <section className="py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block rounded-xl bg-white/80 backdrop-blur border border-slate-200 px-4 py-2 text-sm mb-6">
              {messages.badge}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {messages.title}
            </h1>

            <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-8">
              {messages.description}
            </p>

            <button className="rounded-xl bg-amber-400 px-6 py-3 font-semibold">
              {messages.cta}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
