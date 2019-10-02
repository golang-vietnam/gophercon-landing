import React from 'react'
import { css } from 'linaria'

const Contact = ({ ...rest }) => {
  return (
    <div className={['bg-primary mt-24']} {...rest}>
      <div className={['container py-12 md:py-24']}>
        <div className="text-5xl font-bold text-white mb-16">Venue</div>
        <div className="text-white mb-1">
          GopherCon Viet Nam 2018 will be held at:
        </div>
        <div className="font-bold text-white mb-12">
          195 Dien Bien Phu Street, Ward 15, Binh Thanh Dist, Ho Chi Minh City
        </div>
        <div className="w-full venue-map">
          <iframe
            className={[
              'w-full',
              css`
                height: 240px;
                @screen md {
                  height: 480px;
                }
              `,
            ]}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.152842887245!2d106.70311951586471!3d10.799603461715943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529005136495b%3A0x8b408ee48c195aa9!2sDreamplex+Dien+Bien+Phu!5e0!3m2!1sen!2s!4v1543915392628"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
