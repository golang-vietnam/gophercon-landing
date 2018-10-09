import React from 'react'
import { siteRoot } from './config'

const siteName = 'WeBuild'
const defaultTitle = 'WeBuild'
const defaultDesc = 'WeBuild Website'
const keywords = ['your keywords', 'keywords'].join(',')

const Document = ({ Html, Head, Body, children, routeInfo, siteData }) => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDesc} />
        <meta name="keywords" content={keywords} />
        {/* SEO markups */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteRoot} />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDesc} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="ia:markup_url" content={siteRoot} />

        <link href="/favicons/favicon.ico" rel="icon" type="image/x-icon" />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}

export default Document
