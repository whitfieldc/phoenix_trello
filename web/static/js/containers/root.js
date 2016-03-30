import React, { PropTypes }           from 'react';
import { Provider }                   from 'react-redux';
import { Router, RoutingContext }     from 'react-router';
import invariant                      from 'invariant';
import configRoutes                         from '../routes';

export default class Root extends React.Component {
  _renderRouter(){
    invariant(
      this.props.routerHistory,
      '<Root /> needs either a routerHistory to render'
    );

    return (
      <Router history={this.props.routerHistory}>
        {routes}
      </Router>
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
        {this._renderRouter()}
      </Provider>
    );
  }
}