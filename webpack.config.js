const fs = require('fs')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './app')
}

const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    configObj.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return configObj
}

const plugins = () => {
  const basePlugins = [
    ...PAGES.map(page => new HTMLWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      minify: {
        collapseWhitespace: isProd
      }
    })),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: path.resolve(__dirname, 'src/assets') , to: path.resolve(__dirname, 'app')}
    //   ]
    // }),
  ]

  if (isProd) {
    basePlugins.push(
      new ImageminPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            ]
          ]
        }
      })
    )
  }

  return basePlugins
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ["regenerator-runtime/runtime.js", './js/main.js'],
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'app'),
    // publicPath: '',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
    },
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              },
            }
          },
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              },
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      },
      
      {
        test: /\.(?:|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        },
      }
    ]
  }
}