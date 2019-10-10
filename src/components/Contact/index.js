import React from 'react'
import { css } from 'linaria'

const Contact = ({ ...rest }) => {
  return (
    <div className="page-section bg-primary mt-24" {...rest}>
      <div className={['container py-12 md:py-24']}>
        <div className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-0">
          Venue
        </div>
        <div className="text-white mb-1">
          GopherCon Viet Nam 2019 will be held at:
        </div>
        <div className="font-bold text-white mb-12">
          24 Đường 3 Tháng 2, Phường 12, Quận 10, Hồ Chí Minh 700000, Việt Nam
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4423395466474!2d106.67857451506828!3d10.77739369232088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f266c79200b%3A0x3e85de751c03de9c!2sCAPELLA%20GALLERY%20HALL!5e0!3m2!1svi!2s!4v1570518160982!5m2!1svi!2s"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
