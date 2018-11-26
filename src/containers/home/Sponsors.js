import React from 'react'

const rows = [
  {
    name: 'Platinum',
    sponsors: [
      {
        href: 'https://www.sendo.vn',
        image: 'sendo',
      },
      {
        href: 'https://trustingsocial.com/',
        image: 'trustingsocial',
      },
      {
        href: 'https://www.chotot.com/',
        image: 'chotot',
      },
    ],
  },
  {
    name: 'Gold',
    sponsors: [
      {
        href: 'https://dwarves.foundation',
        image: 'dwarves',
      },
      {
        href: 'https://global.axon.com/',
        image: 'axon',
      },
    ],
  },
  {
    name: 'Silver',
    sponsors: [
        {
        href: 'https://missmp.eu/',
        image: 'missmoney',
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
        href: 'https://www.grokking.org/',
        image: 'grokking',
      },
    ],
  },
]

const SponsorsSection = () => (
  <section
    id="sponsors"
    className="bg-grey-lightest sm:mt-20 mt-0 sm:pt-20 pt-24 pb-24 text-center"
  >
    <div className="container pb-1">
      <div className="row flex flex-wrap justify-center">
        <div className="col w-full wrapper--gutter">
          <h2 className="text-primary text-3xl text-center mb-10">Sponsors</h2>

          {rows.map(({ name, sponsors }) => (
            <div className="row flex flex-wrap" key={name}>
              <div className="col w-full">
                <h4 className="text-primary font-medium mt-2 mb-8 text-xl">
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
                      src={`/images/sponsors/${image}_shrink.png`}
                      srcSet={`/images/sponsors/${image}@2x_shrink.png 2x`}
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
          <div className="mt-12">
            <a
              className="font-medium mx-3 px-5 py-2 text-white bg-primary inline-block"
              href="#"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SponsorsSection
