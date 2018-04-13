import 'babel-polyfill'; // IE11 doesn't support Promise's... get a full ES2015 environment.

const reactApp = require('./reactApp.jsx');


// Webpack build has built-in SASS styling.
// Here we load our theming of Boostrap CSS
require('../scss/bootstrap_theme.scss');

window.onload = function onload() {
  console.log('not so fast, FIXME: this line is a linting violation (no semicolon)')

  reactApp();
};
