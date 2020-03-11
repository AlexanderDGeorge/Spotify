import { ADD_SONG_TO_QUEUE, NEXT_SONG, PREV_SONG, PLAY_SONG, PAUSE_SONG, TOGGLE_SHUFFLE, TOGGLE_REPEAT } from "../../actions/queue_actions";


const nullQueue = {
    isPlaying: false,
    shuffle: false,
    repeat: false,
    priority: [],
    shuffledQ: [],
    queueIndex: -1
}

const queueReducer = (oldState = nullQueue, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case ADD_SONG_TO_QUEUE:
            newState.priority.push(action.songId);
            return newState;
        case NEXT_SONG:
            if (newState.priority.length > 0) newState.priority.shift();
            else newState.queueIndex++;
            return newState;
        case PREV_SONG:
            if (newState.priority.length === 0) newState.queueIndex--;
            return newState;
        case PLAY_SONG:
            newState.isPlaying = true;
            return newState;
        case PAUSE_SONG:
            newState.isPlaying = false;
            return newState;
        case TOGGLE_SHUFFLE:
            newState.shuffle = !newState.shuffle;
            return newState;
        case TOGGLE_REPEAT:
            newState.repeat = !newState.repeat;
            return newState;
        default:
            return oldState;
    }
}

export default queueReducer;