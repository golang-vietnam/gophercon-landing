import React from 'react'

const ScheduleSection = () => (
  <section
    id="schedule"
    className="bg-grey-lightest sm:pt-20 pt-10 sm:pb-40 pb-32"
  >
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-16">Schedule</h2>

          <div className="timeline">
            <div className="row flex">
              <div className="col timeline__time flex flex-col items-center">
                <span className="text-2xl mb-3">08:00</span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-1 mb-16">
                  {'Conference door open & registration'}
                </h4>
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
                <h4 className="text-xl mt-3 mb-4">Welcome speech</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus rhoncus cursus eleifend. In imperdiet mi ac faucibus
                  efficitur. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos
                </p>
                <div className="flex items-center">
                  <div
                    className="timeline__avatar"
                    style={{ backgroundImage: 'url(/images/avatar.png)' }}
                  />
                  <div className="pl-4">
                    <h6 className="text-base">Christopher Molozian</h6>
                    <div className="font-normal">Erlang for GO developers</div>
                  </div>
                </div>
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
                <span className="text-2xl mb-3 mt-3">13:30</span>
                <div className="timeline__line bg-primary flex-1" />
              </div>
              <div className="col">
                <h4 className="text-xl mt-3 mb-4">
                  Build your own distributed database
                </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus rhoncus cursus eleifend. In imperdiet mi ac faucibus
                  efficitur. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos
                </p>
                <div className="flex items-center">
                  <div
                    className="timeline__avatar"
                    style={{ backgroundImage: 'url(/images/avatar.png)' }}
                  />
                  <div className="pl-4">
                    <h6 className="text-base">Christopher Molozian</h6>
                    <div className="font-normal">Erlang for GO developers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ScheduleSection
