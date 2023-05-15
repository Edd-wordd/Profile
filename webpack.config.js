// const path = require('path')
// const autoprefixer = require('autoprefixer')
// const webpack = require('webpack')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// // const dotenv = require('dotenv')
// const Dotenv = require('dotenv-webpack')
// const TerserPlugin = require('terser-webpack-plugin') // Add this import
//
// module.exports = {
//   mode: process.env.NODE_ENV || 'development',
//
//   entry: {
//     main: path.resolve(__dirname, 'src', 'main.jsx'),
//   },
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: '[name].min.js',
//     publicPath: '/public',
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()], // Add this line
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             plugins: ['react-refresh/babel'],
//           },
//         },
//       },
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         loader: 'file-loader',
//         options: {
//           name: 'media/[name].[hash:8].[ext]',
//           esModule: false,
//         },
//       },
//
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: 'postcss-loader',
//             options: {
//               plugins: () => [autoprefixer({})],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     historyApiFallback: true,
//     hot: true,
//     publicPath: '/public',
//     port: 3000,
//   },
//
//   plugins: [
//     new Dotenv(),
//     new webpack.HotModuleReplacementPlugin({
//       multiStep: true,
//       fullBuildTimeout: 3000,
//       requestTimeout: 1000,
//     }),
//     new ReactRefreshWebpackPlugin(),
//     process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
//   ].filter(Boolean),
//
//   performance: {
//     maxAssetSize: 1000000,
//   },
// }
const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

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
      // ... other rules
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
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
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },
    ],
  },
  // ... other configurations
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
    isDevelopment && new ReactRefreshWebpackPlugin(),
    !isDevelopment &&
      new MiniCssExtractPlugin({
        filename: '[name].min.css',
      }),
  ].filter(Boolean),
}
