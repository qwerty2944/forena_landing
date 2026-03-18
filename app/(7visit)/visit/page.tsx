'use client';

import { useState } from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import { CONTACT } from '@/lib/constants';

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubPageHero
        title="방문예약"
        backgroundImage="/images/visit/hero.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '방문예약', href: '/visit' },
        ]}
      />

      <div className="max-w-[600px] mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-text-dark">
            견본주택 방문예약
          </h2>
          <p className="text-sm text-text-medium mt-3 leading-relaxed">
            포레나더샵 인천시청역 견본주택 방문을<br />
            사전 예약하실 수 있습니다.
          </p>
        </div>

        {/* Model house info */}
        <div className="mb-8 p-5 bg-primary-navy/5 rounded-lg border border-primary-navy/10">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-navy shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-text-dark">견본주택 위치</p>
              <p className="text-sm text-text-medium mt-1">{CONTACT.modelHouse.address}</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-bg-light rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-green/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-2">예약이 완료되었습니다</h3>
            <p className="text-sm text-text-medium">
              방문 예정일에 맞추어 안내해 드리겠습니다.<br />
              감사합니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">이름 *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors"
                placeholder="성명을 입력해 주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">연락처 *</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors"
                placeholder="연락처를 입력해 주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">방문 희망일 *</label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">방문 희망 시간</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors bg-white">
                <option value="">선택해 주세요</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">방문 인원</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors bg-white">
                <option value="1">1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명 이상</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">요청사항</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors resize-none"
                placeholder="요청사항을 입력해 주세요 (선택)"
              />
            </div>

            {/* Privacy consent */}
            <div className="p-4 bg-bg-light rounded-lg">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-primary-navy"
                />
                <span className="text-xs text-text-medium leading-relaxed">
                  개인정보 수집 및 이용에 동의합니다. 수집항목: 이름, 연락처, 방문일시 / 수집목적: 방문예약 관리 / 보유기간: 방문 완료 후 3개월
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-navy text-white font-medium rounded-lg hover:bg-primary-navy/90 transition-colors"
            >
              방문예약 신청하기
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-text-light">
            전화 예약을 원하시면{' '}
            <a href={`tel:${CONTACT.phone}`} className="text-primary-navy font-medium underline">
              {CONTACT.phone}
            </a>
            으로 문의해 주세요.
          </p>
        </div>
      </div>
    </>
  );
}
