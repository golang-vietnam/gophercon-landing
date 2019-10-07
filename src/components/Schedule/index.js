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
      avatar: './images/ava.png',
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
      avatar: 'https://avatars1.githubusercontent.com/u/19520278',
    },
    qna: '',
  },
]
const Schedule = ({ ...rest }) => {
  const isRemoteSrc = path => {
    return String(path).substr(0, 4) === 'http'
  }
  return (
    <div className="container my-12 md:my-24" {...rest}>
      <div className="md:col text-grey">
        <div className="md:row font-bold text-3xl md:text-5xl text-primary mb-8 md:mb-16 border-b">
          Schedule
        </div>
        {schedule.map((s, key) => (
          <div
            key={key}
            className="md:row md:flex md:justify-start py-10 border-b"
          >
            <div className="text-2xl md:text-4xl font-bold md:w-1/4">
              {s.time}
            </div>
            <div className="md:w-3/4">
              <div className="text-2xl font-bold">{s.title}</div>
              <div className="text-base">{s.content}</div>
              {s.speaker.avatar && (
                <div className="flex justify-between">
                  <div className="flex justify-between items-center mt-4">
                    {!isRemoteSrc(s.speaker.avatar) && (
                      <LazyImage
                        className="w-16"
                        {...require(`${s.speaker.avatar}?sqip`)}
                      />
                    )}
                    {isRemoteSrc(s.speaker.avatar) && (
                      <img
                        className="w-16 rounded-full"
                        src={s.speaker.avatar}
                      />
                    )}
                    <div className="flex flex-col ml-4">
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
