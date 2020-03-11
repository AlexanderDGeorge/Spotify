import React from 'react';
import { connect } from 'react-redux';
import TopBar from '../topbar/topbar';
import Nav from '../nav/nav';
import Content from '../content/content';
import Player from '../player/player';
import { login } from '../../actions/session_actions';
import { FaGithub, FaLinkedinIn, FaAngellist, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
                <div className="credits">
                    <p>Hi! I'm looking for a job. Check me out!</p>
                    <div className="links">
                        <a href="https://github.com/AlexanderDGeorge/Spotlofi">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-george-410466151/">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://angel.co/alexander-george-3">
                            <FaAngellist />
                        </a>
                        <a href="https://alexgeorge.dev">
                            <FaAddressCard />
                        </a>
                    </div>
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