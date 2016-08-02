var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './web/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        "presets": ["es2015-node5", "stage-0", "react"],
        "plugins": ["react-hot-loader/babel"]
      },
      include: path.join(__dirname, 'web')
    }]
  }
};
