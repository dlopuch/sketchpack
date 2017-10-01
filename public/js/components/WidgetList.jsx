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


export default connect(
  state => ({ widgetList: state.widgetList }),
  dispatch => ({
    onAddClick: () => dispatch(addWidget(Math.random())),
    onRemoveClick: i => dispatch(removeWidget(i)),
  }),
)(WidgetList);
