import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import songsReducer from './songs_reducer';
import queueReducer from './queue_reducer';

export default combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
  songs: songsReducer,
  queue: queueReducer,
  user: usersReducer,
});