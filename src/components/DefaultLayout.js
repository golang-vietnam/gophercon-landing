// External
import React from 'react'

// Internal
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
)

export default DefaultLayout
