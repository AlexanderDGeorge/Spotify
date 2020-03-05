import { merge } from 'lodash';
import {
    RECEIVE_PLAYLIST,
    RECEIVE_PLAYLISTS,
    REMOVE_PLAYLIST
} from '../../actions/playlist_actions';

const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            const newState = merge({}, oldState);
            newState[action.playlist.id] = action.playlist;
            return newState;
        default:
            return oldState;
    }
}

export default playlistsReducer;