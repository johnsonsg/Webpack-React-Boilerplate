const path = require("path");

module.exports = {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        // test: /\.jsx$/,
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    filename: "bundle.js"
  }
};