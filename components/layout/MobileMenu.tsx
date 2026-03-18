'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, type MenuItem } from '@/lib/navigation';
import { useClickOutside } from '@/hooks/useClickOutside';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setExpandedIndex(null);
  }, [isOpen]);

  const toggleAccordion = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const accordionVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 암전 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 z-[399]"
            aria-hidden="true"
          />

          {/* 오른쪽에서 슬라이드 패널 */}
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[400] w-full bg-white overflow-y-auto overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* 상단바: 로고 + X */}
            <div className="h-[56px] border-b border-[#ddd] flex items-center justify-between px-[16px] shrink-0">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/images/main/top_logo.png"
                  alt="FORENA THE SHOP"
                  width={253}
                  height={21}
                  className="h-auto w-[160px]"
                />
              </Link>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-[40px] h-[40px] text-[#333]"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 아코디언 메뉴 */}
            <div className="border-t-[3px] border-primary-navy">
              {navigation.map((item: MenuItem, index: number) => {
                const isExpanded = expandedIndex === index;
                const hasSubMenu = item.children.length > 1 || (item.children.length === 1 && item.children[0].label !== item.label);

                return (
                  <div key={item.label} className="border-b border-[#e4e4e4]">
                    {hasSubMenu ? (
                      <>
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-center w-full py-[16px] text-[15px] font-medium text-[#333]"
                          aria-expanded={isExpanded}
                        >
                          {item.label}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              variants={accordionVariants}
                              initial="collapsed"
                              animate="expanded"
                              exit="collapsed"
                              className="overflow-hidden"
                            >
                              {item.children.map((child) => (
                                child.external ? (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="block w-full py-[14px] text-center text-[14px] text-white font-medium bg-primary-navy border-t border-white/10"
                                  >
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="block w-full py-[14px] text-center text-[14px] text-white font-medium bg-primary-navy border-t border-white/10"
                                  >
                                    {child.label}
                                  </Link>
                                )
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="block w-full py-[16px] text-center text-[15px] font-medium text-[#333]"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block w-full py-[16px] text-center text-[15px] font-medium text-[#333]"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
