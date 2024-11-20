const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    // filename: 'bundle.js'
    filename: "js/[name].[hash:8].bundle.js",
    sourceMapFilename: "js/[name].[hash:8].bundle.map",
    chunkFilename: "js/[id].[hash:8].chunk.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Match all js and jsx files
        exclude: /node_modules/, //Exclude node_modules
        loader: "babel-loader", //Use babel-loader
        // use: ['babel-loader'] //Use babel-loader
        // use: {
        //     loader: 'babel-loader', //Use babel-loader
        // }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      publicPath: "/",
    }),
  ],
};
