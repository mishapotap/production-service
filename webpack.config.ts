import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  // if production mode - minifying code (gzip, optimizing)
  mode: "production", // development || production
  // entry point
  entry: path.resolve(__dirname, "src", "index.ts"),
  // output point of build
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // Clean up build folder after new build
  },
  // plugins
  plugins: [
    // creating index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // this file will be used as template
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    //  webpack can work with other files except JS
    rules: [
      {
        test: /\.tsx?$/, // tsx | ts
        use: "ts-loader", // loader which will work with these extensions
        exclude: /node_modules/, // excluding
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // import A from "./A.tsx" -> import A from "./A" (no need .tsx/ts/js etc...)
  },
};

export default config;
