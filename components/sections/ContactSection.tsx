'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT, MAP_LINKS, KAKAO_MAP_KEY } from '@/lib/constants';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapLocation {
  label: string;
  address: string;
  lat: number;
  lng: number;
}

const LOCATIONS: { modelHouse: MapLocation; site: MapLocation } = {
  modelHouse: {
    label: '견본주택',
    address: CONTACT.modelHouse.address,
    lat: 37.4434,
    lng: 126.7052,
  },
  site: {
    label: '현장',
    address: CONTACT.site.address,
    lat: 37.4567,
    lng: 126.7083,
  },
};

// SDK 스크립트를 동적으로 삽입하고 로드 완료까지 기다림
let sdkPromise: Promise<void> | null = null;

function loadKakaoSDK(): Promise<void> {
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    // 이미 로드된 경우
    if (window.kakao?.maps?.LatLng) {
      resolve();
      return;
    }

    // 이미 스크립트 태그가 있는 경우 (load만 호출)
    if (window.kakao?.maps?.load) {
      window.kakao.maps.load(() => resolve());
      return;
    }

    // 스크립트 동적 삽입
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => resolve());
    };
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error('카카오맵 SDK 로드 실패'));
    };
    document.head.appendChild(script);
  });

  return sdkPromise;
}

function KakaoMap({ location }: { location: MapLocation }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadKakaoSDK().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready || !mapRef.current) return;

    const coords = new window.kakao.maps.LatLng(location.lat, location.lng);
    const map = new window.kakao.maps.Map(mapRef.current, {
      center: coords,
      level: 3,
    });

    const marker = new window.kakao.maps.Marker({
      position: coords,
      map,
    });

    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:5px 10px;font-size:13px;white-space:nowrap;">${location.label}</div>`,
    });
    infowindow.open(map, marker);

    map.addControl(
      new window.kakao.maps.ZoomControl(),
      window.kakao.maps.ControlPosition.RIGHT
    );
  }, [ready, location]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[300px] bg-[#f5f5f5]"
    />
  );
}

export default function ContactSection() {
  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        <FadeInOnScroll>
          <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px] mb-[30px]">찾아오시는길</h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* 견본주택 */}
            <div>
              <KakaoMap location={LOCATIONS.modelHouse} />
              <div className="mt-[15px]">
                <h3 className="text-[18px] font-bold text-primary-navy mb-[6px]">견본주택</h3>
                <p className="text-[14px] text-[#666] mb-[15px]">{CONTACT.modelHouse.address}</p>
                <a
                  href={MAP_LINKS.modelHouse.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] bg-primary-navy text-white px-[24px] py-[10px] text-[14px] font-medium hover:bg-primary-navy/90 transition-colors"
                >
                  자세히 보기
                  <span className="text-[16px]">→</span>
                </a>
              </div>
            </div>

            {/* 현장 */}
            <div>
              <KakaoMap location={LOCATIONS.site} />
              <div className="mt-[15px]">
                <h3 className="text-[18px] font-bold text-primary-navy mb-[6px]">현장</h3>
                <p className="text-[14px] text-[#666] mb-[15px]">{CONTACT.site.address}</p>
                <a
                  href={MAP_LINKS.site.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] bg-primary-navy text-white px-[24px] py-[10px] text-[14px] font-medium hover:bg-primary-navy/90 transition-colors"
                >
                  자세히 보기
                  <span className="text-[16px]">→</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
