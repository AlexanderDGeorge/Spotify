import React from 'react';
import NewPlaylist from './new-playlist';
import Playlists from './playlists';
import { Switch, Route } from 'react-router-dom';
import './playlist.css';

function PlaylistRouter() {
    return (
        <div className="playlist">
            <Switch>
                <Route path="/playlists/new" component={NewPlaylist}/>
                <Route path="/playlists" component={Playlists}/>
            </Switch>
        </div>
    )
}

export default PlaylistRouter;