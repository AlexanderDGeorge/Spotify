import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../../actions/playlist_song_actions';
import { merge } from 'lodash';

const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_PLAYLISTS:
            newState = action.playlists;
            return newState;
        case RECEIVE_PLAYLIST:
            newState[action.playlist.id] = action.playlist;
            return newState;
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        case RECEIVE_PLAYLIST_SONG:
            newState[action.playlistSong.playlist_id].songs.push(action.playlistSong);
            return newState;
        case REMOVE_PLAYLIST_SONG:
            const arr = newState[action.playlistSong.playlist_id].songs;
            const songIdx = arr.indexOf(action.playlistSong);
            newState[action.playlistSong.playlist_id].songs.splice(songIdx, 1);
            return newState;
        default:
            return oldState;
    }
}

export default playlistsReducer;