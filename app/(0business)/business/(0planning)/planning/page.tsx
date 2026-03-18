import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `사업개요 | ${SITE_NAME}`,
  description: `${SITE_NAME} 사업개요`,
};

const PROJECT_DATA = [
  { label: '대지위치', value: '인천광역시 남동구 간석1동 311-1번지 일원' },
  { label: '대지면적', value: '89,594.40㎡' },
  { label: '건축면적', value: '14,212.9756㎡' },
  { label: '연면적', value: '390,154.4222㎡' },
  { label: '규모', value: '지하4층, 지상18층~35층 / 2,568세대(일반분양 735세대)' },
  { label: '용적률/건폐율', value: '272.69% / 15.86%' },
  { label: '주차대수', value: '총 3,243대 (세대당 1.26대)' },
];

export default function PlanningPage() {
  return (
    <>
      <SubPageHero
        title="사업개요"
        backgroundImage="/images/business/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '사업안내', href: '/business/planning' },
          { label: '사업개요', href: '/business/planning' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* 건물 이미지 */}
        <Image
          src="/images/business/planning.jpg"
          alt="사업개요"
          width={1000}
          height={600}
          className="w-full h-auto"
          priority
        />

        {/* 사업정보 3열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[40px] gap-y-[40px] mt-[50px]">
          {PROJECT_DATA.map((item) => (
            <div key={item.label}>
              <h3 className="text-[17px] font-bold text-[#333] pb-[10px] border-b border-[#333]">
                {item.label}
              </h3>
              <p className="text-[14px] text-[#666] mt-[12px] leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 유의사항 */}
        <div className="mt-[50px] space-y-1">
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 대지면적, 건축면적, 연면적은 분양시 진행 사항 및 관계기관의 사업추진 인허가 일정에 따라 변동될 수 있습니다.
          </p>
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 본 홈페이지에 사용된 CG 및 일러스트, 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
          </p>
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 본 홈페이지의 내용은 인·허가 과정상 변경될 수 있으니 계약 시 주요내용을 반드시 확인하시기 바랍니다.
          </p>
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 하자 등에 대한 사항은 공동주택관리법 등 관련 법령에 따라 적용됩니다.
          </p>
        </div>
      </div>
    </>
  );
}
