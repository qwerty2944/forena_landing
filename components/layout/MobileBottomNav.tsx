'use client';

import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

export default function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200] md:hidden bg-primary-navy"
    >
      <div className="flex items-stretch">
        <Link
          href="/"
          className="flex-1 flex flex-col items-center justify-center py-[10px] text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
          <span className="text-[10px] mt-[3px]">HOME</span>
        </Link>
        <Link
          href="/business/contact"
          className="flex-1 flex flex-col items-center justify-center py-[10px] text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2a8 8 0 018 8c0 5.4-8 12-8 12S4 15.4 4 10a8 8 0 018-8z" />
          </svg>
          <span className="text-[10px] mt-[3px]">오시는길</span>
        </Link>
        <Link
          href="/interest/register"
          className="flex-1 flex flex-col items-center justify-center py-[10px] text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
          <span className="text-[10px] mt-[3px]">관심고객등록</span>
        </Link>
        <a
          href={`tel:${CONTACT.phone.replace(/\./g, '')}`}
          className="flex-1 flex flex-col items-center justify-center py-[10px] text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-[10px] mt-[3px]">전화연결</span>
        </a>
      </div>
    </nav>
  );
}
