// External
import React from 'react'
import { Head } from 'react-static'

// Internal
import { siteRoot } from '@/config'

const PageHead = ({
  title = 'Gopher Conference',
  desc = 'Gopher Conference is ...',
  path = '',
  ogImagePath = 'gopher-con-og.png',
  twitterImagePath = 'gopher-con-twitter-card.png',
  keywords = [
    'Gopher',
    'conference',
    'commutity',
    'connect',
    'developer',
    'Vietnam',
  ],
  fbAppId = '',
  fbPages = '',
}) => (
  <Head>
    <title>{`${title}`}</title>
    <meta name="description" content={desc} />
    <meta name="keywords" content={keywords} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteRoot + `${path}`} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content="WeBuild" />

    <meta property="og:image" content={`${siteRoot}/images/${ogImagePath}`} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="680" />
    <meta property="og:image:alt" content={title} />

    <meta property="fb:app_id" content={fbAppId} />
    <meta property="fb:pages" content={fbPages} />
    <meta property="ia:markup_url" content={siteRoot} />

    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:image"
      content={`${siteRoot}/images/${twitterImagePath}`}
    />
    <meta name="twitter:url" content={siteRoot + `${path}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={title} />
  </Head>
)

export default PageHead
