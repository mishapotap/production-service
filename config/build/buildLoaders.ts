import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // the order of loaders matters
  const typescriptLoader = {
    test: /\.tsx?$/, // tsx | ts
    use: "ts-loader", // loader which will work with these extensions
    exclude: /node_modules/, // excluding
  };
  return [typescriptLoader];
}
