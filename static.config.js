import path from 'path'
import { siteRoot } from './src/config'

export default {
  siteRoot: siteRoot,
  plugins: [
    'react-static-plugin-reach-router',
    [
      'react-static-plugin-favicons',
      {
        inputFile: path.resolve(__dirname, './public/favicons/favicon.png'),
        configuratin: {
          appName: 'GopherCon Vietnam 2019',
          appDescription: 'GopherCon Vietnam 2019',
          developerName: null,
          developerURL: null,
        },
      },
    ],
  ],
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/pages/home',
      },
      {
        path: '404',
        template: 'src/pages/404',
      },
    ]
  },
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/\\.netlify/functions': '',
        },
      },
    },
  },
}
