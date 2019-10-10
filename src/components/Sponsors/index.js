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
        href: 'https://corp.moneyforward.com/en/',
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
    ],
  },
]

const Sponsors = ({ ...rest }) => {
  return (
    <div className="page-section pt-16 lg:py-25" {...rest}>
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
              <div
                className="col sm:w-1/3 h-48 sm:mx-0 mx-auto mb-8 md:mb-16 flex justify-between items-center"
                key={image}
              >
                <a
                  href={href}
                  className={[
                    'border w-full flex justify-center',
                    css`
                      &:hover {
                        box-shadow: 15px 15px 30px 0 rgba(210, 210, 210, 0.5);
                      }
                      transition: box-shadow 0.3s linear;
                    `,
                  ]}
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
