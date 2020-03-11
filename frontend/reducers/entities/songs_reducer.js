import { RECEIVE_SONG, RECEIVE_SONGS } from "../../actions/song_actions";

const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            newState = action.song;
            return newState;
        case RECEIVE_SONGS:
            Object.values(action.songs).map(song => {
                newState[song.id] = song
            })
            return newState;
        default:
            return oldState;
    }
}

export default songsReducer;