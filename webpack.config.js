const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for the bundle
    filename: "bundle.js", // Name of the bundled file
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
        test: /\.css$/, // New rule for CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your template HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000, // Specify the port for the development server
    historyApiFallback: true,
  },
};
