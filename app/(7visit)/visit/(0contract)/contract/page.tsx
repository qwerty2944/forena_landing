'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

export default function ContractVisitPage() {
  const [activeTab, setActiveTab] = useState<'reserve' | 'check'>('reserve');
  const [name, setName] = useState('');
  const [phone1] = useState('010');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubPageHero
        title="정당 서류접수 방문예약"
        backgroundImage="/images/visit/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '방문예약', href: '/visit' },
          { label: '정당 서류접수 방문예약', href: '/visit/contract' },
        ]}
      />

      <div className="max-w-[800px] mx-auto px-[20px] py-[60px]">
        {/* Top Banner Image */}
        <Image
          src="/images/visit/contract-banner.webp"
          alt="정당계약 서류접수 방문예약"
          width={1000}
          height={400}
          className="w-full h-auto"
          priority
        />

        {/* Tabs */}
        <div className="flex mt-10">
          <button
            onClick={() => { setActiveTab('reserve'); setSubmitted(false); setName(''); setPhone2(''); setPhone3(''); }}
            className={`flex-1 py-3.5 text-[15px] font-medium transition-colors ${
              activeTab === 'reserve'
                ? 'bg-primary-navy text-white'
                : 'bg-[#e8e8e8] text-[#888]'
            }`}
          >
            방문예약
          </button>
          <button
            onClick={() => { setActiveTab('check'); setSubmitted(false); setName(''); setPhone2(''); setPhone3(''); }}
            className={`flex-1 py-3.5 text-[15px] font-medium transition-colors ${
              activeTab === 'check'
                ? 'bg-primary-navy text-white'
                : 'bg-[#e8e8e8] text-[#888]'
            }`}
          >
            예약확인 및 취소
          </button>
        </div>

        <div className="border-t-[3px] border-primary-navy" />

        {/* Form */}
        {submitted ? (
          <div className="text-center py-16">
            <p className="text-[15px] text-[#333] font-medium">
              {activeTab === 'reserve' ? '예약이 완료되었습니다.' : '예약 조회 결과가 없습니다.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-12 max-w-[700px] mx-auto">
            <div className="flex max-md:flex-col items-center max-md:items-start mb-8 justify-center gap-4 md:gap-0">
              <label className="w-[80px] text-[16px] text-[#333] font-bold md:text-right md:mr-8 shrink-0">
                성함
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="성함"
                required
                className="w-full md:flex-1 md:max-w-[450px] px-4 py-3.5 border border-[#ccc] text-[15px] focus:outline-none focus:border-[#333] transition-colors"
              />
            </div>

            <div className="flex max-md:flex-col items-center max-md:items-start mb-8 justify-center gap-4 md:gap-0">
              <label className="w-[80px] text-[16px] text-[#333] font-bold md:text-right md:mr-8 shrink-0">
                연락처
              </label>
              <div className="flex items-center gap-2 w-full md:flex-1 md:max-w-[450px]">
                <select
                  defaultValue={phone1}
                  className="w-[80px] md:w-[120px] shrink-0 px-2 md:px-3 py-3.5 border border-[#ccc] text-[15px] bg-white focus:outline-none focus:border-[#333] transition-colors"
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <span className="text-[#999]">-</span>
                <input
                  type="text"
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  required
                  className="flex-1 min-w-0 px-3 py-3.5 border border-[#ccc] text-[15px] focus:outline-none focus:border-[#333] transition-colors"
                />
                <span className="text-[#999]">-</span>
                <input
                  type="text"
                  value={phone3}
                  onChange={(e) => setPhone3(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  required
                  className="flex-1 min-w-0 px-3 py-3.5 border border-[#ccc] text-[15px] focus:outline-none focus:border-[#333] transition-colors"
                />
              </div>
            </div>

            <div className="border-t border-[#e0e0e0] mt-6 mb-10" />

            <div className="flex justify-center gap-0">
              {activeTab === 'reserve' ? (
                <button
                  type="submit"
                  className="px-16 py-4 border border-[#ccc] text-[16px] text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors"
                >
                  예약진행
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="px-12 py-4 border border-[#ccc] text-[16px] text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors"
                  >
                    예약확인
                  </button>
                  <button
                    type="button"
                    className="px-12 py-4 border border-[#ccc] border-l-0 text-[16px] text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors"
                  >
                    예약취소
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
}
