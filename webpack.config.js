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
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  }
};
