import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

let store = createStore(
  reducers,
  applyMiddleware(thunk), // allows asynchronous action dispatch, ie action-creators returning thunks (f's that accept dispatch as param)
);
window.store = store;


module.exports = function ourReactApp() {
  render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('react_app'),
  );
};
