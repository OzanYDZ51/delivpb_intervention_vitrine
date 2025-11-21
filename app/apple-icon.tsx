import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: '#00B4D8',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Symbole Up stylisé */}
          <div
            style={{
              display: 'flex',
              fontSize: 100,
              fontWeight: 'bold',
              letterSpacing: '-0.05em',
            }}
          >
            up
          </div>
          {/* Cadre incliné stylisé */}
          <div
            style={{
              position: 'absolute',
              width: '140px',
              height: '140px',
              border: '6px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '18px',
              transform: 'rotate(8deg)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
