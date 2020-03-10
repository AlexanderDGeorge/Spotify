import React from 'react';
import { connect } from 'react-redux';
import TopBarContainer from '../topbar/topbar';
import Nav from '../nav/nav';
import Content from '../content/content';
import Player from '../player/player';
import './landing.css'

function Landing(props) {

    if (props.currentUser) {
        return (
            <div className="landing">
                <Nav />
                <Content />
                <Player />
            </div>
        )
    } else {
        return (
            <div className="landing">
                <TopBarContainer />
            </div>
        )
    }
}

const mapState = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(mapState, null)(Landing);