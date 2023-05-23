const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config()

const isDevelopment = process.env.NODE_ENV === 'development'

// Set up plugins
const plugins = [
  isDevelopment ? new Dotenv() : false,
  new webpack.HotModuleReplacementPlugin({
    multiStep: true,
    fullBuildTimeout: 3000,
    requestTimeout: 1000,
  }),
  !isDevelopment && new MiniCssExtractPlugin({ filename: '[name].min.css' }),
].filter(Boolean)

// Add react-refresh-webpack-plugin only if in development mode (it's not needed in production)
if (isDevelopment) {
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
  plugins.push(new ReactRefreshWebpackPlugin())
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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
            plugins: [
              isDevelopment && 'react-refresh/babel',
              !isDevelopment && ['transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [isDevelopment ? autoprefixer() : [autoprefixer(), require('cssnano')()]],
              },
            },
          },
        ],
      },
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // output to assets folder
              publicPath: 'assets/',
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
  plugins: plugins.filter(Boolean),
}
