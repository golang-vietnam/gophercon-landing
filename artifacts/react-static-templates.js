

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/ngochangjelly/Desktop/gophercon-landing/node_modules/react-static/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404'), universalOptions)
      t_0.template = '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404'
      
const t_1 = universal(import('/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home'), universalOptions)
      t_1.template = '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home'
      

// Template Map
export default {
  '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404': t_0,
'/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home': t_1
}
// Not Found Template
export const notFoundTemplate = "/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404"

