import React, { useState, useEffect } from 'react';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

function Results(props) {

    let results = [];

    useEffect(() => {
        fetch();
        search();
    }, []);

    function fetch() {
        // if (props.search) {
        //     props.fetchAlbums(props.search)
        //     props.fetchArtists(props.search)
        //     props.fetchPlaylists(props.search)
        //     props.fetchSongs(props.search)
        props.fetchAlbums();
        props.fetchArtists();
        props.fetchPlaylists();
        props.fetchSongs();
    }

    function search() {
        if (props.search) {
            results.push(props.artists.filter(artist => artist.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(props.albums.filter(album => album.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(props.playlists.filter(playlist => playlist.name.toLowerCase().includes(props.search.toLowerCase())));
            results.push(props.songs.filter(song => song.name.toLowerCase().includes(props.search.toLowerCase())));
        } else {
            results.push(props.artists.name);
            results.push(props.albums.name);
            results.push(props.playlists.name);
            results.push(props.songs.name);
        }
    }

    console.log(results);

    return (
        <div className="results">
            { results.map(result => {
                return <div>{result.name}</div>
            })}
        </div>
    )
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