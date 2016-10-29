const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.es6',
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/public/dist',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    //new webpack.DefinePlugin({
    //    'process.env': {
    //        NODE_ENV: JSON.stringify('production')
    //    }
    //}),
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
