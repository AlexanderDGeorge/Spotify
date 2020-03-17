import { 
    ADD_SONG_TO_QUEUE, NEXT_SONG, PREV_SONG, PLAY_SONG, 
    PAUSE_SONG, TOGGLE_SHUFFLE, TOGGLE_REPEAT, PLAY_NOW,
} from "../actions/queue_actions";


const nullQueue = {
    index: 0,
    playing: false,
    songArray: []
}

const queueReducer = (oldState = nullQueue, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case ADD_SONG_TO_QUEUE:
            newState.songArray.push(action.song);
            return newState;
        case NEXT_SONG:
            newState.index++;
            return newState;
        case PREV_SONG:
            newState.index--;
            return newState;
        case PLAY_NOW:
            newState.songArray.splice(newState.index, 0, action.song);
            newState.playing = true;
            return newState;
        case PLAY_SONG:
            newState.playing = true;
            return newState;
        case PAUSE_SONG:
            newState.playing = false;
            return newState;
        // case TOGGLE_SHUFFLE:
        //     // need to implement shuffle function
        //     newState.shuffle = !newState.shuffle;
        //     return newState;
        // case TOGGLE_REPEAT:
        //     newState.repeat = !newState.repeat;
        //     return newState;
        // case PLAY_NOW:
        //     newState.currentSong = action.songId;
        //     newState.isPlaying = true;
        //     return newState;
        default:
            return oldState;
    }
}

export default queueReducer;