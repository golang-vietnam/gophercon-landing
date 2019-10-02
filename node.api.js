import path from 'path'
import { promisify } from 'util'
import { exec } from 'child_process'
import glob from 'glob-all'
import webpack from './webpack.config'

export default ({ includePaths = [], ...rest }) => ({
  webpack,
  afterPrepareRoutes: async ({ stage }) => {
    if (stage !== 'prod') {
      return
    }
    // extracts linaria selectors to later exclude them in PurgeCSS config
    const files = glob.sync([path.resolve(__dirname, './src/**/*.js')])
    const linariaStylesDir = path.resolve(__dirname, './.linaria-styles')
    const spawnAsync = promisify(exec)
    await spawnAsync(`npx linaria -o ${linariaStylesDir} ${files.join(' ')}`)
  },
})
