import React, { useState, useEffect } from 'react'
import Schedule from '@/components/Schedule'
import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'
import Contact from '@/components/Contact'
import HeroSection from './HeroSection'
import Footer from './Footer'
import FloatingButton from '@/components/FloatingButton'
import Join from '@/components/Join'
import debounce from '@/utils/debounce'
import getCurrentSection from './getCurrentSection'

function Home() {
  let [active, setActive] = useState('home')

  useEffect(() => {
    let top, currentSection
    if (typeof document !== 'undefined') {
      debounce(
        document.addEventListener('scroll', () => {
          if (typeof window !== 'undefined') {
            top = window.pageYOffset
          }
          currentSection = getCurrentSection(top)
          currentSection && setActive(currentSection)
          history.replaceState(null, null, `#${currentSection}`)
        }),
        300
      )
    }
  }, [])
  return (
    <div className="relative">
      <HeroSection active={active} id="home" />
      <Schedule id="schedule" />
      <Join id="join" />
      <Speakers id="speakers" />
      <Sponsors id="sponsors" />
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
