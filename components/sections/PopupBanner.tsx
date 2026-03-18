'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePopupStore } from '@/lib/popupStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const YOUTUBE_VIDEO_ID = 'ZjXNsFlcb88';

const IMAGE_POPUPS = [
  // { id: 'popup1', src: '/images/main/popup-1.webp', alt: '무순위 청약일정 안내' },
  { id: 'popup2', src: '/images/main/popup-2.webp', alt: '유사 홈페이지 주의' },
];

type Phase = 'video' | 'popups' | 'closed';

export default function PopupBanner() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>('closed');
  const [closedPopups, setClosedPopups] = useState<Set<string>>(new Set());
  const [hideChecked, setHideChecked] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [activeSlide, setActiveSlide] = useState(0);

  const { isHiddenToday, hideVideoToday, hidePopupToday } = usePopupStore();

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      if (!usePopupStore.getState().isHiddenToday('video', 'video')) {
        setPhase('video');
      } else {
        const state = usePopupStore.getState();
        const hasVisiblePopup = IMAGE_POPUPS.some(
          (p) => !state.isHiddenToday(p.id, 'popup')
        );
        if (hasVisiblePopup) setPhase('popups');
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // 모바일 자동 캐러셀
  useEffect(() => {
    if (!isMobile || phase !== 'popups') return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % IMAGE_POPUPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile, phase]);

  const handleCloseVideo = useCallback((hideToday: boolean) => {
    if (hideToday) hideVideoToday();
    const hasVisiblePopup = IMAGE_POPUPS.some(
      (p) => !isHiddenToday(p.id, 'popup') && !closedPopups.has(p.id)
    );
    setPhase(hasVisiblePopup ? 'popups' : 'closed');
  }, [hideVideoToday, isHiddenToday, closedPopups]);

  const handleCloseAll = () => {
    if (hideChecked) {
      IMAGE_POPUPS.forEach((p) => hidePopupToday(p.id));
    }
    setPhase('closed');
  };

  if (!mounted) return null;

  const visiblePopups = IMAGE_POPUPS.filter(
    (p) => !closedPopups.has(p.id) && !isHiddenToday(p.id, 'popup')
  );

  return createPortal(
    <AnimatePresence>
      {/* Video popup */}
      {phase === 'video' && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85"
        >
          {/* 배경 클릭으로 닫기 */}
          <div className="absolute inset-0" onClick={() => handleCloseVideo(false)} />

          <div className="absolute top-[30px] left-0 right-0 z-20 flex items-center justify-center">
            <button
              onClick={() => handleCloseVideo(false)}
              className="flex items-center gap-[6px] text-white/80 hover:text-white transition-colors"
            >
              <span className="text-[14px]">영상닫기</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>
          </div>
          <div className="relative z-10 w-[90%] max-w-[900px]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                title="포레나더샵 인천시청역 홍보영상"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Image popups */}
      {phase === 'popups' && visiblePopups.length > 0 && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={handleCloseAll} />

          {/* 팝업닫기 X */}
          <div className="absolute top-[30px] left-0 right-0 z-20 flex items-center justify-center">
            <button
              onClick={handleCloseAll}
              className="flex items-center gap-[6px] text-white/80 hover:text-white transition-colors"
            >
              <span className="text-[14px]">팝업닫기</span>
              <span className="text-[16px]">X</span>
            </button>
          </div>

          <div className="relative z-10">
            {/* 팝업 이미지 1개 */}
            <div className="w-[340px] max-w-[80vw]">
              <Image
                src={IMAGE_POPUPS[0].src}
                alt={IMAGE_POPUPS[0].alt}
                width={340}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* 오늘 하루동안 보지 않기 */}
            <div className="flex items-center justify-center mt-[16px]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hideChecked}
                  onChange={(e) => setHideChecked(e.target.checked)}
                  className="w-[16px] h-[16px] accent-white"
                />
                <span className="text-[13px] text-white/70">오늘 하루동안 보지 않기</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
