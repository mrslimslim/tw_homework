const path = require('path')
const aliasConfig = require('./alias.config')

const PATHS = {
  src: path.join(__dirname, './src'),
  public: path.join(__dirname, './public'),
  build: path.join(__dirname, './build')
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
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js' // 文件名,不加 chunkhash,以方便调试时使用，生产环境下可以设置为 [name].bundle.[hash:8].js
  }
}
