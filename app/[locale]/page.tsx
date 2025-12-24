import HeroSection from "../components/HeroSection";
import KaioSummary from "../components/KaioSummary";
import { getMessages } from "../lib/getMessages";

export default async function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  const messages = await getMessages(params.locale);

  return (
    <main>
      <HeroSection messages={messages.hero} />
      <KaioSummary messages={messages.kaio} />
    </main>
  );
}
