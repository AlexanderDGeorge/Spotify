import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Songs from '../song/songs';
import PlaylistRouter from '../playlist/playlist-router';
import './content.css'
import LikedSongs from '../song/liked-songs';

function Content() {
    return (
        <div className="content">
            <Switch>
                <Route path="/playlists" component={PlaylistRouter} />
                <Route path="/liked" component={LikedSongs} />
                <Route path="/" component={Songs} />
            </Switch>
        </div>
    )
}   

export default Content;