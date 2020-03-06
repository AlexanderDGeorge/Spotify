import { RECEIVE_SONG, RECEIVE_SONGS } from "../../actions/song_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions"; 
import { RECEIVE_ALBUM } from "../../actions/album_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";

const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, oldState, {[action.song.id]: action.song});
        case RECEIVE_SONGS:
            if (action.searchTerm) {
                return Object.assign({}, oldState, action.songs);
            } else {
                return Object.assign({}, oldState, action.songs);
            }
        case RECEIVE_ARTIST:
            const artistState = Object.assign({}, {}, action.artist.song);
            return artistState;
        case RECEIVE_ALBUM:
            const albumState = Object.assign({}, {}, action.album.song);
            return albumState;
        case RECEIVE_PLAYLIST:
            const playlistState = Object.assign({}, {}, action.playlist.song);
            return playlistState;
        default:
            return oldState;
    }
}

export default songsReducer;