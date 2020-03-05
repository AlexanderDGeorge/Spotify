import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TopBar from '../topbar/topbar';
import PlaylistRouter from '../playlist/playlist_router';
import './content.css'

function Content() {
    return (
        <div className="content">
            <TopBar />
            <Switch>
                <Route path="/playlists" component={PlaylistRouter} />
            </Switch>
        </div>
    )
}   

export default Content;