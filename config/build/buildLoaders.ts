import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // the order of loaders matters
  const typescriptLoader = {
    test: /\.tsx?$/, // tsx | ts
    use: "ts-loader", // loader which will work with these extensions
    exclude: /node_modules/, // excluding
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
      "css-loader", // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS
    ],
  };
  return [typescriptLoader, cssLoader];
}
