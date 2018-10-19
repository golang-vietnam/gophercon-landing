import React from 'react'

const ScheduleSection = () => (
  <section
    id="schedule"
    className="bg-grey-lightest sm:pt-20 pt-10 sm:pb-40 pb-32"
  >
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-16">Workshop</h2>

          <div className="timeline">
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl mb-3">08:00</span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-1 mb-16">{'Registration'}</h4>
              </div>
            </div>
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl font-bold text-primary mb-3 mt-3">
                  09:00
                </span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col mb-16">
                <h4 className="text-xl mt-3 mb-4">Go Fundamentals</h4>
                <p className="mb-4">
                  This class provides an idiomatic introduction to the Go
                  programming language supported by extensive examples and
                  hands-on exercises
                </p>
                <h5 className="text-base mb-2">Course online</h5>
                <ul>
                  <li>Language Syntax</li>
                  <li>Using Pointers</li>
                  <li>Arrays, Slices and Maps</li>
                  <li>Methods and Interfaces</li>
                  <li>Packaging and Exporting</li>
                  <li>Testing</li>
                  <li>Managing External Dependencies</li>
                  <li>Standard Library</li>
                </ul>
              </div>
            </div>
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl my-3">12:00</span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-4 mb-16">Lunch break</h4>
              </div>
            </div>
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl font-bold text-primary mb-3 mt-3">
                  13:30
                </span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-3 mb-4">Go Immediates</h4>
                <p className="mb-4">
                  This is for any intermediate-level developer who has some
                  experience with other programming languages and wants to learn
                  Go.
                </p>
                <ul>
                  <li>Language Syntax</li>
                  <li>Data Structures</li>
                  <li>Interface</li>
                  <li>Decoupling</li>
                  <li>Architecture</li>
                  <li>Concurrency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ScheduleSection
