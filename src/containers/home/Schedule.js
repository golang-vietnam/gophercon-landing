import React from 'react'

const events = [
  {
    highlighted: false,
    time: '08:00',
    title: 'Registration',
  },
  {
    highlighted: true,
    time: '09:00',
    title: 'Registration',
  },
  {
    highlighted: false,
    time: '09:45',
    title: 'Starting Serverless with Go',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus cursus eleifend. In imperdiet mi ac faucibus efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
      name: 'Stefan Meissner',
      desc: 'Erlang for GO developers',
    },
  },
  {
    highlighted: false,
    time: '10:00',
    title: 'Building Resilient Data Pipelines in Go',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
      name: 'Stefan Meissner',
      desc: 'Erlang for GO developers',
    },
  },
  {
    highlighted: false,
    time: '20:45',
    title: 'Concurrency in Ethereum (Blockchain)',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
      name: 'Stefan Meissner',
      desc: 'Erlang for GO developers',
    },
  },
]

const ScheduleSection = () => (
  <section
    id="schedule"
    className="bg-grey-lightest sm:pt-20 pt-10 sm:pb-40 pb-32"
  >
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-16">
            Conference
          </h2>

          <div className="timeline">
            {events.map(
              ({ highlighted, time, title, desc, speaker }, index) => (
                <div className="row flex" key={time}>
                  <div className="col timeline__time flex flex-col items-center">
                    <span
                      className={
                        highlighted
                          ? 'text-2xl font-bold text-primary mb-3 mt-3'
                          : 'text-2xl mb-3'
                      }
                    >
                      {time}
                    </span>
                    <div className="timeline__line bg-primary flex-1" />
                  </div>
                  <div
                    className={
                      'col' + (index === events.length - 1 ? '' : ' mb-16')
                    }
                  >
                    <h4
                      className={
                        'text-xl mb-4 ' + (highlighted ? 'mt-3' : 'mt-1')
                      }
                    >
                      {title}
                    </h4>
                    {desc && <p>{desc}</p>}
                    {speaker && (
                      <div className="flex items-center mt-4">
                        <div
                          className="timeline__avatar"
                          style={{ backgroundImage: `url(${speaker.avatar})` }}
                        />
                        <div className="pl-4">
                          <h6 className="text-base">{speaker.name}</h6>
                          <div className="font-normal">{speaker.desc}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ScheduleSection
