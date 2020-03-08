import React from 'react';
import NewPlaylist from './new-playlist';
import Playlists from './playlists';
import Playlist from './playlist';
import { Switch, Route } from 'react-router-dom';
import './playlist.css';

function PlaylistRouter() {
    return (
        <Switch>
            <Route path="/playlists/new" component={NewPlaylist}/>
            <Route path="/playlists/:id" component={Playlist}/>
            <Route path="/playlists" component={Playlists}/>
        </Switch>
    )
}

export default PlaylistRouter;