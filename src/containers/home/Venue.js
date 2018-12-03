import React from 'react'

const VenueSection = () => (
  <section
    id="venue"
    className="bg-secondary sm:pt-0 sm:pb-40 py-24 text-center"
  >
    <div className="container">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-12">Venue</h2>

          <h6 className="text-base font-medium mb-3">
            The conference will be held at:
          </h6>
          <h4 className="text-2xl font-medium mb-14">
            195 Dien Bien Phu, Binh Thanh, Ho Chi Minh City
          </h4>
          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.152030000037!2d106.70310371586474!3d10.799665761714808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b9ffef75d5%3A0x7707608b48ac3c25!2sDreamplex+195!5e0!3m2!1sen!2s!4v1543823550347"
              className="absolute pin"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default VenueSection
