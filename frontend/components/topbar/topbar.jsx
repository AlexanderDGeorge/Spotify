import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import { logoutUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

function TopBar(props) {

  function topLinks() {
    if (props.currentUser) {
      return (
        <div>
          <p>Welcome, {props.currentUser.username}!</p>
          <button onClick={props.logout}>Log Out</button>
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
  currentUser: state.entities.users[state.session.id]
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapState, mapDispatch)(TopBar);