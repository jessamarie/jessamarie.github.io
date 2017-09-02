const path = require('path')
var webpack = require('webpack')
// allows dynamic bundles
const HtmlWebpackPlugin = require('html-webpack-plugin')
// cleans unused from dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin')
// Extract text from a bundle, or bundles, into a SEPARATE file.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './app/app.module.js',
    vendor: ['angular', '@uirouter/angularjs']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'index'
    }),
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
            outputPath: 'fonts/',   // where the fonts will go
            publicPath: './'       // override the default path
          }
        }]
      }
    ]
  }
}
