const baseConfig = require('./webpack.config.base.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  ...baseConfig,
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    proxy: {
      '/': {
        target: 'http://localhost:3004',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
