var path = require('path');
var webpack = require('webpack');

var loaders = [{
  test: /\.js$/,
  loader: 'babel',
  query: {
    "presets": ["es2015-node5", "stage-3", "react"],
    "plugins": ["react-hot-loader/babel"]
  },
  include: path.join(__dirname, '../web')
}];
var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

module.exports = {
  devtool: 'source-map',
  entry: './web/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: loaders
  }
};
