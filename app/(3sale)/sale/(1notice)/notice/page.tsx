import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `모집공고 | ${SITE_NAME}`,
  description: `${SITE_NAME} 모집공고`,
};

export default function NoticePage() {
  return (
    <>
      <SubPageHero
        title="모집공고"
        backgroundImage="/images/sale/hero.webp"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '분양안내', href: '/sale/calendar' },
          { label: '모집공고', href: '/sale/notice' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* 건물 이미지 */}
        <Image
          src="/images/sale/recruitment-notice.webp"
          alt="모집공고"
          width={1000}
          height={600}
          className="w-full h-auto"
          priority
        />

        {/* 아크로벳 리더 사용 관련 설명 */}
        <div className="mt-12 border-t border-[#e4e4e4] pt-10">
          <h3 className="text-[18px] font-bold text-[#333] mb-6">
            아크로벳 리더 사용 관련 설명
          </h3>

          <div className="flex flex-col md:flex-row gap-6">
            {/* 왼쪽: txt1 */}
            <div className="flex-1">
              <Image
                src="/images/sale/notice-text-1.webp"
                alt="아크로벳 리더 설명"
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <p className="mt-3 text-[12px] text-[#888] leading-relaxed">
                두번째 그림은 Adobe Reader가 정상적으로 설치되어 있을때
                볼 수 있는 아이콘 모양 입니다.
              </p>
            </div>

            {/* 오른쪽: txt2 + 버튼 */}
            <div className="flex-1">
              <Image
                src="/images/sale/notice-text-2.webp"
                alt="Adobe Acrobat Reader 안내"
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <p className="mt-3 text-[12px] text-[#888] leading-relaxed">
                파일이 안보이시는 분들은 아크로벳 리더 프로그램을 설치하시기 바랍니다.
              </p>

              {/* 모집공고 보기 버튼 */}
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="https://incheon.forena.co.kr/data/gongo01.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 bg-[#8b634b] text-white text-[14px] font-medium hover:bg-[#7a5540] transition-colors"
                >
                  모집공고(축약) 보기
                  <span className="text-[18px]">&rarr;</span>
                </a>
                <a
                  href="https://incheon.forena.co.kr/data/gongo02.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 bg-[#8b634b] text-white text-[14px] font-medium hover:bg-[#7a5540] transition-colors"
                >
                  모집공고(전문) 보기
                  <span className="text-[18px]">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
