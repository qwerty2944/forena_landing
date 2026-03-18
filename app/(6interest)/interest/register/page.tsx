'use client';

import { useState } from 'react';

const PRIVACY_TEXT = `'상인천초교주변구역재개발조합'(이하 '회사')은 고객님의 개인정보를 중요시하며, "개인정보보호법" 및 "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법령을 준수하고 있습니다. '회사'는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. '회사'는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

1. 개인정보의 수집 및 이용목적
회사는 원활한 업무를 위하여 아래와 같이 개인정보를 수집합니다. 고객이 제공한 모든 정보는 명시된 목적 외 용도로 사용되지 않습니다.

수집 항목 및 방법
 - 필수항목 : 성명, 핸드폰번호, 주소, 관심평형, 접속로그, 접속IP
 - 수집방법 : 홈페이지를 통한 관심고객등록

2. 개인정보의 보유 및 이용기간
 - 보유기간 : 분양 완료 시까지 (이후 즉시 파기)
 - 전자 파일 정보: 재생 불가능한 기술 방법 사용

3. 이용자의 권리와 그 행사방법
이용자는 수집 항목에 대하여 언제든 동의를 철회할 수 있으며, 철회 시에는 포레나더샵 인천시청역과 관련된 안내 혹은 각종 이벤트 시 서비스 제공이 제한될 수 있습니다.

 - 철회절차 : 고객이 개인정보관리책임부서에 서면 연락시 지체없이 조치
 - 담당부서 : 마케팅팀

4. 개인정보 수집 동의 거부권
 - 모든 고객은 동의를 거부할 수 있으며, 동의를 거부할 경우 관심고객으로 등록이 불가합니다.`;

const CONSIGNMENT_DATA = [
  { target: '(주)한화 건설부문', task: '분양관리', info: '이름, 핸드폰번호, 분양정보, 분양계약 등' },
  { target: '(주)포애드원', task: '홈페이지 제작', info: '이름, 핸드폰번호, 주소, 관심평형, 접속 IP, 접속로그' },
  { target: '(주)포애드원', task: '홈페이지 유지관리', info: '이름, 핸드폰번호, 주소, 관심평형, 접속 IP, 접속로그' },
  { target: '(주)씨엘케이', task: '분양마케팅업무대행', info: '이름, 핸드폰번호, 주소, 관심평형' },
];

const SIDO = ['시/도 선택', '서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도'];

