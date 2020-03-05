import * as ArtistUtil from '../utils/artist_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const fetchArtist = artistId => dispatch => (
    ArtistUtil.fetchArtist(artistId).then(
        artist => dispatch(receiveArtist(artist)))
);

export const fetchArtists = props => dispatch => (
    ArtistUtil.fetchArtists(props).then(
        artists => dispatch(receiveArtists(artists)))
);