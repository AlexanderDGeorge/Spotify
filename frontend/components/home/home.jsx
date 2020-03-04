import React from 'react';
import Nav from '../nav/nav';
import Content from '../content/content';
import Player from '../player/player';

import './home.css';

function Home(props) {
    return(
        <div className="home">
            <Nav />
            <Content />
            <Player />
        </div>
    )
}

export default Home;