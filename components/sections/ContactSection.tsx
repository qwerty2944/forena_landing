'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '@/lib/constants';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapLocation {
  label: string;
  address: string;
  x: number;
  y: number;
  detailUrl: string;
}

const LOCATIONS: { modelHouse: MapLocation; site: MapLocation } = {
  modelHouse: {
    label: '인천 남동구 구월동 1140-1',
    address: CONTACT.modelHouse.address,
    x: 434917,
    y: 1098436,
    detailUrl: 'https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%9D%B8%EC%B2%9C+%EB%82%A8%EB%8F%99%EA%B5%AC+%EA%B5%AC%EC%9B%94%EB%8F%99+1140-1&urlLevel=2&urlX=434917&urlY=1098436',
  },
  site: {
    label: '인천 남동구 간석동 311-1',
    address: CONTACT.site.address,
    x: 435216,
    y: 1101346,
    detailUrl: 'https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%9D%B8%EC%B2%9C+%EB%82%A8%EB%8F%99%EA%B5%AC+%EA%B0%84%EC%84%9D%EB%8F%99+311-1&urlLevel=2&urlX=435216&urlY=1101346',
  },
};

const KAKAO_SDK_URL = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=8e06cbb6daf30d17b0c10c1d5a7f9e23&autoload=false';

let sdkPromise: Promise<void> | null = null;

function loadKakaoSDK(): Promise<void> {
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    if (window.kakao?.maps?.LatLng) {
      resolve();
      return;
    }

    if (window.kakao?.maps?.load) {
      window.kakao.maps.load(() => resolve());
      return;
    }

    const script = document.createElement('script');
    script.src = KAKAO_SDK_URL;
    script.onload = () => {
      window.kakao.maps.load(() => resolve());
    };
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error('Kakao SDK load failed'));
    };
    document.head.appendChild(script);
  });

  return sdkPromise;
}

function KakaoMap({ location }: { location: MapLocation }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    loadKakaoSDK()
      .then(() => {
        const wcCoords = new window.kakao.maps.Coords(location.x, location.y);
        const latLng = wcCoords.toLatLng();

        const map = new window.kakao.maps.Map(mapRef.current!, {
          center: latLng,
          level: 3,
        });

        new window.kakao.maps.Marker({ position: latLng, map });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px 10px;font-size:13px;white-space:nowrap;">${location.label}</div>`,
        });
        infowindow.open(map, new window.kakao.maps.Marker({ position: latLng, map }));

        map.addControl(
          new window.kakao.maps.ZoomControl(),
          window.kakao.maps.ControlPosition.RIGHT
        );
      })
      .catch(() => setError(true));
  }, [location]);

  if (error) {
    return (
      <a
        href={location.detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[300px] bg-[#f0f0f0] flex items-center justify-center text-[14px] text-[#888] hover:bg-[#e8e8e8] transition-colors"
      >
        지도를 불러올 수 없습니다. 클릭하여 카카오맵에서 보기
      </a>
    );
  }

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
                  href={LOCATIONS.modelHouse.detailUrl}
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
                  href={LOCATIONS.site.detailUrl}
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
