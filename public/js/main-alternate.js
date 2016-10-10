/**
 * This file demonstrates webpack's ability to create multiple entry points.
 *
 * In short, if you want multiple top-level js files, look at how webpack.config.js references this file.
 */
const content = require('./content.js');

window.onload = function onload() {
  document.getElementById('content_div').innerHTML = `alternate yo dan! ${content}`;
};
