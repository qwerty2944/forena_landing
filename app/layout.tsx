import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';

export const metadata: Metadata = {
  title: '포레나 인천시청역',
  description: '포레나 인천시청역 - 인천의 새로운 랜드마크. 대한토지신탁 시행, 포스코이앤씨 시공.',
  keywords: '포레나, 인천시청역, 아파트, 분양, 포스코이앤씨, 인천',
  openGraph: {
    title: '포레나 인천시청역',
    description: '포레나 인천시청역 - 인천의 새로운 랜드마크',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200;300;400;500;600;700&family=Nanum+Myeongjo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
