import React from 'react';
import Spotlofi from '../spotlofi/spotlofi';
import NavLinks from './nav-links';
import PlaylistLinks from '../playlist/playlist-links';
import './nav.css'

function Nav() {
    return(
        <div className="nav">
            <Spotlofi />
            <NavLinks />
            <PlaylistLinks />
        </div>
    )
}

export default Nav;