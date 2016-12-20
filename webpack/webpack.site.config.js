const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack,
} = require('@webpack-blocks/webpack2');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('@webpack-blocks/dev-server2');

const babel = require('@webpack-blocks/babel6');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: 'website/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
  }),
  new CopyWebpackPlugin([
    { from: 'manifest.json' },
    { from: 'icons/icon19x.png' },
    { from: 'icons/icon38x.png' },
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
  env('development', [
    devServer(),
    sourceMaps(),
    entryPoint('./src/index.dev.js'),
    setOutput('./build/bundle.js'),
  ]),
  env('website', [
    devServer(),
    sourceMaps(),
    entryPoint('./website/index.js'),
    setOutput('./build/bundle.js'),
  ]),
  env('production', [
    entryPoint({
      main: './src/index.js',
      'x-ray': './src/x-ray.js',
    }),
    setOutput({
      filename: '[name].js',
      path: __dirname + '/build',
    }),
    addPlugins(productionPlugins),
  ]),
]);
