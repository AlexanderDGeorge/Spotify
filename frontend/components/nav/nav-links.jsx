import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavLinks() {
    const [active, setActive] = useState(null);

    return(
        <div className="nav-links">
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
        </div>
    )
}

export default NavLinks;