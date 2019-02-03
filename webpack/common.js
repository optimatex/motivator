const path = require('path');

const properPath = path.resolve(__dirname, '../');

module.exports = {
  context: properPath,
  entry: {
    main: 'web/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/static/',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      assets: path.resolve(__dirname, '../assets'),
      web: path.resolve(__dirname, '../web'),
      node_modules: path.resolve(__dirname, '../node_modules'),
      src: path.resolve(__dirname, '../src'),
      app: path.resolve(__dirname, '../src/app'),
      maps: path.resolve(__dirname, '../src/maps'),
    },
  },
};
