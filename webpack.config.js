const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    chunkFilename: '[path][name].bundle.js',
    path: path.resolve(__dirname, 'dist-client'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            // options: {
            // name: '[path][name].[ext]',
            // context: path.resolve(__dirname, "src"),
            // useRelativePaths: false
            // }
          },
        ],
      },
    ],
  },
  watchOptions: {
    ignored: ['node_modules/**', '.github/**'],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
};
