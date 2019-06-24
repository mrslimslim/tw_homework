const baseConfig = require('./webpack.config.base.js')

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack')

module.exports = {
  ...baseConfig,
  devtool: 'source-map',
  module: {
    noParse: '/lodash/',
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
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader'
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
          limit: 100,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve('src', 'assets'),
        to: path.resolve('dist/assets')
      }
    ]),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
