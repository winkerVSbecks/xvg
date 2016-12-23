const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack,
  customConfig,
} = require('@webpack-blocks/webpack2');
const extractText = require('@webpack-blocks/extract-text2');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel = require('@webpack-blocks/babel6');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const basePlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'website/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
  }),
  new CopyWebpackPlugin([
    { from: 'icons/favicon.ico' },
  ]),
];

const productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
    screwIe8: true,
    sourceMap: false,
  }),
];

module.exports = createConfig([
  babel(),
  addPlugins(basePlugins),
  entryPoint({
    main: './website/index.js',
    vendor: ['ramda'],
  }),
  setOutput({
    filename: '[name].js',
    path: path.join(__dirname, '../build'),
  }),
  extractText(),
  env('development', [
    sourceMaps(),
  ]),
  env('production', [
    addPlugins(productionPlugins),
    customConfig({
      performance: { hints: false },
    }),
  ]),
]);
