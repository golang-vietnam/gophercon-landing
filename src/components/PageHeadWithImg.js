import React from 'react'
import { Location } from '@reach/router'
import { siteRoot } from '@/config'
import PageHead, { defaultKeywords } from '@/components/PageHead'

const PageHeadWithImg = ({
  children,
  title,
  description,
  imgPath = '/thumbnail-1.jpg',
  appendKeywords = [],
}) => {
  return (
    <Location>
      {({ location }) => {
        const currentUrl = siteRoot.replace(/\/$/, '') + location.pathname
        const thumbnailPath = `${siteRoot}${imgPath}`
        return (
          <PageHead
            title={title}
            description={description}
            keywords={[defaultKeywords, ...appendKeywords].join(',')}
            url={currentUrl}
          >
            <meta property="ia:markup_url" content={currentUrl} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={thumbnailPath} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dwarvesf" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:image" content={thumbnailPath} />

            {children}
          </PageHead>
        )
      }}
    </Location>
  )
}

export default PageHeadWithImg
