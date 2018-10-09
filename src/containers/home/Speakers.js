import React, { Fragment } from 'react'

const speakers = [
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
  {
    name: 'Christopher Molozian',
    info: (
      <p>
        Erlang for GO developers
        <br />
        SP Digital IoT
      </p>
    ),
    avatar: 'avatar',
  },
]

const SpeakersSection = () => (
  <section id="speakers" className="text-center">
    <div className="pt-40 pb-20 bg-primary" />
    <div className="triangle" />
    <div className="speakers container">
      <div className="row flex flex-wrap justify-center">
        <div className="col w-full bg-white py-18 px-24 shadow wrapper">
          <h2 className="text-primary text-3xl text-center mb-20">Speakers</h2>
          <div className="row flex flex-wrap">
            {speakers.map(({ name, info, avatar }, index) => (
              <div className="col sm:w-1/3 w-full mb-14" key={index}>
                <div className="leading-none">
                  <img className="rounded-full" src={`/images/${avatar}.png`} />
                </div>
                <h4 className="mt-6 mb-1">{name}</h4>
                {info}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              className="font-medium mx-3 px-5 py-2 text-white bg-primary inline-block"
              href="#"
            >
              Become a speaker
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SpeakersSection
