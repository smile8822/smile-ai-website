import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f14] text-gray-100">
        <header className="sticky top-0 z-50 bg-[#0b0f14]/90 backdrop-blur border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-lg">
              SMILE AI GROUP
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link href="/business" className="hover:text-green-400">Business</Link>
              <Link href="/roadmap" className="hover:text-green-400">Roadmap</Link>
              <Link href="/status" className="hover:text-green-400">Status</Link>
            </nav>

            <div className="flex gap-3 text-xs text-gray-400">
              <Link href="/en">EN</Link>
              <Link href="/kr">KR</Link>
              <Link href="/id">ID</Link>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
