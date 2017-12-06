import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';

import { addWidget, asyncAddWidget, removeWidget } from '../actions/widgetListActions';

const WidgetList = React.createClass({
  propTypes: {
    widgetListState: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    onAddClick: React.PropTypes.func.isRequired,
    onRemoveClick: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div>
        <p>
          <b>WidgetList</b>: This is a list of things:
        </p>

        <ButtonGroup>
          <Button color="primary" onClick={this.props.onAddClick}>Add</Button>
          <Button color="primary" onClick={this.props.onAddAsyncClick} disabled={this.props.widgetListState.isFetching}>Add Async</Button>
        </ButtonGroup>

        <ul>
          {this.props.widgetListState.list.map((widget, i) => (
            <WidgetItem key={JSON.stringify(widget)} itemId={i} widget={widget} onRemoveClick={this.props.onRemoveClick} />
          ))}
        </ul>
        { this.props.widgetListState.isFetching ?
          (<p><i>Fetching something asynchronously, please wait...</i></p>) :
          null
        }
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
        <Button color="danger" size="sm" className="ml-1" outline onClick={this.onRemove}>X</Button>
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
  state => ({ widgetListState: state.widgetList }),

  // mapDispatchToProps(): This is how you connect your imported actions to the dispatch function
  dispatch => ({
    onAddClick: () => dispatch(addWidget(Math.random())),
    onAddAsyncClick: () => dispatch(asyncAddWidget(Math.random())),
    onRemoveClick: i => dispatch(removeWidget(i)),
  }),

// and wrap the WidgetList container component:
)(WidgetList);
