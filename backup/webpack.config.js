const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  // entry
  entry: {
    app: '../sources/app.js'
    vender: '../sources/vendor.js'
  },
    // You can use entry: './entry.js' as a shorthand.
    // You can also add more entry points other than main. Such as app: './app.js' or vendor
    // Vendor = third party libraries, app = single page app's entry point.
    // each entry (page) has its own dependency graph. Multi page app:
      // entry: {
      //   pageOne: './src/pageOne/index.js',
      //   pageTwo: './src/pageTwo/index.js',
      //   pageThree: './src/pageThree/index.js'
      // }
    // CommonsChunkPlugin
      // can be used to create bundles of shared code between each page that multiple entry points can reference, this can save code.
  // output
  output: {
    path: path.resolve( __dirname, '../release' ),
      // While there can be multiple entry points, only one output can be set.
      // if you wish to have multiple targets / outputs, you see https://webpack.js.org/concepts/configuration/#multiple-targets
      // must be absolute path
      // publicPath: "/assets/" replaces the paths in built files so they don't reference the absolute built paths in a public hosting environment
      // you can set the public path in the entry point file as well by leaving publicPath blank and inputting this in the file __webpack_public_path__ = myRuntimePublicPath
      // output.sourceMapFilename: [file].map can output sourcemaps to this filename.
    filename: '[name].js'
      // using [name] instead of a regular filename outputs the file using the entrypoint filename
  },
  // loader
  module: {
    rules: [ {
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
        // so this part (loader) tells webpack to test for js/jsx and use babel loader on them
          // "Hey webpack compiler, when you come across a path that resolves to a '.js' or '.jsx' file inside of a require()/import statement, use the babel-loader to transform it before you add it to the bundle".
        // sample loader:
          // {test: /\.css$/, loader: 'css-loader'}
          // // or equivalently
          // {test: /\.css$/, use: 'css-loader'}
          // // or equivalently
          // {test: /\.css$/, use: {
          //   loader: 'css-loader',
          //   options: {}
        // }}
          // or for two loaders on one rule:
          // rules: [
          //   {
          //     test: /\.css$/,
          //     use: [
          //       { loader: 'style-loader'},
          //       {
          //         loader: 'css-loader',
          //         options: {
          //           modules: true
          //         }
          //       }
          //     ]
          //   }
          // ]
    } ]
  },
  // plugins
  plugins: [
    // performs actions of compilations or chunks (batches) of modules. Must require to use them
    // basically functions under the prototype.apply = function(compiler){ code }
    // use new to create a new instance of the function
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: '../sources/index.html'})
  ]
};
