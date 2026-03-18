'use client';

import { useState } from 'react';
import SubPageHero from '@/components/sections/SubPageHero';

const PAGE_1 = [
  {
    id: 1,
    title: '올해 첫 브랜드 대단지 \'포레나더샵 인천시청역\' 분양...더블 역세권 초품아 \'눈길\'',
    excerpt: '(한화 건설부문과 포스코이앤씨는 지난달 6일 인천 남동구 구월동 1140-1번지에 \'포레나더샵 인천시청역\' 견본주택을 개관하고 본격적인 분양에 돌입했다고 3일...',
    date: '2026-03-03',
    link: 'https://www.fnnews.com/news/202603031336060194',
  },
  {
    id: 2,
    title: '수도권 전월세 폭앙 \'실종\'…매수세, 신규 분양단지로 쏠린다',
    excerpt: '수도권 임대차 시장에 \'급급 가을\' 경보가 켜졌다. 대출 규제와 더불어 입주대란 및 다주택자를 겨냥한 정부의 규제 영향이 지속되면서 전월세를 불렀이 급격히 줄어드...',
    date: '2026-02-21',
    link: 'https://www.smarttoday.co.kr/ko-kr/articles/103509',
  },
  {
    id: 3,
    title: '"현 제도는 부족하다"…지난해 청약시장 흥행 키워드 \'멀티 역세권\'',
    excerpt: '지하철 노선을 2개 이상 갖춘 \'멀티 역세권\' 단지들이 청약시장과 매매시장에서 모두 인기를 끌고 있다. 생산인구의 축종이 이르는 3040세대의 부동산 시장 점유율이...',
    date: '2026-02-14',
    link: 'https://www.mk.co.kr/news/realestate/11963382',
  },
  {
    id: 4,
    title: '"소형 평형 통했다"…\'포레나더샵 인천시청역\' 생애 최초 5대 1',
    excerpt: '한화 건설부문과 포스코이앤씨가 인천 남동구 간석동 일대에 공급하는 \'포레나더샵 인천시청역\'이 특별공급 청약에서 의미 있는 성적을 거두며 1순위 청약의 기대감을 높...',
    date: '2026-02-10',
    link: 'https://www.smarttoday.co.kr/ko-kr/articles/103102',
  },
  {
    id: 5,
    title: '\'포레나더샵 인천시청역\' 견본주택 6일 개관',
    excerpt: '수도권 1순위 청약 가능·전매 1년 제한인 한화 건설부문과 포스코이앤씨가 함께 공급하는 \'포레나더샵 인천시청역\'이 6일 견본주택을 개관하고 본격 분양에 돌입한...',
    date: '2026-02-05',
    link: 'https://biz.heraldcorp.com/article/10670211?ref=naver',
  },
  {
    id: 6,
    title: '한화·포스코이앤씨, \'포레나더샵 인천시청역\' 6일 견본주택 개관',
    excerpt: '2568가구 규모 대단지 공급 일반분양 735가구 특별공급, 10일 1순위 청약',
    date: '2026-02-05',
    link: 'https://www.asiae.co.kr/article/2026020509161897597',
  },
  {
    id: 7,
    title: '이달 전국 9999가구 일반분양…비수기에도 분양 열기 \'활활\'',
    excerpt: '설 연휴, 동계올림픽 거진 들이 풀리자 비수기로 평가받는 2월에도 건설사들이 서둘러 볼 분양 계획이나선다. 서울 강남을 재건축 물량을 비롯해 지방 주요 지역에서...',
    date: '2026-03-02',
    link: 'https://www.mk.co.kr/news/realestate/11950015',
  },
  {
    id: 8,
    title: '인천지하철 1·2호선 이용…GTX-B 예정',
    excerpt: '한화 건설부문과 포스코이앤씨가 인천 남동구 간석동 311-1번째 건립되는 \'포레나더샵 인천시청역\'을 분양할 예정이다. 사는 상인천초등학교주 우선 간석동 31...',
    date: '2026-02-01',
    link: 'https://www.mk.co.kr/news/realestate/11949494',
  },
  {
    id: 9,
    title: '수도권 아파트 준공 실적 2017년 이후 최저…\'공급 축소 가시화\'',
    excerpt: '지난해 수도권 아파트 준공 실적이 2017년 이후 최저치를 기록하며 매적적 공급이 줄어 우려가 계속되고 있다. 1.15일 국교통부 통계를 확인해...',
    date: '2026-01-15',
    link: 'https://www.viva100.com/article/20260115500338',
  },
  {
    id: 10,
    title: '\'입주산\' \'입족대\' 위한 몸값 서두…1분기 수도권 대단지 1만9천 가구 분양',
    excerpt: '올해 1분기 수도권 분양시장에서 1000가구 이상 대단지가 대거 쏟아진다. 대단지와 소규모 단지 간 가격 격차가 역대 최대 수준으로 벌어진 가운데, 분양을 기다려...',
    date: '2026-01-03',
    link: 'https://www.mk.co.kr/news/realestate/11931359',
  },
  {
    id: 11,
    title: '인천시청역·간석오거리역 \'더블역세권\'…초품아도 갖췄',
    excerpt: '한화 건설부문과 포스코이앤씨와 함께한 남동구 간석동 31-1-1번지 일대에 조성하는 \'포레나더샵 인천시청역\'에 나선 2월 분양을 앞둔다. \'포레나더샵 인천시청역...',
    date: '2025-12-26',
    link: 'https://www.chosun.com/special/special_section/2025/12/26/P4RFH5QAWVCWXCTP4JTZ2YZOMI/',
  },
  {
    id: 12,
    title: '연말·연초 분양시장, 30·40세대 눈길 끄는 \'초품아\' 어디',
    excerpt: '연말·연초 분양시장에서 초등학교를 품은 \'초품아\' 아파트가 핵심 키워드로 떠오르고 있다. 30-40세대의 영향력이 커지면서, 자녀 교육과 통학 안전을 중시하는 주...',
    date: '2025-12-16',
    link: 'https://www.mk.co.kr/news/realestate/11493078',
  },
];

