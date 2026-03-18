import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';

export const metadata: Metadata = {
  title: '포레나, 더샵, 포레나더샵 인천시청역',
  description: '포레나, 더샵, 포레나더샵 인천시청역',
  keywords: '포레나, 더샵, 포레나더샵, 인천시청역, 아파트, 분양, GTX-B',
  openGraph: {
    title: '포레나, 더샵, 포레나더샵 인천시청역',
    description: '포레나, 더샵, 포레나더샵 인천시청역',
    type: 'website',
    siteName: '포레나더샵 인천시청역',
  },
  twitter: {
    card: 'summary_large_image',
    title: '포레나, 더샵, 포레나더샵 인천시청역',
    description: '포레나, 더샵, 포레나더샵 인천시청역',
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
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
