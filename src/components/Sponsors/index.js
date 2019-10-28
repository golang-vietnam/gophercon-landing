import React from 'react'
import { css } from 'linaria'

const rows = [
  {
    name: 'Platinum',
    sponsors: [
      {
        href: 'https://www.chotot.com/',
        image: 'chotot',
      },
      {
        href: 'https://www.be.xyz',
        image: 'be',
      },
      {
        href: 'https://brank.as',
        image: 'brankas',
      },
      {
        href: 'https://ghn.vn/',
        image: 'ghn',
      },
    ],
  },
  {
    name: 'Gold',
    sponsors: [
      {
        href: 'https://global.axon.com/',
        image: 'axon',
      },
      // {
      //   href: 'https://www.grab.com/',
      //   image: 'grab',
      // },
      {
        href: 'https://www.vng.com.vn/',
        image: 'vng',
      },
      {
        href: 'https://www.ninjavan.co/vi-vn',
        image: 'ninja-van',
      },
    ],
  },
  {
    name: 'Silver',
    sponsors: [
      {
        href: 'https://dwarves.foundation',
        image: 'dwarves',
      },
      {
        href: 'https://careers.moneyforward.vn',
        image: 'money-forward',
      },
    ],
  },
  {
    name: 'Supporters',
    sponsors: [
      {
        href: 'https://webuild.community',
        image: 'webuild',
      },
      {
        href: 'https://gdgvietnam.com/',
        image: 'gdg',
      },
      {
        href: 'http://www.coderschool.vn/',
        image: 'coderschool',
      },
      {
        href: 'https://circo.co',
        image: 'circo',
      },
      {
        href: 'https://www.grokking.org',
        image: 'grokking',
      },
    ],
  },
]

const Sponsors = ({ ...rest }) => {
  return (
    <div className="page-section py-16 md:py-24 lg:py-25" {...rest}>
      <div className="container text-grey">
        <div className="mb-16 text-center  md:flex md:justify-between md:items-center">
          <div
            className={[
              'text-3xl text-center md:text-left md:text-5xl text-primary font-bold mb-4 md:mb-0',
            ]}
          >
            Sponsors
          </div>
        </div>
        {rows.map(({ name, sponsors }) => (
          <div className="container flex flex-wrap" key={name}>
            <div className="w-full">
              <h4 className="font-bold mb-10 text-2xl text-center sm:text-left">
                {name}
              </h4>
            </div>
            {sponsors.map(({ name, href, image, key }) => (
              <div
                className={[
                  'col w-full sm:container sm:w-32 sm:h-32 md:w-1/5 sm:h-auto py-4 mb-8 flex items-center  border flex justify-center',
                  key !== sponsors.length && 'sm:mr-4',
                  css`
                    &:hover {
                      box-shadow: 15px 15px 30px 0 rgba(210, 210, 210, 0.5);
                      border: none;
                    }
                  `,
                ]}
                key={image}
              >
                <a href={href} target="__blank">
                  <img
                    alt={name}
                    className="bw-hover w-full h-full object-cover"
                    src={`/images/${image}_shrink.png`}
                    srcSet={`/images/${image}@2x_shrink.png 2x`}
                  />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsors
