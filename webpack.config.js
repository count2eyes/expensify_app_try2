const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  module: {
    rules: [
      {
        use: ["babel-loader"],
        exclude: /node_modules/,
        test: /\.js$/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.s?css$/
      }
    ]
  },
  output: {
    filename: "bundle.js",

    path: path.resolve(__dirname, "public")
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  },
  devtool: "cheap-module-eval-source-map"
};
