import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '포레나더샵 인천시청역';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a1628 0%, #162a4a 40%, #1a3a5c 70%, #0f2035 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative diagonal lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            opacity: 0.08,
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 2,
            background: '#c9956b',
            display: 'flex',
          }}
        />

        {/* GTX-B text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            marginTop: 40,
          }}
        >
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: '#c9956b',
              fontStyle: 'italic',
              letterSpacing: '-1px',
            }}
          >
            GTX-B
          </span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: '#d4d4d4',
              marginLeft: 8,
            }}
          >
            로 시작되는
          </span>
        </div>

        {/* 프리미엄 나비효과 */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 300,
            color: '#d4d4d4',
            marginTop: 8,
            letterSpacing: '6px',
            display: 'flex',
          }}
        >
          프리미엄 나비효과
        </div>

        {/* Divider */}
        <div
          style={{
            width: 520,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(201,149,107,0.5), transparent)',
            marginTop: 40,
            marginBottom: 40,
            display: 'flex',
          }}
        />

        {/* 포레나더샵 인천시청역 */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '8px',
            display: 'flex',
          }}
        >
          포레나더샵 인천시청역
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 2,
            background: '#c9956b',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
