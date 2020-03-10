export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const NEXT_SONG = "NEXT_SONG";
export const PREV_SONG = "PREV_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const CYCLE_SONG = "CYCLE_SONG";

const addSongtoQueue = songId => ({
    type: ADD_SONG_TO_QUEUE,
    songId
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

export const qAddSong = songId => dispatch => (
    dispatch(addSongtoQueue(songId))
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