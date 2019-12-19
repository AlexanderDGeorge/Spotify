import * as SessionUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = user => dispatch => (
  SessionUtil.createUser(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const loginUser = user => dispatch => (
  SessionUtil.createSession(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
  SessionUtil.deleteSession().then(() => dispatch(logoutCurrentUser()))
);