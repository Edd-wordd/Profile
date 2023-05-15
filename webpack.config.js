const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    main: path.resolve(__dirname, 'src', 'main.jsx'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js',
    publicPath: '/public',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
          esModule: false,
        },
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({})],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
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

  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
      fullBuildTimeout: 3000,
      requestTimeout: 1000,
    }),
    new ReactRefreshWebpackPlugin(),
    process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  performance: {
    maxAssetSize: 1000000,
  },
}
