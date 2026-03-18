'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MobileBottomNav from './MobileBottomNav';

const POPUP_ROUTES = ['/interest/register'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPopup = POPUP_ROUTES.some((route) => pathname.startsWith(route));

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
