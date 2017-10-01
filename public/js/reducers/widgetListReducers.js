import { handleActions } from 'redux-actions';
import { addWidget, removeWidget, asyncReqWidget } from '../actions/widgetListActions';

const widgetListReducers = handleActions(
  {
    [addWidget]: (state, action) => {
      let newState = Object.assign(
        {}, state,
        { list: [].concat(state.list, action.payload || {}) },
      );

      if (action.meta && action.meta.isFromAsync) {
        newState.isFetching = false;
      }

      return newState;
    },

    [removeWidget]: (state, action) => Object.assign({}, state,
      { list: state.list.filter((s, i) => i !== action.payload) }),

    [asyncReqWidget]: state => Object.assign({}, state, { isFetching: true }),
  },

  // Default state:
  {
    list: ['default initial item'],
    isFetching: false,
  },
);

export default widgetListReducers;
