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
  // 카카오 WCONGNAMUL 좌표계
  x: number;
  y: number;
  mapUrl: string;
}

const LOCATIONS: { modelHouse: MapLocation; site: MapLocation } = {
  modelHouse: {
    label: '인천 남동구 구월동 1140-1',
    address: CONTACT.modelHouse.address,
    x: 434918,
    y: 1098437,
    mapUrl: 'https://map.kakao.com/?urlX=434918.000000001&urlY=1098437.0000000007&name=%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B5%AC%EC%9B%94%EB%8F%99%201140-1&map_type=TYPE_MAP&from=roughmap',
  },
  site: {
    label: '인천 남동구 간석동 311-1',
    address: CONTACT.site.address,
    x: 435217,
    y: 1101346,
    mapUrl: 'https://map.kakao.com/?urlX=435217.0000000016&urlY=1101346.999999996&name=%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B0%84%EC%84%9D%EB%8F%99%20311-1&map_type=TYPE_MAP&from=roughmap',
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

    // WCONGNAMUL 좌표 → LatLng 변환
    const wcCoords = new window.kakao.maps.Coords(location.x, location.y);
    const latLng = wcCoords.toLatLng();

    const map = new window.kakao.maps.Map(mapRef.current, {
      center: latLng,
      level: 3,
    });

    const marker = new window.kakao.maps.Marker({
      position: latLng,
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
                  href={LOCATIONS.modelHouse.mapUrl}
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
                  href={LOCATIONS.site.mapUrl}
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
