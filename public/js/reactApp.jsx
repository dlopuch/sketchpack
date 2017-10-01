import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

let store = createStore(reducers);
window.store = store;


module.exports = function ourReactApp() {
  render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('react_app'),
  );
};
