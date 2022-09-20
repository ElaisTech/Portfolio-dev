const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/img/[name].[hash][ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./index.html" }),
		new HtmlWebpackPlugin({
			template: "/index.html",
			filename: "index.html",
		}),
		
	],
    entry: "/js/social_care.js",
	output: {
		filename: "social.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/img/[name].[hash][ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./social_care.html" }),
		new HtmlWebpackPlugin({
			template: "./project/social_care.html",
			filename: "social_care.html",
		}),
		
	],
	stats: {
		children: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 8080,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(sass|css|scss)$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
};