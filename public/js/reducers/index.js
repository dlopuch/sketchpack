import { combineReducers } from 'redux';

import widgetListReducers from './widgetListReducers';
import counterReducers from './counterReducers';

const reducers = combineReducers({
  widgetList: widgetListReducers,
  counter: counterReducers,
});

export default reducers;
