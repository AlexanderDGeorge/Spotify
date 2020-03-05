import * as PlaylistUtil from '../utils/playlist_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

const removePlaylist = playlist => ({
    type: REMOVE_PLAYLIST,
    playlist
})

export const createPlaylist = playlist => dispatch => (
    PlaylistUtil.createPlaylist(playlist).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);

export const fetchPlaylist = playlistId => dispatch => (
    PlaylistUtil.fetchPlaylist(playlistId).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);

export const fetchPlaylists = props => dispatch => (
    PlaylistUtil.fetchPlaylists(props).then(
        playlists => dispatch(receivePlaylists(playlists))
    )
);

export const deletePlaylist = playlistId => dispatch => (
    PlaylistUtil.deletePlaylist(playlistId).then(
        () => dispatch(removePlaylist(playlistId))
    )
);