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
      // Add a new rule for SVG files
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      // New rule for .webp files using file-loader
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // Where to save the output images in the build folder
            },
          },
        ],
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
    historyApiFallback: true, // This option is required for SPA routing to work on reloads
  },
};
