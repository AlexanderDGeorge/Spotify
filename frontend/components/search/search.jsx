import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import Results from './results';
import './search.css';

function Search(props) {

    const [search, setSearch] = useState("");
    const { artists, albums, playlists, songs } = props;

    useEffect(() => {
        props.fetchAlbums();
        props.fetchArtists();
        props.fetchPlaylists();
        props.fetchSongs()
    }, [])

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    if (artists.length && albums.length && songs.length) {
        return (
            <div className="search">
                <form onSubmit={handleSearch}>
                    <input 
                        className="search-input"
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        onBlur={handleSearch}
                        placeholder="search"
                    />
                </form>
                <Results search={search}/>
            </div>
        )
    } else {
        return null;
    }
}

const mapState = state => ({
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs)
})

const mapDispatch = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(Search);