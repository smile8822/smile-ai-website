import Header from "../components/Header";

export const metadata = {
  title: "SMILE AI GROUP",
  description: "A transparent AI-driven operating company, operated by KAIO.",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
