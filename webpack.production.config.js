var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/src/react-sticky-scroll-spy.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}