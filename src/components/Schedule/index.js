import React from 'react'
import { css } from 'linaria'
import LazyImage from '@/components/LazyImage'

const schedule = [
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
    content:
      'End the wars with Tanuki - Multiple programming languages in single web application.',
    speaker: {
      avatar: [
        'https://media.licdn.com/dms/image/C5103AQEzEldCV1TSIQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=4O2RyC1E6yXRiE75H2BxD8LBUBCH3GF_diCU7kGbiyY',
      ],
      name: 'Sau Sheong Chang',
      position: 'CEO Singapore Power Digital, founder GopherCon Singapore',
    },
    // link: 'https://ask.gophercon.vn/event/FEDN',
  },
  {
    highlighted: false,
    time: '09:45',
    title: 'An Introduction to SRE at Google (with DevOps Focus)',
    content:
      'You may have heard about SRE - Site Reliability Engineering. But what is it actually? How is it related to DevOps and beneficial to Gopher community? My talk - An Introduction to SRE at Google (with DevOps Focus) will reveal the mystery about SRE world.',
    speaker: {
      avatar: [
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c269.60.425.425a/1924657_10152281666789761_245561942_n.jpg?_nc_cat=110&_nc_oc=AQlEXTBsAj3QmNSw5TfMa9__1KIeEdHWlKp17sBGdd4ZO2Etj-DPm_WA945BjeJAo3w&_nc_ht=scontent.fsgn5-3.fna&oh=932d1199b81e5b07a97acc6be518d3fc&oe=5E29FF6A',
      ],
      name: 'Thang Le',
      position: 'SRE Engineer at Google',
    },
    // link: 'https://ask.gophercon.vn/event/VGAF',
  },
  {
    highlighted: false,
    time: '10:30',
    title: 'Flowing with Go Context',
    content:
      'In this session, we will observe how a flowing context can help you optimize the resource usage of your server and enables context-based programming. We will dive deeper into how context package works and why it is present in the Go as a native package at first place. We will see different use cases of Context package and the do’s and don’ts being followed among the Gophers.',
    speaker: {
      avatar: [
        'https://media.licdn.com/dms/image/C5103AQGQAgRJIRimHw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6wZhbMHzhl3GliLbuuCntvAvR4NCOkomdHyPfnfmIO8',
      ],
      name: 'Yashish Dua',
      position: 'Platform Engineer at Postman',
    },
    // link: 'https://ask.gophercon.vn/event/RDKD',
  },
  {
    highlighted: false,
    time: '11:15',
    title: 'A colorful journey of be from NodeJS to Go',
    content:
      'Sooner or later, everyone of us, must face a beast, called legacy, the code maintained by someone not the author. Let me tell you how we face and beat it, a journey from a black hole 100k LOC monolithic application to 100+ microservices',
    speaker: {
      avatar: ['https://i.imgur.com/w7zzT6s.jpg'],
      name: 'Thach Le',
      position: 'Engineer Manager at BEGROUP',
    },
    // link: 'https://ask.gophercon.vn/event/KIRP',
  },
  {
    highlighted: false,
    time: '11:45',
    title: '[Lightning Talk] A practical way to generate unique id with Go',
    content:
      'Unique ID generation is variant and not so simple to fit with what the system wants. In this talk, I’ll talk about how my team designed and implemented a custom Unique ID generation method, that fits our requirements, and powers all service-to-service request’s id in my company.',
    speaker: {
      avatar: [
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/eudn8m23lh_IMG_1104.JPG',
      ],
      name: 'Manh Dao',
      position: 'Software Engineer at MoneyForward',
    },
    // link: 'https://ask.gophercon.vn/event/KIRP',
  },
  {
    highlighted: false,
    time: '12:00',
    title: 'Lunch',
  },
  {
    highlighted: false,
    time: '13:00',
    title:
      'Introduction to NATS: A high-performance messaging system as a solution for communication between services',
    content:
      'The NATS project has been around since 2010, but it has become more popular in recent years due to how well it fits into the paradigm of cloud-native applications, and microservices architectures. This talk will introduce NATS using Go and our stories using NATS in production at kumparan.',
    speaker: {
      avatar: [
        'https://media.licdn.com/dms/image/C5603AQHE52dBt6aMQg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=fLYg1Yl3LOB1RU7OKrBml-ymOt-4eIEKnej856r7MPM',
      ],
      name: 'Doni Rubiagatra',
      position: 'Software Engineer at kumparan, Cofounder Golang Surabya',
    },
    // link: 'https://ask.gophercon.vn/event/NXCE',
  },
  {
    highlighted: false,
    time: '13:40',
    title:
      'How to leverage Gunk - the Go-derived syntax for Protocol Buffers to massively write microservices',
    content:
      'Introduce how using Gunk, a modern frontend and syntax for Google’s Protocol Buffers that is instantly familiar and accessible to Go developers. Gunk builds on the venerable Go tooling – including versioning with Go modules, and a Go-derived syntax – to create streamlined, project-based workflows for building REST and gRPC services.',
    speaker: {
      avatar: [
        'https://media.licdn.com/dms/image/C5603AQEyhtpT6Gb2lg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6iHDm1mqwV4uF6JsKOJx-S4WEnrcNNraInjKSADmnN8',
      ],
      name: 'Ken Shaw',
      position: 'CTO Brank.as',
    },
    // link: 'https://ask.gophercon.vn/event/VIOB',
  },
  {
    highlighted: false,
    time: '14:15',
    title: `করো: Translating Go to Other (Human) Languages, and Back Again`,
    content:
      'This talk shows the necessary steps for translating Go to other languages. It focuses mostly on the technical (compiler + toolchain) aspects, but it also highlights some techniques for localizing aspects like comments, documentation, and support mailing lists. This talk is also an excuse to show off Go’s support for UTF-8, as well as to highlight the unique way that Go handles bytes and strings under the hood. ',
    speaker: {
      avatar: [
        'https://media.licdn.com/dms/image/C4D03AQF2t2pUB7VIFA/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=zj2hM7Aa7kn0po57c8UpL4il4ncW473Llim2TvmEMs0',
      ],
      name: 'Aditya Mukerjee',
      position: 'Software Engineer at Stripe',
    },
    // link: 'https://ask.gophercon.vn/event/YOXH',
  },
  {
    highlighted: false,
    time: '15:00',
    title: `Why you can't use GO ! (away from anti patterns)`,
    content:
      'We’ve seen Go being used widely in high performant backend applications, gRPC, embedded systems and so on. Not Choosing Go, needs more understanding and convincing. Obvious thing would be reflection, Will see use case and code, also will cover how go differs from our assumption.',
    speaker: {
      avatar: [
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/d56qbrt37s_speaker.jpg',
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/ciq7zh3b5p_PROFILE_PIC.jpg',
      ],
      name: 'Dinesh Kumar and Maulik Soneji',
      position: 'Product Engineers at GoJek',
    },
    // link: 'https://ask.gophercon.vn/event/YOXH',
  },
  {
    highlighted: false,
    time: '15:40',
    title: 'Overcoming latency, How we build a Cloud Game service with Go',
    content:
      'CloudGaming is the new buzzword recently with the participation of Google Stadia, Microsoft Xcloud. Behind Cloud Gaming is the art of super-low latency media streaming. Let’s find out how I can use Golang stack to create a Cloud Gaming platform that can bring the smoothest gaming experience.',
    speaker: {
      avatar: [
        'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/50655434_1967490259964988_7169114008383913984_o.jpg?_nc_cat=103&_nc_oc=AQldMVbt1jIipW1PXSg2qbwtmxKPpoKvNnrpb7-AuQ6TL5HTp_A9sz7BpEFT5Ci0n80&_nc_ht=scontent.fsgn5-7.fna&oh=a934303008bbf151e3f92594acaab4a6&oe=5E2B6863',
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/t3793ll1xn_72115278_2467426763537614_1520100230131875840_n.png',
      ],
      name: 'Thanh Nguyen and Minh Tri',
      position: 'Software Engineer at Grab and Shopee',
    },
    // link: 'https://ask.gophercon.vn/event/KYMW',
  },
  {
    highlighted: false,
    time: '16:20',
    title: 'Image Processing Service: From On-Premise To Cloud Function With Golang',
    content:
      '5 years ago, the image service was a small piece of code in a huge monolithic code on a big server, now it is just simply a bunch of functions in Go without "a server"',
    speaker: {
      avatar: [
        'https://jonathanmh.com/wp-content/uploads/2018/01/jonathan-gopher-1200x1285.png',
      ],
      name: 'Dat Tran',
      position: 'Software Engineer at ChoTot',
    },
    // link: 'https://ask.gophercon.vn/event/KYMW',
  },
  {
    highlighted: true,
    time: '16:45',
    title: 'Closing talk',
  },
  {
    highlighted: false,
    time: '17:00',
    title: 'Closing',
  },
]
const Schedule = ({ ...rest }) => {
  const isRemoteSrc = path => {
    return String(path).substr(0, 4) === 'http'
  }
  return (
    <div className="page-section container pt-16 md:pt-24" {...rest}>
      <div className="row md:col text-grey">
        <div className="container font-bold text-3xl md:text-5xl text-primary border-b pb-10">
          Schedule
        </div>
        {schedule.map((s, key) => (
          <div
            key={key}
            className="container xs:flex xs:justify-start py-10 border-b"
          >
            <div className="text-xl md:text-4xl font-bold w-1/4">{s.time}</div>
            <div className="xs:w-3/4 flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-bold">{s.title}</div>
              <div className="text-base">{s.content}</div>
              {s.speaker && s.speaker.avatar.length > 0 && (
                <div className="flex justify-between">
                  <div className="flex flex-wrap items-center">
                    {s.speaker.avatar.map((avatar, index) => (
                      <div className="mt-4" key={index}>
                        {!isRemoteSrc(avatar) && (
                          <LazyImage
                            className="w-16 h-16 mr-4 flex-shrink-0 object-cover"
                            {...require(`${avatar}?sqip`)}
                          />
                        )}
                        {isRemoteSrc(avatar) && (
                          <img
                            className="w-16 h-16 mr-4 rounded-full flex-shrink-0 object-cover"
                            src={avatar}
                          />
                        )}
                      </div>
                    ))}

                    <div className="flex flex-col mt-4">
                      <div className="font-bold">{s.speaker.name}</div>
                      <div>{s.speaker.position}</div>
                    </div>
                  </div>

                  {false && (
                    <button
                      type="submit"
                      className={[
                        'block text-white md:ml-auto mt-16 text-lg lg:text-2xl font-medium bg-primary px-6 py-3 focus:outline-none',
                      ]}
                    >
                      Ask question
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
