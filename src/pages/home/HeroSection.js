import React from 'react'
import { css } from 'linaria'
import LazyImage from '@/components/LazyImage'
import Header from './Header'
import SvgArrow from './images/horizontal-arrow.svg?svgr'

const HeroSection = ({ ...rest }) => {
  return (
    <section
      className={[
        'bg-primary relative',
        css`
          @screen xl {
            min-height: 800px;
          }
        `,
      ]}
      {...rest}
    >
      <Header
        className={[
          css`
            --mobile-menu-top: 68px;

            @screen md {
              height: 140px;
              --mobile-menu-top: 100px;
            }
          `,
        ]}
      />
      <div
        className={[
          'container w-full mt-20',
          css`
            min-height: 450px;
            @screen md {
              @apply flex justify-between;
            }
          `,
        ]}
      >
        <div className="mb-10">
          <div className="font-bold text-4xl  md:text-6xl text-white text-center md:text-left">
            Gophercon <br /> Vietnam <span className="text-blue">2019</span>
          </div>
          <div className="font-semibold text-2xl text-white flex items-center justify-center md:justify-start">
            <SvgArrow className="mr-4 md:mr-10" />
            December 1 2018
          </div>
        </div>
        <div
          className={[
            'flex',
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
                @screen lg {
                  width: 440px;
                  height: 418px;
                }
              `,
            ]}
            {...require('./images/heroImage.png?sqip')}
          />
        </div>
      </div>
      <LazyImage
        {...require('./images/heroBg.png?sqip')}
        alt="header background"
        className="w-full absolute z-10 bottom-0"
      />
    </section>
  )
}

export default HeroSection
