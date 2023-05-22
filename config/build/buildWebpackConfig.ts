import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    // if production mode - minifying code (gzip, optimizing)
    mode, // development || production
    // entry point
    entry: paths.entry,
    // output point of build
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // Clean up build folder after new build
    },
    // plugins
    plugins: buildPlugins(options),
    //  webpack can work with other files except JS
    module: {
      rules: buildLoaders(options),
    },
    // import A from "./A.tsx" -> import A from "./A" (no need .tsx/ts/js etc...)
    resolve: buildResolvers(options),
    // to trace where error came from
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    // performance: {
    //   hints: false,
    // },
  };
}
