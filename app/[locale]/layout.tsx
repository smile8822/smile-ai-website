import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "ko" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
