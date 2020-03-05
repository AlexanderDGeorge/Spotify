import * as PlaylistSongUtil from '../utils/playlist_song_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receivePlaylistSong = playlistSong => ({
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong
});

const removePlaylistSong = () => ({
    type: REMOVE_PLAYLIST_SONG
});

export const createPlaylistSong = playlistSong => (
    PlaylistSongUtil.createPlaylistSong(playlistSong).then(
        playlistSong => dispatchEvent(receivePlaylistSong(playlistSong))
    )
);

export const deletePlaylistSong = playlistSongId => (
    PlaylistSongUtil.deletePlaylistSong(playlistSongId).then(
        () => dispatchEvent(removePlaylistSong())
    )
);