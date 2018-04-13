const path = require('path');

// Bootstrap SASS dependencies:
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const APP_ROOT = path.resolve(__dirname, 'public/js');

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
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  );
}

module.exports = {
  context: APP_ROOT,
  entry: {
    app: 'main.js',
    alternateApp: 'main-alternate.js', // for demo only, remove or replace with different entry file if multiple entry files.
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.[name].js',
  },
  module: {
    rules: [
      // Pre-loader: lint .js and .jsx with eslint-loader
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },

      // .js and .jsx: convert with babel
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      // SASS CSS
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              // post css plugins, can be exported to postcss.config.
              plugins: () => [precss, autoprefixer],
            },
          },
          { loader: 'sass-loader' }, // compiles SASS to CSS
        ],
      },

      // Needed to load graphics in less, eg Bootstrap
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: PLUGINS,
  resolve: {
    alias: {
      // fun fact: eslint doesn't complain about any of these aliased imports
      // (eg 'img/xxx') because eslint was rigged with the
      // webpack 'import/resolver'.  See .eslintrc.js
      img: path.resolve(__dirname, 'public/img/'),
      actions: path.resolve(__dirname, 'public/js/actions'),
      comp: path.resolve(__dirname, 'public/js/components'),
      reducers: path.resolve(__dirname, 'public/js/reducers'),
    },
    modules: [
      APP_ROOT,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './public/',

    // Hotloading works just for React components with react-hot-loader.  Additional integrations needed for redux, css, etc.
    hot: true,
  },
  devtool: '#inline-source-map',
};
