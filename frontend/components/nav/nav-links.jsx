import React from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavLinks() {
    return(
        <div className="nav-links">
            <Link to="/">
                <FaHome />
                Home
            </Link>
            <Link to="/search">
                <FaSearch />
                Search
            </Link>
            <Link to="/liked">
                <FaHeart />
                Liked Songs
            </Link>
            <h4>PLAYLISTS</h4>
            <Link to="/playlists/new">
                <FaPlusSquare />
                Create Playlist
            </Link>
        </div>
    )
}

export default NavLinks;