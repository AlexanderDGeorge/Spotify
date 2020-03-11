import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Album from '../album/album';
import Artist from '../artist/artist';
import PlaylistRouter from '../playlist/playlist-router';
import Songs from '../song/songs';
import LikedSongs from '../song/liked-songs';
import Search from '../search/search';
import Home from '../home/home';
import './content.css'

function Content() {
    return (
        <div className="content">
            <Switch>
                <Route path="/playlists" component={PlaylistRouter} />
                <Route path="/artists/:id" component={Artist} />
                <Route path="/albums/:id" component={Album} />
                <Route path="/liked" component={LikedSongs} />
                <Route path="/search" component={Search} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}   

export default Content;