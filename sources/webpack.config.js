const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
	"modules": path.resolve(__dirname, "node_modules"),
	"public": path.resolve(__dirname, "public"),
	"source": path.resolve(__dirname, "source")
};

let config = {

	// debug: true,

	// watch: true,

	target: 'electron',

	entry: {
		app: path.join(paths.source, "lib/core/js/app.js"),
		vendor: path.join(paths.source, "lib/core/js/vendor.js")
	},

	output: {
		path: paths.public,
		publicPath: '', //prepends all path references with this
		filename: 'lib/js/[name].js?[hash]'
	},

	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'file-loader',
			query: {
				name: 'lib/assets/[name].[ext]?[hash]'
			}
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
			loader: "file-loader?name=lib/fonts/[name].[ext]?[hash]"
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./source/index.html",
			filename: "index.html",
			inject: "body"
		}),
		new ExtractTextPlugin({
			filename: "lib/css/[name].css?[hash]",
			disable: (process.env.NODE_ENV !== "production")
		})
	],

	resolve: {
		modules: [paths.modules]
	}

	// resolve: {
	// 	alias: {
	// 		vue: 'vue/dist/vue.js'
	// 	}
	// }

}

module.exports = config;
