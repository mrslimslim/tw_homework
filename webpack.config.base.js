const path = require('path')
const aliasConfig = require('./alias.config')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, './src'),
  public: path.join(__dirname, './public'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: aliasConfig
  },
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: '[name].bundle.js' // 文件名,不加 chunkhash,以方便调试时使用，生产环境下可以设置为 [name].bundle.[hash:8].js
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        // 开启缓存将转译结果缓存至文件系统
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings will inject a <style> tag inside the HTML file
          'css-loader', // translates CSS into CommonJS  这就是css-loader的参数表，其中你的webpack-config.js中loader字段中的css-loader配置后面添加modules，就可以开启CSS Modules
          'postcss-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.(jpg|jpeg|png|gif|svg)/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }, {
        test: /\.(eot|ttf|woff2?)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8176,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve('src', 'assets'),
        to: path.resolve('dist/assets')
      }
    ])
  ]
}
