/** @format */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const fileName = ext => isDevelopment ? `bundle.${ext}` : `bundle.[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: isDevelopment ? 'source-map' : false,
  devServer:{
      port: 4200,
      hot: isDevelopment
  },
  resolve: {
    extensions: ['.js'],
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
          removeComments: isProduction,
          collapseWhitespace: isProduction
      }
    }),
    new MiniCssExtractPlugin({
        filename: fileName('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader',
          options: {
              presets:['@babel/preset-env']
          }
        }
    ],
  },
};
