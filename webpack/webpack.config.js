const path = require('path');
const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack,
  customConfig,
} = require('@webpack-blocks/webpack2');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('@webpack-blocks/dev-server2');

const babel = require('@webpack-blocks/babel6');
const HtmlWebpackPlugin = require('html-webpack-plugin');

(function clearConsole() {
  process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');
})();

const basePlugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
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
    entryPoint('./src/__tests__/visual-test.js'),
    setOutput('./build/bundle.js'),
    addPlugins([
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/__tests__/test.html',
      }),
    ]),
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
