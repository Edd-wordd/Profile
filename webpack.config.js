const path = require('path')

const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
require('dotenv').config()

const isDevelopment = process.env.NODE_ENV === 'development'

const getPlugins = () =>
  [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    isDevelopment
      ? new Dotenv()
      : new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    !isDevelopment && new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/assets', to: 'assets' }] }),
  ].filter(Boolean)

const getModuleRules = () => [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
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
          outputPath: 'assets/',
          publicPath: '/assets/',
        },
      },
    ],
  },
]

const getOptimization = () => ({
  minimize: !isDevelopment,
  minimizer: [new TerserPlugin()],
})

const getDevServer = () => ({
  contentBase: path.join(__dirname, 'public'),
  historyApiFallback: true,
  hot: true,
  publicPath: '/public',
  port: 3000,
})

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: { main: path.resolve(__dirname, 'src', 'main.jsx') },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  optimization: getOptimization(),
  module: {
    rules: getModuleRules(),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: getDevServer(),
  plugins: getPlugins(),
}
