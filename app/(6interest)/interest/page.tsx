'use client';

import { useState } from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import { CONTACT } from '@/lib/constants';

export default function InterestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubPageHero
        title="관심고객등록"
        backgroundImage="/images/interest/hero.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '관심고객등록', href: '/interest' },
        ]}
      />

      <div className="max-w-[600px] mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-text-dark">
            관심고객 등록
          </h2>
          <p className="text-sm text-text-medium mt-3 leading-relaxed">
            포레나더샵 인천시청역의 최신 분양 정보를<br />
            빠르게 받아보실 수 있습니다.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-bg-light rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-green/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-2">등록이 완료되었습니다</h3>
            <p className="text-sm text-text-medium">
              빠른 시일 내에 연락드리겠습니다.<br />
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
                placeholder="연락처를 입력해 주세요 (예: 010-1234-5678)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">관심 주택형</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors bg-white">
                <option value="">선택해 주세요</option>
                <option value="49">49㎡</option>
                <option value="59a">59㎡A</option>
                <option value="59b">59㎡B</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-1.5">문의사항</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary-navy transition-colors resize-none"
                placeholder="문의사항을 입력해 주세요 (선택)"
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
                  개인정보 수집 및 이용에 동의합니다. 수집항목: 이름, 연락처 / 수집목적: 분양상담 및 정보제공 / 보유기간: 분양 완료 시까지
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-navy text-white font-medium rounded-lg hover:bg-primary-navy/90 transition-colors"
            >
              관심고객 등록하기
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-text-light">
            전화 상담을 원하시면{' '}
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
