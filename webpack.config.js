
const APP_ROOT = __dirname + '/public/js';

const webpack = require('webpack');

const PLUGINS = [];

/**
 * React Optimization with Build Script Activation.
 * ------
 * React has a lot of developer-mode code that slows stuff down but gives helpful errors.  This code can be built in
 * "production mode" by treating this as dead code and getting it minified away.  It will be recognized as dead code by
 * the minifier if process.env.NODE_ENV is set to 'production' using the DefinePlugin.
 * However, React's dead-code process.env.NODE_ENV is different from running Webpack with NODE_ENV=production.
 * Thus, our *build script* turns on *React* minification (via DefinePlugin) if the same NODE_ENV convention is set.
 */
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );
}

module.exports = {
  context: APP_ROOT,
  entry: {
    app: 'main.js',
    alternateApp: 'main-alternate.js' // for demo only, remove or replace with different entry file if multiple entry files.
  },
  output: {
    path: './public/dist/',
    filename: 'bundle.[name].js'
  },
  module: {
    preLoaders: [
      { loader: 'eslint-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.jsx?$/  , loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015']}},
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony', exclude: /node_modules/},
      { test: /\.less$/, loader: "style!css!less" },

      // Needed to load graphics in less, eg Bootstrap
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: PLUGINS,
  resolve: {
    root: APP_ROOT
  },
  devServer: {
    contentBase: './public/',
    
    // Trying to get hotloading to work.  Not quite there yet.
    //hot: true,
    //inline: true
    // also: need to enable special script in index.html
  },
  devtool: '#inline-source-map'
};
