import React from 'react'
import { css } from 'linaria'

const Speakers = ({ ...rest }) => {
  return (
    <div className={'py-16 lg:py-25 mt-24 bg-primary'} {...rest}>
      <div className="container">
        <div className={['mb-16 md:flex md:justify-between md:items-center']}>
          <div
            className={[
              'text-3xl md:text-5xl text-white font-bold mb-4 md:mb-0',
            ]}
          >
            Speakers
          </div>
          <div>
            <a
              className="font-medium text-base px-5 py-2 text-primary bg-white inline-block"
              href="#"
            >
              Become a speaker
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers
