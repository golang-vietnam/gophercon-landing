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

const Home = () => {
  const aboutSectionRef = React.useRef(null)

  useEffect(() => {
    // useScript(scrollScript)
    // $sections incleudes all of the container divs that relate to menu items.
    let sections = document.getElementsByClassName('page-section')

    // The user scrolls
    window.addEventListener('scroll', function() {
      // currentScroll is the number of pixels the window has been scrolled
      let currentScroll = window.scrollY
      // console.log(currentScroll)

      // $currentSection is somewhere to place the section we must be looking at
      let currentSection

      // We check the position of each of the divs compared to the windows scroll positon
      Array.from(sections).forEach((s, key) => {
        // divPosition is the position down the page in px of the current section we are testing
        var divPosition = s.offsetTop
        // console.log(s)
        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -1 is so that it includes the div 1px before the div leave the top of the window.
        // console.log('divPosition ', divPosition)
        if (divPosition < currentScroll + 1) {
          // We have either read the section or are currently reading the section so we'll call it our current section
          currentSection = s

          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }
      })
      // This is the bit of code that uses the currentSection as its source of ID
      let id = currentSection.id
      Array.from(document.getElementsByTagName('a')).forEach(a => {
        a.classList.remove('active')
      })
      let href = `"` + `#${id}` + `"`
      if (document && document.querySelector(`a[href = ${href}]`)) {
        document.querySelector(`a[href = ${href}]`).classList.add('text-blue')
        console.log(document.querySelector(`a[href=${href}]`))
        // setUpdate(!update)
      }
    })
  }, [])

  return (
    <div>
      <HeroSection />
      <AutoHeader id="home" />
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
