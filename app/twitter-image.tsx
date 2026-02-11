import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/seo'

export const alt = `${SITE_NAME} - HR & Talent Acquisition`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
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
          background: '#000000',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: -4,
            color: '#ffffff',
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: '#a0a0a0',
            marginTop: 16,
          }}
        >
          HR & Talent Acquisition
        </div>
      </div>
    ),
    size
  )
}
