import React from 'react';
import { connect } from 'react-redux';

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
          <b>Counter</b>: This is our counter:
        </p>
        <button onClick={this.props.onIncrement}>Add</button>
        <button onClick={this.props.onDecrement}>Sub</button>
        <p>Counter: {this.props.value}</p>
      </div>
    );
  },
});

export default connect(
  state => state.counter,
  dispatch => ({
    onIncrement: () => dispatch(increment(1)),
    onDecrement: () => dispatch(decrement(1)),
  }),
)(Counter);
