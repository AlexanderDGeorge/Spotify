import React from 'react';
import Spotlofi from '../spotlofi/spotlofi';
import './nav.css'
import NavLinks from './nav-links';

function Nav() {
    return(
        <div className="nav">
            <Spotlofi />
            <NavLinks />
        </div>
    )
}

export default Nav;