export default function InterestRegisterPage() {
  const [privacyOpen, setPrivacyOpen] = useState(true);
  const [consignOpen, setConsignOpen] = useState(true);
  const [allAgree, setAllAgree] = useState(false);
  const [agree1, setAgree1] = useState<'yes' | 'no'>('no');
  const [agree2, setAgree2] = useState<'yes' | 'no'>('no');
  const [submitted, setSubmitted] = useState(false);

  const handleAllAgree = (checked: boolean) => {
    setAllAgree(checked);
    if (checked) {
      setAgree1('yes');
      setAgree2('yes');
    } else {
      setAgree1('no');
      setAgree2('no');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agree1 !== 'yes' || agree2 !== 'yes') {
      alert('필수 항목에 동의해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#333] mb-4">관심고객 등록이 완료되었습니다.</p>
          <p className="text-[14px] text-[#888] mb-8">감사합니다.</p>
          <button
            onClick={() => window.close()}
            className="px-8 py-3 bg-[#1a3a6b] text-white text-[14px] font-medium hover:bg-[#15305a] transition-colors"
          >
            창 닫기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#1a3a6b] py-[25px] text-center">
        <h1 className="text-[22px] md:text-[26px] font-bold text-white tracking-[-0.5px]">
          포레나더샵 인천시청역 관심고객등록
        </h1>
      </div>

      <div className="max-w-[860px] mx-auto px-[20px] py-[30px]">
        {/* 전체동의 */}
        <div className="bg-[#f5f5f5] px-5 py-3.5 mb-4">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={allAgree}
              onChange={(e) => handleAllAgree(e.target.checked)}
              className="w-[18px] h-[18px] accent-[#1a3a6b]"
            />
            <span className="text-[14px] text-[#1a3a6b] font-medium">전체동의</span>
          </label>
        </div>

        {/* 개인정보 수집 및 이용 동의 */}
        <div className="border border-[#ddd] mb-4">
          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors"
          >
            <span className="text-[14px] font-medium text-[#333]">개인정보 수집 및 이용 동의</span>
            <svg className={`w-4 h-4 text-[#888] transition-transform ${privacyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {privacyOpen && (
            <div className="px-5 py-4 max-h-[250px] overflow-y-auto text-[12px] text-[#555] leading-[1.8] whitespace-pre-line border-t border-[#eee]">
              {PRIVACY_TEXT}
            </div>
          )}
        </div>

        {/* 동의 라디오 1 */}
        <div className="flex items-start justify-between px-2 py-3 border-b border-[#eee] mb-1">
          <div>
            <p className="text-[13px] text-[#555]">필수 항목 수집 및 이용에 대하여 동의하십니까?</p>
            <p className="text-[12px] text-[#999]">(* 미동의 시 더 이상 관심고객등록을 진행하실 수 없습니다.)</p>
          </div>
          <div className="flex items-center gap-4 shrink-0 ml-4">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="radio" name="agree1" checked={agree1 === 'yes'} onChange={() => setAgree1('yes')} className="w-[16px] h-[16px] accent-[#1a3a6b]" />
              <span className="text-[13px] text-[#555]">동의함</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="radio" name="agree1" checked={agree1 === 'no'} onChange={() => setAgree1('no')} className="w-[16px] h-[16px] accent-[#333]" />
              <span className="text-[13px] text-[#555]">미동의</span>
            </label>
          </div>
        </div>

        {/* 동의 라디오 2 */}
        <div className="flex items-start justify-between px-2 py-3 border-b border-[#eee] mb-4">
          <div>
            <p className="text-[13px] text-[#555]">필수 항목의 마케팅 목적의 활용에 대하여 동의하십니까?</p>
            <p className="text-[12px] text-[#999]">(* 미동의 시 더 이상 관심고객등록을 진행하실 수 없습니다.)</p>
          </div>
          <div className="flex items-center gap-4 shrink-0 ml-4">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="radio" name="agree2" checked={agree2 === 'yes'} onChange={() => setAgree2('yes')} className="w-[16px] h-[16px] accent-[#1a3a6b]" />
              <span className="text-[13px] text-[#555]">동의함</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="radio" name="agree2" checked={agree2 === 'no'} onChange={() => setAgree2('no')} className="w-[16px] h-[16px] accent-[#333]" />
              <span className="text-[13px] text-[#555]">미동의</span>
            </label>
          </div>
        </div>

        {/* 개인정보 취급위탁 고지 */}
        <div className="border border-[#ddd] mb-6">
          <button
            onClick={() => setConsignOpen(!consignOpen)}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors"
          >
            <span className="text-[14px] font-medium text-[#333]">개인정보 취급위탁 고지</span>
            <svg className={`w-4 h-4 text-[#888] transition-transform ${consignOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {consignOpen && (
            <div className="px-5 py-4 border-t border-[#eee]">
              <p className="text-[13px] text-[#333] font-medium mb-3">회사는 원활한 업무 진행 및 서비스 이행을 위해 아래와 같이 외부 전문 업체에 위탁하여 운영하고 있습니다.</p>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-[#ddd] px-3 py-2 text-left font-medium text-[#333]">위탁 대상자</th>
                    <th className="border border-[#ddd] px-3 py-2 text-left font-medium text-[#333]">위탁업무내용</th>
                    <th className="border border-[#ddd] px-3 py-2 text-left font-medium text-[#333]">위탁하는 개인정보 항목</th>
                  </tr>
                </thead>
                <tbody>
                  {CONSIGNMENT_DATA.map((row, i) => (
                    <tr key={i}>
                      <td className="border border-[#ddd] px-3 py-2 text-[#555]">{row.target}</td>
                      <td className="border border-[#ddd] px-3 py-2 text-[#555]">{row.task}</td>
                      <td className="border border-[#ddd] px-3 py-2 text-[#555]">{row.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 text-[12px] text-[#333] font-medium leading-[1.8]">
                <p>※만14세 이상인 고객님에 한하여 관심고객 등록이 가능합니다.</p>
                <p>※관심고객 등록을 하시는 경우 회사는 고객님이 만14세 이상인 것으로 간주하며, 만약 이와 사실이 다른 경우 회사는 고객님의 관심고객 등록을 삭제할 수 있습니다.</p>
              </div>
            </div>
          )}
        </div>

        {/* 안내문 */}
        <div className="text-[12px] text-[#999] leading-[1.8] mb-6">
          <p>※ 만14세 이상인 고객님에 한하여 관심고객 등록이 가능합니다.</p>
          <p>※ 관심고객 등록을 하시는 경우 회사는 고객님이 만14세 이상인 것으로 간주하며, 만약 이와 사실이 다른 경우 회사는 고객님의 관심고객 등록을 삭제할 수 있습니다.</p>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit}>
          <div className="border-t-2 border-[#1a3a6b]">
            {/* 성명 */}
            <div className="flex items-center border-b border-[#eee] py-4">
              <label className="w-[120px] shrink-0 text-[14px] text-[#333] pl-2">
                <span className="text-red-500">*</span> 성명
              </label>
              <input
                type="text"
                required
                className="w-[200px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]"
              />
            </div>

            {/* 핸드폰 번호 */}
            <div className="flex items-center border-b border-[#eee] py-4">
              <label className="w-[120px] shrink-0 text-[14px] text-[#333] pl-2">
                <span className="text-red-500">*</span> 핸드폰 번호
              </label>
              <div className="flex items-center gap-1.5">
                <select className="w-[80px] px-2 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                </select>
                <span className="text-[#999]">-</span>
                <input type="text" required maxLength={4} className="w-[90px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]" />
                <span className="text-[#999]">-</span>
                <input type="text" required maxLength={4} className="w-[90px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]" />
              </div>
            </div>

            {/* 주소 */}
            <div className="flex items-center border-b border-[#eee] py-4">
              <label className="w-[120px] shrink-0 text-[14px] text-[#333] pl-2">
                <span className="text-red-500">*</span> 주소
              </label>
              <div className="flex items-center gap-2">
                <select required className="px-2 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none min-w-[130px]">
                  {SIDO.map((s) => (
                    <option key={s} value={s === '시/도 선택' ? '' : s}>{s}</option>
                  ))}
                </select>
                <select className="px-2 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none min-w-[130px]">
                  <option value="">시/구/군 선택</option>
                </select>
                <select className="px-2 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none min-w-[130px]">
                  <option value="">동/읍/면 선택</option>
                </select>
              </div>
            </div>

            {/* 주택형 */}
            <div className="flex items-center border-b border-[#eee] py-4">
              <label className="w-[120px] shrink-0 text-[14px] text-[#333] pl-2">
                <span className="text-red-500">*</span> 주택형
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="unitType" value="49A" required className="w-[16px] h-[16px] accent-[#333]" />
                  <span className="text-[14px] text-[#555]">49㎡A</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="unitType" value="59A" className="w-[16px] h-[16px] accent-[#333]" />
                  <span className="text-[14px] text-[#555]">59㎡A</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="unitType" value="59B" className="w-[16px] h-[16px] accent-[#333]" />
                  <span className="text-[14px] text-[#555]">59㎡B</span>
                </label>
              </div>
            </div>
          </div>

          <p className="text-[12px] text-red-500 mt-4 mb-6">
            <span className="text-red-500">*</span> 는 필수입력사항 입니다.
          </p>

          {/* 버튼 */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              type="submit"
              className="w-[140px] py-3.5 bg-[#1a3a6b] text-white text-[15px] font-medium hover:bg-[#15305a] transition-colors"
            >
              등록
            </button>
            <button
              type="button"
              onClick={() => window.close()}
              className="w-[140px] py-3.5 border border-[#ccc] text-[#333] text-[15px] font-medium bg-white hover:bg-[#f5f5f5] transition-colors"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
