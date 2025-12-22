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
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#0b0f14]/90 backdrop-blur border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-lg">
              SMILE AI GROUP
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/business" className="hover:text-green-400">
                Business
              </Link>
              <Link href="/roadmap" className="hover:text-green-400">
                Roadmap
              </Link>
              <Link href="/status" className="hover:text-green-400">
                Status
              </Link>

              <div className="ml-4 flex gap-2 text-xs text-gray-400">
                <span className="cursor-pointer hover:text-white">EN</span>
                <span className="cursor-pointer hover:text-white">KR</span>
                <span className="cursor-pointer hover:text-white">ID</span>
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
