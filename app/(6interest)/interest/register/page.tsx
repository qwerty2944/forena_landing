'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

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

const REGCODE_API = 'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes';

interface RegCode {
  code: string;
  name: string;
}

async function fetchRegcodes(pattern: string, ignoreZero = false): Promise<RegCode[]> {
  const params = new URLSearchParams({ regcode_pattern: pattern });
  if (ignoreZero) params.set('is_ignore_zero', 'true');
  const res = await fetch(`${REGCODE_API}?${params}`);
  const data = await res.json();
  return data.regcodes ?? [];
}

export default function InterestRegisterPage() {
  const [privacyOpen, setPrivacyOpen] = useState(true);
  const [consignOpen, setConsignOpen] = useState(true);
  const [allAgree, setAllAgree] = useState(false);
  const [agree1, setAgree1] = useState<'yes' | 'no'>('no');
  const [agree2, setAgree2] = useState<'yes' | 'no'>('no');
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phonePre, setPhonePre] = useState('010');
  const [phoneMid, setPhoneMid] = useState('');
  const [phoneLast, setPhoneLast] = useState('');
  const [unitType, setUnitType] = useState('');

  // 주소 드롭다운
  const [sidoList, setSidoList] = useState<RegCode[]>([]);
  const [sigunguList, setSigunguList] = useState<RegCode[]>([]);
  const [dongList, setDongList] = useState<RegCode[]>([]);

  const [sidoCode, setSidoCode] = useState('');
  const [sigunguCode, setSigunguCode] = useState('');
  const [dongCode, setDongCode] = useState('');

  const [sidoName, setSidoName] = useState('');
  const [sigunguName, setSigunguName] = useState('');
  const [dongName, setDongName] = useState('');

  // 시도 목록 로드
  useEffect(() => {
    fetchRegcodes('*00000000').then(setSidoList);
  }, []);

  // 시군구 목록 로드
  const handleSidoChange = useCallback((code: string, name: string) => {
    setSidoCode(code);
    setSidoName(name);
    setSigunguCode('');
    setSigunguName('');
    setDongCode('');
    setDongName('');
    setSigunguList([]);
    setDongList([]);
    if (code) {
      const prefix = code.substring(0, 2);
      fetchRegcodes(`${prefix}*00000`, true).then(setSigunguList);
    }
  }, []);

  // 읍면동 목록 로드
  const handleSigunguChange = useCallback((code: string, name: string) => {
    setSigunguCode(code);
    setSigunguName(name);
    setDongCode('');
    setDongName('');
    setDongList([]);
    if (code) {
      const prefix = code.substring(0, 5);
      fetchRegcodes(`${prefix}*`, true).then(setDongList);
    }
  }, []);

  const handleDongChange = useCallback((code: string, name: string) => {
    setDongCode(code);
    setDongName(name);
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (agree1 !== 'yes' || agree2 !== 'yes') {
      alert('필수 항목 수집 및 이용에 대하여 동의해주세요.');
      return;
    }

    setLoading(true);

    const phone = `${phonePre}-${phoneMid}-${phoneLast}`;

    const { error } = await supabase.from('interested_customers').insert({
      name,
      phone,
      sido: sidoName,
      sigungu: sigunguName || null,
      dong: dongName || null,
      unit_type: unitType,
    });

    setLoading(false);

    if (error) {
      alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      return;
    }

    alert('등록하였습니다.');
    window.close();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between px-2 py-3 border-b border-[#eee] mb-1 gap-2">
          <div>
            <p className="text-[13px] text-[#555]">필수 항목 수집 및 이용에 대하여 동의하십니까?</p>
            <p className="text-[12px] text-[#999]">(* 미동의 시 더 이상 관심고객등록을 진행하실 수 없습니다.)</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between px-2 py-3 border-b border-[#eee] mb-4 gap-2">
          <div>
            <p className="text-[13px] text-[#555]">필수 항목의 마케팅 목적의 활용에 대하여 동의하십니까?</p>
            <p className="text-[12px] text-[#999]">(* 미동의 시 더 이상 관심고객등록을 진행하실 수 없습니다.)</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
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
              <div className="overflow-x-auto -mx-5 px-5">
                <table className="w-full border-collapse text-[12px] min-w-[480px]">
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
              </div>
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
            <div className="flex border-b border-[#ddd]">
              <label className="w-[120px] shrink-0 flex items-center text-[14px] text-[#333] font-medium pl-4 bg-[#f5f5f5] border-r border-[#ddd]">
                <span className="text-red-500 mr-0.5">*</span>성명
              </label>
              <div className="flex-1 px-4 py-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-[300px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]"
                />
              </div>
            </div>

            {/* 핸드폰 번호 */}
            <div className="flex border-b border-[#ddd]">
              <label className="w-[120px] shrink-0 flex items-center text-[14px] text-[#333] font-medium pl-4 bg-[#f5f5f5] border-r border-[#ddd]">
                <span className="text-red-500 mr-0.5">*</span>핸드폰 번호
              </label>
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <select
                    value={phonePre}
                    onChange={(e) => setPhonePre(e.target.value)}
                    className="w-[72px] px-2 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none"
                  >
                    <option>010</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                  </select>
                  <span className="text-[#999]">-</span>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={phoneMid}
                    onChange={(e) => setPhoneMid(e.target.value.replace(/\D/g, ''))}
                    className="w-[100px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]"
                  />
                  <span className="text-[#999]">-</span>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={phoneLast}
                    onChange={(e) => setPhoneLast(e.target.value.replace(/\D/g, ''))}
                    className="w-[100px] px-3 py-2 border border-[#ccc] text-[14px] focus:outline-none focus:border-[#333]"
                  />
                </div>
              </div>
            </div>

            {/* 주소 */}
            <div className="flex border-b border-[#ddd]">
              <label className="w-[120px] shrink-0 flex items-center text-[14px] text-[#333] font-medium pl-4 bg-[#f5f5f5] border-r border-[#ddd]">
                <span className="text-red-500 mr-0.5">*</span>주소
              </label>
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center gap-2">
                  <select
                    required
                    value={sidoCode}
                    onChange={(e) => {
                      const selected = sidoList.find((s) => s.code === e.target.value);
                      handleSidoChange(e.target.value, selected?.name ?? '');
                    }}
                    className="flex-1 min-w-0 px-3 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none"
                  >
                    <option value="">시/도 선택</option>
                    {sidoList.map((s) => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>

                  <select
                    value={sigunguCode}
                    onChange={(e) => {
                      const selected = sigunguList.find((s) => s.code === e.target.value);
                      handleSigunguChange(e.target.value, selected?.name ?? '');
                    }}
                    className="flex-1 min-w-0 px-3 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none"
                  >
                    <option value="">시/구/군 선택</option>
                    {sigunguList.map((s) => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>

                  <select
                    value={dongCode}
                    onChange={(e) => {
                      const selected = dongList.find((s) => s.code === e.target.value);
                      handleDongChange(e.target.value, selected?.name ?? '');
                    }}
                    className="flex-1 min-w-0 px-3 py-2 border border-[#ccc] text-[14px] bg-white focus:outline-none"
                  >
                    <option value="">동/읍/면 선택</option>
                    {dongList.map((s) => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 주택형 */}
            <div className="flex border-b border-[#ddd]">
              <label className="w-[120px] shrink-0 flex items-center text-[14px] text-[#333] font-medium pl-4 bg-[#f5f5f5] border-r border-[#ddd]">
                <span className="text-red-500 mr-0.5">*</span>주택형
              </label>
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center gap-5">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="unitType" value="49A" required checked={unitType === '49A'} onChange={(e) => setUnitType(e.target.value)} className="w-[16px] h-[16px] accent-[#333]" />
                    <span className="text-[14px] text-[#555]">49㎡A</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="unitType" value="59A" checked={unitType === '59A'} onChange={(e) => setUnitType(e.target.value)} className="w-[16px] h-[16px] accent-[#333]" />
                    <span className="text-[14px] text-[#555]">59㎡A</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="unitType" value="59B" checked={unitType === '59B'} onChange={(e) => setUnitType(e.target.value)} className="w-[16px] h-[16px] accent-[#333]" />
                    <span className="text-[14px] text-[#555]">59㎡B</span>
                  </label>
                </div>
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
              disabled={loading}
              className="w-[140px] py-3.5 bg-[#1a3a6b] text-white text-[15px] font-medium hover:bg-[#15305a] transition-colors disabled:opacity-50"
            >
              {loading ? '등록 중...' : '등록'}
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
