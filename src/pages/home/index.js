import React from 'react'
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
  let [active, setActive] = useState(undefined)

  useEffect(() => {
    let top, currentSection
    debounce(
      document.addEventListener('scroll', () => {
        top = window.pageYOffset
        currentSection = getCurrentSection(top)
        currentSection && setActive(currentSection)
        history.replaceState(null, null, `#${currentSection}`)
      }),
      300
    )
  }, [])
  return (
    <div id="page" className="relative">
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
