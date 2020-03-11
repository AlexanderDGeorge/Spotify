import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const nullSession = {
  id: null,
  loggedIn: false,
};

const sessionReducer = (oldState = nullSession, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign({}, { id: action.user.id, loggedIn: true });
    case LOGOUT_USER:
      return nullSession;
    default:
      return oldState;
  }
}

export default sessionReducer;