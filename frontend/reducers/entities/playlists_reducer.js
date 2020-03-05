import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, DELETE_PLAYLIST_SONG } from '../../actions/playlist_song_actions';
import { merge } from 'lodash';

const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, oldState, action.playlists);
        case RECEIVE_PLAYLIST:
            const newState = merge({}, oldState);
            newState[action.playlist.id] = action.playlist;
            return newState;
        case REMOVE_PLAYLIST:
            const newState = merge({}, oldState);
            delete newState[action.playlistId];
            return newState;
        case RECEIVE_PLAYLIST_SONG:
            const newState = merge({}, oldState);
            newState[action.playlistSong.playlist_id].song_ids.push(action.playlistSong.song_id);
            return newState;
        case DELETE_PLAYLIST_SONG:
            const newState = merge({}, oldState);
            const arr = newState[action.playlistSong.playlist_id].song_ids;
            const songIdx = arr.indexOf(action.playlistSong.song_id);
            newState[action.playlistSong.playlist_id].song_ids.splice(songIdx, 1);
            return newState;
        default:
            return oldState;
    }
}

export default playlistsReducer;