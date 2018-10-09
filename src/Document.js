import React from 'react'

const Document = ({ Html, Head, Body, children, routeInfo, siteData }) => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />

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
        <link
          href="/favicons/favicon-96x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}

export default Document
