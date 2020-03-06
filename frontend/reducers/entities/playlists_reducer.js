import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../../actions/playlist_song_actions';
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
            const removedPlaylistState = merge({}, oldState);
            delete removedPlaylistState[action.playlistId];
            return removedPlaylistState;
        case RECEIVE_PLAYLIST_SONG:
            const playlistSongState = merge({}, oldState);
            playlistSongState[action.playlistSong.playlist_id].song_ids.push(action.playlistSong.song_id);
            return newState;
        case REMOVE_PLAYLIST_SONG:
            const removePlaylistSongState = merge({}, oldState);
            const arr = removePlaylistSongState[action.playlistSong.playlist_id].song_ids;
            const songIdx = arr.indexOf(action.playlistSong.song_id);
            removePlaylistSongState[action.playlistSong.playlist_id].song_ids.splice(songIdx, 1);
            return removePlaylistSongState;
        default:
            return oldState;
    }
}

export default playlistsReducer;