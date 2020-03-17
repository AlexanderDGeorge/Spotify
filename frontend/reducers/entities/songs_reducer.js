import { RECEIVE_SONG, RECEIVE_SONGS } from "../../actions/song_actions";

const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, oldState, action.song)
        case RECEIVE_SONGS:
            return Object.assign({}, oldState, action.songs)
        default:
            return oldState;
    }
}

export default songsReducer;