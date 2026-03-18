export interface SubMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  children: SubMenuItem[];
}

export const navigation: MenuItem[] = [
  {
    label: '사업안내',
    href: '/business/planning',
    children: [
      { label: '사업개요', href: '/business/planning' },
      { label: '브랜드 소개', href: '/business/brand' },
      { label: '입지환경', href: '/business/location' },
      { label: '프리미엄', href: '/business/premium' },
      { label: '찾아오시는길', href: '/business/contact' },
    ],
  },
  {
    label: '단지안내',
    href: '/complex/info',
    children: [
      { label: '단지정보', href: '/complex/info' },
      { label: '단지홍보영상', href: '/complex/pr' },
      { label: '커뮤니티', href: '/complex/community' },
      { label: '시스템', href: '/complex/system' },
      { label: '이동통신 협의 결과서', href: '/complex/mobile' },
    ],
  },
  {
    label: '세대안내',
    href: '/unit/floor-plan',
    children: [
      { label: '평면정보', href: '/unit/floor-plan' },
      { label: 'E모델하우스', href: '/unit/vr' },
    ],
  },
  {
    label: '분양안내',
    href: '/sale/calendar',
    children: [
      { label: '분양일정', href: '/sale/calendar' },
      { label: '공급안내', href: 'https://incheon.forena.co.kr/data/gg.pdf', external: true },
      { label: '모집공고', href: '/sale/notice' },
    ],
  },
  {
    label: '청약안내',
    href: '/subscription/checkpoint',
    children: [
      { label: '청약체크포인트', href: '/subscription/checkpoint' },
      { label: '청약안내문', href: '/subscription/guide' },
      { label: '서류접수 안내문', href: '/subscription/paper' },
      { label: '구비서류안내', href: '/subscription/documents' },
      { label: '계약안내문', href: '/subscription/contract' },
      { label: '자금조달계획서', href: '/subscription/financing' },
      { label: '인지세안내문', href: '/subscription/tax' },
      { label: '예비입주자 계약안내문', href: '/subscription/preliminary' },
    ],
  },
  {
    label: '홍보센터',
    href: '/media/news',
    children: [
      { label: '보도자료', href: '/media/news' },
      { label: '홍보영상', href: '/media/videos' },
    ],
  },
  {
    label: '관심고객등록',
    href: '/interest/register',
    external: true,
    children: [
      { label: '관심고객등록', href: '/interest/register', external: true },
    ],
  },
  {
    label: '방문예약',
    href: '/visit/contract',
    children: [
      { label: '정당 서류접수 방문예약', href: '/visit/contract' },
      { label: '예비 서류접수 방문예약', href: '/visit/preliminary' },
      { label: '정당계약 방문예약', href: '/visit/reservation' },
    ],
  },
];
