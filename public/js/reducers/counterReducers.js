import { handleActions } from 'redux-actions';
import { increment, decrement } from '../actions/counterActions';

const reducers = handleActions(
  {
    [increment]: (state, action) => ({ value: state.value + action.payload }),
    [decrement]: (state, action) => ({ value: state.value + action.payload }),
  },

  // Default state:
  { value: 0 },
);

export default reducers;
