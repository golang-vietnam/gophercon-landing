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
    <div className="page-section md:pt-24 lg:py-25" {...rest}>
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
          <div className="row flex flex-wrap" key={name}>
            <div className="col w-full">
              <h4 className="font-bold mb-10 text-2xl text-center sm:text-left">
                {name}
              </h4>
            </div>
            {sponsors.map(({ name, href, image }) => (
              <div
                className={[
                  'col sm:w-1/4 sm:h-32 md:h-48 mr-4 mb-8 flex justify-between items-center border',
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
                    className="bw-hover object-cover"
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
