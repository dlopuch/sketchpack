import { createActions } from 'redux-actions';

const actions = createActions({
  COUNTER: { // action name-scoping (ie 'COUNTER/xxx')
    DECREMENT: n => -n,
    INCREMENT: null, // payload is identity function
  },
});

// Note that redux-actions converts the ALL_CAPS keys in the keymap to camelCase.
// Explicitly export the action keys, but skip the top-level name-scoping key (actions.counter)
export const { increment, decrement } = actions.counter;
