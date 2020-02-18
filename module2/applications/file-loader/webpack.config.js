'use strict'

const { resolve } = require('path')

module.exports = {
  entry: resolve('index.js'),
  
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    // rules: [{
    //   test: /\.(txt|jpg|svg|jpeg|png|ico|gif|ttf|woff|woff2)$/,
    //   use: {
    //     loader: 'file-loader',
    //     query: {
    //       name: '[path][name][hash:8].[ext]'
    //     }
    //   }
    // }]
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  }
}

