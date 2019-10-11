import React, { useState, useEffect } from 'react'
import Schedule from '@/components/Schedule'
import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'
import Contact from '@/components/Contact'
import AutoHeader from '@/components/AutoHeader'
import HeroSection from './HeroSection'
import Footer from './Footer'
import FloatingButton from '@/components/FloatingButton'
import Join from '@/components/Join'
import useScript from './useScript'

const Home = () => {
  const aboutSectionRef = React.useRef(null)

  return (
    <div>
      <HeroSection />
      <AutoHeader />
      <Schedule />
      <Join />
      <Speakers />
      <Sponsors />
      <Contact />
      <Footer />
      <FloatingButton
        href="https://ticketbox.vn/event/gophercon-vietnam-2019-77299"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  )
}

export default Home
