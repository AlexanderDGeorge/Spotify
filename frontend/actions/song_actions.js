import * as SongUtil from '../utils/song_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

export const fetchSong = songId => dispatch => (
    SongUtil.fetchSong(songId).then(
        song => dispatch(receiveSong(song)))
);

export const fetchSongs = props => dispatch => (
    SongUtil.fetchSongs(props).then(
        songs => dispatch(receiveSongs(songs)))
);