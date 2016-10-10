const React = require('react');
const ReactDOM = require('react-dom');

const DemoReactComponent = React.createClass({
  render() {
    return (
      <div>
        <div>
          This text was rendered by a demo react component!
        </div>
        {process.env.NODE_ENV === 'production' ? (null) : (
          <div>
            And this block will get minified away in prod if react minification is working properly! <br/>
            (Try it for yourself by running: <tt>NODE_ENV=production webpack-dev-server</tt>)
          </div>
        )}
      </div>
    );
  }
});

module.exports = function ourReactApp() {
  ReactDOM.render(
    <div>
      <h1>React App</h1>
      <DemoReactComponent/>
    </div>,
    document.getElementById('react_app')
  );
}
