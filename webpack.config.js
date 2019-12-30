const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./example/index.tsx",
    devtool: 'inline-source-map',
    output: {
      path: path.resolve('./docs/'),
      filename: "index.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      }],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./example/index.html",
            filename: "./index.html"
        }),
    ]
  };