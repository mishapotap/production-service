import webpack from "webpack"
import { BuildOptions } from "./types/config"
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = buildSvgLoader()
	const babelLoader = {
		test: /\.(js | jsx | tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
			},
		},
	}
	const typescriptLoader = {
		test: /\.tsx?$/, // tsx | ts
		use: "ts-loader", // loader which will work with these extensions
		exclude: /node_modules/, // excluding
	}
	const cssLoader = buildCssLoader(isDev)
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}
	// the order of returned loaders matters
	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
