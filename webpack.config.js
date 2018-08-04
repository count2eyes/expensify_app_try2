const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });
  return {
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
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [CSSExtract],
    output: {
      filename: "bundle.js",

      path: path.resolve(__dirname, "public")
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    },
    devtool: "inline-source-map"
  };
};
