import React, { useState } from 'react'
import { css } from 'linaria'
import HamburgerMenu from './HamburgerMenu'
import LazyImage from '@/components/LazyImage'

const menu = [
  {
    name: 'home',
    href: '#home',
  },
  {
    name: 'schedule',
    href: '#schedule',
  },
  {
    name: 'speakers',
    href: '#speakers',
  },
  {
    name: 'sponsors',
    href: '#sponsors',
  },
]

const Header = ({ active }) => {
  const handleClick = id => {
    // document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="bg-primary  w-screen fixed top-0 z-30">
      <header
        className={[
          'container xs:col text-right flex justify-between items-center text-white bg-primary',
          css`
            height: 64px;
            --mobile-menu-top: 64px;

            @screen md {
              height: 100px;
              --mobile-menu-top: 100px;
            }
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
            'h-full hidden sm:visible md:block',
            css`
              max-width: 1300px;
            `,
          ]}
        >
          <ul
            id="top-menu"
            className={[
              'h-full flex items-center',
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
                className="inline-flex items-center text-base font-semibold px-5 capitalize"
              >
                <a
                  onClick={() => {
                    handleClick(e.name)
                  }}
                  href={e.href}
                  className={[
                    'hover:text-blue inline-block flex-auto',
                    active === e.name && 'text-blue',
                  ]}
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <HamburgerMenu menuItems={menu} active={active} />
      </header>
    </div>
  )
}

export default Header
