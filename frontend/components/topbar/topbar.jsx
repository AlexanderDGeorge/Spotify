import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from '../session/logout';
import './topbar.css';
import { login } from '../../actions/session_actions';

function TopBar(props) {

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
                    <button onClick={() => props.login({ username: "alex", password: "password" }).then(() => props.history.push("/"))}>
                        Demo
                    </button>
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
});

const mapDispatch = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(TopBar);