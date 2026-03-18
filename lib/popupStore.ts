import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PopupState {
  /** 영상 팝업 숨김 날짜 (YYYY-MM-DD) */
  videoHiddenDate: string | null;
  /** 이미지 팝업별 숨김 날짜 */
  popupHiddenDates: Record<string, string | null>;
  hideVideoToday: () => void;
  hidePopupToday: (id: string) => void;
  isHiddenToday: (key: string, type: 'video' | 'popup') => boolean;
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

export const usePopupStore = create<PopupState>()(
  persist(
    (set, get) => ({
      videoHiddenDate: null,
      popupHiddenDates: {},
      hideVideoToday: () => set({ videoHiddenDate: getToday() }),
      hidePopupToday: (id: string) =>
        set((state) => ({
          popupHiddenDates: {
            ...state.popupHiddenDates,
            [id]: getToday(),
          },
        })),
      isHiddenToday: (key, type) => {
        const today = getToday();
        if (type === 'video') return get().videoHiddenDate === today;
        return get().popupHiddenDates[key] === today;
      },
    }),
    {
      name: 'poreon-popup',
    }
  )
);
