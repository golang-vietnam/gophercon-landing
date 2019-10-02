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
        href: 'https://www.sendo.vn',
        image: 'sendo',
      },
      {
        href: 'https://trustingsocial.com/',
        image: 'trustingsocial',
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
      {
        href: 'https://www.grab.com/',
        image: 'grab',
      },
      {
        href: 'https://www.vng.com.vn/',
        image: 'vng',
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
        href: 'https://missmp.eu/',
        image: 'missmoney',
      },
      {
        href: 'https://www.mercari.com/jp/',
        image: 'mercari',
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
    ],
  },
]

const Sponsors = ({ ...rest }) => {
  return (
    <div className={'py-16 lg:py-25 mt-24'} {...rest}>
      <div className="container text-grey">
        <div className={['mb-16 md:flex md:justify-between md:items-center']}>
          <div
            className={[
              'text-3xl text-center md:text-left md:text-5xl text-primary font-bold mb-4 md:mb-0',
            ]}
          >
            Sponsors
          </div>
          <div className="text-center">
            <a
              className="font-medium w-64 text-base px-5 py-2 text-white bg-primary inline-block"
              href="#"
            >
              Become a sponsor
            </a>
          </div>
        </div>
        {rows.map(({ name, sponsors }) => (
          <div className="row flex flex-wrap" key={name}>
            <div className="col w-full">
              <h4 className="font-bold mb-10 text-2xl text-center sm:text-left">
                {name}
              </h4>
            </div>
            {sponsors.map(({ href, image }) => (
              <div className="col sm:w-1/3 sm:mx-0 mx-auto mb-8" key={image}>
                <a
                  href={href}
                  className="shadow block leading-none text-0"
                  target="__blank"
                >
                  <img
                    alt=""
                    className="bw-hover"
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
