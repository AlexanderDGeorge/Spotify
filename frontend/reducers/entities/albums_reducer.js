import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../../actions/album_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALBUMS:
      return Object.assign({}, oldState, action.albums);
    case RECEIVE_ALBUM:
      const { album } = action.album
      const newState = Object.assign({}, oldState, album);
      return newState;
    case RECEIVE_ARTIST:
      const artistState = Object.assign({}, oldState, action.artist.album);
      return artistState;
    default: 
    return oldState;
  }
}

export default albumsReducer;