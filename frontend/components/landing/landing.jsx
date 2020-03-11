import React from 'react';
import { connect } from 'react-redux';
import TopBar from '../topbar/topbar';
import Nav from '../nav/nav';
import Content from '../content/content';
import Player from '../player/player';
import { login } from '../../actions/session_actions';
import './landing.css'

function Landing(props) {

    if (props.session.loggedIn) {
        return (
            <div className="main">
                <Nav />
                <Content />
                <Player />
            </div>
        )
    } else {
        return (
            <div className="landing">
                <TopBar />
                <div className="splash">
                    <div className="bubbles"></div>
                </div>
                <div className="splash-content">
                    <h1>Music for everyone.</h1>
                    <h4>Millions of songs. No credit card needed.</h4>
                    <button onClick={() => props.login({ username: "alex", password: "password" }).then(() => props.history.push("/"))}>
                        GET SPOTLOFI FREE
                    </button>
                </div>
            </div>
        )
    }
}

const mapState = state => ({
  session: state.session
});

const mapDispatch = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(Landing);