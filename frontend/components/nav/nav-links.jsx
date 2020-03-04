import React from 'react';
import { FaHome, FaBook, FaSearch, FaPlusSquare, FaHeart } from 'react-icons/fa';
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
            <Link to="/collection">
                <FaBook />
                Library
            </Link>
            <h3>PLAYLISTS</h3>
            <Link to="/playlist/create">
                <FaPlusSquare />
                Create Playlist
            </Link>
            <Link to="/collection/liked">
                <FaHeart />
                Liked Songs
            </Link>
        </div>
    )
}

export default NavLinks;