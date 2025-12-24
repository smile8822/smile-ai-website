import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const isKR = params.locale === "kr";

  const title = isKR
    ? "SMILE AI GROUP | AI는 자동으로, 사람은 가치에 집중한다"
    : "SMILE AI GROUP | AI operates automatically, Humans focus on value";

  const description = isKR
    ? "투명성(공개), 자동화(반복), 검증(증명)을 기반으로 하는 AI 운영 시스템."
    : "A transparent AI operating system based on automation, verification, and repetition.";

  return {
    metadataBase: new URL("https://smile-ai.group"),
    title,
    description,

    openGraph: {
      title,
      description,
      siteName: "SMILE AI GROUP",
      locale: isKR ? "ko_KR" : "en_US",
      type: "website",
      images: ["/og.png"],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function LocaleLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
