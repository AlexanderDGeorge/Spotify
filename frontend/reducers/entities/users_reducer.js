import { RECEIVE_USER, LOGOUT_USER } from '../../actions/session_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            newState = action.user;
            return newState;
        case LOGOUT_USER:
            newState = {};
            return newState;
        case RECEIVE_LIKE:
            console.log(action)
            newState.likes.push(action.like);
            return newState;
        case REMOVE_LIKE:
            const idx = newState.likes.indexOf(action.like);
            newState.likes.splice(idx, 1);
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;
