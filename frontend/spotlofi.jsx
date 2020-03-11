import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      entities: {
        user: window.currentUser
      },
      session: {
        id: window.currentUser.id,
        loggedIn: true,
      }
    };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<App store={store}/>, root)
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})