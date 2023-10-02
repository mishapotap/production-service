import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const babelLoader = {
    test: /\.(js | jsx | tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };
  const typescriptLoader = {
    test: /\.tsx?$/, // tsx | ts
    use: "ts-loader", // loader which will work with these extensions
    exclude: /node_modules/, // excluding
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module")), // to use css modules hashing classes only in .module. files
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]", // to have hashed classed only in prod
          },
        },
      },
      "sass-loader", // Compiles Sass to CSS
    ],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  // the order of returned loaders matters
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
