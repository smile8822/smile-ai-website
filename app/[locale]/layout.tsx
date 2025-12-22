import "../globals.css";
import Link from "next/link";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body className="bg-[#0b0f14] text-gray-100">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#0b0f14]/90 backdrop-blur border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <Link href={`/${locale}`} className="font-bold text-lg">
              SMILE AI GROUP
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href={`/${locale}/business`} className="hover:text-green-400">
                Business
              </Link>
              <Link href={`/${locale}/roadmap`} className="hover:text-green-400">
                Roadmap
              </Link>
              <Link href={`/${locale}/status`} className="hover:text-green-400">
                Status
              </Link>

              <div className="ml-4 flex gap-2 text-xs text-gray-400">
                <Link href="/en" className="hover:text-white">EN</Link>
                <Link href="/kr" className="hover:text-white">KR</Link>
                <Link href="/id" className="hover:text-white">ID</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* PAGE */}
        <main>{children}</main>
      </body>
    </html>
  );
}
