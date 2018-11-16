import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import PageHead from '@/components/PageHead'
import HeroBanner from './HeroBanner'
import Conference from './Conference'
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
    <Conference />
    <Workshop />
    <Venue />
  </DefaultLayout>
)

export default Home
