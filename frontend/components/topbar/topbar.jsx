import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Spotlofi from '../spotlofi/spotlofi';
import './topbar.css';

function TopBar(props) {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <Spotlofi />
            </div>
            <div className="top-bar-right">
                <button onClick={() => props.login({ username: "alex", password: "password" })}>
                    Demo
                </button>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        </div>
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