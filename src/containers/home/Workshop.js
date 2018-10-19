import React from 'react'

const WorkshopSection = () => (
  <section id="workshop" className="bg-primary sm:pt-24 pt-10 sm:pb-32 pb-24">
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-3xl text-center mb-16 text-white">Workshop</h2>

          <div className="timeline text-white">
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl mb-3 text-white">08:00</span>
                <div className="timeline__line bg-white opacity-50 flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-1 mb-16">{'Registration'}</h4>
              </div>
            </div>
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl font-bold text-white mb-3 mt-3">
                  09:00
                </span>
                <div className="timeline__line bg-white opacity-50 flex-1" />
              </div>
              <div className="col mb-16">
                <h4 className="text-xl mt-3 mb-4">Go Fundamentals</h4>
                <p className="mb-4 opacity-75">
                  This class provides an idiomatic introduction to the Go
                  programming language supported by extensive examples and
                  hands-on exercises
                </p>
                <h5 className="text-base mb-2">Course online</h5>
                <ul className="opacity-75">
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
                <span className="text-2xl my-3 text-white">12:00</span>
                <div className="timeline__line bg-white opacity-50 flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-4 mb-16 text-white">Lunch break</h4>
              </div>
            </div>
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl font-bold mb-3 mt-3">13:30</span>
                <div className="timeline__line bg-white opacity-50 flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-3 mb-4 text-white">Go Immediates</h4>
                <p className="mb-4">
                  This is for any intermediate-level developer who has some
                  experience with other programming languages and wants to learn
                  Go.
                </p>
                <ul className="opacity-75">
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

          <h2 className="text-center text-white mt-20 mb-10">
            About the instructor
          </h2>
          <div className="mx-auto lg:w-1/2 text-center">
            <div
              className="avatar bg-cover bg-no-repeat bg-center rounded-full mx-auto"
              style={{
                width: 160,
                height: 160,
                backgroundImage: `url(https://secure.gravatar.com/avatar/ee191858f0d96ad93098694537f71998?s=500`,
              }}
            />
            <h4 className="text-white text-xl mt-6 mb-4">Sau Sheong Chang</h4>
            <p className="text-white">
              Sau Sheong has been doing software development for 22 years,
              mostly in web application development. He is active in the Ruby
              and Go developer communities have have contributed to open source
              projects and spoke at meetups and conferences. Sau Sheong has also
              published 4 programming-related books, on Ruby and Go.
            </p>
          </div>

          <h3 className="text-center text-white mt-20 mb-10">Venues</h3>
          <div className="mx-auto lg:w-4/5 text-white">
            <div className="row flex text-center flex-wrap">
              <div className="col sm:w-1/3 w-full mb-10">
                <h5 className="text-xl mb-2">Hoa Sen University</h5>
                <p className="text-lg">8 Nguyen Van Trang, D1</p>
              </div>
              <div className="col sm:w-1/3 w-full mb-10">
                <h5 className="text-xl mb-2">RMIT University</h5>
                <p className="text-lg">702 Nguyen Van Linh, D7</p>
              </div>
              <div className="col sm:w-1/3 w-full mb-10">
                <h5 className="text-xl mb-2">HCMUS</h5>
                <p className="text-lg">227 Nguyen Van Cu, D5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WorkshopSection
