import { createActions } from 'redux-actions';

const actions = createActions({
  WIDGET_LIST: { // action name-scoping (ie 'WIDGET_LIST/xxx')
    REMOVE_WIDGET: undefined, // payload is identity function
    ADD_WIDGET: [
      // payload: simple identity for payload
      widget => widget,

      // meta: listen for another param (used in the asyncAddWidget() action-creator thunk)
      (widget, isFromAsync) => ({ isFromAsync }),
    ],


    // Async example: Actions that will be wrapped in a thunk action to do async stuff
    // ----------
    // Notify that there's an async request going (eg to show spinner)
    ASYNC_REQ_WIDGET: null,
  },
});

// Note that redux-actions converts the ALL_CAPS keys in the keymap to camelCase.
// Explicitly export the action keys, but skip the top-level name-scoping key (actions.widgetList)
export const { addWidget, removeWidget, asyncReqWidget } = actions.widgetList;


// Async example: Export a thunk-producing action (will be recognized by redux-thunk middleware) that calls the
// redux-actions-created action creators
export const asyncAddWidget = function asyncAddWidget(someParam) {
  // thunk action-creators return thunks that accept one param -- the dispatch function
  return (dispatch) => {
    // Notify we're about to start an async request
    dispatch(actions.widgetList.asyncReqWidget(someParam));

    // Now do something async (eg ajax request, etc.)
    setTimeout(() => {
      // This is why we use thunks: so we can accept the dispatch() into a closure and execute it later
      dispatch(actions.widgetList.addWidget(`async widget ${someParam}`, true));
    }, 1500);
  };
};
