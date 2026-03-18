'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { HEADER_HEIGHT, HEADER_HEIGHT_SCROLLED, MOBILE_BREAKPOINT } from '@/lib/constants';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { isScrolled } = useScrollPosition();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Desktop: 투명 → 색상 전환
  const showBg = isScrolled || isHovered;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[300]"
        role="banner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isMobile ? (
          /* 모바일: 항상 흰색 배경, 고정 높이 */
          <div className="h-[56px] bg-white border-b border-[#ddd]">
            <div className="px-[16px] h-full flex items-center justify-between">
              <Link href="/" aria-label="FORENA THE SHOP home page">
                <Image
                  src="/images/main/top_logo.webp"
                  alt="FORENA THE SHOP 인천시청역"
                  width={253}
                  height={21}
                  className="h-auto w-[160px]"
                  priority
                />
              </Link>
              <button
                onClick={openMobileMenu}
                className="flex items-center justify-center w-[40px] h-[40px] text-[#333]"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* 데스크탑: 기존 투명→네이비 전환 */
          <motion.div
            initial={false}
            animate={{ height: isScrolled ? HEADER_HEIGHT_SCROLLED : HEADER_HEIGHT }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 1] }}
            className={`relative transition-colors duration-500 ${showBg ? 'bg-[#052f57]' : 'bg-transparent'}`}
          >
            <div className="max-w-[1440px] mx-auto px-[70px] h-full flex items-center">
              <Link
                href="/"
                className="block shrink-0"
                style={{ width: '230px' }}
                aria-label="FORENA THE SHOP home page"
              >
                <Image
                  src="/images/main/top_logo_wh.webp"
                  alt="FORENA THE SHOP 인천시청역"
                  width={253}
                  height={21}
                  className="h-auto w-[210px]"
                  priority
                />
              </Link>
              <Navigation isScrolled={isScrolled} />
            </div>
          </motion.div>
        )}
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
