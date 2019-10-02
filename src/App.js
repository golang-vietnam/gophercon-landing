import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import PageHead from '@/components/PageHead'

import '@/css/tailwind.scss'

const App = () => (
  <Root>
    <PageHead />

    <main className="font-sans font-normal text-black leading-normal">
      <Suspense fallback={<div />}>
        <Routes />
      </Suspense>
    </main>
  </Root>
)

export default App
