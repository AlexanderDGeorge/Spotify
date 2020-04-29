import React, { useState, useEffect } from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';

import './nav.css'

function Nav(props) {

    const [active, setActive] = useState(null);

    useEffect(() => {
        props.fetchPlaylists();
    }, []);

    return(
        <div className="nav">
            <Link className={active === 0 ? "active" : ""} onClick={() => setActive(0)} to="/">
                <FaHome />
                Home
            </Link>
            <Link className={active === 1 ? "active" : ""} onClick={() => setActive(1)} to="/search">
                <FaSearch />
                Search
            </Link>
            <Link className={active === 2 ? "active" : ""} onClick={() => setActive(2)} to="/liked">
                <FaHeart />
                Liked Songs
            </Link>
            <Link className={active === 3 ? "active" : ""} onClick={() => setActive(3)} to="/playlists/new">
                <FaPlusSquare />
                Create Playlist
            </Link>
            <h4>PLAYLISTS</h4>
            { props.playlists.map(playlist => {
                return (
                    <Link className="playlist-link" to={'/playlists/' + playlist.id} key={playlist.id}>
                        { playlist.name }
                    </Link>
                )
            })}
        </div>
    )
}

const mapState = state => ({
    playlists: Object.values(state.entities.playlists)
});

const mapDispatch = dispatch => ({
    fetchPlaylists: props => dispatch(fetchPlaylists(props))
});

export default connect(mapState, mapDispatch)(Nav);