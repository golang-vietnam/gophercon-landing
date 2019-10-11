import React, { useEffect } from 'react'
import { Head } from 'react-static'

const Gtag = ({ id }) => {
  useEffect(() => {
    if (!id) return

    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', id)
  }, [])

  if (!id) return null

  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    </Head>
  )
}

export default Gtag
