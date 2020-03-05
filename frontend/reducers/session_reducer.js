import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullSession = {
  id: null,
  loggedIn: false,
};

const sessionReducer = (oldState = nullSession, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id, loggedIn: true });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return oldState;
  }
}

export default sessionReducer;