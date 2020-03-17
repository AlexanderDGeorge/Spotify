import { 
    ADD_SONG_TO_QUEUE, NEXT_SONG, PREV_SONG, PLAY_SONG, 
    PAUSE_SONG, TOGGLE_SHUFFLE, PLAY_NOW, ADD_SONGS_TO_QUEUE,
} from "../actions/queue_actions";


const nullQueue = {
    index: 0,
    playing: false,
    songArray: []
}

function sattoloShuffle(songArray) {
    console.log(songArray)
    let i = songArray.length;
    while (i > 1) {
        i--;
        let j = Math.random() * i;
        [songArray[i], songArray[j]] = [songArray[j], songArray[i]]
    }
}

const queueReducer = (oldState = nullQueue, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case ADD_SONG_TO_QUEUE:
            newState.songArray.push(action.song);
            return newState;
        case ADD_SONGS_TO_QUEUE:
            action.songs.forEach(song => {
                newState.songArray.push(song);
            });
            newState.playing = true;
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
        case TOGGLE_SHUFFLE:
            newState.index = 0;
            // newState.songArray = sattoloShuffle(oldState.songArray);
            return newState;
        default:
            return oldState;
    }
}

export default queueReducer;