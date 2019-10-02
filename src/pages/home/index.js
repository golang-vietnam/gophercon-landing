import React from 'react'
import Schedule from '@/components/Schedule'
import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'
import Contact from '@/components/Contact'
import AutoHeader from '@/components/AutoHeader'
import HeroSection from './HeroSection'
import Footer from './Footer'

const Home = () => {
  const aboutSectionRef = React.useRef(null)

  return (
    <div>
      <HeroSection id="hero" />
      <AutoHeader />
      <Schedule id="home" />
      <Sponsors id="sponsors" />
      <Speakers id="speakers" />
      <Contact id="schedule" />
      <Footer />
    </div>
  )
}

export default Home
