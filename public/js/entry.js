const content = require('./content.js');

window.onload = function onload() {
  document.getElementById('content_div').innerHTML = `yo dan! ${content}`;

  console.log('not so fast, FIXME: linting violation no semicolon');
};
