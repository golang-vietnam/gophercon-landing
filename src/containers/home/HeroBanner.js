import React from 'react'
import DownArrow from '@/components/svg/DownArrow'
import ScrollTo from '@/components/ScrollTo'

const HeroBannerSection = () => (
  <section
    id="hero"
    className="bg-primary sm:py-40 py-24 min-h-screen relative flex items-center"
  >
    <div className="container text-center">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full text-center">
          <div className="leading-none sm:w-full w-4/5 mx-auto">
            <img
              src="/images/GopherConVN-character.png"
              srcSet="/images/GopherConVN-character@2x.png 2x"
              alt="GopherConVN-character"
            />
          </div>
          <p className="text-xl text-white font-semibold mt-2 mb-10">
            08 - 09 December 2018
          </p>
        </div>

        <div className="w-full text-center absolute pin-x pin-b pb-6">
          <ScrollTo target="#conference">
            {handleClick => (
              <a
                className="text-white font-semibold"
                href="#conference"
                onClick={handleClick}
              >
                Learn more <br /> <DownArrow />
              </a>
            )}
          </ScrollTo>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBannerSection
