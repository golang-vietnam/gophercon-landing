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
            TBD
          </h4>
          {/* <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.152842887245!2d106.70311951586471!3d10.799603461715943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529005136495b%3A0x8b408ee48c195aa9!2sDreamplex+Dien+Bien+Phu!5e0!3m2!1sen!2s!4v1543915392628"
              className="absolute pin"
              frameBorder="0"
              allowFullScreen
            />
          </div> */}
        </div>
      </div>
    </div>
  </section>
)

export default VenueSection
