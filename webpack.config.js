const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
require('dotenv').config()

const isDevelopment = process.env.NODE_ENV === 'development'

// Set up plugins
const plugins = [
  isDevelopment
    ? new Dotenv()
    : new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
  !isDevelopment && new MiniCssExtractPlugin({ filename: '[name].min.css' }),
  new CopyWebpackPlugin({
    patterns: [{ from: 'public', to: '' }],
  }),
].filter(Boolean)

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: { main: path.resolve(__dirname, 'src', 'main.jsx') },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/assets/',
              publicPath: '/assets/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/public',
    port: 3000,
  },
  plugins: plugins,
}
