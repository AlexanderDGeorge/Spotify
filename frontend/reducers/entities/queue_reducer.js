import { ADD_SONG_TO_QUEUE, NEXT_SONG, PREV_SONG, PLAY_SONG, PAUSE_SONG, CYCLE_SONG } from "../../actions/queue_actions";


const nullQueue = {
    isPlaying: false,
    shuffle: false,
    repeat: false,
    queue: [],
    shuffledQueue: [],
    queueIndex: 0
}

const queueReducer = (oldState = nullQueue, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case ADD_SONG_TO_QUEUE:
            newState.queue.push(action.songId);
            return newState;
        case NEXT_SONG:
            newState.queueIndex++;
            return newState;
        case PREV_SONG:
            newState.queueIndex--;
            return newState;
        case PLAY_SONG:
            newState.isPlaying = true;
            return newState;
        case PAUSE_SONG:
            newState.isPlaying = false;
            return newState;
        default:
            return oldState;
    }
}

export default queueReducer;