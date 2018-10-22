import React from 'react'

const VenueSection = () => (
  <section id="venue" className="bg-primary sm:py-40 py-24 text-center">
    <div className="container">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-white text-3xl text-center mb-12">Venue</h2>

          <h6 className="text-base text-white font-medium mb-3">
            The conference will be held at:
          </h6>
          <h4 className="text-white text-2xl font-medium mb-14">
            195 Dien Bien Phu, Binh Thanh, Ho Chi Minh City
          </h4>

          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.152216186968!2d106.70310091480097!3d10.799651492305768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b9fd8ec3f9%3A0x9349d4fb4d076f05!2zV2FyZCAxNSwgMTk1IMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAxNSwgQsOsbmggVGjhuqFuaCwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1sen!2s!4v1538974887778"
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
