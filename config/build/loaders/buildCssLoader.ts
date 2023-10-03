import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
	return {
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
	}
}