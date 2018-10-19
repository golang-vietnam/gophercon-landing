import React from 'react'

const speakers = [
  {
    name: 'Stefan Meissner',
    info: (
      <p>
        Backend developer <br /> focusing on cloud architecture
      </p>
    ),
    avatar:
      'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
  },
  {
    name: 'Grant Griffiths',
    info: (
      <p>
        Senior software engineer
        <br />
        at GE Digital
      </p>
    ),
    avatar:
      'https://secure.gravatar.com/avatar/f982183e1db9eed435f2097d10281f7c?s=500',
  },
  {
    name: 'Sau Sheong Chang',
    info: (
      <p>
        Software engineer expert
        <br />
        Tech speaker and author
      </p>
    ),
    avatar:
      'https://secure.gravatar.com/avatar/ee191858f0d96ad93098694537f71998?s=500',
  },
  {
    name: 'Deepesh naini',
    info: (
      <p>
        Polygot developer
        <br />
        Passionate about building cool products
      </p>
    ),
    avatar:
      'https://secure.gravatar.com/avatar/3692ed4ac12d1d367148d6c7afab5908?s=500',
  },
  {
    name: 'Aleksei Shaikhaleev',
    info: (
      <p>
        Backend developer
        <br />
        at Travelpayouts.com
      </p>
    ),
    avatar:
      'https://secure.gravatar.com/avatar/5141bce120e3b351e2a5156366bc8a24?s=500',
  },
  {
    name: 'CRajeev N Bharshetty',
    info: (
      <p>
        Computer science nerd
        <br />
        Working on building reliability at scale on 300+ Micro-services at
        GO-JEK.
      </p>
    ),
    avatar:
      'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
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
                  <div
                    className="bg-cover bg-no-repeat bg-center rounded-full mx-auto"
                    style={{
                      backgroundImage: `url(${avatar})`,
                      width: '120px',
                      height: '120px',
                    }}
                  />
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
