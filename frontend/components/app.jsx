import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './home/home';
import Landing from './landing/landing';

export default () => (
  <Switch>
    {/* <AuthRoute path="/landing" component={Landing} /> */}
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Route path="/" component={Home} />
  </Switch>
)