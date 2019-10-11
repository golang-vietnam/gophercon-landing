import React from 'react'
import { css } from 'linaria'
import speakers from './speakers'
require('default-passive-events')

const Speakers = ({ ...rest }) => {
  return (
    <div
      id="speakers"
      className={'page-section py-16 lg:py-25 bg-primary'}
      {...rest}
    >
      <div className="container">
        <div className={['mb-16 md:flex md:justify-between md:items-center']}>
          <div
            className={[
              'text-3xl md:text-5xl text-white font-bold mb-4 md:mb-0',
            ]}
          >
            Speakers
          </div>
        </div>
      </div>
      <div
        className={[
          'w-full overflow-x-scroll',
          css`
            ::-webkit-scrollbar {
              display: none;
            }
          `,
        ]}
      >
        <div className="container">
          <ul className="inline-flex" id="flavoursContainer">
            {speakers &&
              speakers.map((s, key) => (
                <li
                  key={key}
                  className={[
                    'text-white flex-none',
                    css`
                      width: 250px;
                      @screen md {
                        width: 300px;
                      }
                    `,
                    key !== speakers.length - 1 && 'mr-6',
                  ]}
                >
                  <div
                    className={[
                      css`
                        @apply relative;
                        height: 300px;
                        @srcreen md {
                          height: 330px;
                        }
                      `,
                    ]}
                  >
                    <div
                      className={[
                        'absolute w-full h-full z-20 opacity-25',
                        css`
                          background-color: #000125;
                        `,
                      ]}
                    />
                    <s.avatar
                      className={[
                        'w-full h-full object-cover',
                        css`
                          filter: brightness(3);
                          -webkit-filter: grayscale(100%);
                          filter: grayscale(100%);
                        `,
                      ]}
                    />
                  </div>
                  <div className="h-32 mt-10">
                    <h3 className="font-bold mb-4">{s.name}</h3>
                    <div>{s.position}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Speakers
