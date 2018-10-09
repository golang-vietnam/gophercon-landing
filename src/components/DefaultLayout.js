// External
import React from 'react'

// Internal
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => (
  <div className="font-sans font-normal leading-normal">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout
