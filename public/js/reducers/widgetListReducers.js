import { handleActions } from 'redux-actions';
import { addWidget, removeWidget } from '../actions/widgetListActions';

const widgetListReducers = handleActions(
  {
    [addWidget]: (state, action) => [].concat(state, action.payload || {}),
    [removeWidget]: (state, action) => state.filter((s, i) => i !== action.payload),
  },

  // Default state:
  ['default initial item'],
);

export default widgetListReducers;
