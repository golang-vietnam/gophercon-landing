import React from 'react'

const events = [
  {
    highlighted: false,
    time: '08:00',
    title: 'Registration',
  },
  {
    highlighted: false,
    time: '08:45',
    title: 'Welcome',
  },
  {
    highlighted: true,
    time: '09:00',
    title: 'Opening Keynote',
  },
  {
    highlighted: false,
    time: '09:45',
    title: 'Starting Serverless with Go',
    desc:
      'Serverless – so hot right now. All the big players of cloud platforms have launched some kind of runtime to execute code. By focusing on coding business logic this leads to short production-ready developments. This talk aims to show why Go is a good choice to start with serverless.',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
      name: 'Stefan Meissner',
      desc: 'Backend developer',
    },
  },
  {
    highlighted: false,
    time: '10:30',
    title: 'Building Resilient Data Pipelines in Go',
    desc:
      'The modern world runs on Data. In this talk we will cover how Gophers of any level can easily build Data Pipelines in Go with Kafka and Cassandra. At the end, we will look at how GE has written a Data Pipeline in Go that can handle over 800,000 writes per second of industrial time series data.',
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/f982183e1db9eed435f2097d10281f7c?s=500',
      name: 'Grant Griffiths',
      desc: 'Senior software engineer',
    },
  },
  {
    highlighted: false,
    time: '11:00',
    title: 'Genetic Algorithms in Go',
    desc:
      "Genetic algorithms are metaheuristics that are based on the process of natural selection. This talk give a simple introduction to GA, with a couple of examples including evolving a phrase from Shakespeare's Hamlet, and also an image of Mona Lisa.",
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/ee191858f0d96ad93098694537f71998?s=500',
      name: 'Sau Sheong Chang',
      desc: 'Software engineer expert',
    },
  },
  {
    highlighted: false,
    time: '11:30',
    title: 'Lunch',
  },
  {
    highlighted: false,
    time: '13:00',
    title: 'Golang - Metric tracking and Nuances of Memory Management',
    desc:
      "Golang, we all know that it is a super fast, super developer friendly language.  But with all this speed around Golang it's very common for developers to suffer from pitfalls. I am gonna talk about how we can avoid those.",
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/3692ed4ac12d1d367148d6c7afab5908?s=500',
      name: 'Deepesh naini',
      desc: 'Polygot developer',
    },
  },
  {
    highlighted: false,
    time: '13:45',
    title: 'Concurrency in Ethereum (Blockchain)',
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/3692ed4ac12d1d367148d6c7afab5908?s=500',
      name: 'Tu Nguyen',
      desc: 'Erlang for GO developers',
    },
  },
  {
    highlighted: false,
    time: '14:30',
    title: 'Black Box Monitoring in Go',
    desc:
      "You've set up your favorite monitoring agent on all of your services and you have incredible visibility into the internals of your infrastructure. All seems good in the world, but can your end user actually use your service? In this talk we'll write a simple app that simulates end user activity.",
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/f982183e1db9eed435f2097d10281f7c?s=500',
      name: 'Grant Griffiths',
      desc: 'Senior software engineer',
    },
  },
  {
    highlighted: false,
    time: '15:00',
    title: 'Why would anyone embed Javascript into the Go app? (we do)',
    desc:
      "Golang is nice, fast and static, everyone knows that. Why would you even want to embed Javascript into that perfectly tuned Go machine? I'm going to tell how we process data with the rules written in Javascript in our Go app (and it works surprisingly fine).",
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/5141bce120e3b351e2a5156366bc8a24?s=500',
      name: 'Aleksei Shaikhaleev',
      desc: 'Backend developer',
    },
  },
  {
    highlighted: false,
    time: '15:45',
    title: 'Resiliency in Distributed Systems',
    desc:
      'Keeping distributed systems up and running is a hard problem to solve at scale. Adopting some basic patterns can help us guard our systems from sudden spike in traffic, dependency failures, network issues, slower downstream services and can help us achieve considerable uptime for our systems.',
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
      name: 'Rajeev N Bharshetty',
      desc: 'Computer science nerd',
    },
  },
  {
    highlighted: false,
    time: '16:30',
    title: 'Closing',
  },
]

const ConferenceSection = () => (
  <section
    id="conference"
    className="bg-grey-lightest sm:pt-24 pt-10 sm:pb-40 pb-32"
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

export default ConferenceSection
