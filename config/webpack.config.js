const path = require('path');
const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack,
  customConfig,
} = require('@webpack-blocks/webpack2');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('@webpack-blocks/dev-server2');

const babel = require('@webpack-blocks/babel6');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
  }),
];

const devPlugins = [
  new DashboardPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/__tests__/test.html',
  }),
  new CopyWebpackPlugin([
    { from: 'src/__tests__/svglogo.svg' },
    { from: 'src/__tests__/kiwi.svg' },
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
  new CopyWebpackPlugin([
    { from: 'manifest.json' },
    { from: 'icons/icon19.png' },
    { from: 'icons/icon38.png' },
    { from: 'icons/icon16.png' },
    { from: 'icons/icon48.png' },
    { from: 'icons/icon128.png' },
  ]),
];

module.exports = createConfig([
  babel(),
  addPlugins(basePlugins),
  env('development', [
    devServer(),
    sourceMaps(),
    entryPoint('./src/__tests__/visual-test.js'),
    setOutput('./build/bundle.js'),
    addPlugins(devPlugins),
  ]),
  env('production', [
    entryPoint({
      'xvg-injector': './src/index.js',
      'xvg': './src/xvg.js',
    }),
    setOutput({
      filename: '[name].js',
      path: path.join(__dirname, '../build'),
    }),
    addPlugins(productionPlugins),
  ]),
  customConfig({
    performance: { hints: false },
  }),
]);
