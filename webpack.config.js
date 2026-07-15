const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: 'script/[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'public'),
      assetModuleFilename: 'assets/[name].[contenthash:8][ext][query]',
      clean: true,
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      historyApiFallback: true,
      hot: true,
      open: false,
      port: 3000,
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name].[contenthash:8][ext]',
          },
        },
        {
          test: /\.(woff2?|ttf|otf|eot)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[contenthash:8][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
        minify: isProduction
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'style/[name].[contenthash:8].css',
            }),
          ]
        : []),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: ['...', new CssMinimizerPlugin(), new TerserPlugin({ extractComments: false })],
    },
    performance: {
      hints: isProduction ? 'warning' : false,
    },
  };
};
