// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "SMILE AI GROUP",
  description: "Autonomous AI Infrastructure by KAIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f14] text-gray-100">
        {children}
      </body>
    </html>
  );
}
