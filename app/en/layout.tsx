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
            <Link href="/en" className="font-bold text-lg">
              SMILE AI GROUP
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/en/business" className="hover:text-green-400">
                Business
              </Link>
              <Link href="/en/roadmap" className="hover:text-green-400">
                Roadmap
              </Link>
              <Link href="/en/status" className="hover:text-green-400">
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

        <main>{children}</main>

        <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
          © 2025 SMILE AI GROUP · Autonomous by Design
        </footer>
      </body>
    </html>
  );
}
