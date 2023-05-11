import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // the order of loaders matters
  const typescriptLoader = {
    test: /\.tsx?$/, // tsx | ts
    use: "ts-loader", // loader which will work with these extensions
    exclude: /node_modules/, // excluding
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader", // Creates `style` nodes from JS strings
      "css-loader", // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS
    ],
  };
  return [typescriptLoader, cssLoader];
}
