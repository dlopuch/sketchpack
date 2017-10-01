import React from 'react';
import { connect } from 'react-redux';

import { addWidget, removeWidget } from '../actions/widgetListActions';

const WidgetList = React.createClass({
  propTypes: {
    widgetList: React.PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    onAddClick: React.PropTypes.func.isRequired,
    onRemoveClick: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div>
        <p>
          <b>WidgetList</b>: This is a list of things:
        </p>
        <button onClick={this.props.onAddClick}>Add</button>
        <ul>
          {this.props.widgetList.map((widget, i) => (
            <WidgetItem key={JSON.stringify(widget)} itemId={i} widget={widget} onRemoveClick={this.props.onRemoveClick} />
          ))}
        </ul>
      </div>
    );
  },
});

const WidgetItem = React.createClass({
  onRemove() {
    this.props.onRemoveClick(this.props.itemId);
  },

  render() {
    return (
      <li>
        {JSON.stringify(this.props.widget)}
        <button onClick={this.onRemove}>X</button>
      </li>
    );
  },
});


// Note use of react-redux.connect().  This is how you wire your redux 'container' components up to the redux store
// state injected in the reactApp.jsx <Provider /> container.
//
// Top-level containers should listen to pieces of the relevant pieces of the state via the mapStateToProps() transform
// function.  Note that you shouldn't listen to the *whole* state change (ie `(state) => state` is an antipattern) --
// just the parts of the state relevant to the 'container' component. See the react-redux documentation for details.
//
// Actions can be injected with the mapDispatchToActions() transform function.
export default connect(
  // mapStateToProps():
  state => ({ widgetList: state.widgetList }),

  // mapDispatchToProps(): This is how you connect your imported actions to the dispatch function
  dispatch => ({
    onAddClick: () => dispatch(addWidget(Math.random())),
    onRemoveClick: i => dispatch(removeWidget(i)),
  }),

// and wrap the WidgetList container component:
)(WidgetList);
