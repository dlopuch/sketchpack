/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const merge = require('webpack-merge');

if (!process.env.APP_BASEPATH) {
  console.log("[Nanogrid/fishbowl build] No APP_BASEPATH envvar specified, using dev-default '/'");
  process.env.APP_BASEPATH = '/';
}


// keep this BELOW all process.env setting!
const webpackCommonConfig = require('./webpack.common');


module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  output: {
    // In dev (dev-server) envs, we serve HTML contents from the root path.  Need this explicit publicPath so that
    // html template writer includes it as root-reference so that browser path renaming loads still grab it from root.
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // Hotloading (WIP: see 'devServer.hot' below... these don't seem to be needed for React hot loading, but may be needed later)
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public/',

    // Hotloading works just for React components with react-hot-loader.  Additional integrations needed for redux, css, etc.
    hot: true,

    // inline: true
    // also: need to enable special script in index.html
  },
  devtool: '#inline-source-map',
});
