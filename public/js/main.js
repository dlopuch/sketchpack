const content = require('./content.js');
const reactApp = require('./reactApp.jsx');


// Webpack build has built-in less styling:
require('./style.less');


window.onload = function onload() {
  console.log('not so fast, FIXME: this line is a linting violation (no semicolon)')

  document.getElementById('content_div').innerHTML = `yo dan! ${content}`;

  reactApp();
};
