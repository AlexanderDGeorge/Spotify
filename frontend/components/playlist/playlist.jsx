import React from 'react';
import NewPlaylist from './new-playlist';
import './playlist.css';
import { Switch, Route } from 'react-router-dom';

function Playlist() {
    return (
        <div className="playlist">
            <Switch>
                <Route path="/playlists" />
            </Switch>
        </div>
    )
}

export default Playlist;