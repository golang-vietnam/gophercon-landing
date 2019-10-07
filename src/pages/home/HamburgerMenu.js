import React, { useState } from 'react'
import { css } from 'linaria'
import { FaBars, FaTimes } from 'react-icons/fa'
import LazyImage from '@/components/LazyImage'
import AnimatedMenuIcon from './AnimatedMenuIcon'

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
    <div className={['relative block flex items-center md:hidden', className]}>
      <input
        aria-hidden="true"
        tabIndex="-1"
        type="checkbox"
        id={id}
        className={[
          'hidden',
          css`
            &:not(:checked) {
              & ~ ul {
                @apply hidden;
              }
              & + label {
                @apply text-white;
              }
            }
            &:checked {
              @apply bg-white;
              & + label {
                @apply text-black;
              }

              & ~ ul {
                @apply flex w-screen h-screen bg-white py-8;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
              }
            }
          `,
        ]}
      />
      <label
        ref={labelRef}
        tabIndex="0"
        role="button"
        htmlFor={id}
        className={[
          'h-full inline-flex items-center focus:outline-none select-none',
          css`
            z-index: 1000;
          `,
        ]}
        aria-label="menu"
      >
        <AnimatedMenuIcon />
      </label>
      <ul className="relative bg-white flex-col justify-center items-center">
        {menuItems.map((e, i) => (
          <li
            key={i}
            className="flex items-center text-base font-semibold px-5"
          >
            <a
              href={e.href}
              className="inline-block text-center text-grey text-2xl font-medium active:text-blue flex-auto py-3"
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
              z-index: 200;
            `,
          ]}
        />
      </ul>
    </div>
  )
}

export default HamburgerMenu
