// app/ko/layout.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
