import React, { useState, useEffect } from 'react';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

function Results(props) {

    let results = [];
    const { artists, albums, playlists, songs } = props;

    console.log(props);

    useEffect(() => {
        fetch();
        search();
    }, []);

    function fetch() {
        props.fetchAlbums();
        props.fetchArtists();
        props.fetchPlaylists();
        props.fetchSongs();
    }

    function search() {
        if (props.search) {
            results.push(artists.filter(artist => artist.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(albums.filter(album => album.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(playlists.filter(playlist => playlist.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(songs.filter(song => song.name.toLowerCase().includes(props.search.toLowerCase())));
        } else {
            results.push(artists.name);
            results.push(albums.name);
            results.push(playlists.name);
            results.push(songs.name);
        }
    }

    if (songs.length === 0 || albums.length === 0) return null;
    else {
        console.log(results);
        return (
            <div className="results">
                { results.map(result => {
                    return <div>{result.name}</div>
                })}
            </div>
        )
    }
}

const mapState = state => ({
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs)
})

const mapDispatch = dispatch => ({
    fetchAlbums: props => dispatch(fetchAlbums(props)),
    fetchArtists: props => dispatch(fetchArtists(props)),
    fetchPlaylists: props => dispatch(fetchPlaylists(props)),
    fetchSongs: props => dispatch(fetchSongs(props)),
})

export default connect(mapState, mapDispatch)(Results);