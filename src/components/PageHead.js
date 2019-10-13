import React from 'react'
import { Head } from 'react-static'
import { siteRoot } from '@/config'

const siteName = 'GopherCon Vietnam 2019'
const defaultTitle = 'GopherCon Vietnam 2019'
const defaultDesc = `GopherCon Vietnam 2019 is the second Golang conference held in Vietnam. Join us and have fun. We believe this GopherCon will help to build a better connection between Vietnam gophers and bring values to the Tech community.`
export const defaultKeywords = [
  'gopher',
  'gophercon',
  'golang',
  'conference',
  'commutity',
  'connect',
  'developer',
  'vietnam',
].join(',')

const PageHead = ({
  children,
  title = defaultTitle,
  description = defaultDesc,
  keywords = defaultKeywords,
  url = siteRoot,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width,initial-scale=1" name="viewport" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* SEO markups */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="ia:markup_url" content={url} />

      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap"
        rel="stylesheet"
      />

      {children}
    </Head>
  )
}

export default PageHead
