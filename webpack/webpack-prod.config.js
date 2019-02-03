const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackCommon = require('./webpack-common.config');

const cssnanoSetup = cssnano({
  autoprefixer: {
    add: true,
    remove: true,
  },
  discardComments: {
    removeAll: true,
  },
  discardDuplicates: true,
  discardUnused: false,
  mergeIdents: false,
  reduceIdents: false,
  safe: true,
  sourcemap: true,
});

webpackCommon.bail = true;
// webpackCommon.debug = false;
webpackCommon.profile = false;

module.exports = merge(webpackCommon, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        extractComments: true,
        uglifyOptions: {
          debug: true,
          mangle: true,
          keep_fnames: false,
          compress: {
            inline: false,
          },
        },
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      // chunks: 'all',
      // chunks: "initial",
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
    }),
    // Ignore unnessesary languages
    new webpack.IgnorePlugin(/^\.\/(?!(en|ru))(.+)$/, /validatorjs\/src\/lang/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('light.css', { allChunks: true }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardDuplicates: { removeAll: true },
        discardComments: { removeAll: true },
      },
      canPrint: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /module\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [cssnanoSetup];
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
              },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        exclude: /module\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      // {
      //    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
      //    exclude: /node_modules/,
      //    loader: "url-loader?name=fonts/[name]_[hash].[ext]"
      // }
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,
          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: 'application/font-woff',
          // Output below fonts directory
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
    ],
  },
});
