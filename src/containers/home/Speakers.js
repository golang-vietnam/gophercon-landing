import React from 'react'

const speakers = [
  {
    name: 'Sau Sheong Chang',
    info: (
      <p>
        CEO Singapore Power Digital, founder GopherCon Singapore
      </p>
    ),
    avatar:
      'https://media.licdn.com/dms/image/C5103AQEzEldCV1TSIQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=4O2RyC1E6yXRiE75H2BxD8LBUBCH3GF_diCU7kGbiyY',
  },
  {
    name: 'Thang Le',
    info: (
      <p>
        SRE Engineer
        <br />
        at Google Australia
      </p>
    ),
    avatar:
      'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c269.60.425.425a/1924657_10152281666789761_245561942_n.jpg?_nc_cat=110&_nc_oc=AQlEXTBsAj3QmNSw5TfMa9__1KIeEdHWlKp17sBGdd4ZO2Etj-DPm_WA945BjeJAo3w&_nc_ht=scontent.fsgn5-3.fna&oh=932d1199b81e5b07a97acc6be518d3fc&oe=5E29FF6A',
  },
  {
    name: 'Yashish Dua',
    info: (
      <p>
        Platform Engineer
        <br />
        at Postman
      </p>
    ),
    avatar:
      'https://media.licdn.com/dms/image/C5103AQGQAgRJIRimHw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6wZhbMHzhl3GliLbuuCntvAvR4NCOkomdHyPfnfmIO8',
  },
  {
    name: 'Thach Le',
    info: (
      <p>
        Engineer Manager
        <br />
        at BEGROUP
      </p>
    ),
    avatar:
      'https://i.imgur.com/w7zzT6s.jpg',
  },
  {
    name: 'Doni Rubiagatra',
    info: (
      <p>
        Software Engineer at kumparan
        <br />
        Cofounder Golang Surabya
      </p>
    ),
    avatar: 'https://media.licdn.com/dms/image/C5603AQHE52dBt6aMQg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=fLYg1Yl3LOB1RU7OKrBml-ymOt-4eIEKnej856r7MPM',
  },
  {
    name: 'Ken Shaw',
    info: (
      <p>
        CTO 
        <br />
        Brank.as
      </p>
    ),
    avatar:
      'https://media.licdn.com/dms/image/C5603AQEyhtpT6Gb2lg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6iHDm1mqwV4uF6JsKOJx-S4WEnrcNNraInjKSADmnN8',
  },
  {
    name: 'Aditya Mukerjee',
    info: (
      <p>
        Software Engineer 
        <br />
        at Stripe
      </p>
    ),
    avatar:
      'https://media.licdn.com/dms/image/C4D03AQF2t2pUB7VIFA/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=zj2hM7Aa7kn0po57c8UpL4il4ncW473Llim2TvmEMs0',
  },
  {
    name: 'Thanh Nguyen',
    info: (
      <p>
        Software Engineer
        <br />
        at Grab
      </p>
    ),
    avatar:
      'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/50655434_1967490259964988_7169114008383913984_o.jpg?_nc_cat=103&_nc_oc=AQldMVbt1jIipW1PXSg2qbwtmxKPpoKvNnrpb7-AuQ6TL5HTp_A9sz7BpEFT5Ci0n80&_nc_ht=scontent.fsgn5-7.fna&oh=a934303008bbf151e3f92594acaab4a6&oe=5E2B6863',
  },
]

const SpeakersSection = () => (
  <section id="speakers" className="text-center">
    {/* <div className="pt-40 pb-20 bg-primary" /> */}
    {/* <div className="triangle" /> */}
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
          {/* <div className="mt-6">
            <a
              className="font-medium mx-3 px-5 py-2 text-white bg-primary inline-block"
              href="#"
            >
              Become a speaker
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </section>
)

export default SpeakersSection
