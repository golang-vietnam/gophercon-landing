import React from 'react'
import { css } from 'linaria'
import LazyImage from '@/components/LazyImage'

const schedule = [
  {
    time: '08:00',
    title: 'Conference door open & registration',
    content: '',
    speaker: {
      name: '',
      position: '',
      avatar: '',
    },
    qna: '',
  },
  {
    time: '09:00',
    title: 'Welcome speech',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus cursus eleifend. In imperdiet mi ac faucibus efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    speaker: {
      name: 'Christopher Molozian',
      position: 'Erlang for GO developer',
      // avatar: './images/ava.png',
      avatar: <LazyImage {...require('./images/ava.png')} />,
    },
    qna: '',
  },
  {
    time: '12:00',
    title: 'Lunch break',
    content: '',
    speaker: {
      name: '',
      position: '',
      avatar: '',
    },
    qna: '',
  },
  {
    time: '13:00',
    title: 'Build your own distributed database',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus cursus eleifend. In imperdiet mi ac faucibus efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    speaker: {
      name: 'Christopher Molozian',
      position: 'Erlang for GO developer',
      avatar: './images/ava.png',
    },
    qna: '',
  },
]
const Schedule = ({ ...rest }) => {
  return (
    <div
      className={[
        'container',
        css`
          @apply my-12;
          @screen md {
            @apply my-24;
          }
        `,
      ]}
      {...rest}
    >
      <div className="md:col text-grey">
        <div className="md:row font-bold text-3xl md:text-5xl text-primary mb-8 md:mb-16">
          Schedule
        </div>
        {schedule.map((s, key) => (
          <div key={key} className="md:row md:flex md:justify-start my-10">
            <div className="text-2xl md:text-4xl font-bold md:w-1/4">
              {s.time}
            </div>
            <div className="md:w-3/4">
              <div className="text-2xl font-bold">{s.title}</div>
              <div className="text-base">{s.content}</div>
              {s.speaker.avatar && s.qna && (
                <div className="flex justify-between">
                  <div className="flex justify-between items-center">
                    {/* <LazyImage {...require(`s.speaker.avatar?sqip`)} /> */}
                    {s.speaker.avatar}
                    <div className="flex items-center">
                      <div className="font-bold">{s.speaker.name}</div>
                      <div>{s.speaker.position}</div>
                    </div>
                  </div>
                  <button
                    className={[
                      'block md:ml-auto mt-16 text-lg lg:text-2xl font-medium bg-primary px-6 py-3 focus:outline-none',
                      css`
                        &:disabled {
                          opacity: 0.5;
                        }
                      `,
                    ]}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Ask question
                  </button>
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
