'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MobileBottomNav from './MobileBottomNav';

const POPUP_ROUTES = ['/interest/register'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPopup = POPUP_ROUTES.some((route) => pathname.startsWith(route));

  // 스크롤 중에만 스크롤바 표시
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 1200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isPopup) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="md:pb-0 pb-[60px]">{children}</main>
      <Footer />
      <ScrollToTop />
      <MobileBottomNav />
    </>
  );
}
