import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";

const artistsReducer = (OldState = {}, action) => {
  Object.freeze(OldState);
  switch(action.type){
    case RECEIVE_ARTISTS:
      return Object.assign({}, OldState, action.artists);
    case RECEIVE_ARTIST:
      const { artist } = action.artist;
      const newState = Object.assign({}, OldState, artist);
      return newState;
    case RECEIVE_ALBUM:
      const albumState = Object.assign({}, OldState, action.album.artist);
      return albumState;
    default:
      return OldState;
  }
}

export default artistsReducer;