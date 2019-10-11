import { Location } from '@reach/router'
import React from 'react'

let lastNavigationFromBrowserUI = true

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', event => {
    lastNavigationFromBrowserUI = true
  })
}

const AutoScrollToTop = ({ children }) => (
  <Location>
    {() => {
      if (typeof history !== 'undefined') {
        // Ininitial rendering and back/forward navigation uses browsers
        // native scroll history mechanism which tracks scroll position
        // for each history entry automatically
        if (lastNavigationFromBrowserUI) {
          lastNavigationFromBrowserUI = false
        } else {
          // When adding new entries by navigating through clicking on actual
          // links in the page, we always scroll up to work around
          // the scrolling applied by automatic focussing as done
          // by reach routers accessibility tweaks.
          // TODO: don't scroll top if url have a hash?
          window.requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          })
        }
      }

      return children
    }}
  </Location>
)

export default AutoScrollToTop
