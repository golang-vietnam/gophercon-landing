import React from 'react'

const events = [
  {
    highlighted: false,
    time: '08:00',
    title: 'Check-in',
  },
  {
    highlighted: false,
    time: '08:45',
    title: 'Welcome',
  },
  {
    highlighted: false,
    time: '09:00',
    title: 'Opening Keynote',
    desc: 'End the wars with Tanuki - Multiple programming languages in single web application.',
    speaker: {
      avatar:
        'https://media.licdn.com/dms/image/C5103AQEzEldCV1TSIQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=4O2RyC1E6yXRiE75H2BxD8LBUBCH3GF_diCU7kGbiyY',
      name: 'Sau Sheong Chang',
      desc: 'CEO Singapore Power Digital, founder GopherCon Singapore',
    },
    // link: 'https://ask.gophercon.vn/event/FEDN',
  },
  {
    highlighted: false,
    time: '09:45',
    title: 'An Introduction to SRE at Google (with DevOps Focus)',
    desc:
      'You may have heard about SRE - Site Reliability Engineering. But what is it actually? How is it related to DevOps and beneficial to Gopher community? My talk - An Introduction to SRE at Google (with DevOps Focus) will reveal the mystery about SRE world.',
    speaker: {
      avatar:
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c269.60.425.425a/1924657_10152281666789761_245561942_n.jpg?_nc_cat=110&_nc_oc=AQlEXTBsAj3QmNSw5TfMa9__1KIeEdHWlKp17sBGdd4ZO2Etj-DPm_WA945BjeJAo3w&_nc_ht=scontent.fsgn5-3.fna&oh=932d1199b81e5b07a97acc6be518d3fc&oe=5E29FF6A',
      name: 'Thang Le',
      desc: 'SRE Engineer at Google',
    },
    // link: 'https://ask.gophercon.vn/event/VGAF',
  },
  {
    highlighted: false,
    time: '10:30',
    title: 'Flowing with Go Context',
    desc:
      'In this session, we will observe how a flowing context can help you optimize the resource usage of your server and enables context-based programming. We will dive deeper into how context package works and why it is present in the Go as a native package at first place. We will see different use cases of Context package and the do’s and don’ts being followed among the Gophers.',
    speaker: {
      avatar:
        'https://media.licdn.com/dms/image/C5103AQGQAgRJIRimHw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6wZhbMHzhl3GliLbuuCntvAvR4NCOkomdHyPfnfmIO8',
      name: 'Yashish Dua',
      desc: 'Platform Engineer at Postman',
    },
    // link: 'https://ask.gophercon.vn/event/RDKD',
  },
  {
    highlighted: false,
    time: '11:00',
    title: 'A colorful journey of be from NodeJS to Go',
    desc:
      "A story behind a monolith NodeJS stack goes to 100+ Go microservices",
    speaker: {
      avatar:
        'https://i.imgur.com/w7zzT6s.jpg',
      name: 'Thach Le',
      desc: 'Engineer Manager at BEGROUP',
    },
    // link: 'https://ask.gophercon.vn/event/KIRP',
  },
  {
    highlighted: false,
    time: '11:45',
    title: 'Lunch',
  },
  {
    highlighted: false,
    time: '13:00',
    title: 'Introduction to NATS: A high-performance messaging system as a solution for communication between services',
    desc:
      'The NATS project has been around since 2010, but it has become more popular in recent years due to how well it fits into the paradigm of cloud-native applications, and microservices architectures. This talk will introduce NATS using Go and our stories using NATS in production at kumparan.',
    speaker: {
      avatar:
        'https://media.licdn.com/dms/image/C5603AQHE52dBt6aMQg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=fLYg1Yl3LOB1RU7OKrBml-ymOt-4eIEKnej856r7MPM',
      name: 'Doni Rubiagatra',
      desc: 'Software Engineer at kumparan, Cofounder Golang Surabya',
    },
    // link: 'https://ask.gophercon.vn/event/NXCE',
  },
  {
    highlighted: false,
    time: '13:45',
    title: 'How to leverage Gunk - the Go-derived syntax for Protocol Buffers to massively write microservices',
    desc:
      'Introduce how using Gunk, a modern frontend and syntax for Google’s Protocol Buffers that is instantly familiar and accessible to Go developers. Gunk builds on the venerable Go tooling – including versioning with Go modules, and a Go-derived syntax – to create streamlined, project-based workflows for building REST and gRPC services.',
    speaker: {
      avatar:
        'https://media.licdn.com/dms/image/C5603AQEyhtpT6Gb2lg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6iHDm1mqwV4uF6JsKOJx-S4WEnrcNNraInjKSADmnN8',
      name: 'Ken Shaw',
      desc: 'CTO Brank.as',
    },
    // link: 'https://ask.gophercon.vn/event/VIOB',
  },
  {
    highlighted: false,
    time: '14:30',
    title: `করো: Translating Go to Other (Human) Languages, and Back Again`,
    desc:
      'This talk shows the necessary steps for translating Go to other languages. It focuses mostly on the technical (compiler + toolchain) aspects, but it also highlights some techniques for localizing aspects like comments, documentation, and support mailing lists. This talk is also an excuse to show off Go’s support for UTF-8, as well as to highlight the unique way that Go handles bytes and strings under the hood. ',
    speaker: {
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQF2t2pUB7VIFA/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=zj2hM7Aa7kn0po57c8UpL4il4ncW473Llim2TvmEMs0',
      name: 'Aditya Mukerjee',
      desc: 'Software Engineer at Stripe',
    },
    // link: 'https://ask.gophercon.vn/event/YOXH',
  },
  {
    highlighted: false,
    time: '15:00',
    title: 'Overcoming latency, How we build a Cloud Game service with Go',
    desc:
      'CloudGaming is the new buzzword recently with the participation of Google Stadia, Microsoft Xcloud. Behind Cloud Gaming is the art of super-low latency realtime streaming to minimize the gap between input and media. I made an opensource POC of Cloud-Gaming in Golang that was Github 1 top trending.',
    speaker: {
      avatar: 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/50655434_1967490259964988_7169114008383913984_o.jpg?_nc_cat=103&_nc_oc=AQldMVbt1jIipW1PXSg2qbwtmxKPpoKvNnrpb7-AuQ6TL5HTp_A9sz7BpEFT5Ci0n80&_nc_ht=scontent.fsgn5-7.fna&oh=a934303008bbf151e3f92594acaab4a6&oe=5E2B6863',
      name: 'Thanh Nguyen',
      desc: 'Software Engineer at Grab',
    },
    // link: 'https://ask.gophercon.vn/event/KYMW',
  },
  {
    highlighted: true,
    time: '15:45',
    title: 'Closing talk',
    // desc:
    //   'Writing Microservices which can withstand the unpredictable nature of the production environment at scale is a non-trivial task. Certain practices can help make our systems 6 predictable, transparent and resilient. For developers this means more confident and continuous deployments.',
    // speaker: {
    //   avatar:
    //     'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
    //   name: 'Rajeev N Bharshetty',
    //   desc: 'Product Engineer @ GO-JEK',
    // },
    // link: 'https://ask.gophercon.vn/event/GYWJ',
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
    className="bg-grey-lightest sm:pt-32 pt-18 sm:pb-40 pb-32"
  >
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-16">
            02 Nov - Conference
          </h2>

          <div className="timeline">
            {events.map(
              ({ highlighted, time, title, desc, speaker, link }, index) => (
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
                      <div className="flex sm:flex-row flex-column flex-wrap items-center justify-between">
                        <div className="flex items-center mt-4">
                          <div
                            className="timeline__avatar"
                            style={{
                              backgroundImage: `url(${speaker.avatar})`,
                            }}
                          />
                          <div className="pl-4">
                            <h6 className="text-base">{speaker.name}</h6>
                            <div className="font-normal">{speaker.desc}</div>
                          </div>
                        </div>
                        {link && (
                          <a
                            className="font-medium px-5 py-3 leading-none text-white bg-primary inline-block mt-6"
                            href={link}
                          >
                            Ask question
                          </a>
                        )}
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
