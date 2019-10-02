import path from 'path'
import glob from 'glob-all'
import PurgecssWhitelister from 'purgecss-whitelister'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

export default {
  paths: glob.sync(['src/**/*.js']),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['js', 'jsx'],
    },
  ],
  whitelist: ['html', 'body'].concat(
    PurgecssWhitelister([path.join(__dirname, './.linaria-styles/**/*.css')])
  ),
  whitelistPatterns: [
    /^module__.+/, // css modules
  ],
}
