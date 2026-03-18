'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, type MenuItem } from '@/lib/navigation';
import { CONTACT } from '@/lib/constants';

interface NavigationProps {
  isScrolled: boolean;
}

const LOGO_WIDTH = 230;
const ITEM_WIDTH = 120;

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="hidden md:flex flex-1 items-center" onMouseLeave={handleMouseLeave}>
      {/* All menu items in one row */}
      <ul className="flex items-center">
        {navigation.map((item: MenuItem) => (
          <li
            key={item.label}
            className="relative text-center"
            style={{ width: `${ITEM_WIDTH}px` }}
            onMouseEnter={handleMouseEnter}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block py-[30px] text-[15px] font-medium tracking-[0.3px]
                  text-white transition-all duration-300
                  hover:underline underline-offset-[8px] decoration-white
                "
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="
                  block py-[30px] text-[15px] font-medium tracking-[0.3px]
                  text-white transition-all duration-300
                  hover:underline underline-offset-[8px] decoration-white
                "
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Phone number + Grand Open */}
      <div className="flex items-center gap-5 ml-auto shrink-0">
        <a
          href={`tel:${CONTACT.phone}`}
          className="text-white font-semibold leading-none hover:text-accent-green transition-colors"
          style={{ fontFamily: 'arial, sans-serif', fontSize: '24px' }}
        >
          {CONTACT.phone}
        </a>
        <span className="text-white text-[15px] tracking-[0.05em] border border-white/60 rounded-full px-5 py-2 leading-none">
          2월 6일 GRAND OPEN
        </span>
      </div>

      {/* Dropdown mega menu - ALL submenus shown, aligned under parent */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white border-t border-[#e4e4e4] shadow-lg">
              <div className="max-w-[1440px] mx-auto px-[70px] max-md:px-[20px]">
                <div className="flex">
                  {/* Spacer matching logo width */}
                  <div className="shrink-0" style={{ width: `${LOGO_WIDTH}px` }} />
                  {/* Each column directly under its parent menu */}
                  {navigation.map((item: MenuItem) => (
                    <div
                      key={item.label}
                      className="shrink-0 text-center"
                      style={{ width: `${ITEM_WIDTH}px` }}
                    >
                      <ul className="py-[20px]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            {child.external ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  block py-[8px]
                                  text-[14px] text-[#555] leading-relaxed whitespace-nowrap
                                  transition-colors duration-150
                                  hover:text-[#8b634b] hover:underline underline-offset-[4px] decoration-[#8b634b]
                                "
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                href={child.href}
                                className="
                                  block py-[8px]
                                  text-[14px] text-[#555] leading-relaxed whitespace-nowrap
                                  transition-colors duration-150
                                  hover:text-[#8b634b] hover:underline underline-offset-[4px] decoration-[#8b634b]
                                "
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
