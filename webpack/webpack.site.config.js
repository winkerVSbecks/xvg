const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack,
  customConfig } = require('@webpack-blocks/webpack2');
const devServer = require('@webpack-blocks/dev-server2');
const extractText = require('@webpack-blocks/extract-text2');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel = require('@webpack-blocks/babel6');

const basePlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: 'website/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
  }),
  // require('postcss-import')(),
  // require('autoprefixer')({ browsers: ['last 2 versions'] }),
];

const productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    '-svgo': true,
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
  entryPoint('./website/index.js'),
  setOutput('./build/bundle.js'),
  env('development', [
    devServer(),
    extractText(),
    sourceMaps(),
  ]),
  env('production', [
    extractText(),
    addPlugins(productionPlugins),
  ]),
  // customConfig({
  //   module: {
  //     loaders: [{
  //       test: /^tachyons$/,
  //       loaders: ['style-loader', 'css-loader?minimize'],
  //     }],
  //   },
  // }),
]);
