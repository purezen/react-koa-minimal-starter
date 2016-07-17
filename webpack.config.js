var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './web/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    colors: true,
    inline: false,
    port: 3001,
    hot: true
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
