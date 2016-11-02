const path = require('path')

module.exports = {
  devtool: 'eval',

  entry: [
    // 'babel-polyfill',
    './src',
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js'],
    root: [
      path.join(__dirname, 'src'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },
}