const PAGE_2 = [
  {
    id: 13,
    title: '행정타운 인근 아파트 관심…이천·용인 동시 분양 이어져',
    excerpt: '시청이나 도청, 법원, 세무서, 경찰서 등 공공기관이 밀집된 \'행정타운\' 인근 분양 단지에 관심이 커지고 있다. 행정타운과 가까운 아파트는 생활 편의성이 높고,...',
    date: '2025-12-09',
    link: 'https://www.hankyung.com/article/202512092392i',
  },
  {
    id: 14,
    title: '한화 건설부문, \'반려동물 세정대\'로 2025 굿 디자인 어워드 수상',
    excerpt: '(주)한화(118,900원 ▼4,000 -3.25%) 건설부문이 자체 개발한 \'반려동물 세정대(Pet Washing Station)\'가 산업통상자원부 주최의 \'20 2...',
    date: '2025-11-27',
    link: 'https://www.mt.co.kr/estate/2025/11/27/2025112708355230206',
  },
  {
    id: 15,
    title: '\'포레나더샵 인천시청역\' 12월 분양…어린이공원 품은 \'공룡아\' 단지',
    excerpt: '한화 건설부문, 포스코이앤씨 공동시공 2568가구 중 735가구 일반분양 GTX-B 노선도 예정',
    date: '2025-11-20',
    link: 'https://www.chosun.com/economy/real_estate/2025/11/20/MVRTMZLGMY3DOYJVGE3DOMBWMU/',
  },
  {
    id: 16,
    title: '"저역 대표 상징률"…연말 랜드마크 아파트 공급 봇물',
    excerpt: '불확실한 시장에도, 랜드마크 아파트 시세 상승 이름에 가치 입증 \'포레나더샵 인천시청역\' 등 분양 열풍',
    date: '2025-11-20',
    link: 'https://www.mk.co.kr/news/realestate/11472927',
  },
  {
    id: 17,
    title: '"신축 아파트 품귀 더 심해진다"…수도권 분양 2020년 이후 2번째 \'최저\'',
    excerpt: '올해 수도권 분양 5만3646가구 서울·인천 분양실적나란히 부진 "수요, 공급 불균형에 신축 희소성!"',
    date: '2025-11-13',
    link: 'https://www.mk.co.kr/news/realestate/11466996',
  },
  {
    id: 18,
    title: '입지·개발호재 브랜드 갖춘 랜드마크…\'포레나더샵 인천시청역\' 12월 분양',
    excerpt: '(주)한화 건설부문과 포스코이앤씨는 인천 남동구 간석동 311-1번지 일대에 건립되는 \'포레나더샵 인천시청역\'을 오는 12월 분양할 예정이다. 인천에서 성장 신화를...',
    date: '2025-11-11',
    link: 'https://www.hankyung.com/article/2025111161001',
  },
  {
    id: 19,
    title: '연내 수도권 부동산, 규제 피한 \'역세권\'에 수요 쏠림 전망',
    excerpt: '수도권 부동산 시장이 비규제 지역을 중심으로 재편되며 교통망을 갖춘 역세권 입지가 투자자와 실수요자 모두에게 주목받고 있다는 분석이 나온다. 11월 청약...',
    date: '2025-11-11',
    link: 'https://www.mk.co.kr/news/realestate/11465339',
  },
  {
    id: 20,
    title: '수도권 비규제지역…아파트 분양시장 훈풍',
    excerpt: '\'10.15부동산대책방안\'이 본격적으로 나비내러먼 주택시장이 요동치고 있다. 규제지역에 포함된 서울과 경기 12개 지역은 아파트 가격 상승세가 꺾이는가 하면 규...',
    date: '2025-11-10',
    link: 'https://www.viva100.com/article/20251110500473',
  },
  {
    id: 21,
    title: '인천시청역·간석오거리역 \'더블역세권\'…초품아도 갖췄',
    excerpt: '(주)한화 건설부문은 바로포스코이앤씨와 함께 인천 남동구 간석동 31-1-1번지 일대에 조성하는 \'포레나더샵 인천시청역\'을 오는 11월 분양한다. \'포레나더샵 인천시청...',
    date: '2025-10-30',
    link: 'https://www.chosun.com/special/special_section/2025/10/30/W4QHPCW53NBI7D7FOISGYE2M3I/',
  },
  {
    id: 22,
    title: '얼어붙은 부동산 시장, 그래도 \'이것\' 갖추면 흥행…상승세 이어가는 단지는',
    excerpt: '올 하반기 수도권에서 \'교통 특화\' 아파트가 주목받고 있다. 지하철역이 가까운 역세권과 함께 GTX, 복선전철 등의 교통개발 수혜를 동시에 갖춘 것이 특징이다....',
    date: '2025-10-29',
    link: 'https://www.mk.co.kr/news/realestate/11454251',
  },
  {
    id: 23,
    title: '인천시청역·간석오거리역 \'더블역세권\'에 \'초품아\'까지',
    excerpt: '(주)한화 건설부문은 바로포스코이앤씨와 함께한 남동구 간석동 31-1-1번지 일대에 조성하는 \'포레나더샵 인천시청역\'을 오는 11월 분양한다. \'포레나더샵 인천...',
    date: '2025-10-23',
    link: 'https://www.chosun.com/special/special_section/2025/10/23/XF6HGRBJWZD5DG7D7BYXKJ7BWA/',
  },
  {
    id: 24,
    title: '한화 건설부문, \'포레나더샵 인천시청역\' 11월 분양',
    excerpt: '인천지하철 1·2호선 더블역세권 입지 품은 2568세대 대단지 한화 건설부문은 포스코이앤씨와 인천 남동구 간석동 311-1번지 일대에 건립되는 \'포레나더샵...',
    date: '2025-10-21',
    link: 'https://www.ajunews.com/view/20251021090632515',
  },
];

