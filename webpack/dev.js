const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackCommon = require("./common");

module.exports = merge(webpackCommon, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new ExtractTextPlugin("light.css", { allChunks: true }), // light dark fonts
    new webpack.IgnorePlugin(/^\.\/(?!(en|ru))(.+)$/, /validatorjs\/src\/lang/),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "dev")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /module\.scss$/,
        use: [
          {
            loader: "style-loader?sourceMap"
          },
          {
            loader:
              "css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, "../src")]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /module\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,
          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: "application/font-woff",
          // Output below fonts directory
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../web"),
    index: "index.html",
    compress: true,
    port: 8080,
    historyApiFallback: true
  }
});
