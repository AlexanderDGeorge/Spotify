export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const ADD_SONGS_TO_QUEUE = "ADD_SONGS_TO_QUEUE";
export const NEXT_SONG = "NEXT_SONG";
export const PREV_SONG = "PREV_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const PLAY_NOW = "PLAY_NOW";

const addSongtoQueue = song => ({
    type: ADD_SONG_TO_QUEUE,
    song
});

const addSongstoQueue = songs => ({
    type: ADD_SONGS_TO_QUEUE,
    songs
});

const nextSong = () => ({
    type: NEXT_SONG
});

const prevSong = () => ({
    type: PREV_SONG
});

const playSong = () => ({
    type: PLAY_SONG
});

const pauseSong = () => ({
    type: PAUSE_SONG
});

const toggleShuffle = () => ({
    type: TOGGLE_SHUFFLE
});

const toggleRepeat = () => ({
    type: TOGGLE_REPEAT
});

const playNow = song => ({
    type: PLAY_NOW,
    song
});

export const qAddSong = song => dispatch => (
    dispatch(addSongtoQueue(song))
);

export const qAddSongs = songs => dispatch => (
    dispatch(addSongstoQueue(songs))
);

export const qNextSong = () => dispatch => (
    dispatch(nextSong())
);

export const qPrevSong = () => dispatch => (
    dispatch(prevSong())
);

export const qPlaySong = () => dispatch => (
    dispatch(playSong())
);

export const qPauseSong = () => dispatch => (
    dispatch(pauseSong())
);

export const qToggleShuffle = () => dispatch => (
    dispatch(toggleShuffle())
);

export const qToggleRepeat = () => dispatch => (
    dispatch(toggleRepeat())
);

export const qPlayNow = song => dispatch => (
    dispatch(playNow(song))
);