const PAGES = [PAGE_1, PAGE_2];
const TOTAL_PAGES = 3;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const articles = currentPage <= 2 ? PAGES[currentPage - 1] : [];

  return (
    <>
      <SubPageHero
        title="보도자료"
        backgroundImage="/images/subscription/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '홍보센터', href: '/media/news' },
          { label: '보도자료', href: '/media/news' },
        ]}
      />

      <div className="max-w-[1100px] mx-auto px-[20px] py-[60px]">
        {currentPage < 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => {
              const inner = (
                <>
                  <h3 className="text-[15px] font-bold text-[#333] leading-[1.5] line-clamp-2 min-h-[45px]">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-[#888] leading-[1.7] mt-4 line-clamp-3 min-h-[66px]">
                    {article.excerpt}
                  </p>
                  <time className="block text-[13px] text-[#e67e22] font-medium mt-4">
                    {article.date}
                  </time>
                </>
              );
              return 'link' in article && article.link ? (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#ddd] p-6 cursor-pointer hover:bg-[#f5f5f5] hover:border-[#999] transition-colors block"
                >
                  {inner}
                </a>
              ) : (
                <article
                  key={article.id}
                  className="border border-[#ddd] p-6 cursor-pointer hover:bg-[#f5f5f5] hover:border-[#999] transition-colors"
                >
                  {inner}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[15px] text-[#888]">게시물이 없습니다.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-0.5">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-[30px] h-[30px] flex items-center justify-center border border-[#ddd] text-[#888] hover:border-[#333] hover:text-[#333] transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[30px] h-[30px] flex items-center justify-center text-[13px] font-bold transition-colors ${
                  currentPage === page
                    ? 'bg-[#555] text-white'
                    : 'border border-[#ddd] text-[#888] hover:border-[#333] hover:text-[#333]'
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < TOTAL_PAGES && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-[30px] h-[30px] flex items-center justify-center border border-[#ddd] text-[#888] hover:border-[#333] hover:text-[#333] transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
