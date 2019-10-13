import React from 'react'
import { css } from 'linaria'
import LazyImage from '@/components/LazyImage'
import SvgArrow from './images/horizontal-arrow.svg?svgr'
import Header from './Header'

const HeroSection = ({ active, ...rest }) => {
  return (
    <section
      className={[
        'page-section bg-primary relative',
        css`
          @screen lg {
            min-height: 800px;
          }
        `,
      ]}
      {...rest}
    >
      <Header active={active} />
      <div
        className={[
          'container w-full pt-24 md:pt-32 lg:pt-48',
          css`
            min-height: 450px;
            @screen md {
              @apply flex justify-between;
            }
          `,
        ]}
      >
        <div className="mb-10 md:w-1/2">
          <div className="font-bold text-2xl md:text-4xl lg:text-6xl text-white text-center md:text-left mb-6">
            Gophercon <br /> Vietnam <span className="text-blue">2019</span>
          </div>
          <div className="font-semibold text-2xl text-white flex items-center justify-center md:justify-start">
            <SvgArrow className="mr-4 md:mr-6" />
            November 2nd
          </div>
        </div>
        <div
          className={[
            'flex md:w-1/2',
            css`
              @apply justify-center;
              @screen md {
                @apply justify-center;
              }
              @screen lg {
                @apply justify-end;
              }
            `,
          ]}
        >
          <LazyImage
            className={[
              'flex',
              css`
                width: 240px;
                height: 226px;
                margin-bottom: 80px;
                @screen md {
                  width: 300px;
                  height: 260px;
                  margin-bottom: 0px;
                  position: absolute;
                  bottom: 90px;
                @screen lg {
                  width: 440px;
                  height: 418px;
                  margin-bottom: 0px;
                  position: absolute;
                  bottom: 150px;
                }
              `,
            ]}
            {...require('./images/heroImage.png?sqip')}
          />
        </div>
        <div
          className={[
            css`
              @apply bottom-0 left-0 absolute w-full z-10;
              background-image: url(${require('./images/heroBg.png')});
              background-size: contain;
              background-repeat-x: repeat;
              background-repeat-y: no-repeat;
              background-position: center;
              height: 95px;
              @screen lg {
                height: 170px;
              }
            `,
          ]}
        />
      </div>
    </section>
  )
}

export default HeroSection
