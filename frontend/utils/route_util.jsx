import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
  loggedIn: state.session.loggedIn
}};

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn }) => {
  return (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/landing" />
    }
  />
)};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));