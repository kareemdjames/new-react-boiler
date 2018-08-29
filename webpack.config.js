const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html'
})

const PORT = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('/dist'),
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
     },
     {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true,
            camelCase: true,
            minimize: true
          }
        }
      ]
     }
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ],
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
    open: true
  }






}
