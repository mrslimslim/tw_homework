const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseConfig = require('./webpack.config.base.js')

const config = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  mode: 'production',
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      title: 'Cruise'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          enforce: true,
          chunks: 'initial'
        },
        // 将所有的样式文件打包到单个项目
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

module.exports = config
