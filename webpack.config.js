const path = require("path");
const HTMLplugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/controllers/main1.js",
	output: {	
		filename: "bundle1.js",
		path: path.resolve(__dirname, "dist/ex1"),
	},
	// HTML
	plugins: [
		new HTMLplugin({
			template: "./src/views/ex1.html",
		}),
	],
	// MODULE
	module: {
		rules: [
			// -> css
			{
				test: /\.(css|scss|sass|less)$/,
				use: ["style-loader", "css-loader"],
			},
			// -> img
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "img/",
							publicPath: "IMG/",
						},
					},
				],
			},
		],
	},
};
