import React from 'react'
import './content.css'
import { Switch, Route } from 'react-router-dom'
import Playlist from '../playlist/playlist';

function Content() {
    return (
        <div className="content">
            <Switch>
                <Route path="/playlist" component={Playlist} />
            </Switch>
        </div>
    )
}   

export default Content;