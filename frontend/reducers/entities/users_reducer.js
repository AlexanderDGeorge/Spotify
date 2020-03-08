import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_LIKE } from '../../actions/like_actions';
import { merge } from 'lodash';

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
        case RECEIVE_LIKE:
            const id = action.like.song_id;
            const likeState = merge({}, oldState);
            likeState[action.like.user_id].likes.push(id);
            return likeState;
        default:
            return oldState;
    }
};

export default usersReducer;
