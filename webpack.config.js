const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') // Import the copy-webpack-plugin
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
    patterns: [{ from: 'public', to: '' }], // Copy the contents of the public folder
  }),
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
      // Your existing rules...
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
