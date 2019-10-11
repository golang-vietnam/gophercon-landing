import React, { useState } from 'react'
import { css } from 'linaria'
import HamburgerMenu from './HamburgerMenu'
import LazyImage from '@/components/LazyImage'

const menu = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Schedule',
    href: '#schedule',
  },
  {
    name: 'Speakers',
    href: '#speakers',
  },
  {
    name: 'Sponsors',
    href: '#sponsors',
  },
]

const Header = ({ children, className }) => {
  return (
    <header
      className={[
        className,
        'container xs:col text-right flex justify-between items-center text-white focus:text-blue',
        css`
          height: 100px;
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
              width: 170px;
              height: 54px;
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
          id="top-menu"
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
              <a
                href={e.href}
                className={[
                  'hover:text-blue inline-block flex-auto',
                  typeof window !== 'undefined' &&
                    window.location.href.includes(e.href) &&
                    'active',
                ]}
              >
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <HamburgerMenu menuItems={menu} />
    </header>
  )
}

export default Header
