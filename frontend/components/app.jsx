import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Landing from './landing/landing';
import Signup from './session/signup';
import Login from './session/login';
import { Provider } from 'react-redux';
import './app.css';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute path="/signup" component={Signup} />
        <AuthRoute path="/login" component={Login} />
        <Route path="/" component={Landing} />
      </Switch>
    </HashRouter>
  </Provider>
)

export default App;