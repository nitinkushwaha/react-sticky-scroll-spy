var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/react-sticky-scroll-spy.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  externals: {
        "react": "React"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}