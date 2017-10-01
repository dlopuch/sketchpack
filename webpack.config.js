
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
    path: __dirname + '/public/dist/',
    filename: 'bundle.[name].js'
  },
  module: {
    rules: [
      // Pre-loader: lint .js and .jsx with eslint-loader
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },

      // .js and .jsx: convert with babel
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      // Put .less inline in package (TODO: switch to SASS)
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "less-loader", options: {} } // compiles Less to CSS
        ],
      },

      // Needed to load graphics in less, eg Bootstrap
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: PLUGINS,
  resolve: {
    modules: [
      APP_ROOT,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
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
