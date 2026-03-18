'use client';

import Image from 'next/image';
import { CONTACT, PROJECT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#202020]">
      {/* Desktop */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] py-[35px]">
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          <div className="flex items-center gap-[25px] flex-wrap">
            <Image
              src="/images/main/forena-logo.jpg"
              alt="FORENA"
              width={140}
              height={30}
              className="h-[28px] w-auto"
            />
            <div className="flex items-center gap-[6px]">
              <span className="text-[12px] text-[#777]">시행</span>
              <span className="text-[13px] text-white font-medium">{PROJECT_INFO.developer}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[12px] text-[#777]">시공</span>
              <Image src="/images/main/hanwha-icon.png" alt="(주)한화 건설부문" width={130} height={24} className="h-[22px] w-auto" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-[10px] shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[13px] text-white font-bold tracking-[0.05em] hover:text-white/80 transition-colors"
            >
              TOP
            </button>
            <div className="w-[40px] border-t border-white/40" />
            <a
              href="https://www.hwenc.co.kr/guide/privacy.do"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#999] border border-[#555] px-[20px] py-[8px] hover:text-white hover:border-[#888] transition-colors"
            >
              개인정보처리방침
            </a>
          </div>
        </div>

        {/* Info section */}
        <div className="mt-[20px]">
          <p className="text-[13px] leading-[2]">
            <span className="text-[#c49a6c]">대표전화</span>
            {'  '}
            <span className="text-[#c49a6c] font-bold text-[15px]">{CONTACT.phone}</span>
            <span className="text-[#555] mx-[12px]">|</span>
            <span className="text-[#999]">총</span>
            {'  '}
            <span className="text-[#c49a6c] font-bold">{PROJECT_INFO.totalUnits.toLocaleString()}</span>
            <span className="text-[#999]">세대 중</span>
            {'  '}
            <span className="text-[#999]">일반분양</span>
            {'  '}
            <span className="text-[#c49a6c] font-bold">{PROJECT_INFO.generalUnits.toLocaleString()}</span>
            <span className="text-[#999]">세대</span>
            {'  '}
            <span className="text-[#c49a6c]">[ {PROJECT_INFO.unitTypes[0]} / {PROJECT_INFO.unitTypes[1]}·{PROJECT_INFO.unitTypes[2]} ]</span>
          </p>
          <p className="text-[12px] text-[#777] leading-[2]">
            시행 : {PROJECT_INFO.developer}
            <span className="mx-[6px]">|</span>
            등록번호: {PROJECT_INFO.developerRegNo}
          </p>
          <p className="text-[12px] text-[#777] leading-[2]">
            온라인 대행 . {PROJECT_INFO.onlineAgent} {PROJECT_INFO.onlineAgentRegNo}
          </p>
        </div>

        <div className="mt-[12px]">
          <p className="text-[11px] text-[#555] leading-[1.8]">
            ※ 본 사이트의 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제 시공 시 다를 수 있습니다.
          </p>
          <p className="text-[12px] text-[#555] mt-[12px]">
            Copyright &copy; 2025 FORENA. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Mobile - 전체 중앙정렬 */}
      <div className="md:hidden px-[20px] py-[40px] text-center">
        {/* FORENA 로고 */}
        <Image
          src="/images/main/forena-logo.jpg"
          alt="FORENA"
          width={160}
          height={34}
          className="h-[30px] w-auto mx-auto"
        />

        {/* 시행 */}
        <p className="text-[12px] text-[#777] mt-[28px]">
          시행 - {PROJECT_INFO.developer}
        </p>

        {/* 시공 로고 */}
        <div className="flex items-center justify-center gap-[8px] mt-[12px]">
          <span className="text-[12px] text-[#777]">시공 -</span>
          <Image src="/images/main/hanwha-icon.png" alt="(주)한화 건설부문" width={130} height={24} className="h-[20px] w-auto" />
        </div>

        {/* 대표전화 */}
        <p className="mt-[20px]">
          <span className="text-[13px] text-[#c49a6c]">대표전화</span>
          {'   '}
          <span className="text-[18px] text-[#999] font-medium">{CONTACT.phone}</span>
        </p>

        {/* 세대 정보 */}
        <p className="text-[13px] text-[#999] mt-[6px]">
          총 {PROJECT_INFO.totalUnits.toLocaleString()}세대 중 일반분양 {PROJECT_INFO.generalUnits.toLocaleString()}세대{' '}
          <span className="text-[#c49a6c]">[ {PROJECT_INFO.unitTypes[0]} / {PROJECT_INFO.unitTypes[1]}·{PROJECT_INFO.unitTypes[2]} ]</span>
        </p>

        {/* 시행/등록번호 */}
        <p className="text-[11px] text-[#777] leading-[1.8] mt-[20px]">
          시행 : {PROJECT_INFO.developer} | 등록번호: {PROJECT_INFO.developerRegNo}
        </p>
        <p className="text-[11px] text-[#777] leading-[1.8]">
          온라인 대행 . {PROJECT_INFO.onlineAgent} {PROJECT_INFO.onlineAgentRegNo}
        </p>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#555] leading-[1.8] mt-[20px]">
          ※ 본 사이트의 이미지는 소비자의 이해를 돕기 위해 제작된 것으로<br />
          실제 시공 시 다를 수 있습니다.
        </p>

        {/* Copyright */}
        <p className="text-[12px] text-[#555] mt-[24px]">
          Copyright &copy; 2025 FORENA. All Rights Reserved.
        </p>

        {/* 개인정보처리방침 */}
        <a
          href="https://www.hwenc.co.kr/guide/privacy.do"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] text-[#999] border border-[#555] px-[50px] py-[14px] mt-[24px]"
        >
          개인정보처리방침
        </a>

        {/* TOP 버튼 */}
        <div className="flex justify-end mt-[20px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-[48px] h-[48px] border border-[#555] flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
              <path d="M9 14V4" />
              <path d="M4 8L9 3L14 8" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
