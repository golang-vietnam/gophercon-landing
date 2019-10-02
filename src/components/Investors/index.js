import React from 'react'
import { css } from 'linaria'
import { investorsList } from '@/constants/investors'
import LazyImage from '@/components/LazyImage'

const Investors = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div
        className={[
          'relative z-0 flex flex-col justify-around items-center pt-32 mt-16',
          css`
            height: 320px;
            @screen md {
              height: 457px;
            }
            @screen lg {
              height: 712px;
            }
          `,
        ]}
      >
        <LazyImage
          {...require('./images/investor-registration-bg.png?sqip')}
          className={[
            'absolute w-full h-full object-cover',
            css`
              z-index: -1;
            `,
          ]}
          alt="Registration background"
        />

        <div className="container">
          <div className="w-full md:w-3/4 lg:w-2/3 mx-auto flex flex-col items-center justify-around">
            <h2
              className={[
                'font-semibold text-white mb-10 text-center leading-tight',
                css`
                  font-size: 17px;
                  @screen md {
                    font-size: 28px;
                  }
                  @screen lg {
                    font-size: 60px;
                  }
                `,
              ]}
            >
              ARE YOU LOOKING FOR DEAL FLOW IN VIETNAM?
            </h2>
            <div
              className={[
                'text-white text-center mb-10',
                css`
                  font-size: 12px;
                  @screen md {
                    font-size: 16px;
                  }
                  @screen lg {
                    font-size: 32px;
                  }
                `,
              ]}
            >
              Vietnam Investment Day helps you sourcing potential startups and
              connect you directly with founders for further private discussion
              during our event.
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScnRFh2k4Hs4ZNWBAPTlZB5AxTr7-c4qosPlrthE5uUzlHodQ/viewform
            "
              target="_blank "
              rel="noopener noreferrer"
              className={[
                'w-full xl:w-3/4 inline-flex justify-center items-center bg-white text-blue font-semibold py-4 px-4',
                css`
                  font-size: 12px;
                  @screen md {
                    font-size: 22px;
                  }
                  @screen lg {
                    font-size: 28px;
                  }
                `,
              ]}
            >
              REGISTER TO JOIN AS AN INVESTOR
            </a>
          </div>
        </div>
      </div>

      <div
        className={[
          'container',
          css`
            margin-top: 44px;
            margin-bottom: 51px;
            @screen md {
              margin-top: 86px;
              margin-bottom: 50px;
            }
            @screen lg {
              margin-top: 171px;
              margin-bottom: 113px;
            }
          `,
        ]}
      >
        <h2
          className={[
            'text-blue font-semibold text-center mb-12',
            css`
              font-size: 17px;
              @screen md {
                font-size: 28px;
              }
              @screen md {
                font-size: 60px;
              }
            `,
          ]}
        >
          OUR VC PARTNERS
        </h2>

        <div className="flex flex-wrap">
          {investorsList.map((i, key) => (
            <div
              key={key}
              className={[
                'flex justify-center items-center w-1/5 mb-3 p-2 md:p-4 lg:p-8',
              ]}
            >
              <LazyImage key={key} alt={i.name} {...i.logoImgProps} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Investors
