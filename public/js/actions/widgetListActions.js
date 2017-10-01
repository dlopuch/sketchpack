import { createActions } from 'redux-actions';

const actions = createActions({
  WIDGET_LIST: { // action name-scoping (ie 'WIDGET_LIST/xxx')
    ADD_WIDGET: null, // payload is identity function
    REMOVE_WIDGET: null, // payload is identity function
  },
});

// Note that redux-actions converts the ALL_CAPS keys in the keymap to camelCase.
// Explicitly export the action keys, but skip the top-level name-scoping key (actions.widgetList)
export const { addWidget, removeWidget } = actions.widgetList;
