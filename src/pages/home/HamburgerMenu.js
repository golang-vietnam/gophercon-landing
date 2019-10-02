import React, { useState } from 'react'
import { css } from 'linaria'
import { FaBars, FaTimes } from 'react-icons/fa'
import LazyImage from '@/components/LazyImage'

const HamburgerMenu = ({ className, menuItems = [] }) => {
  const labelRef = React.useRef(null)
  const id = React.useMemo(
    () =>
      Math.random()
        .toString(36)
        .substr(2, 5),
    []
  )
  const handleClick = () => {
    labelRef.current.click()
  }

  return (
    <div className={['relative block md:hidden', className]}>
      <label
        ref={labelRef}
        tabIndex="0"
        role="button"
        htmlFor={id}
        className={[
          'h-full inline-flex items-center focus:outline-none select-none',
        ]}
        aria-label="menu"
      >
        <FaBars className="w-6 h-6" />
      </label>
      <input
        aria-hidden="true"
        tabIndex="-1"
        type="checkbox"
        id={id}
        className={[
          'hidden',
          css`
            &:checked {
              @apply bg-white;
              & + ul {
                @apply block w-screen bg-white py-8;
                position: fixed;
                top: var(--mobile-menu-top);
                left: 0;
                z-index: 100;
              }
            }
          `,
        ]}
      />
      <ul
        className={[
          'hidden',
          css`
            @apply flex flex-col justify-center items-center;
            min-height: 530px;
          `,
        ]}
      >
        {menuItems.map((e, i) => (
          <li
            key={i}
            className="flex items-center text-base font-semibold px-5"
          >
            <a
              href={e.href}
              className="inline-block text-center text-grey text-2xl font-medium flex-auto py-3"
              onClick={() => handleClick()}
            >
              {e.name}
            </a>
          </li>
        ))}
        <LazyImage
          {...require('./images/heroBg.png?sqip')}
          alt="header background"
          className={[
            'w-full absolute bottom-0',
            css`
              position: fixed;
              z-index: 200;
            `,
          ]}
        />
      </ul>
    </div>
  )
}

export default HamburgerMenu
