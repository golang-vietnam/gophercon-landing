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
    name: 'Viet Tran',
    info: (
      <p>
        Solution architect
        <br />
        at Sendo.vn
      </p>
    ),
    avatar:
      'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/e6f4b652er_viettran_speaker.jpg',
  },
  {
    name: 'Tam Nguyen',
    info: (
      <p>
        Software & Devops Engineer
        <br />
        at Anduin
      </p>
    ),
    avatar:
      'https://pbs.twimg.com/profile_images/972278423975485440/7Ep7AXKb_400x400.jpg',
  },
  {
    name: 'Roman Atachiants',
    info: (
      <p>
        Head of engineering
        <br />
        at Grab
      </p>
    ),
    avatar:
      'https://avatars2.githubusercontent.com/u/583116?s=460&v=4',
  },
  {
    name: 'Gaurav Agarwal',
    info: (
      <p>
        Software Practitioner
        <br />
        Organizer for Chennai Gopher Community
      </p>
    ),
    avatar:
      'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uirzjki7c_Screen%20Shot%202018-11-10%20at%204.58.34%20PM.png',
  },
  {
    name: 'Rajeev N Bharshetty',
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
  {
    name: 'Piyush Verma',
    info: (
      <p>
        Director of Engineer
        <br />
        at Trusting Social
      </p>
    ),
    avatar:
      'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uxdute0wr_Screen%20Shot%202018-11-10%20at%203.04.26%20PM.png',
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
