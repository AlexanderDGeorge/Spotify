import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";

const artistsReducer = (OldState = {}, action) => {
  Object.freeze(OldState);
  switch(action.type){
    case RECEIVE_ALL_ARTISTS:
      return Object.assign({}, OldState, action.artists);
    case RECEIVE_ARTIST:
      const { artist } = action.artist;
      const newState = Object.assign({}, OldState, artist);
      return newState;
    case RECEIVE_ALBUM:
      const newState = Object.assign({}, OldState, action.album.artist);
      return newState;
    default:
      return OldState;
  }
}

export default artistsReducer;