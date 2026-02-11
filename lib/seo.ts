export const SITE_NAME = 'Zoey'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zoey.se').replace(/\/$/, '')

export const DEFAULT_DESCRIPTION =
  'När människor växer, växer organisationer. Zoey hjälper er med rekrytering och interim HR-konsulter.'

export const DEFAULT_KEYWORDS = [
  'HR',
  'Talent Acquisition',
  'rekrytering',
  'konsulter',
  'interim HR',
  'HR Business Partner',
  'TA Specialist',
  'HR Generalist',
  'Sverige',
  'Stockholm',
  'headhunting',
  'bemanning',
]

export const metadataBase = new URL(SITE_URL)

export const OG_IMAGE_PATH = '/opengraph-image'
export const TWITTER_IMAGE_PATH = '/twitter-image'

export const structuredData = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    sameAs: [
      'https://www.instagram.com/zoey.se',
      'https://www.linkedin.com/company/zoey',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  },
])
