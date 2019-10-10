import React from 'react'
import { css } from 'linaria'

const Join = ({ ...rest }) => {
  return (
    <div className={'page-section py-16 lg:py-25 mt-24'} {...rest}>
      <div className="container text-grey">
        <div className={['mb-16 md:flex md:justify-between md:items-center']}>
          <div
            className={[
              'text-3xl text-center md:text-left md:text-5xl text-primary font-bold mb-4 md:mb-0',
            ]}
          >
            Join the Conference
          </div>
          <div className="text-center">
            <a
              className="font-medium w-64 text-base px-5 py-2 text-white bg-primary inline-block"
              href="https://ticketbox.vn/event/gophercon-vietnam-2019-77299"
            >
              Buy a ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
