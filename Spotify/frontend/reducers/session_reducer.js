import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullSession = {
  id: null
};

const sessionReducer = (oldState = nullSession, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return oldState;
  }
}

export default sessionReducer;