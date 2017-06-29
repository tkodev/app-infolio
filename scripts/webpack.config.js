const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
	"root": path.resolve(__dirname, ".."),
	"modules": path.resolve(__dirname, "node_modules"),
	"scripts": path.resolve(__dirname),
	"release": path.resolve(__dirname, "../release"),
	"sources": path.resolve(__dirname, "../sources")
};

let config = {
	target: 'electron',
	entry: {
		app: path.join(paths.sources, "lib/index/js/app.js"),
		vendor: path.join(paths.sources, "lib/index/js/vendor.js")
	},
	resolve: {
		modules: [paths.modules]
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			query: {
				presets: [ "babel-preset-es2015" ].map( require.resolve )
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.(sass|scss)$/,
			use: ExtractTextPlugin.extract({
				use: [{
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}],
				fallback: "style-loader"
			}),
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			loader: "file-loader?name=lib/fonts/[name].[ext]"
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'file-loader',
			query: {
				name: 'lib/assets/[name].[ext]?[hash]'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "../sources/index.html",
			filename: "index.html",
			inject: "body"
		}),
		new ExtractTextPlugin({
			filename: "lib/css/[name].css",
			disable: (process.env.NODE_ENV !== "production")
		})
	],
	output: {
		path: paths.release,
		filename: "lib/js/[name].js"
	},
};

module.exports = config;
