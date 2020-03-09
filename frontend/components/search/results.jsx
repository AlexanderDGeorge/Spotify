import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Results(props) {

    let results = [];

    useEffect(() => {
        search();
    }, []);

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

    return (
        <div className="results">
            
        </div>
    )
}

const mapState = state => ({
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs)
})

export default connect(mapState, undefined)(Results);