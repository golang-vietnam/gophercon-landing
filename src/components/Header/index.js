import React from 'react'
import Logo from '@/components/svg/Logo'
import ScrollTo from '@/components/ScrollTo'

const links = [
  {
    name: 'Home',
    to: '#hero',
  },
  {
    name: 'Speakers',
    to: '#speakers',
  },
  {
    name: 'Sponsors',
    to: '#sponsors',
  },
  {
    name: 'Workshop',
    to: '#workshop',
  },
  {
    name: 'Conference',
    to: '#conference',
  },
]

const debounce = (fn, ms = 0) => {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

class Header extends React.Component {
  state = {
    current: '#hero',
    mobileNavOpened: false,
  }

  freezeScrollEvent = false

  onScroll = debounce(() => {
    if (this.freezeScrollEvent) return
    const top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop

    let current = ''
    this.sections.forEach(section => {
      // Start to toggle pagination after reaching the height of 2/5 screen height
      if (top > section.offsetTop - screen.height * 0.2) {
        current = '#' + section.id
      }
    })

    this.setState({
      current,
    })
  }, 50)

  activateLink = current => {
    this.freezeScrollEvent = true

    this.setState({
      current,
    })

    setTimeout(() => {
      this.freezeScrollEvent = false
    }, 350)
  }

  toggleMobileNavOpened = () =>
    this.setState(({ mobileNavOpened }) => ({
      mobileNavOpened: !mobileNavOpened,
    }))

  componentDidMount() {
    const selectors = links.map(({ to }) => to).join(',')
    this.sections = document.querySelectorAll(selectors)
    document.addEventListener('scroll', this.onScroll)
  }
  render() {
    return (
      <header className="header border-b border-grey-lighter bg-white fixed pin-x pin-t z-10">
        <div
          className={
            'mobile-nav sm:hidden' +
            (this.state.mobileNavOpened ? ' active' : '')
          }
        >
          <ul className="mobile-nav__container">
            {links.map(({ name, to }) => (
              <li key={name}>
                <ScrollTo target={to}>
                  {handleScroll => (
                    <a
                      className={
                        'mobile-nav__link' +
                        (to === this.state.current ? ' active' : '')
                      }
                      onClick={e => {
                        handleScroll(e)
                        this.activateLink(to)
                      }}
                      href={to}
                    >
                      {name}
                    </a>
                  )}
                </ScrollTo>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Logo className="logo" />
            <div
              onClick={this.toggleMobileNavOpened}
              className={
                'mobile-nav-btn sm:hidden' +
                (this.state.mobileNavOpened ? ' opened' : '')
              }
            >
              <span />
              <span />
              <span />
            </div>
            <nav className="sm:block hidden">
              <ul className="list-reset font-medium">
                {links.map(({ name, to }) => (
                  <li className="inline-block ml-10" key={name}>
                    <ScrollTo target={to}>
                      {handleScroll => (
                        <a
                          className={
                            'header__link' +
                            (to === this.state.current ? ' active' : '')
                          }
                          onClick={e => {
                            handleScroll(e)
                            this.activateLink(to)
                          }}
                          href={to}
                        >
                          {name}
                        </a>
                      )}
                    </ScrollTo>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
