import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smilesai.org'),

  title: 'SMILE AI GROUP',
  description: 'KAIO System Online',

  openGraph: {
    title: 'SMILE AI GROUP',
    description: 'KAIO System Online',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
