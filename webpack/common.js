const path = require("path");

const properPath = path.resolve(__dirname, "../");

module.exports = {
  context: properPath,
  entry: {
    main: "web/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/static/"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  resolve: {
    extensions: [".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      assets: path.resolve(__dirname, "../assets"),
      web: path.resolve(__dirname, "../web"),
      node_modules: path.resolve(__dirname, "../node_modules"),
      src: path.resolve(__dirname, "../src"),
      app: path.resolve(__dirname, "../src/app"),
      auth: path.resolve(__dirname, "../src/auth"),
      base: path.resolve(__dirname, "../src/base"),
      comments: path.resolve(__dirname, "../src/comments"),
      common: path.resolve(__dirname, "../src/common"),
      draft: path.resolve(__dirname, "../src/draft"),
      feed: path.resolve(__dirname, "../src/feed"),
      layer: path.resolve(__dirname, "../src/layer"),
      media: path.resolve(__dirname, "../src/media"),
      node: path.resolve(__dirname, "../src/node"),
      notice: path.resolve(__dirname, "../src/notice"),
      plugin: path.resolve(__dirname, "../src/plugin"),
      quiz: path.resolve(__dirname, "../src/quiz"),
      tags: path.resolve(__dirname, "../src/tags"),
      user: path.resolve(__dirname, "../src/user"),
      zone: path.resolve(__dirname, "../src/zone"),
      collection: path.resolve(__dirname, "../src/collection")
    }
  }
};
