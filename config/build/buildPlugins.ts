import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // creating index.html
    new HtmlWebpackPlugin({
      template: paths.html, // this file will be used as template
    }),
    new webpack.ProgressPlugin(),
  ];
}
