import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from '../session/logout';
import './topbar.css';

function TopBar(props) {

    console.log(props.state)
    function topLinks() {
        if (props.session.loggedIn) {
            return (
                <div>
                <p>Welcome, {props.user.username}!</p>
                <Logout />
                </div>
            )
        } else {
            return (
                <div className="nav-button">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                </div>
            )
        }
    }

    return (
        <header className="top-bar">
            <Link className="spotlofi" to="/">Spotlofi</Link>
            {topLinks()}
        </header>
    )
}

const mapState = state => ({
    user: state.entities.user,
    session: state.session,
    state: state
});

export default connect(mapState, undefined)(TopBar);