import * as AlbumUtil from '../util/album_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbum = albumId => dispatch => (
    AlbumUtil.fetchAlbum(albumId).then(
        album => dispatch(receiveAlbum(album)))
);

export const fetchAlbums = (props) => dispatch => (
    AlbumUtil.fetchAlbums(props).then(
        albums => dispatch(receiveAlbums(albums)))
);
