const path = require('path')
var webpack = require('webpack')
// allows dynamic bundles
const HtmlWebpackPlugin = require('html-webpack-plugin')
// cleans unused from dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin')
// Extract text from a bundle, or bundles, into a separate file.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './app/app.module.js',
    vendor: ['angular', '@uirouter/angularjs']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'index'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
