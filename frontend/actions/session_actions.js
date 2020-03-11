import * as SessionUtil from '../utils/session_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => ({
	type: RECEIVE_USER,
	user
});

const logoutCurrentUser = () => ({
  	type: LOGOUT_USER
});

const receiveErrors = errors => ({
  	type: RECEIVE_ERRORS,
 	errors
});

export const signup = user => dispatch => (
  	SessionUtil.signup(user).then(
    	user => dispatch(receiveCurrentUser(user)),
    	errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  	SessionUtil.login(user).then(
    	user => dispatch(receiveCurrentUser(user)),
    	errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  	SessionUtil.logout().then(
		user => dispatch(logoutCurrentUser(user)))
);