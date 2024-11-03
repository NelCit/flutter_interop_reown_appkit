// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'appkit.bundle.js',
    path: path.resolve(__dirname, '../assets/web3/js'),
    library: 'Appkit',
    libraryTarget: 'window',
    clean: true,
    publicPath: './'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1, 
    }),
  ],
  mode: 'production',
  devtool: false, 
  optimization: {
    splitChunks: false, 
    runtimeChunk: false, 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader',   
        ],
      },
    ],
  },
};
