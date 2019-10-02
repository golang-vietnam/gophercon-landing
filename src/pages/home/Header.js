import React from 'react'
import { css } from 'linaria'
import HamburgerMenu from './HamburgerMenu'
import LazyImage from '@/components/LazyImage'

const menu = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Sponsors',
    href: '#sponsors',
  },
  {
    name: 'Speakers',
    href: '#speakers',
  },
  {
    name: 'Schedule',
    href: '#schedule',
  },
]

const Header = ({ children, className }) => {
  return (
    <header
      className={[
        className,
        'container text-white text-right flex justify-between items-center',
        css`
          height: 68px;
        `,
      ]}
    >
      <LazyImage
        {...require('./images/headerLogo.png?sqip')}
        alt="header logo"
        className={[
          css`
            width: 118px;
            height: 35px;
            @screen md {
              width: 187px;
              height: 57px;
            }
          `,
        ]}
      />
      <nav
        className={[
          'h-full hidden md:block',
          css`
            max-width: 1300px;
          `,
        ]}
      >
        <ul
          className={[
            'h-full flex',
            css`
              @media (min-width: 1400px) {
                @apply -mx-5;
              }
            `,
          ]}
        >
          {menu.map((e, i) => (
            <li
              key={i}
              className="inline-flex items-center text-base font-semibold px-5"
            >
              <a href={e.href} className="inline-block flex-auto">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <HamburgerMenu className="h-full" menuItems={menu} />
    </header>
  )
}

export default Header
