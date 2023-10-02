import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildPlugins({
	isDev,
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		// creating index.html
		new HtmlWebpackPlugin({
			template: paths.html, // this file will be used as template
		}),
		new webpack.ProgressPlugin(),
		// css now will be not in js file in bundle, but in css folder
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}
