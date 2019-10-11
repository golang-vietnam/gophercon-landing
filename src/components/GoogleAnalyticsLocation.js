import { Location } from '@reach/router'
import React from 'react'

const GoogleAnalyticsLocation = ({ children }) => (
  <Location>
    {({ location }) => {
      if (typeof history !== 'undefined' && typeof gtag === 'function') {
        gtag('config', window.GTAG_ID, {
          page_location: location.href,
          page_path: location.pathname,
          page_title: document.title,
        })
      }

      return children
    }}
  </Location>
)

export default GoogleAnalyticsLocation
