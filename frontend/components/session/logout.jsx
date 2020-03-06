import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

function Logout(props) {
    return (
        <button onClick={props.logout}>LOG OUT</button>
    )
}

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatch)(Logout);