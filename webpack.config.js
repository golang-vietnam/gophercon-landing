import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import tailwindcss from 'tailwindcss'
import PurgeCSSPlugin from 'purgecss-webpack-plugin'

function getLoaderTest({ isCssModules = false, lang = 'css' }) {
  if (isCssModules) {
    // ie. "home.module.css"
    return new RegExp(`\\.module\\.${lang}$`)
  }
  return filePath => {
    // must match ".css"
    if (!new RegExp(`\\.${lang}$`).test(filePath)) {
      return false
    }
    // and not match ".module.css"
    if (new RegExp(`\\.module\\.${lang}$`).test(filePath)) {
      return false
    }
    return true
  }
}

function getCSSLoader({
  stage,
  lang = 'css',
  modules = false,
  loaders: extraLoaders = [],
}) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: false,
      modules,
      localIdentName: modules
        ? 'module__[local]___[hash:base64:5]'
        : '[hash:base64]',
    },
  }
  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      ident: 'postcss',
      sourceMap: false,
      plugins: () => [
        postcssFlexbugsFixes,
        autoprefixer({
          flexbox: 'no-2009',
        }),
        tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
      ],
    },
  }

  let loaders = [postCSSLoader, ...extraLoaders]

  if (stage === 'dev') {
    loaders = ['style-loader', cssLoader, ...loaders]
  } else if (stage === 'node') {
    loaders = [
      {
        ...cssLoader,
        options: { exportOnlyLocals: true },
      },
      ...loaders,
    ]
  } else if (stage === 'prod') {
    loaders = [ExtractCssChunks.loader, cssLoader, ...loaders]
  }

  return {
    include: path.resolve(__dirname, './'),
    test: getLoaderTest({ isCssModules: modules, lang }),
    use: loaders,
  }
}

function getSASSLoader({ stage, modules = false }) {
  return getCSSLoader({
    stage,
    modules,
    lang: 's(a|c)ss',
    loaders: [
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['src/'],
        },
      },
    ],
  })
}

export default (config, { stage, defaultLoaders }) => {
  const cssLoader = getCSSLoader({ stage, lang: 'css', modules: false })
  const cssModulesLoader = getCSSLoader({ stage, lang: 'css', modules: true })
  const scssLoader = getSASSLoader({ stage, modules: false })
  const scssModulesLoader = getSASSLoader({ stage, modules: true })

  defaultLoaders.jsLoader.use.push({
    loader: 'linaria/loader',
    options: { sourceMap: false },
  })

  config.module.rules = [
    {
      oneOf: [
        defaultLoaders.jsLoader,
        defaultLoaders.jsLoaderExt,
        scssLoader,
        scssModulesLoader,
        cssLoader,
        cssModulesLoader,
        {
          test: /\.(png|jpe?g)$/,
          enforce: 'post',
          resourceQuery: /\?lqip$/,
          loaders: [
            {
              loader: 'lqip-loader',
              options: {
                base64: true,
                palette: false,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g)$/,
          enforce: 'post',
          resourceQuery: /\?sqip$/,
          loaders: [
            {
              loader: 'sqip-loader',
              options: {
                numberOfPrimitives: 20,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g)$/,
          enforce: 'post',
          resourceQuery: /\?tqip$/,
          loaders: [
            {
              loader: 'image-trace-loader',
              options: {
                turdSize: 80,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          enforce: 'post',
          resourceQuery: /\?svgr$/,
          loaders: [
            {
              loader: '@svgr/webpack',
            },
          ],
        },
        defaultLoaders.fileLoader,
      ],
    },
  ]

  config.plugins.push(
    new ExtractCssChunks({
      hot: stage === 'dev',
      filename: '[name].[chunkHash:8].css',
      chunkFilename: '[id].[chunkHash:8].css',
      cssModules: true,
    })
  )

  if (stage === 'prod') {
    config.plugins.push(
      new PurgeCSSPlugin(require('./purgecss.config').default)
    )
  }

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.join(__dirname, 'src'),
  }

  return config
}
