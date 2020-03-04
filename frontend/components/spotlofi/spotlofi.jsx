import React from 'react';
import { Link } from 'react-router-dom';
import { WiRaindrops } from 'react-icons/wi'
import './spotlofi.css'

function Spotlofi() {
    return (
        <div className="spotlofi">
            <Link to="/">
                <div>spotlofi</div>
                <WiRaindrops />
            </Link>
        </div>
    )
}

export default Spotlofi;