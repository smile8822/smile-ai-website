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
            {/* LOGO */}
            <Link href="/en" className="font-bold text-lg">
              SMILE AI GROUP
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
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

            {/* MOBILE MENU */}
            <details className="md:hidden relative">
              <summary className="cursor-pointer text-sm border border-gray-700 px-3 py-1 rounded">
                MENU
              </summary>
              <div className="absolute right-0 mt-2 w-40 bg-[#0b0f14] border border-gray-800 rounded shadow-lg text-sm">
                <Link href="/en/business" className="block px-4 py-2 hover:bg-gray-800">
                  Business
                </Link>
                <Link href="/en/roadmap" className="block px-4 py-2 hover:bg-gray-800">
                  Roadmap
                </Link>
                <Link href="/en/status" className="block px-4 py-2 hover:bg-gray-800">
                  Status
                </Link>
                <div className="border-t border-gray-800 my-1" />
                <Link href="/en" className="block px-4 py-2 hover:bg-gray-800">
                  EN
                </Link>
                <Link href="/kr" className="block px-4 py-2 hover:bg-gray-800">
                  KR
                </Link>
                <Link href="/id" className="block px-4 py-2 hover:bg-gray-800">
                  ID
                </Link>
              </div>
            </details>
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
