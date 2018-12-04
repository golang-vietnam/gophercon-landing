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
      desc: 'Backend Developer @ TUI',
    },
  },
  {
    highlighted: false,
    time: '10:30',
    title: 'Go on a journey away from the mammoth C/C++ monolith.',
    desc:
      'There is no rocket science or big fancy voila neat trick on Golang here. This would just be our actual journey, from some home cooked C extension mod for Apache httpd and our own templating engine to a grand shift toward Golang, what we have done, how did we go-on, what we have not done',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/38506/Profile_photo.png',
      name: 'Kelvin Vuong',
      desc: 'CTO @ Chotot',
    },
  },
  {
    highlighted: false,
    time: '11:00',
    title: 'Golang and infrastructure works.',
    desc:
      'How we use Go to enable a fast pace development and deployment pipeline.',
    speaker: {
      avatar:
        'https://pbs.twimg.com/profile_images/972278423975485440/7Ep7AXKb_400x400.jpg',
      name: 'Tam Nguyen',
      desc: 'Software & DevOps Engineer @ Anduin Transactions',
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
    title: 'Anatomy of a Docker container.',
    desc:
      "What are Containers and How is Docker made? It's a bunch of namespaces and cgroups put together to build the process isolations that we see. What are namespaces and how do they operate? The talk invokes one Linux namespace at a time, as system calls from a Golang code, up to a full-fledged container",
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uxdute0wr_Screen%20Shot%202018-11-10%20at%203.04.26%20PM.png',
      name: 'Piyush Verma',
      desc: 'Director of Engineering @ Trusting Social',
    },
  },
  {
    highlighted: false,
    time: '13:45',
    title:
      'How Sendo.vn build a scalable architecture to grow 10X every year with Golang',
    desc:
      'This talk is how Sendo use microservices with gRPC, Protobuf and some architectures to speed up system.',
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/e6f4b652er_viettran_speaker.jpg',
      name: 'Viet Tran',
      desc: 'Solution Architect @ Sendo',
    },
  },
  {
    highlighted: false,
    time: '14:30',
    title: `An investigative walk through of Go channels`,
    desc:
      'This talk deeps dive into the inner workings of Go’s channels using an interactive debugger to understand it’s strengths and shortcomings. ',
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uirzjki7c_Screen%20Shot%202018-11-10%20at%204.58.34%20PM.png',
      name: (
        <a
          className="text-black"
          href="https://twitter.com/algogrit"
          rel="noopener noreferrer"
          target="_blank"
        >
          Gaurav Agarwal
        </a>
      ),
      desc: 'Indie Software Engineer',
    },
  },
  {
    highlighted: false,
    time: '15:00',
    title: 'Large Scale Data Capture & Experimentation Platform at Grab',
    desc:
      'Come to learn how we built a system to experiment and rollout features across hundreds of microservices at Grab. The talk is also inclusive of a high-performance event tracking system which captures hundreds of thousands of events per second from mobile apps and backend services and makes them easily queryable through SQL.',
    speaker: {
      avatar: 'https://avatars2.githubusercontent.com/u/583116?s=460&v=4',
      name: 'Roman Atachiants',
      desc: 'Head of Engineering @ Grab',
    },
  },
  {
    highlighted: false,
    time: '15:45',
    title: 'Production Ready Microservices at Scale',
    desc:
      'Writing Microservices which can withstand the unpredictable nature of the production environment at scale is a non-trivial task. Certain practices can help make our systems more predictable, transparent and resilient. For developers this means more confident and continuous deployments.',
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
      name: 'Rajeev N Bharshetty',
      desc: 'Product Engineer @ GO-JEK',
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
            08 Dec - Conference
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
