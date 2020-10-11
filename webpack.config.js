const path = require("path");
const HTMLplugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/controllers/main2.js",
	output: {	
		filename: "bundle2.js",
		path: path.resolve(__dirname, "dist/ex2"),
	},
	// HTML
	plugins: [
		new HTMLplugin({
			template: "./src/views/ex2.html",
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
				test: /\.(png|svg|jpg|gif|ico)$/,
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
