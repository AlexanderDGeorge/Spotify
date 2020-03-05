import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const nullSession = {
  id: null,
  loggedIn: false,
};

const usersReducer = (oldState = nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user, loggedIn: true });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return oldState;
  }
};

export default usersReducer;
