import React from 'react';
import { connect } from 'react-redux';

import { Button, ButtonGroup } from 'reactstrap';

import { increment, decrement } from '../actions/counterActions';

const Counter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div>
        <p>
          <b>Counter</b>: This is a simple counter with two simple actions:
        </p>

        <ButtonGroup>
          <Button color="primary" onClick={this.props.onIncrement}>Add</Button>
          <Button color="primary" onClick={this.props.onDecrement}>Sub</Button>
        </ButtonGroup>

        <p>Counter: {this.props.value}</p>
      </div>
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
  state => state.counter,

  // mapDispatchToProps(): This is how you connect your imported actions to the dispatch function
  dispatch => ({
    onIncrement: () => dispatch(increment(1)),
    onDecrement: () => dispatch(decrement(1)),
  }),

// and wrap the Counter container component:
)(Counter);
