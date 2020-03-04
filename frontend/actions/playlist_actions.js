import * as PlaylistUtil from '../utils/playlist_util';

export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

export const fetchPlaylist = playlistId => dispatch => (
    PlaylistUtil.fetchPlaylist(playlistId).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);

export const createPlaylist = playlist => dispatch => (
    PlaylistUtil.createPlaylist(playlist).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);