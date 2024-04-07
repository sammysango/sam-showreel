const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundle
    filename: "bundle.js", // Name of bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JavaScript
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Process .CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.svg$/, // Process .svg files
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.(webp)$/, //process .webp files
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to template HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
