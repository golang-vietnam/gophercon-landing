import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import PageHead from '@/components/PageHead'
import HeroBanner from './HeroBanner'
import Schedule from './Schedule'
import Workshop from './Workshop'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Venue from './Venue'

const Home = () => (
  <DefaultLayout>
    <PageHead />
    <HeroBanner />
    <Speakers />
    <Sponsors />
    <Workshop />
    <Schedule />
    <Venue />
  </DefaultLayout>
)

export default Home
