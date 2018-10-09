import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

import '@/css/tailwind.scss'
import '@/utils/loading'

const App = () => (
  <main className="font-sans font-normal text-black leading-normal">
    <Router>
      <Routes />
    </Router>
  </main>
)

export default App
