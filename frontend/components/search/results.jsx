import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Results(props) {

    const { artists, albums, playlists, songs } = props;
    const [albumResults, setAlbums] = useState([]);
    const [artistResults, setArtists] = useState([]);
    const [playlistResults, setPlaylists] = useState([]);
    const [songResults, setSongs] = useState([]);

    useEffect(() => {
        search();
    }, [props.search]);

    function search() {
        if (props.search) {
            setAlbums(albums.filter(album => album.name.toLowerCase().includes(props.search.toLowerCase())));
            setArtists(artists.filter(artist => artist.name.toLowerCase().includes(props.search.toLowerCase())));
            setPlaylists(playlists.filter(playlist => playlist.name.toLowerCase().includes(props.search.toLowerCase())));
            setSongs(songs.filter(song => song.name.toLowerCase().includes(props.search.toLowerCase())));
        } else {
            setAlbums(albums);
            setArtists(artists);
            setPlaylists(playlists);
            setSongs(songs);
        }
    }

    function shortenName(name) {
        if (name.length > 20) {
            name = name.slice(0, 16) + '...';
        }
        return name;
    }

    return (
        <div className="results">
            <h2>Albums</h2>
            <div className="results-div">
                {albumResults.map(album => {
                    return (
                        <Link to={"albums/" + album.id}>{album.name}</Link>
                    )
                })}
            </div>

            <h2>Artists</h2>
            <div className="results-div">
                {artistResults.map(artist => {

                    return (
                        <Link to={"artists/" + artist.id}>{artist.name}</Link>
                    )
                })}
            </div>

            <h2>Songs</h2>
            <div className="results-div">
                {songResults.map(song => {
                    return (
                        <Link to={"albums/" + song.album_id}>{shortenName(song.name)}</Link>
                    )
                })}
            </div>
            
            <h2>Playlists</h2>
            <div className="results-div">
                {playlistResults.map(playlist => {
                    return (
                        <Link to={"playlists/" + playlist.id}>{playlist.name}</Link>
                    )
                })}
            </div>

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