import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from '../session/logout';
import './topbar.css';

function TopBar(props) {

    console.log(props)

    function topLinks() {
        if (props.currentUser) {
            return (
                <div>
                <p>Welcome, {props.currentUser.username}!</p>
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
    currentUser: state.entities.users[state.session.id],
    state: state
});

export default connect(mapState, undefined)(TopBar);