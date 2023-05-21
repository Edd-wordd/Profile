const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
// const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

// Set up plugins
const plugins = [
  new Dotenv(),
  new webpack.HotModuleReplacementPlugin({
    multiStep: true,
    fullBuildTimeout: 3000,
    requestTimeout: 1000,
  }),
  !isDevelopment && new MiniCssExtractPlugin({ filename: '[name].min.css' }),
]

// Add react-refresh-webpack-plugin only if in development mode (it's not needed in production)
if (isDevelopment) {
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
  plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: { main: path.resolve(__dirname, 'src', 'main.jsx') },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js',
    publicPath: '/public',
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
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
            options: { postcssOptions: { plugins: [autoprefixer()] } },
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
