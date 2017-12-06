const reactApp = require('./reactApp.jsx');


// Webpack build has built-in less styling:
// require('./style.less');
require('../scss/bootstrap_theme.scss');

window.onload = function onload() {
  console.log('not so fast, FIXME: this line is a linting violation (no semicolon)');

  reactApp();
};
